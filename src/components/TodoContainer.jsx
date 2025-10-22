import React from "react";
import Todo from "./Todo";

function TodoContainer({ todos, delTodo }) {
  return (
    <div className="flex flex-col items-center w-full">
      {todos.map((todo, index) => (
        <Todo todo={todo} index={index} delTodo={delTodo} key={index} />
      ))}
    </div>
  );
}

export default TodoContainer;
