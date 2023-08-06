import React, { useState } from "react";
import "./styles.css";
import "./project.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import chatgpt from "../assets/ChatGPT1.png";
import ChatGPT_Hashtag from "../assets/ChatGPT_Hashtag.png";
import ChatGPT_Location from "../assets/ChatGPT_Location.png";
import ChatGPT_Sentiment from "../assets/ChatGPT_sentiment.png";
import s1 from "../assets/socialmedia1.png";
import s2 from "../assets/socialmedia2.png";
import s3 from "../assets/socialmedia3.png";
import s4 from "../assets/socialmedia4.png";
import s5 from "../assets/socialmedia5.png";
import OCI from "../assets/OCI.png";
import powerBI1 from "../assets/PowerBi.png";
import powerBI2 from "../assets/PowerBI2.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
  const [showModal, setShowModal] = useState(false);
  const [currentCardId, setCurrentCardId] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? modalImages[currentCardId].length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === modalImages[currentCardId].length - 1 ? 0 : prevIndex + 1
    );
  };
  const openPhotos = (cardId) => {
    setCurrentCardId(cardId);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const cardData = [
    {
      id: 1,
      title: "Analyzing Tweets related to ChatGPT",
      content: (
        <>
          - This study employs an in-depth analysis of tweets pertaining to
          ChatGPT utilizing the Twitter platform, with a specific emphasis on
          three key aspects: sentiment analysis, hashtag analysis, and location
          analysis.
          <br />
          <br />- The analyses determine sentiment (positive, negative,
          neutral), identify popular hashtags, and reveal global user
          distribution, providing insights into public perception and engagement
          with ChatGPT on Twitter.
        </>
      ),
      borderColor: "#db2751",
    },
    {
      id: 2,
      title: "Analyzing Sports Insights on Social Media Platforms",
      content: (
        <>
          - Utilized APIs from Twitter, Reddit, and YouTube to collect and clean
          large amounts of data on user activity and sentiment regarding sports
          players and events from the 2022 Football and Cricket World Cup.
          <br />
          <br />- Developed a Python-based analysis tool and conducted
          statistical analyses to answer specific research questions related to
          player popularity and abusive content detection.
        </>
      ),
      borderColor: "#e4780c",
    },
    {
      id: 3,
      title: "Cloud Based Shared Game Sessions",
      content: (
        <>
          - Designed and contributed towards a web game application to allow
          users to virtually play Pictionary together.
          <br />
          <br />
          - Collaborated with a team of 5 and utilized NodeJS, Docker, Firebase,
          Google Cloud Platform.
          <br />
          <br />- Containerized the application and hosted it on Google Cloud
          Platform, which allowed it to be executable in any environment.
        </>
      ),
      borderColor: "#87a90a",
    },
    {
      id: 4,
      title: "Real Time Employee Tracker",
      content: (
        <>
          - Designed and launched a real-time tracking system that tracks the
          precise location of employees.
          <br />
          <br />
          - Collaborated in a team of 3 to utilize Java, Firebase, and Android
          Studio for the project.
          <br />
          <br />
          - Delegated tasks to the group and organized the final presentation
          with solutions for university faculty.
          <br />
          <br />- Helped the organization better manage resources and increase
          employee productivity by 14%.
        </>
      ),
      borderColor: "#0fbc91",
    },
    {
      id: 5,
      title: "Cloud cost estimator widget (Oracle)",
      content: (
        <>
          - Built cloud cost-estimator widget for OCI Media Flow Service,
          enabling number of users to estimate costs for media
          streaming/processing projects with 23% increase in cost estimation
          accuracy.
          <br />
          <br />
          - Designed interface for OCI cloud cost-estimator widget using OJET
          and KnockoutJS, resulting in a 46% faster navigation.
          <br />
          <br />
          <a href="https://www.oracle.com/cloud/costestimator.html">Link</a>
          <br />
        </>
      ),
      borderColor: "#0fbc91",
    },
    {
      id: 6,
      title: "Feedback project (Oracle)",
      content: (
        <>
          - Developed a feedback project module, resulting in 54% increase in
          internal feedback for Oracle product features.
          <br />
          <br />
          - Sent and received data between KnockoutJS frontend and APEX backend
          using APIs
          <br />
          <br />
          Contributed to an agile development environment using scrum
          methodologies, completing 3 user stories per sprint, and collaborating
          with 12 team members for successful project delivery.
          <br />
        </>
      ),
      borderColor: "#87a90a",
    },
    {
      id: 7,
      title: "Analyzing Game Sales",
      content: (
        <>
          - Conducted in-depth analysis of a comprehensive video game dataset
          using Power BI.
          <br />
          <br />
          - Analyzed sales performance by genre and tracked global sales trends
          over time.
          <br />
          <br />- Utilized advanced data visualization techniques to present
          insights into market trends, consumer preferences, and competitive
          dynamics within the gaming industry.
          {/* <a href="https://www.oracle.com/cloud/costestimator.html">Link</a> */}
          <br />
        </>
      ),
      borderColor: "#e4780c",
    },
    {
      id: 8,
      title: "Exploring Job Satisfaction and Demographics",
      content: (
        <>
          - Analyzed data collected from a survey to gain insights into the job satisfaction and demographics of individuals working in the data industry.
          <br />
          <br />
          - Utilized PowerBI to generate visualizations from the dataset.
          <br />
          <br />
          - Highlighted the importance of balancing passion and fair compensation for overall job satisfaction.
        </>
      ),
      borderColor: "#db2751",
    },
  ];

  const modalImages = {
    1: [chatgpt, ChatGPT_Hashtag, ChatGPT_Location, ChatGPT_Sentiment],
    2: [s1, s2, s3, s4, s5],
    3: [],
    4: [],
    5: [OCI],
    6: [],
    7: [powerBI1],
    8: [powerBI2],
    // Add more image URLs for each card as needed
  };
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
            {cardData.map((card) => (
              <Col className="p-4" md={3} key={card.id}>
                <Card className={`h-100 card card${card.id}`}>
                  <Card.Body>
                    <Card.Title className="py-2">{card.title}</Card.Title>
                    <Card.Text
                      className="py-4 card-content"
                      style={{ borderTop: `1px solid ${card.borderColor}` }}
                    >
                      {card.content}
                    </Card.Text>
                    <button
                      className="custom-button"
                      onClick={() => openPhotos(card.id)}
                    >
                      Open Photos
                    </button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </FadeInSection>
      </Container>

      <Modal
        show={showModal}
        onHide={handleCloseModal}
        dialogClassName="modal-fullscreen"
        className="custom-modal"
      >
        <Modal.Body>
          {showModal && currentCardId !== null && (
            <div className="image-gallery">
              {modalImages[currentCardId].length > 0 ? (
                <>
                  <FaChevronLeft
                    className="prev-arrow"
                    onClick={handlePrevImage}
                  />
                  <img
                    src={modalImages[currentCardId][currentImageIndex]}
                    alt={`github ${currentImageIndex + 1}`}
                    className="modal-image"
                  />
                  <FaChevronRight
                    className="next-arrow"
                    onClick={handleNextImage}
                  />
                </>
              ) : (
                <p>No images available for this project.</p>
              )}
            </div>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
});

export default Project;
