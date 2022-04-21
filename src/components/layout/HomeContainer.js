import classes from "./HomeContainer.module.css";

import profilePic from "../../assets/david.png";
import HomeContainerButton from "../UI/HomeContainerButton";

const HomeContainer = (props) => {
  return (
    <div className={classes.home_container}>
      <div>
        <h1 className={classes.home_title}>
          Hi, I am <span className={classes.home_name}>David Fonseca</span> and
          <br />
          I'm a web developer
        </h1>
        <HomeContainerButton />
      </div>
      <img
        className={classes.home_picture}
        src={profilePic}
        alt="David's face"
      />
    </div>
  );
};

export default HomeContainer;
