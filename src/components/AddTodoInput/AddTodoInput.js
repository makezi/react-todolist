import React, { Component } from "react";
import PropTypes from "prop-types";
import "./AddTodoInput.css";

class AddTodoInput extends Component {
  constructor(props) {
    super(props);
    this.state = { todo: "" };
    this.handleInput = this.handleInput.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  handleInput(e) {
    if (e.target.value.length > 40) return;
    this.setState({ todo: e.target.value });
  }

  addTodo(e) {
    e.preventDefault();
    this.props.addTodo(this.state.todo);
    this.setState({ todo: "" });
  }

  render() {
    return (
      <form className="add-todo" onSubmit={this.addTodo}>
        <input
          className="add-todo--text"
          type="text"
          placeholder="What needs to be done?"
          value={this.state.todo}
          onChange={this.handleInput}
        />
        <input
          className="add-todo--submit"
          type="submit"
          value="+"
          onChange={this.handleInput}
        />
      </form>
    );
  }
}

AddTodoInput.propTypes = {
  todo: PropTypes.object
};

export default AddTodoInput;
