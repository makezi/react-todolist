import React from "react";
import PropTypes from "prop-types";

const TodosRemainingText = ({ todosLeft }) => {
  return <div>{todosLeft} tasks remaining</div>;
};

PropTypes.propTypes = {
  todosLeft: PropTypes.number.isRequired
};

export default TodosRemainingText;
