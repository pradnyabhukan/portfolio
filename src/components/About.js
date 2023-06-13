import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJava,
  faCss3,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

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

const About = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className=" about ">
      <Container className="custom-container ">
        <FadeInSection>
          <Row className="py-5">
            <h1 className="large-font-heading">ABOUT</h1>
          </Row>
        </FadeInSection>
        <FadeInSection>
          <Row>
            <Col xs={0}></Col>
            <Col xs={12} lg={8}>
            <p className="p-4 fs-5 fs-md-4 fs-lg-3  justify-content">
              Welcome to my portfolio! I created this website with the goal of
              showcasing my work, experience, and projects in order to enhance
              my job prospects. As a React-built platform, this portfolio
              provides an interactive and visually appealing display of my
              qualifications and achievements. <br></br><br></br>
              I hold a Master of Science in
              Computer Science from Binghamton University, with a strong
              academic background in Design Patterns, Cloud Computing, Data
              Structures and Algorithms, and more. Additionally, I completed a
              Bachelor's in Computer Engineering from Savitribai Phule Pune
              University. <br></br><br></br>
              In addition to my technical skills and professional
              achievements, I have a passion for various hobbies. When I'm not
              immersed in coding, I enjoy reading books, tending to my garden,
              cycling, exploring new places, and even trying my hand at
              painting. <br></br><br></br>
              Thank you for visiting my portfolio! Feel free to browse
              through my projects and experience to get a comprehensive
              understanding of my skills and qualifications.
            </p>
            </Col>
            <Col xs={0}></Col>
            
          </Row>
        </FadeInSection>
        <FadeInSection>
          <Row>
          <Col xs={1} sm={2}></Col>
            <Col xs={10} sm={8} className="py-5 " style={{ display: "flex", justifyContent: "space-between"}}>
              <FontAwesomeIcon
                style={{ color: "#ec496e" }}
                icon={faJava}
                className=" larger-icon"
              />
              <FontAwesomeIcon
                style={{ color: "#f9850f" }}
                icon={faCss3}
                className="larger-icon"
              />
              <FontAwesomeIcon
                style={{ color: "#8fb800" }}
                icon={faJs}
                className="larger-icon"
              />
              <FontAwesomeIcon
                style={{ color: "#2fcea5" }}
                icon={faReact}
                className="larger-icon"
              />
            </Col>
            {/* <Col xs={6} sm={3} className="py-5">
              <FontAwesomeIcon
                style={{ color: "#f9850f" }}
                icon={faCss3}
                className="larger-icon"
              />
            </Col>
            <Col xs={6} sm={3} className="py-5">
              <FontAwesomeIcon
                style={{ color: "#8fb800" }}
                icon={faJs}
                className="larger-icon"
              />
            </Col>
            <Col xs={6} sm={3} className="py-5">
              <FontAwesomeIcon
                style={{ color: "#2fcea5" }}
                icon={faReact}
                className="larger-icon"
              />
            </Col> */}
            <Col xs={1} sm={2}></Col>
          </Row>
        </FadeInSection>
      </Container>
    </div>
  );
});

export default About;
