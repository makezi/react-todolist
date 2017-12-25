import React, { Component } from "react";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
    this.handleCompleteTodo = this.handleCompleteTodo.bind(this);
  }

  handleRemoveTodo(id) {
    this.props.removeTodo(id);
  }

  handleCompleteTodo(id) {
    this.props.completeTodo(id);
  }

  render() {
    const { todo } = this.props;
    return (
      <div>
        <span>
          <input
            type="checkbox"
            checked={todo.complete}
            onChange={() => this.handleCompleteTodo(todo.id)}
          />
          {todo.content}
          <button onClick={() => this.handleRemoveTodo(todo.id)}>
            &times;
          </button>
        </span>
      </div>
    );
  }
}

export default TodoItem;
