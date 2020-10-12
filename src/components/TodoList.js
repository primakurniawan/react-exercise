import React from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

class TodoList extends React.Component {
  getStyle() {
    return {
      listStyle: "none",
    };
  }

  render() {
    return (
      <ul style={this.getStyle()}>
        {this.props.todos.length === 0 && <li>Please add item</li>}
        {this.props.todos.map((e, i) => {
          return (
            <TodoItem
              todo={e}
              key={i}
              markComplete={this.props.markComplete}
              delete={this.props.delete}
            />
          );
        })}
      </ul>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
};

export default TodoList;
