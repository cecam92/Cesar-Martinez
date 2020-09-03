import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import Nav from "react-bootstrap/Nav";

const Header = () => {
  return (
    <>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link>
            <Link to="/">Home</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">project 1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled"> project 2</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default Header;
