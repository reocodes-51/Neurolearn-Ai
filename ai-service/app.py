from fastapi import FastAPI, UploadFile, File
from utils.image_processing import preprocess_image
from utils.feature_extraction import extract_features
from utils.text_analysis import analyze_text
from utils.ocr import extract_text
from utils.csv_logger import save_training_data
from utils.model import predict_risk

import shutil
import os

app = FastAPI(
    title="NeuroLearn AI Service",
    version="1.0.0",
)

UPLOAD_FOLDER = "temp_uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)


@app.get("/")
def home():
    return {
        "status": "running",
        "message": "NeuroLearn AI Service is running successfully"
    }


@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    try:
        # Save uploaded image
        file_path = os.path.join(UPLOAD_FOLDER, file.filename)

        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)

        # Image preprocessing
        processed_image = preprocess_image(file_path)

        # Feature extraction
        features = extract_features(processed_image)

        # OCR
        text = extract_text(file_path)

        # Text analysis
        analysis = analyze_text(text)

        try:
            prediction = predict_risk(features, analysis)
        except Exception as e:
            print("Model Prediction Error:", e)
            prediction = {
                "riskLevel": "Unknown",
                "confidence": 0
        }

        # Save extracted features to CSV
        save_training_data(analysis, features)

        print("✅ Training data saved.")
        print("Extracted Text:", text)
        print("Analysis:", analysis)
        print("Features:", features)

        return {
    "success": True,
    "filename": file.filename,
    "ocrText": text,
    "analysis": analysis,
    "features": features,
    "prediction": prediction
    }

    except Exception as e:
        return {
            "success": False,
            "error": str(e)
        }