import React, { Fragment } from "react";
import Kami from "../../assets/Kami.png";
import "./styles.scss";

import linkedin from "../../assets/linkedin.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";
import github from "../../assets/github.png";

const AboutMe = () => {
  const intro = [
    {
      paragraph: `I am Cesar Martinez, I was born and raised in Cali, Colombia. 
  Where I did a bachelor of Engineering, Computer and Network Engineering. 
  In 2016, I moved to Perth, Australia, looking fordward to an enriching overseas experience while I studied English. 
  After the English course, I decided to  do a Diploma of Leadership and Management to enhance my profesional skills. 
  Since 2018, I am living in Melbourne where I accomplished an Advance Diploma of Information Technology.
  `,
    },
    {
      paragraph: `As a curious person that enjoy learning new technologies and as complement of my engineering degree. 
    I started to sharp my coding skills, beginning with Swift for IOS applications, 
    followed by React JS for web development and React Native for mobile development.
    `,
    },
  ];

  const socials = [
    {
      name: "LinkedIn",
      icon: linkedin,
      url: "http://linkedin.com/in/cecam92",
    },
    {
      name: "Instagram",
      icon: instagram,
      url: "https://instagram.com/cecam92",
    },
    {
      name: "Twitter",
      icon: twitter,
      url: "http://twitter.com/cecam92",
    },
    {
      name: "GitHub",
      icon: github,
      url: "http://github.com/cecam92",
    },
  ];
  return (
    <Fragment>
      <section id="about" className=" about dark">
        <h2 className="section-title ">Who Am I?</h2>
        <figure className="imageBio">
          <img src={Kami} alt="that is me" />
        </figure>
        <div className="text_container">
          {intro.map((paragraph, index) => {
            return (
              <p key={index}>
                {paragraph.paragraph}
                <br />
                <br />
              </p>
            );
          })}
        </div>
        <div className="icon-container">
          {socials.map((social, index) => {
            return (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i>
                  <img
                    className="icon"
                    src={social.icon}
                    alt={`${social.name} icon`}
                  />
                  <h6 className="">{social.name} </h6>
                </i>
              </a>
            );
          })}
        </div>
      </section>
    </Fragment>
  );
};

export default AboutMe;
