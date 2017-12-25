import React from "react";
import TodoItem from "../../components/TodoItem/TodoItem";

function TodoList({ todos, removeTodo, completeTodo }) {
  return (
    <div>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          content={todo.content}
          complete={todo.complete}
          removeTodo={removeTodo}
          completeTodo={completeTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;
