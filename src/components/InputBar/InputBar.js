import React, { Component } from "react";
import PropTypes from 'prop-types';

class InputBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: ""
    };
    this.handleInput = this.handleInput.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  handleInput(e) {
    this.setState({
      newTodo: e.target.value
    });
  }

  addTodo(e) {
    e.preventDefault();
    this.props.addTodo(this.state.newTodo);
    this.setState({
      newTodo: ""
    });
  }

  render() {
    return (
      <form onSubmit={this.addTodo}>
        <input
          type="text"
          placeholder="What needs to be done?"
          value={this.state.newTodo}
          onChange={this.handleInput}
        />
      </form>
    );
  }
}

InputBar.propTypes = {
  addTodo: PropTypes.func
};

export default InputBar;
