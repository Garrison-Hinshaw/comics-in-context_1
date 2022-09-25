import React, { useContext } from "react";
import StylesContext from "./components/StylesContext";
import './App.css';

export default function RequestFormButton() {
  const buttonStyling = React.useContext(StylesContext)

  return (
    <div>
      <input style={buttonStyling} type="submit" value="Submit" />

    </div>
  );
}

