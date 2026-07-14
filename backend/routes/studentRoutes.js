const express = require("express");

const {
  createStudent,
  getStudents,
  loginStudent,
} = require("../controllers/studentController");

const router = express.Router();

// Register
router.post("/", createStudent);

// Login
router.post("/login", loginStudent);

// Get all students
router.get("/", getStudents);

module.exports = router;