import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './UserSignupPage.css';

function UserSignupPage() {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    phoneNumber: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    username: '',
    phoneNumber: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate(); // Use useNavigate to navigate

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { name, username, phoneNumber, email, password } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;
    const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;

    setErrors({
      name: name.trim() ? '' : 'Name is required',
      username: username.trim() ? '' : 'Username is required',
      phoneNumber: phoneRegex.test(phoneNumber) ? '' : 'Invalid phone number format (XXX-XXX-XXXX)',
      email: emailRegex.test(email) ? '' : 'Invalid email address',
      password: passwordRegex.test(password) ? '' : 'Password does not meet the password policy requirements',
    });

    return (
      name.trim() &&
      username.trim() &&
      phoneRegex.test(phoneNumber) &&
      emailRegex.test(email) &&
      passwordRegex.test(password)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form is valid, submitting...');
      navigate('/login/usersignedup'); // Use navigate to go to the home page
    } else {
      console.log('Form contains errors, please correct them.');
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">USER SIGN UP</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleInputChange}
            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>
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
            type="text"
            name="phoneNumber"
            placeholder="Phone: (___)___-____"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            className={`form-control ${errors.phoneNumber ? 'is-invalid' : ''}`}
          />
          {errors.phoneNumber && <div className="invalid-feedback">{errors.phoneNumber}</div>}
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
          />
          {errors.password && <div className="invalid-feedback">{errors.password}</div>}
          {errors.password && (
            <div className="password-rules">
              <span style={{ color: 'white', fontWeight: 'bold' }}>Password must be:</span>
              <ul>
                <li>Be at least 8 characters long</li>
                <li>Contain at least one uppercase letter</li>
                <li>Contain at least one lowercase letter</li>
                <li>Contain at least one digit</li>
              </ul>
            </div>
          )}
        </div>
        <button type="submit" className="btn-signup">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default UserSignupPage;
