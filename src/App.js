import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import InputBar from "./components/InputBar/InputBar";
import TodoList from "./components/TodoList/TodoList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{ id: 1, content: "test", complete: false }]
    };
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.completeTodo = this.completeTodo.bind(this);
  }

  addTodo(todo) {
    const newTodos = this.state.todos;
    newTodos.push({
      id: Math.floor(Math.random() * 100000) + 1,
      content: todo,
      complete: false
    });
    this.setState({ todos: newTodos });
  }

  removeTodo(todoId) {
    let newTodos = this.state.todos;
    newTodos = newTodos.filter(todo => todo.id !== todoId);
    this.setState({ todos: newTodos });
  }

  completeTodo(todoId) {
    let newTodos = this.state.todos;
    let index = newTodos.findIndex(todo => todo.id === todoId);
    newTodos[index].complete = !newTodos[index].complete;
    this.setState({ todos: newTodos });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <InputBar addTodo={this.addTodo} />
        <TodoList
          todos={this.state.todos}
          removeTodo={this.removeTodo}
          completeTodo={this.completeTodo}
        />
      </div>
    );
  }
}

export default App;
