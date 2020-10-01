import React, { Fragment } from "react";
import Button from "react-bootstrap/button";
import linkedin from "../../assets/linkedin.png";
import CV from "../../assets/cv.pdf";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";
import github from "../../assets/github.png";
import Cesar from "../../assets/me.png";

const AboutMe = () => {
  const intro = [
    {
      paragraph: `I am Cesar Martinez, I was born and raised in Cali, Colombia. 
      There I completed a Bachelor of Engineering (Computer and Network Engineering). 
      In 2016, I moved to Perth, Australia, looking forward to an enriching overseas experience and studying English. 
      After the English course, I undertook a Diploma of Leadership and Management to enhance my professional skills. 
      Since 2018, I have been living in Melbourne where I accomplished an Advanced Diploma of Information Technology.
  `,
    },
    {
      paragraph: `As a curious person, I enjoy learning new technologies which complement my engineering degree. 
      I have sharpened my coding skills, beginning with Swift for IOS applications, followed by React JS for web development 
      and React Native for mobile development. I am always on the lookout for cutting edge platforms that streamline the user experience. 
    
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
          <img src={Cesar} alt="that is me" />
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
          <div className="section-buttons">
            <Button className="btn btn-primary ">
              <a href={CV} target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </Button>
          </div>
        </div>

        <div className="networks-container">
          <h3>Reach me out </h3>
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
                    {/* <h6 className="">{social.name} </h6> */}
                  </i>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default AboutMe;
