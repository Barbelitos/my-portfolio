import classes from "./PortfolioContainer.module.css";
import PortfolioItems from "./PortfolioItems";
import PortfolioCard from "./PortfolioCard";

const PortfolioContainer = (props) => {
  return (
    <div className={classes.portfolio_container}>
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
