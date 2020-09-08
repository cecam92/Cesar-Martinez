import React, { Fragment } from "react";
import Button from "react-bootstrap/button";
import "./styles.scss";

const Porfolio = (props) => {
  const { projects } = props;

  return (
    <Fragment>
      <section className="projects ligth" id="portfolio">
        <h2 className="section-title">Portfolio</h2>
        <div className="text_container">
          <p>Portfolio's description</p>
        </div>
        {projects.map((project, index) => {
          return (
            <article className="projects " key={index}>
              <h2 className="project-title">{project.title}</h2>
              <figure className="portfolio-image">
                <img src={project.picture} alt="Portfolio" />
              </figure>
              <div className="text_container">
                <p>
                  I am a Network Engineer and highly skilled Frontend Developer
                  on Single Page Applications with React JS. I have knowledge
                  and good practices of Hooks, Redux, Router, SASS, RESTful and
                  GraphQL APIs. I'm a problem solver, strong team player, quick
                  learner and adaptable person, who delivers reliable results
                  with excellent project management skills.
                </p>
              </div>
              <div className="section-buttons">
                <div className="buttons-container">
                  <Button className="btn btn-primary">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Demo
                    </a>
                  </Button>
                  <Button className="btn btn-primary">
                    <a
                      href={project.repository}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github
                    </a>
                  </Button>
                </div>
              </div>
              <div className="icon-container">
                {project.techs.map((tech, index) => {
                  return (
                    <i key={index}>
                      <img className="icon" src={tech.icon} alt="html icon" />
                      <h6 className="icon-caption">{tech.name}</h6>
                    </i>
                  );
                })}
              </div>
            </article>
          );
        })}
      </section>
    </Fragment>
  );
};

export default Porfolio;
