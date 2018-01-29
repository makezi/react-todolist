import React from "react";
import PropTypes from "prop-types";

const ClearCompletedButton = ({ clearCompleted }) => {
  return <button onClick={clearCompleted}>Clear</button>;
};

PropTypes.propTypes = {
  clearCompleted: PropTypes.func.isRequired
};

export default ClearCompletedButton;
