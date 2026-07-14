import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 50px",
        background: "#2563eb",
        color: "white",
      }}
    >
      <h2>NeuroLearn AI</h2>

      <Link
        to="/dashboard"
        style={{
          color: "white",
          textDecoration: "none",
          fontWeight: "600",
        }}
      >
        Dashboard
      </Link>
    </nav>
  );
}

export default Navbar;