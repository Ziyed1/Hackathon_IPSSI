from flask import Flask, jsonify
from flask_cors import CORS
import mysql.connector
import os

app = Flask(__name__)
cors = CORS(app, origins='*')


# Initialisation des variables MYSQL pour la connexion
app.config['MYSQL_HOST'] = os.getenv('MYSQL_HOST')
app.config['MYSQL_USER'] = os.getenv('MYSQL_USER')
app.config['MYSQL_PASSWORD'] = os.getenv('MYSQL_PASSWORD')
app.config['MYSQL_DB'] = os.getenv('MYSQL_DB')

# Fonction de connexion
def get_db_connection():
    conn = mysql.connector.connect(
        host=app.config['MYSQL_HOST'],
        user=app.config['MYSQL_USER'],
        password=app.config['MYSQL_PASSWORD'],
        database=app.config['MYSQL_DB']
    )
    return conn

# Route permettant de récupérer les données de la table "olympic_games"
@app.route('/games', methods=['GET'])
def get_games():
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute('SELECT * FROM olympic_games')
    games = cursor.fetchall()
    cursor.close()
    conn.close()
    return jsonify(games)

if __name__ == "__main__":
    app.run(debug=True, port=8080)