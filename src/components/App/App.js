import React, { Component } from "react";
import uuidv1 from "uuid";
import AddTodoInput from "../AddTodoInput/AddTodoInput";
import TodoList from "../TodoList/TodoList";
import FilterTabs from "../FilterTabs/FilterTabs";
import TodosRemainingText from "../TodosRemainingText/TodosRemainingText";
import { VisibilityFilters } from "../../constants";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: JSON.parse(localStorage.getItem("todos")) || [
        { id: uuidv1(), todo: "Practice guitar", completed: true },
        { id: uuidv1(), todo: "Learn React", completed: false }
      ],
      filter: VisibilityFilters.SHOW_ALL
    };
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.completeTodo = this.completeTodo.bind(this);
    this.clearCompleted = this.clearCompleted.bind(this);
    this.calculateRemainingTodos = this.calculateRemainingTodos.bind(this);
    this.setFilter = this.setFilter.bind(this);
  }

  componentDidUpdate() {
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
  }

  addTodo(todo) {
    console.log(todo);
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

  completeTodo(id) {
    this.setState({
      todos: this.state.todos.map(
        todo =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    });
  }

  clearCompleted() {
    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed)
    });
  }

  calculateRemainingTodos() {
    const todosLeft = this.state.todos.reduce((total, todo) => {
      return total + (todo.completed ? 0 : 1);
    }, 0);
    return todosLeft;
  }

  setFilter(filter) {
    console.log(filter);
    this.setState({ filter });
  }

  render() {
    return (
      <div className="app">
        <AddTodoInput addTodo={this.addTodo} />
        <TodoList
          todos={this.state.todos}
          filter={this.state.filter}
          deleteTodo={this.deleteTodo}
          completeTodo={this.completeTodo}
        />
        <div className="info">
          <TodosRemainingText todosLeft={this.calculateRemainingTodos()} />
        </div>
        <FilterTabs setFilter={this.setFilter} />
      </div>
    );
  }
}

export default App;
