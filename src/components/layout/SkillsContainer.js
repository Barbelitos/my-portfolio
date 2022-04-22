import html from "../../assets/html.svg";
import css from "../../assets/css.svg";
import javascript from "../../assets/javascript.svg";
import nodejs from "../../assets/nodejs.svg";
import react from "../../assets/react.svg";
import material from "../../assets/materialui.svg";

import classes from "./SkillsContainer.module.css";

const SkillsContainer = () => {
  return (
    <div className={classes.skills_container}>
      <div>
        <img src={html} alt="html" />
        <h3>HTML</h3>
      </div>
      <div>
        <img src={css} alt="css" />
        <h3>CSS</h3>
      </div>
      <div>
        <img src={javascript} alt="javascript" />
        <h3>JavaScript</h3>
      </div>
      <div>
        <img src={nodejs} alt="node js" />
        <h3>Node JS</h3>
      </div>
      <div>
        <img src={react} alt="react" />
        <h3>React</h3>
      </div>
      <div>
        <img src={material} alt="material ui" />
        <h3>Material UI</h3>
      </div>
    </div>
  );
};

export default SkillsContainer;
