function Footer() {
  return (
    <footer
      style={{
        background: "#111827",
        color: "white",
        padding: "50px 20px",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          color: "#3b82f6",
          marginBottom: "15px",
        }}
      >
        🧠 NeuroLearn AI
      </h2>

      <p
        style={{
          maxWidth: "700px",
          margin: "0 auto 25px",
          color: "#d1d5db",
          lineHeight: "1.7",
        }}
      >
        AI-powered early dyslexia screening platform designed to help
        students, parents, and educators identify learning difficulties
        through intelligent reading and handwriting analysis.
      </p>

      <hr
        style={{
          width: "70%",
          margin: "30px auto",
          border: "0.5px solid #374151",
        }}
      />

      <p style={{ color: "#9ca3af" }}>
        © 2026 NeuroLearn AI • Built for Samsung Solve for Tomorrow
      </p>
    </footer>
  );
}

export default Footer;