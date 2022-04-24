import classes from "./AboutContainer.module.css";

import santa from "../../assets/santa.jpg";

import SkillsContainer from "./SkillsContainer";
import SocialLinksContainer from "./SocialLinksContainer";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const AboutContainer = () => {
  useEffect(() => {
    gsap.fromTo(
      "#profile-photo",
      { x: -600, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: "#about-section",
        },
      }
    );
    gsap.fromTo(
      "#skills",
      { x: 500, opacity: 0 },
      {
        x: 0,
        duration: 0.8,
        opacity: 1,
        scrollTrigger: {
          trigger: "#about-section",
        },
      }
    );
  }, []);

  return (
    <div className={classes.about_container}>
      <div id="profile-photo" className={classes.about_info}>
        <img className={classes.about_photo} src={santa} alt="David" />
        <h2 className={classes.info_title}>Who am I?</h2>
        <br />
        <p>
          I am an Aircraft Engineer and Frontend Web Developer with a strong
          passion for building things.
        </p>
        <br />
        <p>
          Lately I have been diving into{" "}
          <a href="https://reactjs.org" className={classes.react_link}>
            React
          </a>{" "}
          and discovering the infinite possibilities that this amazing library
          offers.
        </p>
        <SocialLinksContainer />
      </div>
      <div id="skills" className={classes.about_skills}>
        <h2 className={classes.skills_title}>My Skills</h2>
        <SkillsContainer />
      </div>
    </div>
  );
};

export default AboutContainer;
