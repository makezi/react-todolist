import React from "react";
import PropTypes from "prop-types";
import "./TodoItem.css";

const TodoItem = ({ todo, deleteTodo, completeTodo }) => {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        id={todo.id}
        defaultChecked={todo.completed}
        onClick={() => completeTodo(todo.id)}
      />
      <label htmlFor={todo.id}>
        <div className="todo-item--checkbox" />
        {todo.todo}
      </label>
      <button onClick={() => deleteTodo(todo.id)}>
        <i className="fas fa-trash" />
      </button>
    </div>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  completeTodo: PropTypes.func.isRequired
};

export default TodoItem;
