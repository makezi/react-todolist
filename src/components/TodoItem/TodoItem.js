import React from "react";

function TodoItem({ id, content }) {
  return (
    <span>
      <p>{content}</p>
    </span>
  );
}

export default TodoItem;
