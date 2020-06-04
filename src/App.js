import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Display from "./components/Display.Component";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="display">
          <Display width={5} height={5} />
        </div>
      </header>
    </div>
  );
}

export default App;
