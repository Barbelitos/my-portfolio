import { Button, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import classes from "./HomeContainerButton.module.css";

const HomeContainerButton = () => {
  return (
    <a href="#about-section">
      <button className={classes.home_link}>
        <Typography variant="h5">Get to know me </Typography>
        <span>
          <ArrowForwardIosIcon
            fontSize="small"
            className={classes.button_arrow}
          />
        </span>
      </button>
    </a>
  );
};

export default HomeContainerButton;
