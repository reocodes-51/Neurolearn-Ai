const dotenv = require("dotenv");
const connectDB = require("./config/db");
const studentRoutes = require("./routes/studentRoutes");
const assessmentRoutes = require("./routes/assessmentRoutes");

dotenv.config();
connectDB();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Student Routes
app.use("/api/students", studentRoutes);

// Assessment Routes
app.use("/api/assessments", assessmentRoutes);

app.get("/", (req, res) => {
  res.send("NeuroLearn API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});