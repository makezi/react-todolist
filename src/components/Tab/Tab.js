import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({ isActive, index, onClick, tabIndex, children }) => {
  return (
    <button
      className={`tab ${isActive ? 'active' : ''}`}
      index={index}
      onClick={() => onClick(tabIndex)}
    >
      {children}
    </button>
  );
};

Tab.propTypes = {
  isActive: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  tabIndex: PropTypes.number,
  children: PropTypes.node
};

Tab.defaultProps = {
  tabIndex: 0
};

export default Tab;
