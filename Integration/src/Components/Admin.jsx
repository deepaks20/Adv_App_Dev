// Login.js
import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    gmail: '',
    password: '',
  });
  const navigate = useNavigate();
const [errorMessage, setErrorMessage]= useState("");
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make an API call for login
      const response = await axios.post('http://localhost:8086/api/v1/auth/authenticate', formData);

      if (response.data.success) {
        console.log('Login Successful:', response.data);
        const token= response.data.token;
        localStorage.setItem("token",token);
        navigate('/post');
      } else {
        console.error('Invalid credentials');
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Login Error:', error.response.data.message);
        setErrorMessage("Invalid");
      } else {
        console.error('Login Error:', error.message);
      }
      // Handle login error, show a message, etc.
    }
  };

  const handleForgotPassword = () => {
    // Add your forgot password logic here
    console.log('Forgot Password clicked');
    // You can navigate to the forgot password page or show a modal
  };

  return (
    <div className="log">
      <div className="login-container">
        <h2> AdminLogin</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <label className="form-label">
            Gmail:
            <input
              type="gmail"
              name="gmail"
              value={formData.gmail}
              onChange={handleChange}
              required
              className="form-input"
            />
          </label>
          <br />
          <label className="form-label">
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="form-input"
            />
          </label>
          <br />
          <button type="submit" className="submit-button">
            Login
          </button>
          <p style={{color:"red"}}>{errorMessage}</p>
        </form>
        <div className="forgot-password" onClick={handleForgotPassword}>
          <span>Forgot Password?</span>&nbsp;&nbsp;&nbsp;
          <Link to="/signup">
            <span>Create Account</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
