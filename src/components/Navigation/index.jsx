import React, { Fragment } from "react";
import "./styles.scss";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
const Navegation = () => {
  return (
    <Fragment>
      <Navbar collapseOnSelect expand="lg fixed-top" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Cesar Martinez</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#tech">Technologies</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  );
};

export default Navegation;
