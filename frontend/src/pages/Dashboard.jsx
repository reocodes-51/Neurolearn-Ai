import { Navigate, useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const student = JSON.parse(localStorage.getItem("student"));

  // Protect Dashboard
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("student");

    navigate("/login");
  };

  return (
    <div className="dashboard">

      {/* Header */}
      <header className="dashboard-header">
        <h1>🧠 NeuroLearn AI</h1>

        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          Logout
        </button>
      </header>

      {/* Welcome Section */}
      <section className="welcome-card">
        <h2>Welcome, {student?.name} 👋</h2>

        <p>
          Ready to continue your dyslexia assessment journey?
        </p>
      </section>

      {/* Student Details */}
      <section className="profile-card">

        <h2>Student Information</h2>

        <div className="profile-grid">

          <div>
            <strong>Name</strong>
            <p>{student?.name}</p>
          </div>

          <div>
            <strong>Email</strong>
            <p>{student?.email}</p>
          </div>

          <div>
            <strong>School</strong>
            <p>{student?.school}</p>
          </div>

          <div>
            <strong>Class</strong>
            <p>{student?.className}</p>
          </div>

          <div>
            <strong>Language</strong>
            <p>{student?.language}</p>
          </div>

        </div>

      </section>

      {/* Assessment Cards */}

      <section className="assessment-section">

        <div
          className="assessment-card"
          onClick={() => navigate("/reading")}
        >
          <h2>📖 Reading Assessment</h2>

          <p>
            Evaluate reading ability using AI speech analysis.
          </p>

          <button>Start Reading Test</button>
        </div>

        <div
          className="assessment-card"
          onClick={() => navigate("/writing")}
        >
          <h2>✍ Writing Assessment</h2>

          <p>
            Upload handwriting samples for AI analysis.
          </p>

          <button>Start Writing Test</button>
        </div>

      </section>

      {/* Progress */}

      <section className="progress-card">

        <h2>Assessment Status</h2>

        <p>Reading Assessment : Pending</p>

        <p>Writing Assessment : Pending</p>

        <p>Risk Prediction : Not Generated</p>

      </section>

    </div>
  );
}

export default Dashboard;