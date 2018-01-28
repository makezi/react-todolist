import React, { Component } from "react";
import uuidv1 from "uuid";
import InputBar from "../InputBar/InputBar";
import TodoList from "../TodoList/TodoList";
import FilterButtons from "../FilterButtons/FilterButtons";
import { Filters } from "../../constants";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: JSON.parse(localStorage.getItem("todos")) || [
        { id: uuidv1(), todo: "Practice guitar", completed: true },
        { id: uuidv1(), todo: "Learn React", completed: false }
      ],
      filter: Filters.SHOW_ALL
    };
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.setFilter = this.setFilter.bind(this);
    this.clearCompleted = this.clearCompleted.bind(this);
  }

  componentDidUpdate() {
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
  }

  addTodo(todo) {
    if (!todo) return;
    this.setState({
      todos: [{ id: uuidv1(), todo, completed: false }, ...this.state.todos]
    });
  }

  deleteTodo(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  }

  toggleTodo(id) {
    this.setState({
      todos: this.state.todos.map(
        todo =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    });
  }

  setFilter(filter) {
    this.setState({ filter });
  }

  clearCompleted() {
    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed)
    });

  }

  render() {
    return (
      <div className="app">
        <InputBar addTodo={this.addTodo} />
        <TodoList
          todos={this.state.todos}
          filter={this.state.filter}
          deleteTodo={this.deleteTodo}
          toggleTodo={this.toggleTodo}
        />
        <FilterButtons setFilter={this.setFilter} />
      </div>
    );
  }
}

export default App;
