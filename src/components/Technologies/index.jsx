import React, { Fragment } from "react";
import "./styles.scss";

import JS from "../../assets/js.png";
import HTML from "../../assets/html.png";
import CSS from "../../assets/css.png";
import ReactIcon from "../../assets/react.png";
import Graph from "../../assets/graphql.png";
import Bootstrap from "../../assets/bootstrap.png";
import Github from "../../assets/github.png";
import Sass from "../../assets/sass.png";
import Redux from "../../assets/redux.png";
import Swift from "../../assets/swift.png";

const Technologies = () => {
  const techs = [
    { name: "html 5", icon: HTML },
    { name: "CSS 3", icon: CSS },
    { name: "JavaScript", icon: JS },
    { name: "React & Native", icon: ReactIcon },
    { name: "Redux", icon: Redux },
    { name: "GraphQL", icon: Graph },
    { name: "Bootstrap", icon: Bootstrap },
    { name: "GitHub", icon: Github },
    { name: "Sass", icon: Sass },
    { name: "Swift", icon: Swift },
  ];
  return (
    <Fragment>
      <section id="tech">
        <h2 className="section-title">Technologies</h2>
        <article className="tech-container ">
          {techs.map((tech, index) => {
            return (
              <i className="icoin-container" key={index}>
                <img className="icon" src={tech.icon} alt="html icon" />
                <p className="icon-caption">{tech.name}</p>
              </i>
            );
          })}{" "}
        </article>
      </section>
    </Fragment>
  );
};

export default Technologies;
