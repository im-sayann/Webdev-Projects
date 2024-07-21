import { useDispatch } from "react-redux";
import { useState } from "react";
import { addColor } from "../features/colorChange/ColorSlice";

function ColorChange() {

  const [prevElement, setPrevElement] = useState(null);
  const dispatch = useDispatch()

  const colorData = [
    { colorProp: "#ff0000" },
    { colorProp: "#0ebf00" },
    { colorProp: "#5DADE2" },
    { colorProp: "#ffae00" },
    { colorProp: "#9e48d7" },
    { colorProp: "#7FFFD4" },
    { colorProp: "#C0C0C0" },
    { colorProp: "#E97451" },
    { colorProp: "#7F00FF" },
    { colorProp: "#C9CC3F" },
  ];

  const handleClickColor = (color, e) => {
    // Remove border from previous element if it exists
    if (prevElement) {
      prevElement.style.border = "none";
    }

    // Set border for the current element
    e.target.style.border = "1px solid white";

    dispatch(addColor(color))
    
    // Update the previous element reference
    setPrevElement(e.target);
  };

  return (
      <div className="colorBox rounded-xl flex p-2 right-10 gap-3 z-50 w-fit flex-wrap">
        {colorData.map((item) => (
          <div
            key={item.colorProp}
            style={{ backgroundColor: item.colorProp }}
            onClick={(e) => handleClickColor(item.colorProp, e)}
            className="w-8 h-8 rounded-full cursor-pointer shadow-xl max-[500px]:w-5 max-[500px]:h-5"
          ></div>
        ))}
      </div>
  );
}

export default ColorChange;
