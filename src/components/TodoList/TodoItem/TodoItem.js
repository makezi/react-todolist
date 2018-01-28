import React from "react";
import PropTypes from "prop-types";

const TodoItem = ({ todo, deleteTodo, toggleTodo }) => {
  return (
    <div className="item">
      <input
        type="checkbox"
        id={todo.id}
        defaultChecked={todo.completed}
        onClick={() => toggleTodo(todo.id)}
      />
      <label htmlFor={todo.id}>{todo.todo}</label>
      <button onClick={() => deleteTodo(todo.id)}>&times;</button>
    </div>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired
};

export default TodoItem;
