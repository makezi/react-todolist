import React, { Component } from "react";
import PropTypes from "prop-types";

class InputBar extends Component {
  constructor(props) {
    super(props);
    this.state = { todo: "" };
    this.handleInput = this.handleInput.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  handleInput(event) {
    this.setState({ todo: event.target.value });
  }

  addTodo(event) {
    event.preventDefault();
    this.props.addTodo(this.state.todo);
    this.setState({ todo: "" });
  }

  render() {
    return (
      <form onSubmit={this.addTodo}>
        <input
          type="text"
          placeholder="What needs to be done?"
          value={this.state.todo}
          onChange={this.handleInput}
        />
        <input type="submit" value="+" onChange={this.handleInput} />
      </form>
    );
  }
}

InputBar.propTypes = {
  todo: PropTypes.object
};

export default InputBar;
