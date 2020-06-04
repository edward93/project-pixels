import React from "react";
import Pixel from "./Pixel.Component";

import "../styles/display.scss";

class Display extends React.Component {
  pixelRows = (count) => {
    const result = [];
    for (let i = 0; i < count; i++) {
      result.push(<Pixel key={i} />);
    }
    return <div className="pixel-row">{result}</div>;
  };

  render() {
    const { width, height } = this.props;
    return <div className="display-container">{this.pixelRows(width)}</div>;
  }
}

export default Display;
