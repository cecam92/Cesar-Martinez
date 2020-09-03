import React from "react";
import Home from "../containers/Home";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </HashRouter>
  );
}

export default App;
