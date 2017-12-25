import React, { Component } from "react";
import TodoListItem from "../../components/TodoListItem/TodoListItem";
import TodoListFilter from "../../components/TodoListFilter/TodoListFilter";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "SHOW_ALL"
    };
    this.onFilterChange = this.onFilterChange.bind(this);
    this.filterTodo = this.filterTodo.bind(this);
  }

  onFilterChange(filter) {
    this.setState({ filter });
  }

  filterTodo(todos) {
    switch (this.state.filter) {
      case "SHOW_COMPLETED":
        return todos.filter(todo => todo.complete);
      case "SHOW_ACTIVE":
        return todos.filter(todo => !todo.complete);
      case "SHOW_ALL":
      default:
        return todos;
    }
  }

  render() {
    const { todos, removeTodo, completeTodo } = this.props;
    return (
      <div>
        {this.filterTodo(todos).map(todo => (
          <TodoListItem
            key={todo.id}
            id={todo.id}
            content={todo.content}
            complete={todo.complete}
            removeTodo={removeTodo}
            completeTodo={completeTodo}
          />
        ))}
        <TodoListFilter todos={todos} onFilterChange={this.onFilterChange} />
      </div>
    );
  }
}

export default TodoList;
