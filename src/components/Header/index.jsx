import React, { Fragment } from "react";
import "./styles.scss";

const Header = () => {
  return (
    <Fragment>
      <header id="home" className="header">
        <h1 className="scroll-sizing">Cesar Martinez</h1>
        <h2 className="scroll-sizing" id="profession">
          Network Engineer | Front End Developer
        </h2>
      </header>
    </Fragment>
  );
};

export default Header;
