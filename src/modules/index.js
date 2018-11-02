import { combineReducers } from "redux";
import counter from "./counter";

export default combineReducers({
  counter
});

/* 
Our store const creates a store using the Redux createStore function. It apccepts a rootReducer, initialState and an enhancers in this example. 

Our history const syncs our browserHistory with our store and must be exported so we can use it within our routes later.

2. This tutorial uses React Router v4 which will allows us to mount components anywhere inside our application when a given url matches our defined paramters.

In previous version of React Router you might see flies like routes.js which contain a long list of nested routes but React Routesr v4 does routing a little differently.

Our router history is managed inside our Redux store which we created in the first section and is passed down vie something called ConnectRouter which we will implement later.

We'll get started by defining which componnents to show at what url in our first container component App.

To complete our thunk example, let's update our Home container component to include our Counter state and actions

*/
