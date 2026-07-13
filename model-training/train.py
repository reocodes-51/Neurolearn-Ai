import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report
import joblib
import os

# Load dataset
df = pd.read_csv("dataset/final_training_data.csv")

# Features
X = df[[
    "ocr_accuracy",
    "missing_words",
    "extra_words",
    "ink_density",
    "contours"
]]

# Target
y = df["risk"]

# Split dataset
X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42,
    stratify=y
)

# Train model
model = RandomForestClassifier(
    n_estimators=100,
    random_state=42
)

model.fit(X_train, y_train)

# Predictions
y_pred = model.predict(X_test)

print("\n========== RESULTS ==========")
print("Accuracy:", round(accuracy_score(y_test, y_pred) * 100, 2), "%")
print("\nClassification Report:\n")
print(classification_report(y_test, y_pred))

# Save model
os.makedirs("models", exist_ok=True)

joblib.dump(model, "models/dyslexia_model.pkl")

print("\n✅ Model saved successfully!")
print("Location: models/dyslexia_model.pkl")