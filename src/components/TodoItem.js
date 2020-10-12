import React from "react";
import PropTypes from "prop-types";

class TodoItem extends React.Component {
  getStyle(isComplete) {
    return {
      textDecoration: isComplete ? "line-through" : "none",
    };
  }
  render() {
    const { id, todo, complete } = this.props.todo;
    return (
      <li style={this.getStyle(complete)} id={id}>
        <input
          type="checkbox"
          onChange={this.props.markComplete.bind(this, id)}
          checked={complete}
        />
        <span>{todo}</span>
        <button onClick={this.props.delete.bind(this, id)}>Delete</button>
      </li>
    );
  }
}

export default TodoItem;

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delete: PropTypes.func.isRequired,
};
