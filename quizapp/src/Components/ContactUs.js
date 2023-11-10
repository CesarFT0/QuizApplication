import React, { Component } from "react";
import './UserSignupPage.css';

const confirmationMessageStyle = {
  textAlign: "center",
  backgroundColor: "#4CAF50",
  color: "white",
  padding: "10px",
  borderRadius: "5px",
  marginTop: "20px",
};

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
      isMessageSent: false,
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("Form submitted:", this.state);
    this.setState({ isMessageSent: true });
  };

  render() {
    const { isMessageSent } = this.state;

    return (
      <div className="form-container">
        <h2 className="form-title">Contact Us</h2>
        {isMessageSent ? (
          <div style={confirmationMessageStyle}>
            <p>Thank you for sending your inquiry. We will review it and get back to you soon</p>
          </div>
        ) : (
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={this.state.firstName}
                onChange={this.handleInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={this.state.lastName}
                onChange={this.handleInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={this.state.phone}
                onChange={this.handleInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Message Subject"
                value={this.state.subject}
                onChange={this.handleInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Message"
                rows="6"
                value={this.state.message}
                onChange={this.handleInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn-sendmessage" style={{ display: "inline-block" }}>
                Send Message
              </button>
            </div>
          </form>
        )}
      </div>
    );
  }
}

export default ContactUs;