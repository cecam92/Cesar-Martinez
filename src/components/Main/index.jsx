import React from "react";
import AboutMe from "../AboutMe";
import Portfolio from "../Portfolio";
import "./styles.scss";
import JS from "../../assets/js.png";
import HTML from "../../assets/html.png";
import Redux from "../../assets/redux.png";
import CSS from "../../assets/css.png";
import ReactIcon from "../../assets/react.png";
import Sass from "../../assets/sass.png";
import Rest from "../../assets/rest.png";
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
      description: [
        {
          paragraph: ` I decided to create this website where you can find every character from the TV show Rick and Morty.
          All the data presented in this project is from the open source Rick and Morty API.`,
        },
        {
          paragraph: `   I realized an infinite scroll single page application on React Js. Fetching data from the RESTful API and 
      managing the requested data with Redux. Using React Router allows me to redirect the user to any character by tipping its Id
      and from the GraphQL API I request the information of the selected character.`,
        },
      ],

      techs: [
        { name: "React", icon: ReactIcon },
        { name: "graphQL", icon: graph },
        { name: "Rest", icon: Rest },
        { name: "redux", icon: Redux },
        { name: "Sass", icon: Sass },
      ],
      picture: Rick,
      url: "https://cecam92.github.io/RickandMorty/",
      repository: "https://github.com/cecam92/RickandMorty",
    },
    {
      title: "Layout Galeria",
      description: [
        {
          paragraph: ` I decided to create this site where you can find every character 
        of this television show with some of their details.`,
        },
        {
          paragraph: `   I realized an infinite scroll single page application on React Js fetching data from the RESTful API and 
      managing the requested data with Redux. I also used React Router which redirect the user to any character by its id 
      and with GraphQL I request the correspondent data. e.g. (https://cecam92.github.io/RickandMorty/#/characters/265)`,
        },
      ],
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
