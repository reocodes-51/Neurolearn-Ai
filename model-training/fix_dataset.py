import pandas as pd

INPUT = "dataset/training_data.csv"
OUTPUT = "dataset/training_data_fixed.csv"

# Read without trusting the header
df = pd.read_csv(INPUT, header=None)

# Remove the corrupted first row
df = df.iloc[1:].reset_index(drop=True)

# Keep only the first 6 columns
df = df.iloc[:, :6]

# Assign correct column names
df.columns = [
    "ocr_accuracy",
    "missing_words",
    "extra_words",
    "ink_density",
    "contours",
    "risk"
]

# Save the cleaned dataset
df.to_csv(OUTPUT, index=False)

print("✅ Dataset repaired successfully!")
print(df.head())
print("Rows:", len(df))