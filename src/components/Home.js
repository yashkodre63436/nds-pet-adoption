import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Dog from "../Assets/dog1.jpg";

const Home = () => {
  return (
    <Container className="mt-4">
      {/* Hero Section */}
      <Row className="text-center">
        <Col>
          <img
            src={Dog}
            alt="Pet Adoption"
            className="img-fluid rounded"
            style={{ maxHeight: "300px", width: "100%", objectFit: "cover" }}
          />
          <h1 className="mt-3">Welcome to Pet Adoption Center</h1>
          <p className="lead">
            Find your perfect companion and give them a loving home.
          </p>
          <Button variant="primary" size="lg">Adopt Now</Button>
        </Col>
      </Row>

      {/* Featured Pets */}
      <Row className="mt-5">
        <Col md={6} lg={4}>
          <Card className="shadow-sm">
            <Card.Img variant="top" src="/assets/dog.jpg" alt="Dog" />
            <Card.Body>
              <Card.Title>Adopt a Dog</Card.Title>
              <Card.Text>Dogs are loyal and make great companions.</Card.Text>
              <Button variant="success">View More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={4}>
          <Card className="shadow-sm">
            <Card.Img variant="top" src="/assets/cat.jpg" alt="Cat" />
            <Card.Body>
              <Card.Title>Adopt a Cat</Card.Title>
              <Card.Text>Cats are independent yet affectionate pets.</Card.Text>
              <Button variant="warning">View More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Benefits of Adoption */}
      <Row className="mt-5">
        <Col md={6}>
          <h3>Why Adopt?</h3>
          <ul>
            <li>Save a life and provide a loving home</li>
            <li>Reduce pet homelessness</li>
            <li>Enjoy unconditional love and companionship</li>
          </ul>
        </Col>
        <Col md={6}>
          <h3>How It Works</h3>
          <ol>
            <li>Browse available pets</li>
            <li>Apply for adoption</li>
            <li>Meet your new furry friend</li>
          </ol>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;