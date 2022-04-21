import classes from "./AboutContainer.module.css";

import photo from "../../assets/vuossari.png";
import html from "../../assets/html.svg";
import css from "../../assets/css.svg";
import javascript from "../../assets/javascript.svg";
import nodejs from "../../assets/nodejs.svg";
import react from "../../assets/react.svg";
import material from "../../assets/materialui.svg";

const AboutContainer = () => {
  return (
    <div className={classes.about_container}>
      <div className={classes.about_info}>
        <img className={classes.about_photo} src={photo} alt="David" />
        <h2 className={classes.info_title}>Who am I?</h2>
        <hr />
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur?
        </p>
      </div>
      <div className={classes.about_skills}>
        <h2 className={classes.skills_title}>My Skills</h2>
        <div className={classes.skills_container}>
          <img src={html} alt="html" />
          <img src={css} alt="css" />
          <img src={javascript} alt="javascript" />
          <img src={nodejs} alt="node js" />
          <img src={react} alt="react" />
          <img src={material} alt="material ui" />
        </div>
      </div>
    </div>
  );
};

export default AboutContainer;
