import React, { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("All");
  const [filteredTodos, setFilterTodos] = useState([]);
  const [update, setUpdate] = useState(null);

  useEffect(() => {
    const filterHandler = () => {
      switch (status) {
        case "Completed":
          setFilterTodos(todos.filter((todo) => todo.completed === true));
          break;
        case "Uncompleted":
          setFilterTodos(todos.filter((todo) => todo.completed === false));
          break;
        default:
          setFilterTodos(todos);
          break;
      }
    };
    filterHandler();
  }, [todos, status]);

  return (
    <>
      <TodoForm inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} setStatus={setStatus} update={update} setUpdate={setUpdate} />
      <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} setInputText={setInputText} setUpdate={setUpdate} />
    </>
  );
}

export default App;
