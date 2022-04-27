import { Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import classes from "./HomeContainerButton.module.css";

const HomeContainerButton = () => {
  return (
    <a className={classes.home_link} href="#about-section">
      <Typography variant="h5">Get to know me </Typography>
      <ArrowForwardIosIcon fontSize="small" className={classes.button_arrow} />
    </a>
  );
};

export default HomeContainerButton;
