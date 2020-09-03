import React from "react";
import Home from "../containers/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
