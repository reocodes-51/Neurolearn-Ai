import os
import joblib
import pandas as pd

# Get project root
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

MODEL_PATH = os.path.abspath(
    os.path.join(
        BASE_DIR,
        "..",
        "model-training",
        "models",
        "dyslexia_model.pkl"
    )
)

# Load trained model
model = joblib.load(MODEL_PATH)


def predict_risk(features, analysis):

    data = pd.DataFrame([{
        "ocr_accuracy": analysis["accuracy"],
        "missing_words": len(analysis["missingWords"]),
        "extra_words": len(analysis["extraWords"]),
        "ink_density": features["inkDensity"],
        "contours": features["contours"]
    }])

    prediction = model.predict(data)[0]

    probabilities = model.predict_proba(data)[0]

    confidence = round(max(probabilities) * 100, 2)

    return {
        "riskLevel": prediction,
        "confidence": confidence
    }