import React, { Fragment, useState, useEffect } from "react";
import Header from "../../components/Header";
import Nav from "../../components/Navigation";
import Footer from "../../components/Footer";
import "./styles.scss";
const Home = () => {
  useEffect(() => {}, []);
  return (
    <Fragment>
      <div className="">
        <Header />
        <Nav />
        <Footer />
      </div>
    </Fragment>
  );
};

export default Home;
