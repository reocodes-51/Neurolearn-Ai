import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/WritingAssessment.css";
import { AI_API } from "../services/api";

function WritingAssessment() {
  const navigate = useNavigate();

  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const paragraph = `
The quick brown fox jumps over the lazy dog.
Reading every day improves vocabulary, pronunciation,
and confidence. Practice makes learning easier.
`;

  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!image) {
      alert("Please upload an image.");
      return;
    }

    const formData = new FormData();
    formData.append("file", image);

    try {
      setLoading(true);

      const response = await AI_API.post("/predict", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(response.data);

      localStorage.setItem(
        "prediction",
        JSON.stringify(response.data)
      );

      navigate("/result");

    } catch (error) {
      console.error(error);
      alert("Prediction Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="writing-page">

      <div className="writing-card">

        <h1>✍ Writing Assessment</h1>

        <div className="progress">
          <div className="progress-fill"></div>
        </div>

        <p className="step">
          Step 3 of 4
        </p>

        <div className="instruction-box">

          <h3>Instructions</h3>

          <ul>
            <li>Write the paragraph neatly on paper.</li>
            <li>Take a clear image.</li>
            <li>Upload the image.</li>
            <li>Click Submit.</li>
          </ul>

        </div>

        <div className="paragraph-box">

          <h3>Writing Passage</h3>

          <p>{paragraph}</p>

        </div>

        <div className="upload-box">

          <input
            type="file"
            accept="image/*"
            onChange={handleImage}
          />

        </div>

        {image && (

          <div className="preview">

            <h3>Preview</h3>

            <img
              src={URL.createObjectURL(image)}
              alt="preview"
            />

          </div>

        )}

        <button
          className="submit-btn"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Analyzing..." : "Submit for AI Analysis"}
        </button>

      </div>

    </div>
  );
}

export default WritingAssessment;