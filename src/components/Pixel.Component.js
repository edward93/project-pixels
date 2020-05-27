import React from "react";
import SubPixel from "./SubPixel.Component";

import "../styles/pixel.scss";

class Pixel extends React.Component {
  render() {
    return(
      <div className="pixel-container">
        <SubPixel name="red"/>
        <SubPixel name="green"/>
        <SubPixel name="blue"/>
      </div>
    )
  }
}

export default Pixel;