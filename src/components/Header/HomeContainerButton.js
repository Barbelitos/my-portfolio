import classes from "./HomeContainerButton.module.css";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const HomeContainerButton = () => {
  return (
    <a href="#about-section">
      <button className={classes.home_button}>
        Get to know me <ArrowForwardIosIcon className={classes.button_arrow} />
      </button>
    </a>
  );
};

export default HomeContainerButton;
