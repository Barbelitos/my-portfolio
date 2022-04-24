import AboutContainer from "./AboutContainer";

import classes from "./About.module.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    gsap.from("#testAbout", {
      y: 500,
      duration: 0.8,
      delay: 0.2,
      scrollTrigger: { trigger: "#about-section" },
    });
  }, []);

  return (
    <section id="about-section" className={classes.about}>
      <h1 id="testAbout" className={classes.about_title}>
        About
      </h1>
      <AboutContainer />
    </section>
  );
};

export default About;
