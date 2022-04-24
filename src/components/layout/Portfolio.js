import classes from "./Portfolio.module.css";
import PortfolioContainer from "./PortfolioContainer";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  useEffect(() => {
    gsap.fromTo(
      "#port-title",
      {
        y: 800,
        opacity: 0,
      },
      {
        y: 0,
        duration: 0.8,
        opacity: 1.2,
        scrollTrigger: {
          trigger: "#portfolio-section",
        },
      }
    );
  }, []);

  return (
    <section className={classes.portfolio} id="portfolio-section">
      <h1 id="port-title" className={classes.portfolio_title}>
        Portfolio
      </h1>
      <PortfolioContainer />
    </section>
  );
};

export default Portfolio;
