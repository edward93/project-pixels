import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Pixel from "./components/Pixel.Component";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="display">
          <Pixel />
        </div>
      </header>
    </div>
  );
}

export default App;
