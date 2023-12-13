import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ecommerce from "../../Assets/Projects/ecommerce.gif";
import UXDesign from "../../Assets/Projects/UXDesign.gif";
import netflix from "../../Assets/Projects/netflix.gif";
import traveling from "../../Assets/Projects/traveling.gif";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={traveling}
              isBlog={false}
              title="Traveling Kuy"
              description="I participated in a project that aims to provide strategic recommendations in determining travel using web travel to make it easier for customers to make travel and tour plans."
              tech= 'HTML, Software Engineering, Javascript, NodeJS, (Kampus Merdeka x RevoU Capstone Project'
              ghLink="https://github.com/"
              demoLink="https://drive.google.com/file/d/1fNelquThyLDxMGFMR13y30TXf4fG7Hr3/preview"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={UXDesign}
              isBlog={false}
              title="UX-Designer: Cake Shop"
              description="I participate in a project that aims to provide strategic recommendations in application design to increase cake shop sales and make it easier for customers to purchase cakes in the application."
              tech= "Research, Storyboard, Google Slide, Figma, (Dicoding Assignment)"
              ghLink="https://github.com/"
              demoLink="https://docs.google.com/presentation/d/1_w0Yz8IwYJIG-jkkVgRzrT150nlwxJgIHT4L4ufySJo/embed?start=false&loop=false&delayms=3000"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="Netflix Data Analysis"
              description="I conducted customer segmentation analysis for a very popular movie and TV show streaming platform. The data used has been pre-processed in Google BigQuery and Google Collaboratory. The goal is to gain insights from data and keep subscriber retention high on the Netflix platform by prioritizing unique and engaging content, taking feedback and preferences into account, and ensuring an unmatched streaming experience."
              tech= "Data Visualization, Looker Studio, BigQuery, SQL, (Kampus Merdeka x RevoU Capstone Project)"
              ghLink="https://github.com"
              demoLink="https://drive.google.com/file/d/1G50GSs1go7jqx1oeBoaGtOo89QHQpAXH/preview"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="EDA with Python: E-Commerce Public"
              description="I perform data analysis for E-Commerce Public, a mock e-commerce company with the goal of gaining valuable insights. The analysis includes calculating monthly inventory growth, identifying sales of the largest and lowest product categories, and creating retention groups based on average best customers."
              tech= 'Python, EDA, Analysis, (Dicoding Assignment)'
              ghLink="https://github.com/salimahdiyyah/Dashboard-Data-Science/"
              demoLink="https://docs.google.com/presentation/d/1A7uWuaigarHFBZVSoMW1twHsGZSL3_Pz/embed?start=false&loop=false&delayms=3000"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
