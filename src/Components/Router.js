import React from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Header from "./Header";
import Coins from "../Screens/Coins";
import Exchanges from "../Screens/Exchanges";
import Prices from "../Screens/Prices";
import Detail from "../Screens/Detail";

export default () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Prices} />
        <Route path="/exchanges" component={Exchanges} />
        <Route path="/coins/:id" component={Detail} />
        <Route path="/coins" component={Coins} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};
