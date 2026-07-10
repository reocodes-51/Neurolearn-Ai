const Student = require("../models/Student");

// Create Student
const createStudent = async (req, res) => {
  try {
    const { name, age, gender, school, className, language } = req.body;

    // Validation
    if (!name || !age || !gender || !school || !className || !language) {
      return res.status(400).json({
        message: "Please fill all required fields.",
      });
    }

    const student = await Student.create({
      name,
      age,
      gender,
      school,
      className,
      language,
    });

    res.status(201).json(student);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Students
const getStudents = async (req, res) => {
  try {
    const students = await Student.find().sort({ createdAt: -1 });

    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createStudent,
  getStudents,
};