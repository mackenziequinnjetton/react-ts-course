import React from "react";
import "./Hemisphere.css";

const HemisphereDisplay = ({ latitude }) => {
  const hemisphereConfig = {
    Northern: {
      text: "it is northern hemisphere"
    },
    Southern: {
      text: "it is southern hemisphere"
    }
  };

  const hemisphere = latitude > 0 ? "Northern" : "Southern";
  const { text } = hemisphereConfig[hemisphere]

  return (
    <div className = { hemisphere }>
      <div className="ui raised text container segment">
        <h1>{ text }</h1>
      </div>
    </div>
  )
};

export default HemisphereDisplay;