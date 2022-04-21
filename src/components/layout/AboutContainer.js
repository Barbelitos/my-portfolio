import classes from "./AboutContainer.module.css";

import photo from "../../assets/vuossari.png";

const AboutContainer = () => {
  return (
    <div className={classes.about_container}>
      <div className={classes.about_info}>
        <img className={classes.about_photo} src={photo} alt="David" />
        <h2 className={classes.info_title}>Who am I?</h2>
      </div>
      <div className={classes.about_skills}>
        <h2 className={classes.skills_title}>My Skills</h2>
      </div>
    </div>
  );
};

export default AboutContainer;
