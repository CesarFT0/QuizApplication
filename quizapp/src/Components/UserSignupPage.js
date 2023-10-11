import React, { Component } from "react";

class UserSignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      username: "",
      phoneNumber: "",
      email: "",
      password: "",
      errors: {
        name: "",
        username: "",
        phoneNumber: "",
        email: "",
        password: "",
      },
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    
    if (this.validateForm()) {
      
      console.log("Form is valid, submitting...");
      
    } else {
      console.log("Form contains errors, please correct them.");
    }
  };

  validateForm = () => {
    const { name, username, phoneNumber, email, password, errors } = this.state;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;
    const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;

    errors.name = "";
    errors.username = "";
    errors.phoneNumber = "";
    errors.email = "";
    errors.password = "";

    let formIsValid = true;

    if (name.trim() === "") {
      errors.name = "Name is required";
      formIsValid = false;
    }

    if (username.trim() === "") {
      errors.username = "Username is required";
      formIsValid = false;
    }

    if (phoneNumber.trim() === "") {
      errors.phoneNumber = "Phone number is required";
      formIsValid = false;
    } else if (!phoneRegex.test(phoneNumber)) {
      errors.phoneNumber = "Invalid phone number format (XXX-XXX-XXXX)";
      formIsValid = false;
    }

    if (email.trim() === "") {
      errors.email = "Email is required";
      formIsValid = false;
    } else if (!emailRegex.test(email)) {
      errors.email = "Invalid email address";
      formIsValid = false;
    }

    if (password.trim() === "") {
      errors.password = "Password is required";
      formIsValid = false;
    } else if (!passwordRegex.test(password)) {
      errors.password = "Password does not meet the password policy requirements";
      formIsValid = false;
    }

    this.setState({ errors });
    return formIsValid;
  };

  render() {
    const { name, username, phoneNumber, email, password, errors } = this.state;

    return (
      <div>
        <h2>
        <center><h1 style={{ color: "black" }}>USER SIGN UP</h1></center>
        </h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleInputChange}
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
            />
            {errors.name && (
              <div className="invalid-feedback">{errors.name}</div>
            )}
          </div>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={this.handleInputChange}
              className={`form-control ${errors.username ? "is-invalid" : ""}`}
            />
            {errors.username && (
              <div className="invalid-feedback">{errors.username}</div>
            )}
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              value={phoneNumber}
              onChange={this.handleInputChange}
              className={`form-control ${errors.phoneNumber ? "is-invalid" : ""}`}
            />
            {errors.phoneNumber && (
              <div className="invalid-feedback">{errors.phoneNumber}</div>
            )}
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleInputChange}
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email}</div>
            )}
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleInputChange}
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
            />
            {errors.password && (
              <div className="invalid-feedback">{errors.password}</div>
            )}
            {errors.password && (
              <div className="password-rules">
                Password must:
                <ul>
                  <li>Be at least 8 characters long</li>
                  <li>Contain at least one uppercase letter</li>
                  <li>Contain at least one lowercase letter</li>
                  <li>Contain at least one digit</li>
                </ul>
              </div>
            )}
          </div>
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}

export default UserSignupPage;
