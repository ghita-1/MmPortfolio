import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import { ImPointRight } from "react-icons/im";
import Toolstack from "./Toolstack";
import myImg from "../../Assets/GHITA.png";
import Tilt from "react-parallax-tilt";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "0px" }}>
          <Col
            sm={8}
            style={{
              justifyContent: "center",
              paddingTop: "0px",
              paddingBottom: "0px",
              marginTop:"-40px",
            }}
          >
           <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            Hi Everyone, I am <span className="purple">GHITA ATTOUF </span>
            <p className="home-about-body">
            after getting my<b className="purple"> Bac </b> in 2021, i went directly to <b className="purple">the specialized institute of applied technology </b> where i earnd my <b className="purple"> diploma </b> as a <b className="purple"> full stack developer </b> in 2023 during this period i had an end-of-year internship at DXC where i worked on a project to create a dedecated website for database management using laravel .
            then i dedecate this year to improve my communication level in fr and eng at the same time i enrolled in a training at jobintech to develope my skills in the IT sector.
              <br />then i dedecate this year to improve my communication level in fr and eng at the same time i enrolled in a training at jobintech to develope my skills in the IT sector.
              
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Tools. </b>
                
               
              </i>
              <i> Using
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Framework
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js</b>
              </i>
            </p>
            <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
            <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
          </Col>
          <Col
            md={5}
            style={{  paddingBottom: "0px", width:"300px", marginTop:"-90px" }}
            className="about-img"
          >
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

      </Container>
    </Container>
  );
}

export default About;
