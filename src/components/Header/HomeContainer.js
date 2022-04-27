import { useEffect } from "react";
import { Typography } from "@mui/material";
import HomeContainerButton from "./HomeContainerButton";
import profilePic from "../../assets/david.png";
import classes from "./HomeContainer.module.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HomeContainer = (props) => {
  useEffect(() => {
    gsap.fromTo(
      ".title_container",
      { opacity: 0 },
      { opacity: 1, duration: 5 }
    );
  }, []);

  return (
    <div className={classes.home_container}>
      <div className="title_container">
        <Typography
          style={{ marginBottom: "1rem" }}
          variant="h4"
          className={classes.home_title}
        >
          Hi, I am <span className={classes.home_name}>David Fonseca</span> and
          <br />
          I'm a Frontend developer
        </Typography>
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
