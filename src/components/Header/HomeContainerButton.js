import { Link, Button, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import classes from "./HomeContainerButton.module.css";

const HomeContainerButton = () => {
  return (
    <Link
      underline="none"
      style={{ padding: "1.4rem", fontSize: ".2rem" }}
      className={classes.home_link}
      href="#about-section"
    >
      <Button
        variant="outlined"
        size="small"
        style={{ color: "white", border: "none", padding: "1rem" }}
      >
        <Typography variant="h5">Get to know me </Typography>
        <span>
          <ArrowForwardIosIcon
            fontSize="small"
            className={classes.button_arrow}
          />
        </span>
      </Button>
    </Link>
  );
};

export default HomeContainerButton;
