import AboutContainer from "./AboutContainer";
import SectionTitle from "../Other components/SectionTitle";
import classes from "./About.module.css";

const About = () => {
  return (
    <section id="about-section" className={classes.about}>
      <SectionTitle title="About" id="about" />
      <AboutContainer />
    </section>
  );
};

export default About;
