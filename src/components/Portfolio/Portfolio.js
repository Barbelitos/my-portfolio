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
      <div id="port-title">
        <h1 className={classes.portfolio_title}>Projects</h1>
        <p className={classes.portfolio_text}>
          Here are some of the projects that I have been working in. I hope you
          like!
        </p>
      </div>
      <PortfolioContainer />
    </section>
  );
};

export default Portfolio;
