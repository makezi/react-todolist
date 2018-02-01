import React from "react";

const Tab = props => {
  return (
    <button
      className={`tab ${props.isActive ? "active" : ""}`}
      index={props.index}
      onClick={() => props.onClick(props.tabIndex)}
    >
      {props.children}
    </button>
  );
};

export default Tab;
