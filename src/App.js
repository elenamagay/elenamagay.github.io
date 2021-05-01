import React from "react";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import About from "./pages/about";
import Contact from "./pages/contactpage";
import Portfolio from "./pages/portfoliopage";
import { Route, Switch, useLocation } from "react-router-dom"
import "./App.css"

function App() {
  const location = useLocation();
  return (
    <div>
      <Header />
      <Switch location={location} key={location.pathname}>
        <Route exact path="/" key="about" component={About} />
        <Route path="/contact" key="contact" component={Contact} />
        <Route path="/portfolio" key="portfolio" component={Portfolio} />
      </Switch>      
      <Footer />
    </div>
  );
}

export default App;