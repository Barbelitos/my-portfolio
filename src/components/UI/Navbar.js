import { useState } from "react";
import NavItems from "./NavItems";

import classes from "./Navbar.module.css";

const Navbar = (props) => {
  const [colorChange, setColorChange] = useState(false);

  const changeNavbarColorHandler = () => {
    if (window.scrollY > 0) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };

  window.addEventListener("scroll", changeNavbarColorHandler);

  return (
    <nav
      className={
        colorChange ? `${classes.navbar} ${classes.sticky}` : classes.navbar
      }
    >
      <div className={classes.links_menu}>
        <ul className={classes.links_list}>
          {NavItems.map((item) => {
            return (
              <li key={item.key}>
                <a href={item.url} className={classes.nav_link}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
