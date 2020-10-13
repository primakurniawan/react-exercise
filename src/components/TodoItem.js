import React from "react";
import PropTypes from "prop-types";

const TodoItem = (props) => {
  const { id, todo, complete } = props.todo;

  const getStyle = (isComplete) => {
    return {
      textDecoration: isComplete ? "line-through" : "none",
    };
  };
  return (
    <li style={getStyle(complete)} id={id}>
      <input
        type="checkbox"
        onChange={props.markComplete.bind(this, id)}
        checked={complete}
      />
      <span>{todo}</span>
      <button onClick={props.delete.bind(this, id)}>Delete</button>
    </li>
  );
};

export default TodoItem;

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delete: PropTypes.func.isRequired,
};
