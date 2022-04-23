import classes from "./AboutContainer.module.css";

import santa from "../../assets/santa.jpg";

import SkillsContainer from "./SkillsContainer";
import SocialLinksContainer from "../UI/SocialLinksContainer";

const AboutContainer = () => {
  return (
    <div className={classes.about_container}>
      <div className={classes.about_info}>
        <img className={classes.about_photo} src={santa} alt="David" />
        <h2 className={classes.info_title}>About me</h2>
        <br />
        <p>
          I am an Aircraft Engineer and Frontend Web Developer with a strong
          passion for building things.
        </p>
        <br />
        <p>
          Lately I have been diving into React and discovering the infinite
          possibilities that this amazing library offers.
        </p>
        <SocialLinksContainer />
      </div>
      <div className={classes.about_skills}>
        <h2 className={classes.skills_title}>My Skills</h2>
        <SkillsContainer />
      </div>
    </div>
  );
};

export default AboutContainer;
