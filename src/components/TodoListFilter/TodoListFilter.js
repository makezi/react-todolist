import React, { Component } from "react";

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
      <div>
        <span>{todosLeft} items left</span>
        <button onClick={() => this.handleFilter("SHOW_ALL")}>All</button>
        <button onClick={() => this.handleFilter("SHOW_ACTIVE")}>Active</button>
        <button onClick={() => this.handleFilter("SHOW_COMPLETED")}>
          Completed
        </button>
        {todosCompleted > 0 ? (
          <button onClick={() => this.handleClearCompletedTodo()}>
            Clear completed
          </button>
        ) : null}
      </div>
    );
  }
}

export default TodoListFilter;
