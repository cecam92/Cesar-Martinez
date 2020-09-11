import React, { Fragment } from "react";
import JS from "../../assets/js.png";
import HTML from "../../assets/html.png";
import CSS from "../../assets/css.png";
import ReactIcon from "../../assets/react.png";
import Rick from "../../assets/pickle.png";
import graph from "../../assets/graphql.png";
import bootstrap from "../../assets/bootstrap.png";
import galeria from "../../assets/galeria.png";

const Technologies = () => {
  const techs = [{ name: "html", icon: HTML }];
  return (
    <Fragment>
      <section id="tech">
        <h2 className="title-section">Technologies</h2>
        {techs.map((tech, index) => {
          return (
            <i key={index}>
              <img className="icon" src={tech.icon} alt="html icon" />
              <h6 className="icon-caption">{tech.name}</h6>
            </i>
          );
        })}
      </section>
    </Fragment>
  );
};

export default Technologies;
