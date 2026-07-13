import csv
import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

CSV_PATH = os.path.abspath(
    os.path.join(
        BASE_DIR,
        "..",
        "model-training",
        "dataset",
        "training_data.csv"
    )
)

print("CSV PATH:", CSV_PATH)


def save_training_data(analysis, features):

    os.makedirs(os.path.dirname(CSV_PATH), exist_ok=True)

    print("Saving to:", CSV_PATH)

    file_exists = os.path.exists(CSV_PATH)

    with open(CSV_PATH, "a", newline="") as file:

        writer = csv.writer(file)

        if not file_exists:
            writer.writerow([
                "ocr_accuracy",
                "missing_words",
                "extra_words",
                "ink_density",
                "contours",
                "risk"
            ])

        writer.writerow([
            analysis["accuracy"],
            len(analysis["missingWords"]),
            len(analysis["extraWords"]),
            features["inkDensity"],
            features["contours"],
            ""
        ])

    print("✅ CSV Updated Successfully")