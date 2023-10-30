import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserSignupPage.css';

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { username, password } = formData;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;

    setErrors({
      username: username.trim() ? '' : 'Username is required',
      password: passwordRegex.test(password) ? '' : 'Password is required',
    });

    return username.trim() && passwordRegex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form is valid, logging in...');
      navigate('/home'); // Redirect to the home page
    } else {
      console.log('Form contains errors, please correct them.');
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            value={formData.username}
            onChange={handleInputChange}
            className={`form-control ${errors.username ? 'is-invalid' : ''}`}
          />
          {errors.username && <div className="invalid-feedback">{errors.username}</div>}
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleInputChange}
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
          />
          {errors.password && <div className="invalid-feedback">{errors.password}</div>}
        </div>
        <button type="button" onClick={handleSubmit} className="btn-Adminlogin">
                    Login
                </button>
      </form>
    </div>
  );
}

export default Login;
