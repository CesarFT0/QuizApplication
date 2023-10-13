import React, { Component } from "react";
import './UserSignupPage.css'; 

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", this.state);
  };

  render() {
    return (
      <div className="form-container">
        <h2 className="form-title">Contact Us</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={this.state.firstName}
              onChange={this.handleInputChange}
              className={`form-control`}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={this.state.lastName}
              onChange={this.handleInputChange}
              className={`form-control`}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleInputChange}
              className={`form-control`}
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={this.state.phone}
              onChange={this.handleInputChange}
              className={`form-control`}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="subject"
              placeholder="Message Subject"
              value={this.state.subject}
              onChange={this.handleInputChange}
              className={`form-control`}
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Message"
              rows="6"
              value={this.state.message}
              onChange={this.handleInputChange}
              className={`form-control`}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn-sendmessage" style={{ display: "inline-block" }}>
              Send Message
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default ContactUs;



