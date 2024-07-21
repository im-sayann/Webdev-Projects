import React from "react";
import { useSelector } from "react-redux";
import { useState, useEffect, useRef } from "react";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";
import "./Todo.css";

function TodoHeader() {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDesc, setTodoDesc] = useState("");
  const [todos, setTodos] = useState([]);
  const [todoColor, setTodoColor] = useState("");
  const ref = useRef(null);
  const themeColor = useSelector((state) => state.color);

  useEffect(() => {
    let todoString = localStorage.getItem("todos");
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem("todos"));
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (e) => {
    e.preventDefault();
    if (todoTitle && todoDesc) {
      setTodos([...todos, { id: uuidv4(), todoTitle, todoDesc, todoColor }]);
      setTodoTitle("");
      setTodoDesc("");
      setTodoColor("");
    }
  };

  const deleteTodo = (e, id) => {
    let newTodo = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodo);
  };

  const editTodo = (e, id) => {
    const todoToEdit = todos.find((item) => item.id === id);
    if (todoToEdit) {
      setTodoTitle(todoToEdit.todoTitle);
      setTodoDesc(todoToEdit.todoDesc);
      setTodoColor(todoToEdit.todoColor);
      deleteTodo(e, id);
    }
  };

  const todoTitleOnChange = (e) => {
    setTodoTitle(e.target.value);
  };
  const todoDescOnChange = (e) => {
    setTodoDesc(e.target.value);
  };

  const todoColorOnChange = (e) => {
    setTodoColor(e.target.value);
  };

  return (
    <>
      <div className="w-full h-[-webkit-fill-available]">
        <form
          onSubmit={addTodo}
          className=" absolute  left-0 z-[50] w-full py-1 flex items-center justify-center gap-3 max-[500px]:px-[15px] max-[500px]:pt-2
        bg-[#212121]"
        >
          <span className="flex gap-3 responsiveInput1">
            <input
              style={{
                boxShadow: `0px 0px 6px 3px ${
                  themeColor ? themeColor : "#00000052"
                }`,
              }}
              className="text-white py-2 px-4 rounded-xl w-32 bg-zinc-600"
              type="text"
              placeholder="add Title"
              value={todoTitle}
              onChange={todoTitleOnChange}
            />
            <input
              style={{
                boxShadow: `0px 0px 6px 3px ${
                  themeColor ? themeColor : "#00000052"
                }`,
              }}
              value={todoDesc}
              onChange={todoDescOnChange}
              className="py-2 px-4 rounded-xl bg-zinc-600 text-white max-[500px]:w-[90%]"
              type="text"
              placeholder="add task..."
            />
          </span>
          <span className="flex gap-3 responsiveInput2">
            <input
              style={{
                boxShadow: `0px 0px 6px 3px ${
                  themeColor ? themeColor : "#00000052"
                }`,
              }}
              className="text-white py-2 px-4 rounded-xl w-32 bg-zinc-600"
              type="text"
              placeholder="color.."
              value={todoColor}
              onChange={todoColorOnChange}
            />
            <button
              // onClick={addTodo}
              type="submit"
              style={{
                boxShadow: `0px 0px 6px 3px ${
                  themeColor ? themeColor : "#00000052"
                }`,
              }}
              className="bg-zinc-300 hover:bg-zinc-400 active:bg-zinc-700 active:text-white py-2 px-4 rounded-xl"
            >
              Add
            </button>
          </span>
        </form>

        {/* Adding Todo Items */}
        <div
          style={{ height: "-webkit-fill-available" }}
          className="custom-scrollbar fixed top-[9rem] left-0 flex flex-row gap-10 overflow-x-hiden overflow-y-auto p-3 w-full z-10  flex-wrap max-[500px]:top-[10rem]"
        >
          <div ref={ref} className="mt-10 w-full flex flex-wrap gap-2">
            <Todo
              todos={todos}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
              reference={ref}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoHeader;
