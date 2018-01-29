import React from "react";
import PropTypes from "prop-types";
import { VisibilityFilters } from "../../constants";

const FilterButtons = ({ setFilter }) => {
  return (
    <div>
      <button onClick={() => setFilter(VisibilityFilters.SHOW_ALL)}>
        All
      </button>
      <button onClick={() => setFilter(VisibilityFilters.SHOW_ACTIVE)}>
        Active
      </button>
      <button onClick={() => setFilter(VisibilityFilters.SHOW_COMPLETED)}>
        Completed
      </button>
    </div>
  );
};

FilterButtons.propTypes = {
  setFilter: PropTypes.func.isRequired,
};

export default FilterButtons;
