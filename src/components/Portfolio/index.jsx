import React, { Fragment } from "react";
import Button from "react-bootstrap/button";
import "./styles.scss";

import JS from "../../assets/js.png";
import HTML from "../../assets/html.png";
import CSS from "../../assets/css.png";
import ReactIcon from "../../assets/react.png";
import Rick from "../../assets/pickle.png";
import graph from "../../assets/graphql.png";
import bootstrap from "../../assets/bootstrap.png";

const Porfolio = () => {
  const projects = [
    {
      title: "Layout Galeria",
      description: ` I am a Network Engineer and highly skilled Frontend Developer on
      Single Page Applications with React JS. I have knowledge and good
      practices of Hooks, Redux, Router, SASS, RESTful and GraphQL APIs.
      I'm a problem solver, strong team player, quick learner and
      adaptable person, who delivers reliable results with excellent
      project management skills.`,
      technologies: [{ HTML }, { CSS }, { ReactIcon }, { JS }, { bootstrap }],
      picture: { Rick },
    },
    {
      title: "Rick and Morty",
      description: ` I am a Network Engineer and highly skilled Frontend Developer on
      Single Page Applications with React JS. I have knowledge and good
      practices of Hooks, Redux, Router, SASS, RESTful and GraphQL APIs.
      I'm a problem solver, strong team player, quick learner and
      adaptable person, who delivers reliable results with excellent
      project management skills.`,
      technologies: [{ HTML }, { CSS }, { ReactIcon }, { JS }, { graph }],
      picture: { Rick },
    },
  ];

  return (
    <Fragment>
      {projects.map((project) => {})}
      <section id="portfolio" className=" light">
        <h2 className="section-title">Portfolio</h2>
        <div className="text_container">
          <p>Portfolio's description</p>
        </div>
        <figure className="portfolio-image">
          <img src={Rick} alt="Portfolio" />
        </figure>
        <div className="text_container">
          <p>
            I am a Network Engineer and highly skilled Frontend Developer on
            Single Page Applications with React JS. I have knowledge and good
            practices of Hooks, Redux, Router, SASS, RESTful and GraphQL APIs.
            I'm a problem solver, strong team player, quick learner and
            adaptable person, who delivers reliable results with excellent
            project management skills.
          </p>
        </div>
        <div className="section-buttons">
          <div className="buttons-container">
            <Button className="btn btn-primary">
              <a
                href="https://cecam92.github.io/RickandMorty/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </a>
            </Button>
            <Button className="btn btn-primary">
              <a
                href="https://github.com/cecam92/RickandMorty"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </Button>
          </div>
        </div>
        <div className="icon-container">
          <i>
            <img className="icon" src={HTML} alt="html icon" />
            <h6 className="icon-caption">html</h6>
          </i>
          <i>
            <img className="icon" src={CSS} alt="css icon" />
            <h6 className="icon-caption">CSS</h6>
          </i>
          <i>
            <img className="icon" src={JS} alt="Javascript icon" />
            <h6 className="icon-caption">JS</h6>
          </i>
          <i>
            <img className="icon" src={ReactIcon} alt="React icon" />
            <h6 className="icon-caption">React</h6>
          </i>

          <i>
            <img className="icon" src={graph} alt="GraphQL icon" />
            <h6 className="icon-caption">GraphQL</h6>
          </i>
        </div>
      </section>
    </Fragment>
  );
};

export default Porfolio;
