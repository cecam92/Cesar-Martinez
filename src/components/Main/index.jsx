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
import RickLaptop from "../../assets/RickLaptop.png";

import graph from "../../assets/graphql.png";
import bootstrap from "../../assets/bootstrap.png";
import galeria from "../../assets/galeria.png";
import GaleriaLg from "../../assets/galeriaLg.png";
import Crypto from "../../assets/crypto.png";

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
      pictureSm: Rick,
      pictureLg: RickLaptop,
      url: "https://cecam92.github.io/RickandMorty/",
      repository: "https://github.com/cecam92/RickandMorty",
    },
    {
      title: "Galeria",
      description: [
        {
          paragraph: `Galeria is a non-funtional SPA, The intencion of this proyect is the creation of a eCommerce mockup with a CSS framework like Bootstrap,
          and variety of React Components.`,
        },
        {
          paragraph: `In this mockup has the most common components in a website like, forms, breadcrumbs, carousel, 
          portals and dropdown navigation bar.`,
        },
      ],
      techs: [
        { name: "html", icon: HTML },
        { name: "CSS", icon: CSS },
        { name: "JavaScript", icon: JS },
        { name: "React", icon: ReactIcon },
        { name: "bootstrap", icon: bootstrap },
      ],
      pictureSm: galeria,
      pictureLg: GaleriaLg,
      url: "https://cecam92.github.io/Galeria/",
      repository: "https://github.com/cecam92/Galeria",
    },
    {
      title: "CryptoTracker",
      description: [
        {
          paragraph: `CryptoTracker.`,
        },
        {
          paragraph: `In this mockup has the most common components in a website like, forms, breadcrumbs, carousel, 
          portals and dropdown navigation bar.`,
        },
      ],
      techs: [
        { name: "React Native", icon: ReactIcon },
        { name: "CSS", icon: CSS },
        { name: "JavaScript", icon: JS },
      ],
      pictureSm: Crypto,
      repository: "https://github.com/cecam92/CryptoTracker",
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
