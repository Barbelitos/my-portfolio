import "./App.css";
import Header from "./components/layout/Header";
import About from "./components/layout/About";
import Portfolio from "./components/layout/Portfolio";

const App = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <Portfolio />
    </div>
  );
};

export default App;
