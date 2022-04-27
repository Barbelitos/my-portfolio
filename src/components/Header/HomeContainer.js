import { useEffect } from "react";
import { Link, Typography } from "@mui/material";
// import HomeContainerButton from "./HomeContainerButton";
import profilePic from "../../assets/david.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
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
        <Typography variant="h4" className={classes.home_title}>
          Hi, I am <span className={classes.home_name}>David Fonseca</span> and
          <br />
          I'm a web developer
        </Typography>
        <Link
          style={{
            textDecoration: "none",
            fontSize: "2rem",
            color: "white",
            backgroundColor: "transparent",
            margin: "2rem auto",
            border: "2px solid white",
            padding: "0.8rem",
            width: "250px",
            cursor: "pointer",
            transition: "all 0.3s ease-in-out",
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            alignItems: "center",
          }}
          className={classes.home_link}
          href="#about-section"
        >
          <Typography variant="h5">Get to know me </Typography>
          <ArrowForwardIosIcon
            fontSize="small"
            className={classes.button_arrow}
          />
        </Link>
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
