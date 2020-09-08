import React, { Fragment } from "react";
import "./styles.scss";
import Kami from "../../assets/Kami.png";
import JS from "../../assets/js.png";
import HTML from "../../assets/html.png";
import CSS from "../../assets/CSS.png";
import ReactIcon from "../../assets/react.png";
import Bootstrap from "../../assets/bootstrap.png";
import Rick from "../../assets/pickle.png";
import Button from "react-bootstrap/button";

const Porfolio = () => {
  return (
    <Fragment>
      <section className="portfolio">
        <h2 className="section_title">Portfolio</h2>
        <p className="portfolio_intro">
          I am a Network Engineer and highly skilled Frontend Developer on
          Single Page Applications with React JS. I have knowledge and good
          practices of Hooks, Redux, Router, SASS, RESTful and GraphQL APIs. I'm
          a problem solver, strong team player, quick learner and adaptable
          person, who delivers reliable results with excellent project
          management skills.
        </p>
        <figure className="portfolio_image">
          <img src={Rick} alt="Portfolio" />
        </figure>
        <div className="portfolio_descripction">
          <p>
            I am a Network Engineer and highly skilled Frontend Developer on
            Single Page Applications with React JS. I have knowledge and good
            practices of Hooks, Redux, Router, SASS, RESTful and GraphQL APIs.
            I'm a problem solver, strong team player, quick learner and
            adaptable person, who delivers reliable results with excellent
            project management skills.
          </p>
        </div>
        <div className="portfolio_buttons">
          <div className="buttons-container">
            <Button className="btn btn-primary">GitHub</Button>
            <Button className="btn btn-primary">Demo</Button>
          </div>
        </div>
        <div className="portfolio_tech">
          <i>
            <img className="techIcon" src={HTML} />
          </i>
          <i>
            <img className="techIcon" src={CSS} />
          </i>
          <i>
            <img className="techIcon" src={JS} />
          </i>
          <i>
            <img className="techIcon" src={ReactIcon} />
          </i>
          <i>
            <img className="techIcon" src={Bootstrap} />
          </i>
        </div>
      </section>
    </Fragment>
  );
};

export default Porfolio;
