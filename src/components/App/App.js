import React, { Component } from "react";
import AddTodoBar from "../AddTodoBar/AddTodoBar";
import TodoList from "../TodoList/TodoList";
import FilterFooter from "../FilterFooter/FilterFooter";
import { Filters } from "../../constants";

let todoId = 0;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{ id: todoId, todo: "Clean the dishes", completed: false }],
      filter: Filters.SHOW_ALL
    };
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.setFilter = this.setFilter.bind(this);
    this.clearCompleted = this.clearCompleted.bind(this);
  }

  addTodo(todo) {
    this.setState({
      todos: [...this.state.todos, { id: ++todoId, todo, completed: false }]
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
      <div>
        <AddTodoBar addTodo={this.addTodo} />
        <TodoList
          todos={this.state.todos}
          filter={this.state.filter}
          deleteTodo={this.deleteTodo}
          toggleTodo={this.toggleTodo}
        />
        <FilterFooter
          todos={this.state.todos}
          setFilter={this.setFilter}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;