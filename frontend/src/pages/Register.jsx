import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/Register.css";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function Register() {

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    school: "",
    className: "",
    language: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (formData.password !== formData.confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  try {
    const response = await API.post("/students", {
      name: formData.name,
      age: formData.age,
      gender: formData.gender,
      school: formData.school,
      className: formData.className,
      language: formData.language,
      email: formData.email,
      password: formData.password,
    });

    alert(response.data.message);

    navigate("/login");

  } catch (error) {

    if (error.response) {
      alert(error.response.data.message);
    } else {
      alert("Registration failed.");
    }

    console.error(error);
  }
};

  return (
    <div className="register-page">

      <div className="register-card">

        <h1>🧠 NeuroLearn AI</h1>

        <h2>Create Account</h2>

        <form onSubmit={handleSubmit}>

          <div className="form-grid">

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
            />

            <input
              type="number"
              name="age"
              placeholder="Age"
              onChange={handleChange}
            />

            <select
              name="gender"
              onChange={handleChange}
            >
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>

            <input
              type="text"
              name="school"
              placeholder="School Name"
              onChange={handleChange}
            />

            <input
              type="text"
              name="className"
              placeholder="Class"
              onChange={handleChange}
            />

            <input
              type="text"
              name="language"
              placeholder="Preferred Language"
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={handleChange}
            />

          </div>

          <button className="register-btn">
            Register
          </button>

        </form>

        <p className="login-link">
          Already have an account?

          <Link to="/login">
            Login
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Register;