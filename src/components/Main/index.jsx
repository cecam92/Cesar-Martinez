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
          paragraph: `  I realized an infinite scroll single page application on React JS. 
          The SPA fetches data from the RESTful API and manages the requested data with Redux. 
          Using React Router allows me to redirect the user to any character by typing its ID, and from the GraphQL API I 
          request the information of the selected character.`,
        },
      ],

      techs: [
        { name: "React", icon: ReactIcon },
        { name: "GraphQL", icon: graph },
        { name: "REST", icon: Rest },
        { name: "Redux", icon: Redux },
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
          paragraph: `Galeria is a non-functional SPA. The intention of this project is to create an eCommerce mock-up with a CSS framework 
          such as Bootstrap, and a variety of React Components.`,
        },
        {
          paragraph: `This mock-up has the most common components in a website, like forms, breadcrumbs, carousel, 
          portals and a dropdown navigation bar. The framework of the online store is ready-made for customisation and the 
          clean-cut style of the site simplifies the user’s experience. `,
        },
      ],
      techs: [
        { name: "Html", icon: HTML },
        { name: "CSS", icon: CSS },
        { name: "JavaScript", icon: JS },
        { name: "React", icon: ReactIcon },
        { name: "Bootstrap", icon: bootstrap },
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
          paragraph: `CryptoTracker is an IOS and Android mobile application developed in React Native.
          This app allows the user to follow the crypto coins' price in the market.`,
        },
        {
          paragraph: `CryptoTracker shows the behaivor of the coins in the last hour, it's price in USD and thier value with other coins,
            this data is gathering from open source RESTful API.
          `,
        },
      ],
      techs: [
        { name: "React Native", icon: ReactIcon },
        { name: "REST", icon: Rest },
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
