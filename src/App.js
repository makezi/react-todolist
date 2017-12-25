import React, { Component } from "react";
import "./App.css";
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
      content: todo
    });
    this.setState({
      todos: newTodos
    });
  }

  removeTodo(todoId) {
    let newTodos = this.state.todos;
    newTodos = newTodos.filter(todo => todo.id !== todoId);
    this.setState({
      todos: newTodos
    });
  }

  completeTodo(todoId) {
    // Want to find a better way of updating values in state...
    let newTodos = this.state.todos;
    for (let i = 0; i < newTodos.length; i++) {
      if (newTodos[i].id === todoId) {
        newTodos[i].complete = !newTodos[i].complete;
      }
    }
    console.log(newTodos);
    this.setState({ todos: newTodos });
  }

  render() {
    return (
      <div className="App">
        <h1>todos</h1>
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
