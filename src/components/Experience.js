import React from "react";
import "./styles.css";
import "./experience.css";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUniversity, faDatabase } from "@fortawesome/free-solid-svg-icons";

import { faHtml5, faReact } from "@fortawesome/free-brands-svg-icons";

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
const Experience = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className=" experience">
      <Container>
        <FadeInSection>
          <Row className="py-5">
            <h1 className="large-font-heading">EXPERIENCE</h1>
          </Row>
        </FadeInSection>
        <Row className="py-5">
          <Col md={12}>
            <div className="main-timeline">
              <div className="timeline">
                <div className="timeline-icon">
                  <i>
                    <FontAwesomeIcon
                      icon={faUniversity}
                      style={{ fontSize: "4.5rem" }}
                    />
                  </i>
                </div>
                <div className="timeline-content">
                  <FadeInSection>
                    <h3 className="title">
                      Binghamton University, Graduate Grader
                    </h3>
                  </FadeInSection>
                  <FadeInSection>
                    <p className="description">
                      Demonstrated excellence in academic instruction as a
                      Grader for the Design Patterns courses, where I graded
                      assignments and exams, provided constructive feedback to
                      students
                    </p>
                  </FadeInSection>
                </div>
              </div>
              <div className="timeline">
                <div className="timeline-icon">
                  <i>
                    <FontAwesomeIcon
                      icon={faDatabase}
                      style={{ fontSize: "4.5rem" }}
                    />
                  </i>
                </div>
                <div className="timeline-content">
                  <FadeInSection>
                    <h3 className="title">Oracle, UI Development Intern</h3>
                  </FadeInSection>
                  <FadeInSection>
                    <p className="description">
                      Designed interface for OCI cloud cost-estimator widget
                      using OJET and KnockoutJS. Sent and received data between
                      KnockoutJS frontend and APEX backend using APIs
                    </p>
                  </FadeInSection>
                </div>
              </div>
              <div  className="timeline">
                <div className="timeline-icon">
                  <i>
                    <FontAwesomeIcon
                      icon={faReact}
                      style={{ fontSize: "4.5rem" }}
                    />
                  </i>
                </div>
                <div className="timeline-content">
                  <FadeInSection>
                    <h3 className="title">
                      Bahwan Cybertek Tibco, Software Developer
                    </h3>
                  </FadeInSection>
                  <FadeInSection>
                    <p className="description">
                      Used ReactJS to develop website components for property
                      management services in Oman.Added user-facing features for
                      creation and navigation of the applications for each
                      property
                    </p>
                  </FadeInSection>
                </div>
              </div>
              <div  className="timeline">
                <div className="timeline-icon">
                  <i>
                    <FontAwesomeIcon
                      icon={faHtml5}
                      style={{ fontSize: "4.5rem" }}
                    />
                  </i>
                </div>
                <div className="timeline-content">
                  <FadeInSection>
                    <h3 className="title">Raze Graphics, UI Design Intern</h3>
                  </FadeInSection>
                  <FadeInSection>
                    <p className="description">
                      Designed frontend web page layouts using Bootstrap CSS
                      framework. Implemented features for purchasing books and
                      managing checkout using HTML/CSS
                    </p>
                  </FadeInSection>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
});

export default Experience;
