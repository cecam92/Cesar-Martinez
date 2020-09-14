import React from "react";
import AboutMe from "../AboutMe";
import Portfolio from "../Portfolio";
import "./styles.scss";
import JS from "../../assets/js.png";
import HTML from "../../assets/html.png";
import CSS from "../../assets/css.png";
import ReactIcon from "../../assets/react.png";
import Rick from "../../assets/pickle.png";
import graph from "../../assets/graphql.png";
import bootstrap from "../../assets/bootstrap.png";
import galeria from "../../assets/galeria.png";
import Technologies from "../Technologies";
import Footer from "../Footer";

const Main = () => {
  const projects = [
    {
      title: "Rick and Morty",
      description: ` I am a Network Engineer and highly skilled Frontend Developer on
      Single Page Applications with React JS. I have knowledge and good
      practices of Hooks, Redux, Router, SASS, RESTful and GraphQL APIs.
      I'm a problem solver, strong team player, quick learner and
      adaptable person, who delivers reliable results with excellent
      project management skills.`,
      techs: [
        { name: "html", icon: HTML },
        { name: "CSS", icon: CSS },
        { name: "JS", icon: JS },
        { name: "React", icon: ReactIcon },
        { name: "graphQL", icon: graph },
      ],
      picture: Rick,
      url: "https://cecam92.github.io/RickandMorty/",
      repository: "https://github.com/cecam92/RickandMorty",
    },
    {
      title: "Layout Galeria",
      description: ` I am a Network Engineer and highly skilled Frontend Developer on
      Single Page Applications with React JS. I have knowledge and good
      practices of Hooks, Redux, Router, SASS, RESTful and GraphQL APIs.
      I'm a problem solver, strong team player, quick learner and
      adaptable person, who delivers reliable results with excellent
      project management skills.`,
      techs: [
        { name: "html", icon: HTML },
        { name: "CSS", icon: CSS },
        { name: "JS", icon: JS },
        { name: "React", icon: ReactIcon },
        { name: "bootstrap", icon: bootstrap },
      ],
      picture: galeria,
      url: "https://cecam92.github.io/Galeria/",
      repository: "https://github.com/cecam92/Galeria",
    },
  ];
  return (
    <main>
      <AboutMe />
      <Portfolio projects={projects} />
      <Technologies />
      <Footer />
    </main>
  );
};

export default Main;
