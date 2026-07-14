const Student = require("../models/Student");

// Register Student
const createStudent = async (req, res) => {
  try {
    const {
      name,
      age,
      gender,
      school,
      className,
      language,
      email,
      password,
    } = req.body;

    // Validation
    if (
      !name ||
      !age ||
      !gender ||
      !school ||
      !className ||
      !language ||
      !email ||
      !password
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    // Check if email already exists
    const existingStudent = await Student.findOne({ email });

    if (existingStudent) {
      return res.status(400).json({
        success: false,
        message: "Email already registered.",
      });
    }

    // Create new student
    const student = await Student.create({
      name,
      age,
      gender,
      school,
      className,
      language,
      email,
      password,
    });

    res.status(201).json({
      success: true,
      message: "Student registered successfully.",
      student,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Students
const getStudents = async (req, res) => {
  try {
    const students = await Student.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: students.length,
      students,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createStudent,
  getStudents,
};