import React from "react";
import PropTypes from "prop-types";
import TodoItem from "../TodoItem/TodoItem";
import { VisibilityFilters } from "../../constants";

function filterTodos(todos, filter) {
  switch (filter) {
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
    case VisibilityFilters.SHOW_ALL:
    default:
      return todos;
  }
}

const TodoList = ({ todos, filter, deleteTodo, completeTodo }) => {
  return (
    <ul className="todo-list">
      {filterTodos(todos, filter).map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          completeTodo={completeTodo}
        />
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  completeTodo: PropTypes.func.isRequired
};

export default TodoList;
