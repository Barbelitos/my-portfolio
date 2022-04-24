import classes from "./PortfolioContainer.module.css";
import PortfolioItems from "./PortfolioItems";
import PortfolioCard from "./PortfolioCard";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const PortfolioContainer = (props) => {
  useEffect(() => {
    gsap.fromTo(
      "#port-container",
      {
        x: -1000,
        opacity: 0,
      },
      {
        x: 0,
        duration: 0.8,
        opacity: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: "#portfolio-section",
        },
      }
    );
  }, []);

  return (
    <div id="port-container" className={classes.portfolio_container}>
      {PortfolioItems.map((item) => {
        return (
          <PortfolioCard
            image={item.image}
            name={item.name}
            key={item.key}
            url={item.url}
            repo={item.repo}
            description={item.description}
            tech={item.tech}
          />
        );
      })}
    </div>
  );
};

export default PortfolioContainer;
