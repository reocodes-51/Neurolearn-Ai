import {
  FaBookOpen,
  FaPen,
  FaChartLine,
  FaClipboardCheck,
  FaDownload,
  FaPlay,
} from "react-icons/fa";

import StatsCard from "../components/dashboard/StatsCard";
import Button from "../components/common/Button";
import "../styles/Dashboard.css";
import RecentAssessment from "../components/dashboard/RecentAssessment";
import PerformanceChart from "../components/dashboard/PerformanceChart";
import RiskMeter from "../components/dashboard/RiskMeter";

function Dashboard() {
  return (
    <div className="dashboard-page">
      <div className="dashboard-container">

        {/* Header */}

        <div className="dashboard-header">
          <h1>👋 Welcome Back, Student</h1>

          <p>
            Track your learning progress and continue improving every day.
          </p>
        </div>

        {/* Statistics */}

        <div className="stats-grid">

          <StatsCard
            title="Total Assessments"
            value="12"
            icon={<FaClipboardCheck />}
            color="#2563eb"
          />

          <StatsCard
            title="Reading Score"
            value="88%"
            icon={<FaBookOpen />}
            color="#10b981"
          />

          <StatsCard
            title="Writing Score"
            value="84%"
            icon={<FaPen />}
            color="#f59e0b"
          />

          <StatsCard
            title="Overall Progress"
            value="90%"
            icon={<FaChartLine />}
            color="#8b5cf6"
          />

        </div>

        {/* Student Information */}

        <div className="dashboard-card">

          <h2>Student Information</h2>

          <div className="info-grid">

            <div>
              <strong>Name</strong>
              <p>Demo Student</p>
            </div>

            <div>
              <strong>Age</strong>
              <p>8 Years</p>
            </div>

            <div>
              <strong>Class</strong>
              <p>3</p>
            </div>

            <div>
              <strong>School</strong>
              <p>ABC Public School</p>
            </div>

          </div>

        </div>

        {/* AI Recommendations */}

        <div className="dashboard-card">

          <h2>AI Recommendations</h2>

          <ul className="recommendation-list">

            <li>📚 Practice letter recognition for 15 minutes daily.</li>

            <li>✍ Improve handwriting consistency.</li>

            <li>🔤 Practice confusing letters like b, d, p and q.</li>

            <li>🎤 Read aloud for 10 minutes every day.</li>

          </ul>

        </div>

        <div className="dashboard-card">

        <h2>Recent Assessments</h2>

        <RecentAssessment
          date="10 July 2026"
          status="Completed"
        />

        <RecentAssessment
          date="05 July 2026"
          status="Completed"
        />

        <RecentAssessment
          date="28 June 2026"
          status="Completed"
        />

      </div>

      <PerformanceChart />

      <RiskMeter risk="Low" percentage={35} />

        {/* Quick Actions */}

        <div className="dashboard-card">

          <h2>Quick Actions</h2>

          <div className="action-buttons">

            <Button
              text="▶ Start New Assessment"
              variant="primary"
              onClick={() => alert("Feature Coming Soon")}
            />

            <Button
              text="⬇ Download Report"
              variant="secondary"
              onClick={() => alert("PDF Generation Coming Soon")}
            />

          </div>

        </div>

      </div>
    </div>
  );
}

export default Dashboard;