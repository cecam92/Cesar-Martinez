import React from "react";
import ReactDOM from "react-dom";
import "./GlobalStyles.scss";
import App from "./components/routes/App.jsx";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import { Provider } from "react-redux";
import RootReducer from "./components/reducers/RootReducer";
import { ParallaxProvider } from "react-scroll-parallax";

const store = createStore(RootReducer);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ParallaxProvider>
        <App />
      </ParallaxProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
