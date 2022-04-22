import { useState } from "react";
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
      <div className={classes.tech_container}>
        {props.tech.map((item) => {
          return <span className={classes.tech_item}>{item}</span>;
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
          <button>URL</button>
          <button>Github</button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
