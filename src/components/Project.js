import React from "react";
import "./styles.css";
import "./project.css";
import { Container, Row, Col, Card } from "react-bootstrap";

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

const Project = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="py-5 project">
      <Container>
        <FadeInSection>
          <Row className="py-5">
            <h1 className="large-font-heading">PROJECTS</h1>
          </Row>
        </FadeInSection>
        <FadeInSection>
          <Row>
            <Col className="p-4" md={3}>
              <Card className="h-100 card1">
                <Card.Body>
                  <Card.Title className="py-2 ">
                    Analyzing Tweets related to ChatGPT
                  </Card.Title>
                  <Card.Text
                    className="py-4 card-content "
                    style={{ borderTop: "1px solid #db2751" }}
                  >
                    <p>
                      - This study employs an in-depth analysis of tweets pertaining to ChatGPT utilizing the Twitter platform, with a specific emphasis on three key aspects: sentiment analysis, hashtag analysis, and location analysis.
                    </p>
                    <p>
                      - The analyses determine sentiment (positive, negative,
                      neutral), identify popular hashtags, and reveal global
                      user distribution, providing insights into public
                      perception and engagement with ChatGPT on Twitter.
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-4" md={3}>
              <Card className="h-100 card2">
                <Card.Body>
                  <Card.Title className="py-2">
                    Analyzing Sports Insights on Social Media Platforms
                  </Card.Title>
                  <Card.Text
                    className="py-4 card-content "
                    style={{ borderTop: "1px solid #e4780c" }}
                  >
                    <p>
                      - Utilized APIs from Twitter, Reddit, and YouTube to
                      collect and clean large amounts of data on user activity
                      and sentiment regarding sports players and events from the
                      2022 Football and Cricket World Cup.
                    </p>
                    <p>
                      - Developed a Python-based analysis tool and conducted
                      statistical analyses to answer specific research questions
                      related to player popularity and abusive content
                      detection.
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-4" md={3}>
              <Card className="h-100 card3">
                <Card.Body>
                  <Card.Title className="py-2">
                    Cloud Based Shared Game Sessions
                  </Card.Title>
                  <Card.Text
                    className="py-4 card-content "
                    style={{ borderTop: "1px solid #87a90a" }}
                  >
                    <p>
                      - Designed and contributed towards a web game application
                      to allow users to virtually play Pictionary together.
                    </p>
                    <p>
                      - Collaborated with a team of 5 and utilized NodeJS,
                      Docker, Firebase, Google Cloud Platform.
                    </p>
                    <p>
                      - Containerized the application and hosted it on Google
                      Cloud Platform, which allowed it to be executable in any
                      environment.
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-4" md={3}>
              <Card className="h-100 card4">
                <Card.Body>
                  <Card.Title className="py-2">
                    Real Time Employee Tracker
                  </Card.Title>
                  <Card.Text
                    className="py-4 card-content "
                    style={{ borderTop: "1px solid #0fbc91" }}
                  >
                    <p>
                      - Designed and launched a real-time tracking system that
                      tracks the precise location of employees.
                    </p>
                    <p>
                      - Collaborated in a team of 3 to utilize Java, Firebase,
                      and Android Studio for the project.
                    </p>
                    <p>
                      - Delegated tasks to the group and organized the final
                      presentation with solutions for university faculty.
                    </p>
                    <p>
                      - Helped the organization better manage resources and
                      increase employee productivity by 14%.
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </FadeInSection>
      </Container>
    </div>
  );
});

export default Project;
