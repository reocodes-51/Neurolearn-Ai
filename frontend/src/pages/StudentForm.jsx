import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import "../styles/StudentForm.css";
import ProgressBar from "../components/common/ProgressBar";
import Button from "../components/common/Button";

function StudentForm() {
  const navigate = useNavigate();

  const [student, setStudent] = useState({
    name: "",
    age: "",
    school: "",
    className: "",
    gender: "",
    language: "",
  });

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    if (
      !student.name ||
      !student.age ||
      !student.gender ||
      !student.school ||
      !student.className ||
      !student.language
    ) {
      alert("Please fill all the fields.");
      return;
    }

    try {
      const response = await API.post("/students", student);

      // Save Student ID
      localStorage.setItem("studentId", response.data._id);

      alert("Student Registered Successfully");

      navigate("/assessment");
    } catch (error) {
      console.error(error);

      alert("Registration Failed");
    }
  };

  return (
    <div className="student-page">
      <div className="student-container">

        <h1>Student Registration</h1>

          <ProgressBar
            step={1}
            totalSteps={4}
          />

          <p>
            Fill in the student details before starting the assessment.
          </p>

        <div className="form-grid">

          <div className="input-group">
            <label>Student Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter Student Name"
              value={student.name}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Age</label>
            <input
              type="number"
              name="age"
              placeholder="Enter Age"
              value={student.age}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Gender</label>
            <select
              name="gender"
              value={student.gender}
              onChange={handleChange}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="input-group">
            <label>Class</label>
            <input
              type="text"
              name="className"
              placeholder="Enter Class"
              value={student.className}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>School Name</label>
            <input
              type="text"
              name="school"
              placeholder="Enter School Name"
              value={student.school}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Preferred Language</label>
            <input
              type="text"
              name="language"
              placeholder="English / Hindi"
              value={student.language}
              onChange={handleChange}
            />
          </div>

        </div>

        <div className="button-area">
          <Button
              text="Start Assessment →"
              onClick={handleSubmit}
              variant="primary"
          />
        </div>

      </div>
    </div>
  );
}

export default StudentForm;