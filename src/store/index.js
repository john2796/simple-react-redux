import { createStore } from "redux";

const initialState = {
  count: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state.count,
        count: state.count + 1
      };
    case "DECREMENT":
      const { count } = state;
      return {
        ...count,
        count: count - 1
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
