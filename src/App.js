import React, { Component } from "react";
import InputBar from "./components/InputBar/InputBar";
import TodoList from "./components/TodoList/TodoList";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    const initTodos =
      localStorage.getItem("todos") !== null
        ? JSON.parse(localStorage.getItem("todos"))
        : [{ id: 1, content: "Clean the dishes", complete: false }];
    this.state = {
      todos: initTodos
    };
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.completeTodo = this.completeTodo.bind(this);
    this.clearCompletedTodo = this.clearCompletedTodo.bind(this);
  }

  addTodo(todo) {
    const newTodos = this.state.todos;
    newTodos.push({
      id: Math.floor(Math.random() * 100000) + 1,
      content: todo,
      complete: false
    });
    localStorage.setItem("todos", JSON.stringify(newTodos));
    this.setState({ todos: newTodos });
  }

  removeTodo(todoId) {
    let newTodos = this.state.todos;
    newTodos = newTodos.filter(todo => todo.id !== todoId);
    localStorage.setItem("todos", JSON.stringify(newTodos));
    this.setState({ todos: newTodos });
  }

  completeTodo(todoId) {
    let newTodos = this.state.todos;
    let index = newTodos.findIndex(todo => todo.id === todoId);
    newTodos[index].complete = !newTodos[index].complete;
    localStorage.setItem("todos", JSON.stringify(newTodos));
    this.setState({ todos: newTodos });
  }

  clearCompletedTodo() {
    let newTodos = this.state.todos;
    newTodos = newTodos.filter(todo => !todo.complete);
    localStorage.setItem("todos", JSON.stringify(newTodos));
    this.setState({ todos: newTodos });
  }

  render() {
    return (
      <div className="App">
        <InputBar addTodo={this.addTodo} />
        <TodoList
          todos={this.state.todos}
          removeTodo={this.removeTodo}
          completeTodo={this.completeTodo}
          clearCompletedTodo={this.clearCompletedTodo}
        />
      </div>
    );
  }
}

export default App;
