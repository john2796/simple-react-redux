import { createStore, applyMiddleware, compose } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";
import createHistory from "history/createBrowserHistory";
import rootReducer from "./modules";

export const history = createHistory();

const initialState = {};
const enhancers = [];
const middleware = [thunk, routerMiddleware(history)];

if (process.env.NODE_ENV === "development") {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

const store = createStore(
  connectRouter(history)(rootReducer),
  initialState,
  composedEnhancers
);

export default store;

/* 
The Store = Everything in Redux belongs in a single store. Let's configure our store to understand react-router and redux-thunk.

= Within our store, we're importing a few core modules from Redux that allows us to create a custom global store. conected-react-router and redux-think are both known as middleware to Redux and we need to configure our store to treat them that way 

= You'll notice we're importin a file we havenb't yet created called rootReducer This is essential to Redux We'll come back to Reducer's later but for now , create a file called ./src/modules/index.js so we can satisfy our Store.

*/
