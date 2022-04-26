import { useState } from "react";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";

import classes from "./PortfolioCard.module.css";
const PortfolioCard = (props) => {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleShowOverlay = () => {
    setShowOverlay(true);
  };

  const handleRemoveOverlay = () => {
    setShowOverlay(false);
  };

  return (
    <div
      onMouseEnter={handleShowOverlay}
      onMouseLeave={handleRemoveOverlay}
      className={classes.portfolio_card}
    >
      <img className={classes.card_image} src={props.image} alt="" />
      <h3 className={classes.card_name}>{props.name}</h3>
      <p>{props.description}</p>
      <br />
      <div className={classes.tech_container}>
        {props.tech.map((item, i) => {
          return (
            <span key={i} className={classes.tech_item}>
              {item}
            </span>
          );
        })}
      </div>
      <div
        className={
          showOverlay
            ? `${classes.overlay} ${classes.show_overlay}`
            : classes.overlay
        }
      >
        <div
          className={
            showOverlay
              ? `${classes.card_links} ${classes.show_links}`
              : classes.card_links
          }
        >
          <div>
            <a href={props.url} rel="noreferrer" target="_blank">
              <LinkIcon sx={{ fontSize: 20 }} />
            </a>
            <br />
            <h3>Live</h3>
          </div>
          <div>
            <a href={props.repo}>
              <GitHubIcon sx={{ fontSize: 20 }} />
            </a>
            <h3>Github</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
