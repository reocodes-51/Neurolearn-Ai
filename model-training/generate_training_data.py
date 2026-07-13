import random
import pandas as pd

data = []

# -------- LOW RISK (200 samples) --------
for _ in range(200):
    data.append([
        round(random.uniform(85, 100), 2),      # OCR Accuracy
        random.randint(0, 1),                   # Missing Words
        random.randint(0, 2),                   # Extra Words
        round(random.uniform(0.15, 0.28), 4),   # Ink Density
        random.randint(180, 350),               # Contours
        "Low"
    ])

# -------- MEDIUM RISK (150 samples) --------
for _ in range(150):
    data.append([
        round(random.uniform(60, 84), 2),
        random.randint(2, 4),
        random.randint(2, 5),
        round(random.uniform(0.10, 0.18), 4),
        random.randint(120, 220),
        "Medium"
    ])

# -------- HIGH RISK (150 samples) --------
for _ in range(150):
    data.append([
        round(random.uniform(20, 59), 2),
        random.randint(5, 9),
        random.randint(6, 15),
        round(random.uniform(0.04, 0.10), 4),
        random.randint(50, 140),
        "High"
    ])

df = pd.DataFrame(
    data,
    columns=[
        "ocr_accuracy",
        "missing_words",
        "extra_words",
        "ink_density",
        "contours",
        "risk"
    ]
)

# Shuffle rows
df = df.sample(frac=1, random_state=42).reset_index(drop=True)

df.to_csv("dataset/final_training_data.csv", index=False)

print("✅ Training dataset created successfully!")
print(df.head())
print(df["risk"].value_counts())