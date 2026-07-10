const Assessment = require("../models/Assessment");

// Create Assessment
const createAssessment = async (req, res) => {
  try {
    const {
      studentId,
      readingScore,
      writingScore,
      readingAccuracy,
      writingAccuracy,
      riskLevel,
      aiRecommendation,
    } = req.body;

    // Validation
    if (!studentId) {
      return res.status(400).json({
        message: "Student ID is required.",
      });
    }

    const assessment = await Assessment.create({
      studentId,
      readingScore,
      writingScore,
      readingAccuracy,
      writingAccuracy,
      riskLevel,
      aiRecommendation,
    });

    res.status(201).json(assessment);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Assessments
const getAssessments = async (req, res) => {
  try {
    const assessments = await Assessment.find()
      .populate("studentId")
      .sort({ createdAt: -1 });

    res.status(200).json(assessments);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get Assessments of One Student
const getStudentAssessments = async (req, res) => {
  try {
    const assessments = await Assessment.find({
      studentId: req.params.studentId,
    }).sort({ createdAt: -1 });

    res.status(200).json(assessments);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createAssessment,
  getAssessments,
  getStudentAssessments,
};