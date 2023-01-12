import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filteredTodos, setInputText, setUpdate }) => {
  return (
    <>
      <div className="flex justify-center items-center">
        <ul className="min-w-[30%] my-14">
          {filteredTodos.map((todo) => (
            <Todo key={todo.id} todo={todo} todos={todos} setTodo={setTodos} filteredTodos={filteredTodos} setInputText={setInputText} setUpdate={setUpdate} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoList;
