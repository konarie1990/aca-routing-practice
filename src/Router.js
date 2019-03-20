import React from "react";
import { Switch, Route } from "react-router-dom";
import App from "./App";
import Home from "../src/components/Home";
import About from "../src/components/About";

function Router() {
  return (
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
    </Switch>
  );
}

export default Router;
