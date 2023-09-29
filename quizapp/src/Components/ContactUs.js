import React, { Component } from "react";

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
      <div>
        <h2><center>Contact Us</center></h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleInputChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleInputChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input
              type="tel"
              name="phone"
              value={this.state.phone}
              onChange={this.handleInputChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Message Subject</label>
            <input
              type="text"
              name="subject"
              value={this.state.subject}
              onChange={this.handleInputChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              value={this.state.message}
              onChange={this.handleInputChange}
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    );
  }
}

export default ContactUs;
