import React, { Component } from "react";
import PropTypes from "prop-types";
import "./TodoListFilter.css";

class TodoListFilter extends Component {
  constructor(props) {
    super(props);
    this.handleFilter = this.handleFilter.bind(this);
    this.handleClearCompletedTodo = this.handleClearCompletedTodo.bind(this);
  }

  handleFilter(filter) {
    this.props.onFilterChange(filter);
  }

  handleClearCompletedTodo() {
    this.props.onClearCompletedTodo();
  }

  render() {
    const { todos } = this.props;
    const todosLeft = todos.reduce((total, todo) => {
      return total + (todo.complete ? 0 : 1);
    }, 0);
    const todosCompleted = todos.length - todosLeft;
    return (
      <div className="todo-filter-container">
        <span className="todo-filter-itemsleft">{todosLeft} items left</span>
        <div className="todo-filters">
          <button
            className="todo-filter"
            onClick={() => this.handleFilter("SHOW_ALL")}
          >
            All
          </button>
          <button
            className="todo-filter"
            onClick={() => this.handleFilter("SHOW_ACTIVE")}
          >
            Active
          </button>
          <button
            className="todo-filter"
            onClick={() => this.handleFilter("SHOW_COMPLETED")}
          >
            Completed
          </button>
        </div>
        {todosCompleted > 0 ? (
          <button
            className="todo-filter-completed"
            onClick={() => this.handleClearCompletedTodo()}
          >
            Clear completed
          </button>
        ) : null}
      </div>
    );
  }
}

TodoListFilter.propTypes = {
  todos: PropTypes.array,
  onFilterChange: PropTypes.func,
  onClearCompletedTodo: PropTypes.func
};

export default TodoListFilter;
