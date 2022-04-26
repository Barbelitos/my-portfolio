import { Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import classes from "./HomeContainerButton.module.css";

const HomeContainerButton = () => {
  return (
    <a href="#about-section">
      <button className={classes.home_button}>
        <Typography variant="h5">Get to know me </Typography>
        <ArrowForwardIosIcon
          fontSize="small"
          className={classes.button_arrow}
        />
      </button>
    </a>
  );
};

export default HomeContainerButton;
