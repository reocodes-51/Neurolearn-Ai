import "../../styles/StatsCard.css";

function StatsCard({ title, value, icon, color }) {
  return (
    <div className="stats-card">

      <div
        className="stats-icon"
        style={{ backgroundColor: color }}
      >
        {icon}
      </div>

      <div className="stats-content">

        <h4>{title}</h4>

        <h2>{value}</h2>

      </div>

    </div>
  );
}

export default StatsCard;