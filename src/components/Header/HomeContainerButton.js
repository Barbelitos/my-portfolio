import { Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "@mui/material";

import classes from "./HomeContainerButton.module.css";

const HomeContainerButton = () => {
  return (
    <Link
      style={{
        textDecoration: "none",
        borderRadius: "none",
        background: "transparent",
        color: "white",
        margin: "2rem auto",
      }}
      href="#about-section"
    >
      <button className={classes.home_button}>
        <Typography variant="h5">Get to know me </Typography>
        <ArrowForwardIosIcon
          fontSize="small"
          className={classes.button_arrow}
        />
      </button>
    </Link>
  );
};

export default HomeContainerButton;
