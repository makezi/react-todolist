import React, { Component } from "react";
import TodoListItem from "../../components/TodoListItem/TodoListItem";
import TodoListFilter from "../../components/TodoListFilter/TodoListFilter";
import PropTypes from "prop-types";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "SHOW_ALL"
    };
    this.onFilterChange = this.onFilterChange.bind(this);
    this.filterTodo = this.filterTodo.bind(this);
  }

  onFilterChange(filter) {
    this.setState({ filter });
  }

  filterTodo(todos) {
    switch (this.state.filter) {
      case "SHOW_COMPLETED":
        return todos.filter(todo => todo.complete);
      case "SHOW_ACTIVE":
        return todos.filter(todo => !todo.complete);
      case "SHOW_ALL":
      default:
        return todos;
    }
  }

  render() {
    const { todos, removeTodo, completeTodo, clearCompletedTodo } = this.props;
    return (
      <div className="todo-list">
        {this.filterTodo(todos).map(todo => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
            completeTodo={completeTodo}
          />
        ))}
        <TodoListFilter
          todos={todos}
          onFilterChange={this.onFilterChange}
          onClearCompletedTodo={clearCompletedTodo}
        />
      </div>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.array,
  removeTodo: PropTypes.func,
  completeTodo: PropTypes.func,
  clearCompleteTodo: PropTypes.func
};

export default TodoList;
