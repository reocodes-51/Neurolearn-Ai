import os
import requests

IMAGE_FOLDER = "dataset/images"
API_URL = "http://127.0.0.1:8000/predict"

count = 0

for filename in os.listdir(IMAGE_FOLDER):

    if filename.lower().endswith((".png", ".jpg", ".jpeg")):

        path = os.path.join(IMAGE_FOLDER, filename)

        try:
            with open(path, "rb") as image:

                files = {
                    "file": (filename, image, "image/png")
                }

                response = requests.post(API_URL, files=files)

                if response.status_code == 200:
                    count += 1
                    print(f"✅ {count} Processed: {filename}")

                else:
                    print(f"❌ Failed: {filename}")

        except Exception as e:
            print(f"Error processing {filename}: {e}")

print("\nFinished.")
print("Total Images Processed:", count)