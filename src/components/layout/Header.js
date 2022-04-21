import Navbar from "../UI/Navbar";

import classes from "./Header.module.css";
import HomeContainer from "./HomeContainer";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <Navbar />
      <HomeContainer />
    </header>
  );
};

export default Header;
