import { useEffect } from "react";
import { Typography } from "@mui/material";

import classes from "./SectionTitle.module.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SectionTitle = ({ title, subtitle, id }) => {
  useEffect(() => {
    gsap.fromTo(
      `#${id}`,
      {
        y: 800,
        opacity: 0,
      },
      {
        y: 0,
        duration: 0.8,
        opacity: 1,
        scrollTrigger: {
          trigger: `#${id}-section`,
        },
      }
    );
  }, [id]);
  return (
    <div id={id}>
      <Typography
        className={classes.section_title}
        marginTop="2.5rem"
        variant="h3"
      >
        {title}
      </Typography>
      <Typography
        marginTop="2rem"
        variant="subtitle1"
        className={classes.section_subtitle}
      >
        {subtitle}
      </Typography>
    </div>
  );
};

export default SectionTitle;
