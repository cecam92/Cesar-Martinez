import React, { Fragment, useState, useEffect } from "react";
import Button from "react-bootstrap/button";

const Porfolio = (props) => {
  const { projects } = props;

  const intro = `Here you can find some of my projects as a frontend developer. I have developed cross-platform  
  Single Pages Aplication (SPA), using current techonlogies like CSS preprocessors, CSS frameworks, Hooks, 
  Routering and version control that you can check for each project.`;
  const [showLarge, setShowLarge] = useState(false);

  function getWid() {
    window.innerWidth >= 1000 ? setShowLarge(true) : setShowLarge(false);
  }
  useEffect(() => {
    getWid();
    window.addEventListener("resize", getWid);

    return () => {
      window.removeEventListener("resize", getWid);
    };
  });
  return (
    <Fragment>
      <section className="projects" id="portfolio">
        <h2 className="section-title">Portfolio</h2>
        <div className="text_container ">
          <p>
            {intro}
            <br />
            <br />
          </p>
        </div>
        {projects.map((project, index) => {
          return (
            <article key={index} className="project">
              <h2 className="project-title">{project.title}</h2>

              {showLarge && (
                <figure className="portfolio-image-large">
                  {project.pictureLg ? (
                    <img src={project.pictureLg} alt="Portfolio" />
                  ) : (
                    <img src={project.pictureSm} alt="Portfolio" />
                  )}
                </figure>
              )}
              {!showLarge && (
                <figure className="portfolio-image-small">
                  <img src={project.pictureSm} alt="Portfolio" />
                </figure>
              )}

              <div className="text_container project-description">
                {project.description.map((info, index) => {
                  return (
                    <p key={index}>
                      {info.paragraph}
                      <br />
                      <br />
                    </p>
                  );
                })}
              </div>
              <div className="section-buttons">
                <div className="buttons-container">
                  {project.url && (
                    <Button className="btn btn-primary">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Demo
                      </a>
                    </Button>
                  )}
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
                      <h6>{tech.name}</h6>
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
