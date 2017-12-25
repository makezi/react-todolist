import React, { Component } from "react";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
  }

  handleRemoveTodo(id) {
    this.props.removeTodo(id);
  }

  render() {
    const { content, id } = this.props;
    return (
      <div>
        <span>
          {content}
          <button onClick={() => this.handleRemoveTodo(id)}>
            &times;
          </button>
        </span>
      </div>
    );
  }
}

export default TodoItem;
