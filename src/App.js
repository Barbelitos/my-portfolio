import "./App.css";
import Header from "./components/layout/Header";
import About from "./components/layout/About";
import Portfolio from "./components/layout/Portfolio";
import Contact from "./components/layout/Contact";
import Footer from "./components/layout/Footer";

const App = () => {
  return (
    <div id="app" className="App">
      <Header />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
