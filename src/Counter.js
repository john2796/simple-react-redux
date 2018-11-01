import React from "react";
import { connect } from "react-redux";

const Counter = props => (
  <div>
    <h1>I am a counter!</h1>
    <h5>Count : {props.count}</h5>
    <button onClick={props.onIncrementClick}>increment</button>
    <button onClick={props.onDecrementClick}>decrement</button>
  </div>
);

const mapStateToProps = state => {
  console.log("mapStateToProps", state);
  return {
    count: state.count
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementClick: () => dispatch({ type: "INCREMENT" }),
    onDecrementClick: () => dispatch({ type: "DECREMENT" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
