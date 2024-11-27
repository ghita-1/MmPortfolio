import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

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
              
              isBlog={false}
              title="Sign language"
              description="Create a cutting-edge sign language translation app using React for a smooth, interactive user experience and JSON to store and manage gesture data and translations."
              // ghLink="https://github.com/ghita-1/Survey_App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              
              isBlog={false}
              title="Survey"
              description="Create an interactive platform: The main objective is to develop a web application where users can interact with surveys in a dynamic way."
              ghLink="https://github.com/ghita-1/Survey_App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="OpenAI UIR"
              description="Develop a ChatGPT UIR application with (.NET core, ReactJs, Tailwind, SQL server, Azure OpenAi)"
              ghLink="https://github.com/ghita-1/OpenAI-UIR"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Portfolio"
              description="Create a portfolio website using HTML, Css , JavaScript and ReactJs. It saves as a platform to present myself, share my projec, and provide information about my training and internship "
              ghLink="https://github.com/ghita-1/MyPortfolio/tree/main"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="School management system"
              description="work in a team in a back-office department, using .NET and React, where everyone has their own tasks."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
