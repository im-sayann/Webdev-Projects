import React from "react";
import { useSelector } from "react-redux";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { motion } from "framer-motion";

function Todo({ todos, deleteTodo, editTodo, reference }) {
  const themeColor = useSelector((state) => state.color);
  const colorToRgba = (colorName, opacity) => {
    const colors = {
      Black: "rgba(0, 0, 0, OPACITY)",
      White: "rgba(255, 255, 255, OPACITY)",
      Red: "rgba(255, 0, 0, OPACITY)",
      Green: "rgba(0, 128, 0, OPACITY)",
      Blue: "rgba(0, 0, 255, OPACITY)",
      Yellow: "rgba(255, 255, 0, OPACITY)",
      Cyan: "rgba(0, 255, 255, OPACITY)",
      Magenta: "rgba(255, 0, 255, OPACITY)",
      Silver: "rgba(192, 192, 192, OPACITY)",
      Gray: "rgba(128, 128, 128, OPACITY)",
      Maroon: "rgba(128, 0, 0, OPACITY)",
      Olive: "rgba(128, 128, 0, OPACITY)",
      Lime: "rgba(0, 255, 0, OPACITY)",
      Aqua: "rgba(0, 255, 255, OPACITY)",
      Teal: "rgba(0, 128, 128, OPACITY)",
      Navy: "rgba(0, 0, 128, OPACITY)",
      Fuchsia: "rgba(255, 0, 255, OPACITY)",
      Purple: "rgba(128, 0, 128, OPACITY)",
      Orange: "rgba(255, 165, 0, OPACITY)",
      Pink: "rgba(255, 192, 203, OPACITY)",
      Lightred: "rgba(255, 102, 102, OPACITY)",
      Darkred: "rgba(153, 0, 0, OPACITY)",
      Lightgreen: "rgba(144, 238, 144, OPACITY)",
      Darkgreen: "rgba(0, 100, 0, OPACITY)",
      Lightblue: "rgba(173, 216, 230, OPACITY)",
      Darkblue: "rgba(0, 0, 139, OPACITY)",
      Lightyellow: "rgba(255, 255, 224, OPACITY)",
      Darkyellow: "rgba(204, 204, 0, OPACITY)",
      Lightcyan: "rgba(224, 255, 255, OPACITY)",
      Darkcyan: "rgba(0, 139, 139, OPACITY)",
      Lightmagenta: "rgba(255, 153, 255, OPACITY)",
      Darkmagenta: "rgba(139, 0, 139, OPACITY)",
      Lightgray: "rgba(211, 211, 211, OPACITY)",
      Darkgray: "rgba(169, 169, 169, OPACITY)",
      Lightmaroon: "rgba(191, 0, 0, OPACITY)",
      Darkmaroon: "rgba(102, 0, 0, OPACITY)",
      Lightolive: "rgba(188, 238, 104, OPACITY)",
      Darkolive: "rgba(85, 107, 47, OPACITY)",
      Lightlime: "rgba(204, 255, 204, OPACITY)",
      Darklime: "rgba(0, 153, 0, OPACITY)",
      Lightaqua: "rgba(204, 255, 255, OPACITY)",
      Darkaqua: "rgba(0, 102, 102, OPACITY)",
      Lightteal: "rgba(144, 238, 238, OPACITY)",
      Darkteal: "rgba(0, 51, 51, OPACITY)",
      Lightnavy: "rgba(102, 153, 204, OPACITY)",
      Darknavy: "rgba(0, 0, 77, OPACITY)",
      Lightfuchsia: "rgba(255, 102, 204, OPACITY)",
      Darkfuchsia: "rgba(153, 0, 102, OPACITY)",
      Lightpurple: "rgba(204, 153, 255, OPACITY)",
      Darkpurple: "rgba(102, 0, 153, OPACITY)",
      Lightorange: "rgba(255, 204, 153, OPACITY)",
      Darkorange: "rgba(255, 140, 0, OPACITY)",
      Lightpink: "rgba(255, 182, 193, OPACITY)",
      Darkpink: "rgba(255, 105, 180, OPACITY)",
    };

    if (colors[colorName]) {
      return colors[colorName].replace("OPACITY", opacity);
    }
    return colorName; // Return the original color if it's not in the predefined list
  };

  return (
    <>
      {todos.map((todo) => (
        <motion.div
          drag
          dragConstraints={reference}
          whileDrag={{ scale: 1.1 }}
          // dragElastic={0}
          dragTransition={{ bounceDamping: 10, bounceStiffness: 50 }}
          key={todo.id}
          style={{
            backgroundColor: colorToRgba(todo.todoColor, 0.4),
            boxShadow: `-1px 0px 20px 0px ${
              themeColor ? themeColor : "#00000082"
            }`,
          }}
          className="active:border relative h-fit w-[17rem] min-[501px]:min-h-[20rem] max-[500px]:w-[12rem] 
          max-[500px]:min-h-[15rem]
          bg-zinc-900/90 todo text-white rounded-2xl p-3 z-10 cursor-pointer"
        >
          <button
            onClick={(e) => {
              editTodo(e, todo.id);
            }}
            className="edit p-3 flex items-center justify-center rounded-full bg-zinc-800 absolute bottom-2 left-2 hover:bg-zinc-700 active:bg-zinc-900 max-[500px]:p-2"
          >
            <FiEdit className="max-[500px]:text-[13px]" />
          </button>
          <button
            onClick={(e) => {
              deleteTodo(e, todo.id);
            }}
            className="delete p-3 flex items-center justify-center rounded-full bg-zinc-800 absolute bottom-2 right-2 hover:bg-zinc-700 active:bg-zinc-900 max-[500px]:p-2"
          >
            <MdDelete className="max-[500px]:text-[13px]" />
          </button>

          <h2
            style={{ textShadow: "black 1px 3px 12px" }}
            className="title text-center border-b-[1px] rounded-xl text-2xl font-bold pb-5 max-[500px]:text-lg"
          >
            {todo.todoTitle}
          </h2>
          <p
            className="desc my-10 font-semibold mx-2 max-[500px]:text-[12px] max-[500px]:my-[1rem] 
           max-[500px]:h-[8rem] max-[500px]:mx-0"
          >
            {todo.todoDesc}
          </p>
        </motion.div>
      ))}
    </>
  );
}

export default Todo;
