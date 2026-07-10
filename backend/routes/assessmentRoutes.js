const express = require("express");

const router = express.Router();

const {
  createAssessment,
  getAssessments,
  getStudentAssessments,
} = require("../controllers/assessmentController");

// Create Assessment
router.post("/", createAssessment);

// Get All Assessments
router.get("/", getAssessments);

// Get One Student's Assessments
router.get("/:studentId", getStudentAssessments);

module.exports = router;