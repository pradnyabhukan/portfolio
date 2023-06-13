import React, { useState } from "react";
import "./App.css";
import "./components/styles.css";
import logo from "./assets/pb.png";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Contact from "./components/Contact";
import { Navbar, Nav, Container } from "react-bootstrap";
import resume from "./assets/PradnyaBhukanResume.pdf";
import {useRef} from 'react';


function App() {
  
    const myHome = useRef(null)
    const myAbout = useRef(null)
    const myExperience = useRef(null)
    const myProject = useRef(null)
    const myContact = useRef(null)
    const scrollToAbout = (ref) => {
      if (ref && ref.current) {
        const elementTopOffset = ref.current.getBoundingClientRect().top;
        const scrollOffset = 80; // Adjust the value to scroll a little lower
        window.scroll({
          top: window.scrollY + elementTopOffset - scrollOffset,
          behavior: 'smooth'
        });
      }
      handleNavCollapse();
    };

    const scrollToExp = (ref) => {
      if (ref && ref.current) {
        const elementTopOffset = ref.current.getBoundingClientRect().top;
        const scrollOffset = -100; // Adjust the value to scroll a little lower
        window.scroll({
          top: window.scrollY + elementTopOffset - scrollOffset,
          behavior: 'smooth'
        });
      }
      handleNavCollapse();
    };

    const scrollToRef2 = (ref) => {
      if (ref && ref.current) {
        ref.current.scrollIntoView({ behavior: 'smooth' });
      }
      handleNavCollapse();
    };
   const openFile = () =>{
    window.open(resume , "_blank");
    handleNavCollapse();
  }   
  const [expanded, setExpanded] = useState(false);

  const handleNavCollapse = () => {
    setExpanded(false);
  };
  return (
    <div className="App">
      <div >
      <Navbar  variant="dark" expand="lg" className=" nav_bar fixed-top" expanded={expanded}>
      <Container>
        <Navbar.Brand onClick={() => scrollToRef2(myHome)} className="navbar-brand-left">
        <img src={logo} alt="logo" width="50" height="50"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)}  />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link onClick={() => scrollToRef2(myHome)} className="px-3 fs-5 link">Home</Nav.Link>
            <Nav.Link onClick={() => scrollToAbout(myAbout)} className="px-3 fs-5 link">About</Nav.Link>
            <Nav.Link onClick={() => scrollToExp(myExperience)} className="px-3 fs-5 link">Experience</Nav.Link>
            <Nav.Link onClick={() => scrollToRef2(myProject)} className="px-3 fs-5 link">Projects</Nav.Link>
            <Nav.Link onClick={() => scrollToRef2(myContact)} className="px-3 fs-5 link">Contact</Nav.Link>
            <Nav.Link onClick={openFile} className="px-3 fs-5 link">Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
      <Home ref={myHome} />
      <About ref={myAbout}/>
      <Experience ref={myExperience} />
      <Project ref={myProject} />
      <Contact ref={myContact}/>
    </div>
  );
}

export default App;
