import React, { Fragment } from "react";
import "./styles.scss";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
const Navegation = () => {
  return (
    <Fragment>
      <Navbar collapseOnSelect expand="lg fixed-top" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Cesar Martinez</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/Portfolio">Portfolio</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  );
};

export default Navegation;
