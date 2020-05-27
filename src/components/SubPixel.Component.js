import React from "react";
import "../styles/subpixel.scss";

class SubPixel extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <div className={`sub-pixel-container ${name}-sub-pixel`}>
        <div className="sub-pixel-content"></div>
      </div>
    );
  }
}

export default SubPixel;
