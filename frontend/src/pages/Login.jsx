import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";
import "../styles/Login.css";

function Login() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await API.post("/students/login", loginData);

      alert(response.data.message);

      // Save logged in student
      localStorage.setItem("token", response.data.token);

    localStorage.setItem(
    "student",
    JSON.stringify(response.data.student)
    );

      navigate("/dashboard");

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Login failed.");
      }

      console.error(error);
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">

        <h1>🧠 NeuroLearn AI</h1>

        <h2>Welcome Back</h2>

        <p>Login to continue your dyslexia assessment journey.</p>

        <form onSubmit={handleSubmit}>

          <div className="input-group">
            <label>Email</label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={loginData.email}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Password</label>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={loginData.password}
              onChange={handleChange}
            />
          </div>

          <button className="login-btn">
            Login
          </button>

        </form>

        <p className="register-link">
          Don't have an account?

          <Link to="/register">
            Register
          </Link>

        </p>

      </div>
    </div>
  );
}

export default Login;