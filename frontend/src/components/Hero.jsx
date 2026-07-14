import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      style={{
        minHeight: "85vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "40px 20px",
        background:
          "linear-gradient(135deg, #eef5ff 0%, #ffffff 50%, #f7fbff 100%)",
      }}
    >
      <h1
        style={{
          fontSize: "4rem",
          color: "#2563eb",
          marginBottom: "10px",
        }}
      >
        🧠 NeuroLearn AI
      </h1>

      <h2
        style={{
          fontSize: "2rem",
          color: "#1f2937",
          marginBottom: "20px",
        }}
      >
        AI-Powered Early Dyslexia Screening
      </h2>

      <p
        style={{
          maxWidth: "750px",
          fontSize: "18px",
          lineHeight: "1.8",
          color: "#4b5563",
          marginBottom: "40px",
        }}
      >
        NeuroLearn AI helps identify early signs of dyslexia using
        AI-powered reading and handwriting analysis. Our intelligent
        assessment platform provides quick screening, personalized insights,
        and progress tracking to support students, parents, and educators.
      </p>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <Link to="/login">
          <button
            style={{
              padding: "14px 35px",
              background: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "10px",
              fontSize: "16px",
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
              padding: "14px 35px",
              background: "white",
              color: "#2563eb",
              border: "2px solid #2563eb",
              borderRadius: "10px",
              fontSize: "16px",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            Register
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Hero;  