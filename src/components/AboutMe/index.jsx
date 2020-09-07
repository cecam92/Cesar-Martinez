import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Kami from "../../assets/Kami.png";
import "./styles.scss";
const AboutMe = () => {
  return (
    <Fragment>
      <section className="about">
        <h2 className="about_title">Who Am I?</h2>
        <figure className="imageBio">
          <img src={Kami} alt="my picture" />
        </figure>
        <div className="about_description">
          <p>
            I am a Network Engineer and highly skilled Frontend Developer on
            Single Page Applications with React JS. I have knowledge and good
            practices of Hooks, Redux, Router, SASS, RESTful and GraphQL APIs.
            I'm a problem solver, strong team player, quick learner and
            adaptable person, who delivers reliable results with excellent
            project management skills.
          </p>

          <Link to="/about" className="findMore">
            Find more
          </Link>
        </div>
      </section>
    </Fragment>
  );
};

export default AboutMe;
