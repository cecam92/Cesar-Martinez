import React from "react";
import AboutMe from "../AboutMe";
import Portfolio from "../Portfolio";
import "./styles.scss";

const Main = () => {
  return (
    <main>
      <AboutMe />
      <Portfolio />
      <AboutMe />
      <AboutMe />
    </main>
  );
};

export default Main;
