from fastapi import FastAPI, UploadFile, File
from pydantic import BaseModel

from utils.image_processing import preprocess_image
from utils.feature_extraction import extract_features
from utils.text_analysis import analyze_text
from utils.ocr import extract_text
from utils.csv_logger import save_training_data
from utils.model import predict_risk
from fastapi.middleware.cors import CORSMiddleware

import shutil
import os

app = FastAPI(
    title="NeuroLearn AI Service",
    version="1.0.0",
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://localhost:5174",
        "http://127.0.0.1:5174",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

UPLOAD_FOLDER = "temp_uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)


# -----------------------------
# Home Route
# -----------------------------
@app.get("/")
def home():
    return {
        "status": "running",
        "message": "NeuroLearn AI Service is running successfully"
    }


# -----------------------------
# Reading Assessment Request
# -----------------------------
class ReadingRequest(BaseModel):
    text: str


# -----------------------------
# Reading Analysis API
# -----------------------------
@app.post("/analyze-reading")
def analyze_reading(data: ReadingRequest):

    result = analyze_text(data.text)

    return {
        "success": True,
        "analysis": result
    }


# -----------------------------
# Writing Assessment API
# -----------------------------
@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    try:

        # Save uploaded image
        file_path = os.path.join(
            UPLOAD_FOLDER,
            file.filename
        )

        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(
                file.file,
                buffer
            )

        # Image preprocessing
        processed_image = preprocess_image(file_path)

        # Feature extraction
        features = extract_features(
            processed_image
        )

        # OCR
        text = extract_text(file_path)

        # Text analysis
        analysis = analyze_text(text)

        # ML Prediction
        prediction = predict_risk(
            features,
            analysis
        )

        # Save data for future training
        save_training_data(
            analysis,
            features
        )

        print("\n========== Prediction ==========")
        print("OCR Text:")
        print(text)

        print("\nAnalysis:")
        print(analysis)

        print("\nFeatures:")
        print(features)

        print("\nPrediction:")
        print(prediction)
        print("===============================\n")

        return {
            "success": True,
            "filename": file.filename,
            "ocrText": text,
            "analysis": analysis,
            "features": features,
            "prediction": prediction,
        }

    except Exception as e:

        return {
            "success": False,
            "error": str(e)
        }