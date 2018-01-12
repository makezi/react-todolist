import React from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem/TodoItem";
import { Filters } from "../../constants";

function filterTodos(todos, filter) {
  switch (filter) {
    case Filters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    case Filters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
    case Filters.SHOW_ALL:
    default:
      return todos;
  }
}

const TodoList = ({ todos, filter, deleteTodo, toggleTodo }) => {
  console.log(todos);
  return (
    <div>
      {filterTodos(todos, filter).map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
};

export default TodoList;