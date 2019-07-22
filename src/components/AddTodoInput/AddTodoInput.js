import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './AddTodoInput.css';

const AddTodoInput = ({ addTodo }) => {
  const [todo, setTodo] = useState('');

  const handleOnInputChange = event => {
    if (event.target.value.length > 40) return;
    setTodo(event.target.value);
  };

  const addTodoFromInput = event => {
    event.preventDefault();
    addTodo(todo);
    setTodo('');
  };

  return (
    <form className="add-todo" onSubmit={addTodoFromInput}>
      <input
        className="add-todo--text"
        type="text"
        placeholder="What needs to be done?"
        value={todo}
        onChange={handleOnInputChange}
      />
      <input
        className="add-todo--submit"
        type="submit"
        value="+"
        onChange={handleOnInputChange}
      />
    </form>
  );
};

AddTodoInput.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default AddTodoInput;
