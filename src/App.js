import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./component/header";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import Portfolio from "./component/Portfolio";
import Blog from "./component/Blog";
import Error from "./component/Error";

function App() {
  return (
    <>
      <Header />

      <Switch>
        <Route exact path="/" component={Home} />{" "}
        <Route exact path="/About" component={About} />{" "}
        <Route exact path="/Contact" component={Contact} />{" "}
        <Route exact path="/Blog" component={Blog} />
        <Route exact path="/Portfolio" component={Portfolio} />{" "}
        <Route component={Error} />{" "}
      </Switch>
    </>
  );
}

export default App;
