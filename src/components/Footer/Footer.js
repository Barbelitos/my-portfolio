import SocialLinksContainer from "../About/SocialLinksContainer";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <SocialLinksContainer />
      <h4>
        Barbelitos <span>©2021</span>
      </h4>
    </footer>
  );
};

export default Footer;
