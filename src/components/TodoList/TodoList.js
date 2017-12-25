import React from "react";
import TodoItem from "../../components/TodoItem/TodoItem";

function TodoList({ todos }) {
  return (
    <div>
      {todos.map(todo => (
        <TodoItem key={todo.id} id={todo.id} content={todo.content} />
      ))}
    </div>
  );
}

export default TodoList;
