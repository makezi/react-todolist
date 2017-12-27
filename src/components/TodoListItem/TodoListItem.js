import React, { Component } from "react";
import PropTypes from "prop-types";
import "./TodoListItem.css";

class TodoListItem extends Component {
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
      <div className="todo-item">
        <div className="todo-item-content">
          <input
            type="checkbox"
            id={todo.id}
            checked={todo.complete}
            onChange={() => this.handleCompleteTodo(todo.id)}
          />
          <label for={todo.id}>{todo.content}</label>
        </div>
        <button
          className="todo-item-delete"
          onClick={() => this.handleRemoveTodo(todo.id)}
        >
          &times;
        </button>
      </div>
    );
  }
}

TodoListItem.propTypes = {
  todo: PropTypes.object,
  removeTodo: PropTypes.func,
  completeTodo: PropTypes.func
};

export default TodoListItem;
