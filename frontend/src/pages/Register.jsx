import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/Register.css";

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

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Registration functionality will be added next.");
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