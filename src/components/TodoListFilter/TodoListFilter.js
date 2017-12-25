import React, { Component } from "react";

class TodoListFilter extends Component {
  constructor(props) {
    super(props);
    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(filter) {
    this.props.onFilterChange(filter);
  }

  render() {
    const { todos } = this.props;
    const todosLeft = todos.reduce((total, todo) => {
      return total + (todo.complete ? 0 : 1);
    }, 0);
    return (
      <div>
        <span>{todosLeft} items left</span>
        <button onClick={() => this.handleFilter("SHOW_ALL")}>All</button>
        <button onClick={() => this.handleFilter("SHOW_ACTIVE")}>Active</button>
        <button onClick={() => this.handleFilter("SHOW_COMPLETED")}>
          Completed
        </button>
      </div>
    );
  }
}

export default TodoListFilter;
