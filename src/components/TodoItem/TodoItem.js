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
    const { id, content, complete } = this.props;
    return (
      <div>
        <span>
          {content}
          <button onClick={() => this.handleRemoveTodo(id)}>&times;</button>
          <button onClick={() => this.handleCompleteTodo(id)}>complete</button>
          {complete ? <div>completed!</div> : <div>not completed!</div>}
        </span>
      </div>
    );
  }
}

export default TodoItem;
