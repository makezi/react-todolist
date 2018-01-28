import React from "react";
import PropTypes from "prop-types";
import { Filters } from "../../constants";

const FilterButtons = ({ setFilter }) => {
  // const todosLeft = todos.reduce((total, todo) => {
  //   return total + (todo.completed ? 0 : 1);
  // }, 0);
  return (
    <div>
      {/* <span>{todosLeft} todo(s) left</span> */}
      <button onClick={() => setFilter(Filters.SHOW_ALL)}>
        All
      </button>
      <button onClick={() => setFilter(Filters.SHOW_ACTIVE)}>
        Active
      </button>
      <button onClick={() => setFilter(Filters.SHOW_COMPLETED)}>
        Completed
      </button>
      {/* {todos.length - todosLeft > 0 ? (
        <button onClick={() => clearCompleted()}>Clear Completed</button>
      ) : null} */}
    </div>
  );
};

FilterButtons.propTypes = {
  // todos: PropTypes.array.isRequired,
  setFilter: PropTypes.func.isRequired,
  // clearCompleted: PropTypes.func.isRequired
};

export default FilterButtons;
