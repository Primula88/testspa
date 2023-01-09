import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import "./index.css";
import store from "./store";
import { Provider } from "react-redux";


ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
  <Main/>
  </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);