import "../../styles/RiskMeter.css";

function RiskMeter({ risk = "Low", percentage = 35 }) {
  return (
    <div className="risk-card">

      <h2>Risk Assessment</h2>

      <div className="risk-status">

        {risk === "Low" && "🟢 Low Risk"}
        {risk === "Medium" && "🟡 Medium Risk"}
        {risk === "High" && "🔴 High Risk"}

      </div>

      <div className="risk-bar">

        <div
          className="risk-fill"
          style={{ width: `${percentage}%` }}
        ></div>

      </div>

      <p className="risk-text">

        AI Confidence : {percentage}%

      </p>

    </div>
  );
}

export default RiskMeter;