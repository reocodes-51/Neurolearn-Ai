function Features() {
  const features = [
    {
      icon: "📖",
      title: "Reading Assessment",
      description:
        "Evaluate reading ability using AI-powered speech analysis to identify early reading difficulties.",
    },
    {
      icon: "✍️",
      title: "Writing Assessment",
      description:
        "Analyze handwriting with OCR and computer vision to detect patterns associated with dyslexia.",
    },
    {
      icon: "🤖",
      title: "AI Risk Prediction",
      description:
        "Generate Low, Medium, or High dyslexia risk predictions using a trained machine learning model.",
    },
    {
      icon: "📊",
      title: "Progress Dashboard",
      description:
        "Store assessment history, monitor progress, and view personalized learning insights.",
    },
  ];

  return (
    <section
      style={{
        padding: "80px 60px",
        background: "#f8fafc",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "2.5rem",
          color: "#1f2937",
          marginBottom: "15px",
        }}
      >
        What NeuroLearn AI Offers
      </h2>

      <p
        style={{
          color: "#6b7280",
          marginBottom: "50px",
          fontSize: "18px",
        }}
      >
        A complete AI-powered screening platform for early dyslexia detection.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "30px",
        }}
      >
        {features.map((feature, index) => (
          <div
            key={index}
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "15px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
              transition: "0.3s",
            }}
          >
            <div
              style={{
                fontSize: "50px",
                marginBottom: "20px",
              }}
            >
              {feature.icon}
            </div>

            <h3
              style={{
                color: "#2563eb",
                marginBottom: "15px",
              }}
            >
              {feature.title}
            </h3>

            <p
              style={{
                color: "#4b5563",
                lineHeight: "1.7",
              }}
            >
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;