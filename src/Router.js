import React from "react";
import { Switch, Route } from "react-router-dom";
import App from "./App";
import Home from "../src/components/Home";
import About from "../src/components/About";
import ComponentOne from "../src/components/ComponentOne";
import ComponentTwo from "../src/components/ComponentTwo";

const Router = () => (
  <Switch>
    <Route exact path="/" component={App} />
    <Route path="/home" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/componentone" component={ComponentOne} />
    <Route path="/componenttwo" component={ComponentTwo} />
  </Switch>
);

export default Router;
