import pontesInvestments from "../../assets/pontesinvestments.jpg";
import comidas from "../../assets/comidasflor.jpg";
import easyFinland from "../../assets/easyfinland.jpg";
import breweries from "../../assets/breweriesapp.jpg";
import forkify from "../../assets/forkify.jpg";
import todo from "../../assets/todo.jpg";
import loopstudios from "../../assets/loopstudios.jpg";
import crowdfund from "../../assets/crowdfund.jpg";
import portfolio from "../../assets/portfolio.jpg";

const PortfolioItems = [
  {
    key: "pf1",
    name: "Pontes Investments",
    url: "https://www.pontesinvestments.com",
    repo: "https://github.com/Barbelitos/Pontes-Investments",
    image: pontesInvestments,
    description: "Investment company to grow your wealth safely",
    tech: ["Html", "CSS", "Javascript"],
  },
  {
    key: "pf2",
    name: "Comidas da Flor",
    url: "https://comidas-da-flor.vercel.app",
    repo: "https://github.com/Barbelitos/Comidas-da-Flor",
    image: comidas,
    description: "Brazilian food in Helsinki",
    tech: ["Html", "CSS", "Javascript"],
  },
  {
    key: "pf3",
    name: "Easy Finland",
    url: "https://easyfinland.herokuapp.com",
    repo: "https://github.com/Barbelitos/Finnish_Resources",
    image: easyFinland,
    description:
      "Collection of useful links to help foreigners navigate life in Finland",
    tech: ["Html", "CSS", "Javascript", "Node JS", "Express JS"],
  },
  {
    key: "pf4",
    name: "Breweries App",
    url: "https://breweriesapp.netlify.app",
    repo: "https://github.com/Barbelitos/Breweries-App",
    image: breweries,
    description: "Integrify Academy challenge",
    tech: ["React", "CSS", "Javascript"],
  },
  {
    key: "pf5",
    name: "Forkify App",
    url: "https://forkify-barbelitos.netlify.app",
    repo: "https://github.com/Barbelitos/forkify-completeJS-course",
    image: forkify,
    description:
      "Recipe app created along the course 'The Complete JavaScript Course' from Udemy ",
    tech: ["Html", "CSS", "Javascript"],
  },
  {
    key: "pf6",
    name: "Todo List",
    url: "https://vermillion-muffin-7c9629.netlify.app",
    repo: "https://github.com/Barbelitos/FrontEndMentor-ToDoApp",
    image: todo,
    description: "Todo App created as a challenge from Frontend Mentor website",
    tech: ["Html", "CSS", "Javascript"],
  },
  {
    key: "pf7",
    name: "Loopstudios Landing Page",
    url: "https://fabulous-gnome-3d9dff.netlify.app/",
    repo: "https://github.com/Barbelitos/FrontEndMentor-LoopStudiosLandingPage",
    image: loopstudios,
    description:
      "Loopstudios landing page created as a challenge from Frontend Mentor.",
    tech: ["Html", "CSS", "Javascript"],
  },
  {
    key: "pf8",
    name: "Crowdfunding Product Page",
    url: "https://front-end-mentor-crowdfunding-product-page.vercel.app/",
    repo: "https://github.com/Barbelitos/FrontEndMentor-CrowdfundingProductPage",
    image: crowdfund,
    description:
      "Crowdfunding product page created as a challenge from Frontend Mentor.",
    tech: ["Html", "CSS", "Javascript"],
  },
  {
    key: "pf9",
    name: "My Portfolio Page",
    url: "https://barbelitos-portfolio.netlify.app/",
    repo: "https://github.com/Barbelitos/my-portfolio",
    image: portfolio,
    description:
      "This very same page. You can check out my Github repository for it!",
    tech: ["React", "CSS", "Javascript", "Node JS", "Material UI"],
  },
];

export default PortfolioItems;
