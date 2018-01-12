import React from "react";
import PropTypes from "prop-types";

const TodoItem = ({ todo, deleteTodo, toggleTodo }) => {
  return (
    <div>
      <input
        type="checkbox"
        id={todo.id}
        defaultChecked={todo.completed}
        onClick={() => toggleTodo(todo.id)}
      />
      <label
        htmlFor={todo.id}
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.todo}
      </label>
      <button onClick={() => deleteTodo(todo.id)}>&times;</button>
    </div>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};

export default TodoItem;
