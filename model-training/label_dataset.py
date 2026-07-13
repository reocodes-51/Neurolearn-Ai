import pandas as pd

CSV_PATH = "dataset/training_data_fixed.csv"

df = pd.read_csv(CSV_PATH)

# Convert to numeric
df["ocr_accuracy"] = pd.to_numeric(df["ocr_accuracy"], errors="coerce")


def get_risk(acc):
    if acc >= 80:
        return "Low"
    elif acc >= 50:
        return "Medium"
    else:
        return "High"


df["risk"] = df["ocr_accuracy"].apply(get_risk)

df.to_csv(CSV_PATH, index=False)

print("✅ Labels generated successfully!")
print(df["risk"].value_counts())