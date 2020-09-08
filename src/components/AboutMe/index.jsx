import React, { Fragment } from "react";
import Kami from "../../assets/Kami.png";
import "./styles.scss";
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
      </section>
    </Fragment>
  );
};

export default AboutMe;
