import React from "react";
import { FiCheck } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";

const Todo = ({ todo, setTodo, todos, setInputText, setUpdate }) => {
  const deleteHandler = () => {
    setTodo(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = () => {
    setTodo(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  const updateHandler = () => {
    setUpdate(todos.find((el) => el.id === todo.id));
    setInputText(todo.text);
  };

  return (
    <>
      <div className="flex m-2 text-2xl bg-white justify-between items-center">
        <li className={`flex-1 pl-4 ${todo.completed ? "line-through opacity-50" : ""}`}>{todo.text}</li>
        <button onClick={updateHandler} className="bg-purple-500 p-4 cursor-pointer text-base z-10">
          <BsPencilSquare />
        </button>
        <button onClick={completeHandler} className="bg-green-500 p-4 cursor-pointer text-base z-10">
          <FiCheck />
        </button>
        <button onClick={deleteHandler} className="bg-red-500 p-4 cursor-pointer text-base">
          <BsTrash />
        </button>
      </div>
    </>
  );
};

export default Todo;
