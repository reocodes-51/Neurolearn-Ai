import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ReadingAssessment.css";
import { AI_API } from "../services/api";

function ReadingAssessment() {
  const navigate = useNavigate();

  const student = JSON.parse(localStorage.getItem("student"));

  const [transcript, setTranscript] = useState("");
  const [analysis, setAnalysis] = useState(null);

  const paragraph = `
The quick brown fox jumps over the lazy dog.
Reading every day improves vocabulary, pronunciation,
and confidence. Practice makes learning easier.
`;

  // ===========================
  // Start Recording
  // ===========================
  const startRecording = () => {
    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech Recognition is not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = "en-US";
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onresult = (event) => {
      let text = "";

      for (let i = 0; i < event.results.length; i++) {
        text += event.results[i][0].transcript + " ";
      }

      setTranscript(text);
    };

    recognition.onerror = (event) => {
      console.log(event.error);
    };

    recognition.start();

    window.recognition = recognition;
  };

  // ===========================
  // Stop Recording
  // ===========================
  const stopRecording = async () => {
  if (window.recognition) {
    window.recognition.stop();
  }

  console.log("Transcript:", transcript);

  try {
    const response = await AI_API.post("/analyze-reading", {
      text: transcript.trim(),
    });

    console.log("SUCCESS");
    console.log(response.data);

    setAnalysis(response.data.analysis);

    localStorage.setItem(
      "readingAnalysis",
      JSON.stringify(response.data.analysis)
    );

  } catch (error) {
    console.log("========== ERROR ==========");
    console.log(error);
    console.log("Status:", error.response?.status);
    console.log("Data:", error.response?.data);
    console.log("Message:", error.message);
  }
};
  // ===========================
  // Next Page
  // ===========================
  const handleNext = () => {
    if (!analysis) {
      alert("Please complete the reading assessment first.");
      return;
    }

    navigate("/writing");
  };

  return (
    <div className="reading-page">
      <div className="reading-card">

        <h1>📖 Reading Assessment</h1>

        <p className="welcome">
          Welcome, <strong>{student?.name}</strong>
        </p>

        {/* Progress */}

        <div className="progress">
          <div className="progress-fill"></div>
        </div>

        <p className="step">
          Step 2 of 4
        </p>

        {/* Instructions */}

        <div className="instruction-box">

          <h3>Instructions</h3>

          <ul>
            <li>Read the paragraph clearly.</li>
            <li>Speak naturally.</li>
            <li>Allow microphone permission.</li>
            <li>Click Start Recording.</li>
          </ul>

        </div>

        {/* Reading Passage */}

        <div className="paragraph-box">

          <h3>Reading Passage</h3>

          <p>{paragraph}</p>

        </div>

        {/* Buttons */}

        <div className="button-group">

          <button
            className="start-btn"
            onClick={startRecording}
          >
            🎤 Start Recording
          </button>

          <button
            className="stop-btn"
            onClick={stopRecording}
          >
            ⏹ Stop Recording
          </button>

        </div>

        {/* Transcript */}

        <div className="transcript-box">

          <h3>Live Transcript</h3>

          <textarea
            value={transcript}
            readOnly
            placeholder="Your speech will appear here..."
          />

        </div>

        {/* Reading Analysis */}

        {analysis && (

          <div className="analysis-box">

            <h3>📊 Reading Analysis</h3>

            <p>
              <strong>Accuracy :</strong>{" "}
              {analysis.accuracy}%
            </p>

            <p>
              <strong>Missing Words :</strong>{" "}
              {analysis.missingWords.length}
            </p>

            <p>
              <strong>Extra Words :</strong>{" "}
              {analysis.extraWords.length}
            </p>

          </div>

        )}

        {/* Next */}

        <button
          className="next-btn"
          onClick={handleNext}
        >
          Next → Writing Assessment
        </button>

      </div>
    </div>
  );
}

export default ReadingAssessment;