import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"; 

const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 17px;
  padding: 10px 20px;
  border-radius: 5px;
  margin: 0 10px;
  cursor: pointer;
`;

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoginOpen: false,
    };
  }

  render() {
    return (
      <div className="navbar">
        <div className="navbar-content">
          <Link to="http://localhost:3000/" className="custom-link">
            <Button>Home</Button>
          </Link>
          <Link to="/login/user" className="custom-link">
            <Button>Sign Up</Button>
          </Link>
          <Link to="/about-us" className="custom-link">
            <Button>About us</Button>
          </Link>
          <Link to="/contact" className="custom-link">
            <Button>Contact us</Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default NavigationBar;





