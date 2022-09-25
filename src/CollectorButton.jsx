import React, { useContext } from "react";
import StylesContext from "./components/StylesContext"
import './App.css';

export default function CollectorButton() {
  const buttonStyling = React.useContext(StylesContext)

  return (
    <div>
      <button style={buttonStyling}>
        Click Here!
      </button>
    </div>
  );
}  

