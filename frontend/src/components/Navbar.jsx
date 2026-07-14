import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "18px 60px",
        background: "white",
        boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <h2
        style={{
          color: "#2563eb",
          fontWeight: "700",
          margin: 0,
        }}
      >
        🧠 NeuroLearn AI
      </h2>

      <div
        style={{
          display: "flex",
          gap: "18px",
        }}
      >
        <Link to="/login">
          <button
            style={{
              padding: "10px 22px",
              background: "white",
              color: "#2563eb",
              border: "2px solid #2563eb",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            Login
          </button>
        </Link>

        <Link to="/register">
          <button
            style={{
              padding: "10px 22px",
              background: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            Register
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;