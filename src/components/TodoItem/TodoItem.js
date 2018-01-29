import React from "react";
import PropTypes from "prop-types";

const TodoItem = ({ todo, deleteTodo, completeTodo }) => {
  return (
    <div className="todo">
      <input
        type="checkbox"
        id={todo.id}
        defaultChecked={todo.completed}
        onClick={() => completeTodo(todo.id)}
      />
      <label htmlFor={todo.id}>{todo.todo}</label>
      <button onClick={() => deleteTodo(todo.id)}>&times;</button>
    </div>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  completeTodo: PropTypes.func.isRequired
};

export default TodoItem;
