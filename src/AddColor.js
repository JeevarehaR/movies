import { useState } from "react";
import ColorBox from "./ColorBox";
import Button from "@mui/material/Button";

export function AddColor() {
  const [color, setColor] = useState("orange");
  const [colorList, setColorList] = useState([
    "pink",
    "crimson",
    "red",
    "purple",
  ]);

  const styles = {
    fontSize: "18px",
    FontFamily: "Sans-Serif",
    backgroundColor: color,
    height: "24px",
    width: "300px",
  };
  return (
    <div>
      <div className="add-color">
        <input
          onChange={(e) => setColor(e.target.value)}
          style={styles}
          type="text"
          value={color}
        />
        <button
          onClick={() => setColorList([...colorList, color])}
          variant="contained"
        >
          Add Color
        </button>
      </div>
      {colorList.map((clr) => (
        <ColorBox color={clr} />
      ))}
    </div>
  );
}
