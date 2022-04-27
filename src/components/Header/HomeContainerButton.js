import { Link, Button, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import classes from "./HomeContainerButton.module.css";

const HomeContainerButton = () => {
  return (
    <Link size="small" underline="none" href="#about-section">
      <Button
        variant="outlined"
        size="small"
        style={{ color: "white", borderColor: "white" }}
        className={classes.home_link}
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
