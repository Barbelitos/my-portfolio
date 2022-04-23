import classes from "./HomeContainer.module.css";

import profilePic from "../../assets/david.png";
import HomeContainerButton from "../UI/HomeContainerButton";

import { Power3, gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const HomeContainer = (props) => {
  useEffect(() => {
    gsap.fromTo(
      ".title_container",
      { opacity: 1, x: -1000 },
      { opacity: 1, duration: 0.5, x: 25 }
    );
  }, []);

  return (
    <div className={classes.home_container}>
      <div className="title_container">
        <h1 className={classes.home_title}>
          Hi, I am <span className={classes.home_name}>David Fonseca</span> and
          <br />
          I'm a web developer
        </h1>
        <HomeContainerButton />
      </div>
      <div className={classes.picture_container}>
        <img
          className={classes.home_picture}
          src={profilePic}
          alt="David's face"
        />
      </div>
    </div>
  );
};

export default HomeContainer;
