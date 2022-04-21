import classes from "./HomeContainerButton.module.css";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const HomeContainerButton = () => {
  return (
    <button className={classes.home_button}>
      Get to know me <ArrowForwardIosIcon className={classes.button_arrow} />
    </button>
  );
};

export default HomeContainerButton;
