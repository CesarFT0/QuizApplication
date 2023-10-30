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
      submittedEmails: [], 
      isDuplicateEmail: false, 
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { email, submittedEmails } = this.state;
    if (submittedEmails.includes(email)) {
      this.setState({ isDuplicateEmail: true });
      return; 
    }

    const updatedSubmittedEmails = [...submittedEmails, email];

    console.log("Form submitted:", this.state);
    this.setState({
      isDuplicateEmail: false,
      submittedEmails: updatedSubmittedEmails,
    });
  };

  render() {
    const { isDuplicateEmail } = this.state;

    return (
      <div className="form-container">
        <h2 className="form-title">Contact Us</h2>
        {isDuplicateEmail && (
          <div className="alert alert-danger">
            Email already submitted. Please use a different email address.
          </div>
        )}
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
      </div>
    );
  }
}

export default ContactUs;




