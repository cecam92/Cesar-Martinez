import React, { Fragment } from "react";
import Kami from "../../assets/Kami.png";
import "./styles.scss";

import linkedin from "../../assets/linkedin.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";
import github from "../../assets/github.png";

const AboutMe = () => {
  return (
    <Fragment>
      <section id="about" className="section dark">
        <h2 className="section-title ">Who Am I?</h2>
        <figure className="imageBio">
          <img src={Kami} alt="that is me" />
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
        <div className="icon-container">
          <a
            href="http://linkedin.com/in/cecam92"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i>
              <img className="icon" src={linkedin} alt="GitHub icon" />
              <h6 className="icon-caption">LinkedIn</h6>
            </i>
          </a>
          <a
            href="https://instagram.com/cecam92"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i>
              <img className="icon" src={instagram} alt="instagram icon" />
              <h6 className="icon-caption ">Instagram</h6>
            </i>
          </a>
          <a
            href="http://twitter.com/cecam92"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i>
              <img className="icon" src={twitter} alt="Twitter icon" />
              <h6 className="icon-caption">Twitter</h6>
            </i>
          </a>
          <a
            href="http://github.com/cecam92"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i>
              <img className="icon" src={github} alt="GitHub icon" />
              <h6 className="icon-caption">GitHub</h6>
            </i>
          </a>
        </div>
      </section>
    </Fragment>
  );
};

export default AboutMe;
