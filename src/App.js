import React, { Component } from "react";
import "./App.css";
import Counter from "./Counter";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Redux</h1>
        <p>State management</p>
        <hr />
        <Counter />
      </div>
    );
  }
}

export default App;
