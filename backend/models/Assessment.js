const mongoose = require("mongoose");

const assessmentSchema = new mongoose.Schema(
  {
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      required: true,
    },

    readingScore: {
      type: Number,
      required: true,
    },

    writingScore: {
      type: Number,
      required: true,
    },

    readingAccuracy: {
      type: Number,
      default: 0,
    },

    writingAccuracy: {
      type: Number,
      default: 0,
    },

    riskLevel: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "Low",
    },

    aiRecommendation: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Assessment", assessmentSchema);