from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector
import os
from keras import models
import numpy as np
import joblib

app = Flask(__name__)
cors = CORS(app, origins='*')

# Initialization of MySQL variables for connection
app.config['MYSQL_HOST'] = os.getenv('MYSQL_HOST')
app.config['MYSQL_USER'] = os.getenv('MYSQL_USER')
app.config['MYSQL_PASSWORD'] = os.getenv('MYSQL_PASSWORD')
app.config['MYSQL_DB'] = os.getenv('MYSQL_DB')

# Load the trained model and the scaler
model = models.load_model('ai/olympic_medals_dnn.h5')
scaler = joblib.load('ai/olympic_medals_scaler.pkl')


# Function to get DB connection
def get_db_connection():
    conn = mysql.connector.connect(
        host=app.config['MYSQL_HOST'],
        user=app.config['MYSQL_USER'],
        password=app.config['MYSQL_PASSWORD'],
        database=app.config['MYSQL_DB']
    )
    return conn


# Route to retrieve data from the "olympic_games" table
@app.route('/games', methods=['GET'])
def get_games():
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute('SELECT * FROM olympic_games')
    games = cursor.fetchall()
    cursor.close()
    conn.close()
    return jsonify(games)


# New route for making predictions
@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    if not data:
        return jsonify({"error": "No input data provided"}), 400

    try:
        # Extract the features from the input data
        input_features = [data[feature] for feature in
                          ['sports', 'epreuves', 'game_part', 'prec_game_medal', 'prec_game_gold', 'prec_game_silver',
                           'prec_game_bronze']]
        input_features = np.array(input_features).reshape(1, -1)

        # Scale the input features
        input_scaled = scaler.transform(input_features)

        # Make predictions
        predictions = model.predict(input_scaled)

        # Convert predictions to standard Python data types
        predicted_gold = float(predictions[0][0])
        predicted_silver = float(predictions[0][1])
        predicted_bronze = float(predictions[0][2])

        # Create response
        response = {
            'predicted_gold': predicted_gold,
            'predicted_silver': predicted_silver,
            'predicted_bronze': predicted_bronze
        }

        return jsonify(response)

    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True, port=8080)
