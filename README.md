# Hackathon MIA7

## Notebooks

### Deeplearning
Le notebook de Deep Learning est disponible dans le dossier `./deeplearning/` et s'appelle `train_deepl.ipynb`.

Il contient le code pour l'entraînement de 3 modèles de Deep Learning:
- Un RNN simple
- Un CNN
- Un DNN

### Machine Learning
Le notebook de Machine Learning est disponible dans le dossier `./machinelearning/` et s'appelle `train_ml.ipynb`.

Il contient le code pour l'entraînement de 3 modèles de Machine Learning:
- Un modèle de Linear Regression
- Un modèle de Decision Tree Regressor
- Un modèle de Gradient Boosting Regressor

### Spark
Le notebook de Spark est disponible dans le dossier `./volume_spark/spark_data_treatment.py`.

## API Flask

L'API Flask est disponible dans le dossier `./back-end/` et s'appelle `main.py`.

### Lancer l'API

```bash
cd back-end
pip install -r requirements.txt
python main.py
```

### Routes API

- `/games` : Renvoie la liste des jeux olympiques
  - '/predict' : Renvoie la prédiction des prochaines médailles gagnées selon les statistiques en input
    - example body :
    ```json
     "sports": 43,
     "epreuves": 234,
     "game_part": 27,
     "prec_game_medal": 113,
     "prec_game_gold": 39,
     "prec_game_silver": 41,
     "prec_game_bronze": 33
    ```
