import AboutContainer from "./AboutContainer";

import classes from "./About.module.css";

const About = () => {
  return (
    <section id="about-section" className={classes.about}>
      <h1 className={classes.about_title}>About</h1>
      <AboutContainer />
    </section>
  );
};

export default About;
