import { useNavigate } from "react-router-dom";
import "../styles/Result.css";

function Result() {

    const navigate = useNavigate();

    return (

        <div className="result-page">

            <div className="result-container">

                <div className="result-header">

                    <h1>Assessment Complete</h1>

                    <p>
                        AI has successfully analyzed the student's assessment.
                    </p>

                </div>

                <div className="score-grid">

                    <div className="score-card">

                        <h4>Reading</h4>

                        <h2>88%</h2>

                        <p>Excellent Fluency</p>

                    </div>

                    <div className="score-card">

                        <h4>Writing</h4>

                        <h2>81%</h2>

                        <p>Good Handwriting</p>

                    </div>

                    <div className="score-card">

                        <h4>Risk Level</h4>

                        <h2>Low</h2>

                        <p>Continue Practice</p>

                    </div>

                </div>

                <div className="report">

                    <h3>AI Recommendations</h3>

                    <ul>

                        <li>✔ Continue daily reading practice for 15 minutes.</li>

                        <li>✔ Improve handwriting consistency.</li>

                        <li>✔ Practice letter spacing exercises.</li>

                        <li>✔ Reassess after two weeks.</li>

                    </ul>

                </div>

                <div className="button-group">

                    <button
                        className="secondary"
                        onClick={() => navigate("/assessment")}
                    >
                        Take Again
                    </button>

                    <button
                        className="primary"
                        onClick={() => navigate("/dashboard")}
                    >
                        Go to Dashboard
                    </button>

                </div>

            </div>

        </div>

    );

}

export default Result;