import React from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCard";

import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';
import colorSharp2 from '../assets/img/color-sharp2.png';

export default function Projects() {
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
          </Col>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            corporis debitis pariatur amet iste distinctio labore alias autem,
            aliquam recusandae, consequuntur, eius reprehenderit cupiditate?
          </p>
          <Tab.Container id="projects-tabs" defaultActiveKey="first">
            <Nav
              variant="pills"
              className="nav-pills mb-5 justify-content-center"
            >
              <Nav.Item>
                <Nav.Link eventKey="first">Tab One</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Tab Two</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Tab Three</Nav.Link>
              </Nav.Item>
            </Nav>

            <Tab.Content>
              <Tab.Pane eventKey="first">
                <Row>
                  {projects.map((pj, i) => {
                    return <ProjectCard key={i} {...pj} />;
                  })}
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="second">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla a debitis maiores.</Tab.Pane>
              <Tab.Pane eventKey="third">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla a debitis maiores.</Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="color sharp" />
    </section>
  );
}
