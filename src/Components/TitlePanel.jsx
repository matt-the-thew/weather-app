import React from "react";
import "./TitlePanel.css";
import activeClock from "../../utils/dateTime";

let currentTimeString = activeClock();

const TitlePanel = () => {
  return (
    <>
      <div className="container">
        <h1 className="monomaniac-one-regular">Atmos</h1>
        <h2>v0.0.1</h2>
        <h1>${currentTimeString}</h1>
      </div>
    </>
  );
};

export default TitlePanel;
