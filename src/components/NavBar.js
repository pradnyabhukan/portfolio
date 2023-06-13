import React from "react";
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "./styles.css";
import resume from "../assets/PradnyaBhukanResume.pdf";

const NavBar = ( ) => {
  const openFile = () =>{
    window.open(resume , "_blank");
}


  return (
    <div className="nav_bar">
      <Navbar bg="dark" variant="dark" expand="lg" className="fixed-top">
      <Container>
        <Navbar.Brand href="#home" className="navbar-brand-left">
          PB
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link href="#home" className="px-3 fs-5">Home</Nav.Link>
            <Nav.Link className="px-3 fs-5">About</Nav.Link>
            <Nav.Link className="px-3 fs-5">Experience</Nav.Link>
            <Nav.Link className="px-3 fs-5">Projects</Nav.Link>
            <Nav.Link className="px-3 fs-5">Contact</Nav.Link>
            <Nav.Link onClick={openFile} className="px-3 fs-5">Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default NavBar;
