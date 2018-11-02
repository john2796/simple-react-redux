import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import store, { history } from "./store";
import App from "./containers/app";

import "./index.css";

const target = document.querySelector("#root");

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
);

/*
5, Adding Redux Thunk 
It's 2018 and your React Application is most likely going to be crawling with async functions. Redux Thunk is middleware for Redux that allows you to write action creators that return a function instead of an action.

That totally made no sense, so let's see an example!

Let's ho ahead  and create some actions and a reducer for a counter.

*/
