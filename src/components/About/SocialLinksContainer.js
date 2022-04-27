import Link from "@mui/material/Link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

import classes from "./SocialLinksContainer.module.css";

const SocialLinksContainer = () => {
  return (
    <div className={classes.social_container}>
      <Link
        className={classes.social_link}
        href="https://www.linkedin.com/in/david-fonseca-9a464a80/"
        target="_blank"
      >
        <LinkedInIcon fontSize="large" sx={{ color: "white" }} />
      </Link>
      <Link
        className={classes.social_link}
        href="https://github.com/Barbelitos"
        target="_blank"
      >
        <GitHubIcon fontSize="large" sx={{ color: "white" }} />
      </Link>
      <Link
        className={classes.social_link}
        href="https://www.instagram.com/barbelitos/"
        target="_blank"
      >
        <InstagramIcon fontSize="large" sx={{ color: "white" }} />
      </Link>
    </div>
  );
};

export default SocialLinksContainer;
