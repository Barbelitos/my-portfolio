import Navbar from "../UI/Navbar";

import classes from "./Header.module.css";
import HomeContainer from "./HomeContainer";

import background from "../../assets/background.jpg";

const Header = (props) => {
  return (
<<<<<<< HEAD
    <header
      style={{
        background: `linear-gradient(rgba(9,9,35,0.8), rgba(9,9,35,0.8)), url(${background})`,
      }}
      id="header-section"
      className={classes.header}
    >
=======
    <header style={{ backgroundColor: "rgb(9,9,35)", height: "100vh", paddingTop: "8rem" }} id="header-section" className={classes.header}>
>>>>>>> e3bd928fa36c20c36dd841136bdeb4a8633eba3e
      <Navbar />
      <HomeContainer />
    </header>
  );
};

export default Header;
