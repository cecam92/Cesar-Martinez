import React from "react";
import Home from "../../containers/Home";
import "./App.scss";
import { HashRouter, Switch, Route } from "react-router-dom";
function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </HashRouter>
  );
}

export default App;
