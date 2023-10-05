import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently. Please appriciate
          them
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://i.postimg.cc/ncmssKH8/virtua-as.jpg"
              isBlog={false}
              title="Jack - My own SIRI :-)"
              description="This is a virtual assistant that can do many tasks for you like opening websites, playing music, telling jokes, etc."
              ghLink="https://github.com/Naveen297"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://i.postimg.cc/QN9Jjnyh/mm.jpg"
              isBlog={false}
              title=" MUJ Department Website Automation"
              description=" This Is the automation project that can automate the the
              record(achievements) gathering process of the students,
              teachers and the staff of the department."
              ghLink="https://github.com/Naveen297"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://i.postimg.cc/4yq8NDzh/Screenshot-2022-12-29-at-5-51-33-PM.png"
              isBlog={false}
              title="DAK/Letter Management System"
              description=" This is the automation project that will automate the the
              letter management process for COLLECTRATE (D.M) jaipur and
              the other offices of the district."
              ghLink="https://github.com/Naveen297"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://i.postimg.cc/VNgDbrqw/gggg.jpg"
              isBlog={false}
              title="HForce GYM"
              description=" This is the website for the gym management system that will
              automate the the gym management process for the gym."
              ghLink="https://github.com/Naveen297/H-force-GYM-Website.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://i.postimg.cc/hPRy6BPH/agfwqer.jpg"
              isBlog={false}
              title=" Employee Management System"
              description=" This System is made for the management of the employees of
              the company. This system is made for the automation of the
              employee management process."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
