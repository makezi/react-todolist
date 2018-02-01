import React from "react";
import PropTypes from "prop-types";
import "./TodosRemainingText.css";

const TodosRemainingText = ({ todosLeft }) => {
  return <div className="todos-left">{todosLeft} tasks remaining</div>;
};

PropTypes.propTypes = {
  todosLeft: PropTypes.number.isRequired
};

export default TodosRemainingText;
