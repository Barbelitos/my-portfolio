import classes from "./Portfolio.module.css";
import PortfolioContainer from "./PortfolioContainer";

const Portfolio = () => {
  return (
    <section className={classes.portfolio} id="portfolio-section">
      <h1 className={classes.portfolio_title}>Portfolio</h1>
      <PortfolioContainer />
    </section>
  );
};

export default Portfolio;
