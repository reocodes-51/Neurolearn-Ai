function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        padding: "50px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          color: "#2563eb",
          marginBottom: "20px",
        }}
      >
        NeuroLearn AI
      </h1>

      <h2>
        Early Dyslexia Screening & Personalized Learning Platform
      </h2>

      <p
        style={{
          maxWidth: "700px",
          marginTop: "20px",
          fontSize: "18px",
          lineHeight: "1.6",
        }}
      >
        Helping Indian school children identify dyslexia at an early age
        through AI-powered reading and writing assessments.
      </p>

      <div style={{ marginTop: "40px" }}>
        <button
          style={{
            padding: "12px 24px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            marginRight: "15px",
          }}
        >
          Start Assessment
        </button>

        <button
          style={{
            padding: "12px 24px",
            background: "white",
            border: "2px solid #2563eb",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Learn More
        </button>
      </div>

      <div style={{ marginTop: "60px" }}>
        <h2>How It Works</h2>

        <ol>
          <li>Student Registration</li>
          <li>Reading Assessment</li>
          <li>Writing Assessment</li>
          <li>AI Analysis</li>
          <li>Risk Score Generation</li>
          <li>Personalized Learning Plan</li>
        </ol>
      </div>
    </div>
  );
}

export default Home;