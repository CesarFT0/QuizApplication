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

const DropdownButton = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownContent = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const DropdownItem = styled.button`
  background-color: #f9f9f9;
  color: black;
  padding: 12px 16px;
  border: none;
  width: 100%;
  text-align: left;
  cursor: pointer;

  &:hover {
    background-color: #ddd;
  }
`;

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoginOpen: false,
    };
  }

  handleLoginClick = () => {
    this.setState((prevState) => ({
      isLoginOpen: !prevState.isLoginOpen,
    }));
  };

  handleOptionClick = (option) => {
    this.props.onLoginOptionClick(option);
    
    this.setState({ isLoginOpen: false });
  };

  render() {
    const { isLoginOpen } = this.state;

    return (
      <div className="navbar">
        <div className="navbar-content">
          <Link to="http://localhost:3000/" className="custom-link">
            <Button>Home</Button>
          </Link>
          <DropdownButton>
            <Button onClick={this.handleLoginClick}>Login</Button>
            <DropdownContent isOpen={isLoginOpen}>
              <DropdownItem onClick={() => this.handleOptionClick("Admin")}>
                Admin
              </DropdownItem>
              <Link to="/login/user" className="custom-link">
                <DropdownItem onClick={() => this.handleOptionClick("User")}>
                  User
                </DropdownItem>
              </Link>
            </DropdownContent>
          </DropdownButton>
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



