import React, { useState, useEffect } from 'react';
import uuidv1 from 'uuid';

import AddTodoInput from '../AddTodoInput';
import TodoList from '../TodoList';
import FilterTabs from '../FilterTabs';
import TodosRemainingText from '../TodosRemainingText';
import { VisibilityFilters } from '../../constants';
import './App.css';

const INITIAL_TODOS = JSON.parse(localStorage.getItem('todos')) || [
  { id: uuidv1(), todo: 'Practice guitar', completed: true },
  { id: uuidv1(), todo: 'Learn React', completed: false }
];

const App = () => {
  const [todos, setTodos] = useState(INITIAL_TODOS);
  const [filter, setFilter] = useState(VisibilityFilters.SHOW_ALL);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = todo => {
    const newTodos = [{ id: uuidv1(), todo, completed: false }, ...todos];
    setTodos(newTodos);
  };

  const deleteTodo = id => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  };

  const completeTodo = id => {
    const newTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  const calculateRemainingTodos = () =>
    todos.reduce((total, todo) => total + (!todo.completed ? 1 : 0), 0);

  return (
    <div className="app">
      <AddTodoInput addTodo={addTodo} />
      <TodoList
        todos={todos}
        filter={filter}
        deleteTodo={deleteTodo}
        completeTodo={completeTodo}
      />
      <div className="info">
        <TodosRemainingText todosLeft={calculateRemainingTodos()} />
      </div>
      <FilterTabs setFilter={setFilter} />
    </div>
  );
};

export default App;
