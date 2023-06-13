import React from "react";
import "./styles.css";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import resume from "../assets/PradnyaBhukanResume.pdf";

export function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

const Contact = React.forwardRef((props, ref) => {
  const email = 'pradnyabhukan1709@gmail.com'
  const openFile = () => {
    window.open(resume, "_blank");
  };
  function linkedin() {
    window.open("https://www.linkedin.com/in/pradnyabhukan/");
  }

  function github() {
    window.open("https://github.com/pradnyabhukan");
  }
  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div ref={ref} className="contact">
      <Container>
        <FadeInSection>
          <Row className="py-3">
            <h1 className="large-font-heading">CONTACT</h1>
          </Row>
        </FadeInSection>
        <Row className="py-3">
          <Col className="contact-icons">
            <p className="contact-content">Email me at:</p>
            <FontAwesomeIcon
              icon={faEnvelope}
              className="small-icon"
              onClick={handleEmailClick}
            />
            <a href={`mailto:${email}`} onClick={handleEmailClick} className="email" >
              pradnyabhukan1709@gmail.com
            </a>
          </Col>
          <Col className="contact-icons">
            <p className="contact-content">Check out my work at:</p>
            <div className="d-flex ">
              <div className="p-4">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="small-icon"
                  onClick={github}
                />
              </div>
              <div className="p-4">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="small-icon"
                  onClick={linkedin}
                />
              </div>
              <div className="p-4">
                <FontAwesomeIcon
                  onClick={openFile}
                  target="_blank"
                  icon={faFile}
                  className="small-icon"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
});

export default Contact;
