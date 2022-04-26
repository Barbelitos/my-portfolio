import PortfolioContainer from "./PortfolioContainer";
import SectionTitle from "../Other components/SectionTitle";
import classes from "./Portfolio.module.css";

const Portfolio = () => {
  return (
    <section className={classes.portfolio} id="portfolio-section">
      <SectionTitle
        id="portfolio"
        title="Projects"
        subtitle="Here are some of the projects that I have been working in. I hope you
          like!"
      />
      <PortfolioContainer />
    </section>
  );
};

export default Portfolio;
