import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import pets from "../Assets/pet.png"

const About = () => {
  return (
    <Container className="mt-4">
      {/* About Section */}
      <Row className="text-center">
        <Col>
          <h1>About Our Pet Adoption Center</h1>
          <p className="lead">
            We are dedicated to helping abandoned and rescued animals find their forever homes.
          </p>
        </Col>
      </Row>

      {/* Image and Mission Statement */}
      <Row className="mt-4 align-items-center">
        <Col md={6}>
          <img
            src={pets}
            alt="About Pet Adoption"
            className="img-fluid rounded"
            style={{ width: "100%", maxHeight: "300px", objectFit: "cover" }}
          />
        </Col>
        <Col md={6}>
          <Card className="shadow-sm p-3">
            <Card.Body>
              <Card.Title>Our Mission</Card.Title>
              <Card.Text>
                Our mission is to rescue, rehabilitate, and rehome animals in need. We work with 
                shelters, volunteers, and communities to create a world where every pet has a home.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Why Choose Us? */}
      <Row className="mt-5">
        <Col>
          <h3>Why Choose Us?</h3>
          <ul>
            <li>We ensure pets are healthy and well-cared for before adoption.</li>
            <li>Our process is easy and supportive for new pet owners.</li>
            <li>We provide post-adoption guidance and resources.</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default About;


