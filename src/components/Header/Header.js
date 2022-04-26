import Navbar from "./Navbar";
import HomeContainer from "./HomeContainer";
import background from "../../assets/background.jpg";

import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <header
      style={{
        background: `linear-gradient(rgba(9,9,35,0.8), rgba(9,9,35,0.8)), url(${background})`,
        height: "100vh",
        width: "100vw",
        paddingTop: "8rem",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      id="header-section"
      className={classes.header}
    >
      <Navbar />
      <HomeContainer />
    </header>
  );
};

export default Header;
