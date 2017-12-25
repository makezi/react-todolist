import React, { Component } from "react";
import "./App.css";
import InputBar from "./components/InputBar/InputBar";
import TodoList from "./components/TodoList/TodoList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, content: "learn react!" },
        { id: 2, content: "finish millionaire fastlane!" }
      ]
    };
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(todo) {
    const newTodos = this.state.todos;
    newTodos.push({ id: newTodos.length + 1, content: todo });
    this.setState({
      todos: newTodos
    });
  }

  render() {
    return (
      <div className="App">
        <InputBar addTodo={this.addTodo} />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
