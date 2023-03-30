import React, { useState } from "react";
import ReactDOM from "react-dom";

// write your Color component here
const Color = (props) => {
  return (
    <div
      className={props.color}
      onClick={() => props.selectColor(props.color)}
    />
  );
};

const Picker = () => {
  const [selectedColor, setSelectedColor] = useState("");
  const selectColor = (colorName) => {
    setSelectedColor(colorName);
  };
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        {
          /* colors go here */

          <>
            <Color color="red" selectColor={selectColor} />
            <Color color="orange" selectColor={selectColor} />
            <Color color="yellow" selectColor={selectColor} />
            <Color color="green" selectColor={selectColor} />
            <Color color="blue" selectColor={selectColor} />
            <Color color="violet" selectColor={selectColor} />
            <Color color="black" selectColor={selectColor} />
            <Color color="silver" selectColor={selectColor} />
          </>
        }
      </div>
    </div>
  );
};

ReactDOM.render(<Picker />, document.getElementById("app"));
