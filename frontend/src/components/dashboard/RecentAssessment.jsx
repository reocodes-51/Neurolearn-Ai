import "../../styles/RecentAssessment.css";

function RecentAssessment({ date, status }) {
  return (
    <div className="assessment-item">

      <div>
        <h4>{date}</h4>
        <p>{status}</p>
      </div>

      <button className="view-btn">
        View →
      </button>

    </div>
  );
}

export default RecentAssessment;