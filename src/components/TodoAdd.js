import React from "react";
import PropTypes from "prop-types";

class TodoAdd extends React.Component {
  state = {
    todoToAdd: "",
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.todoToAdd);
    this.setState({
      todoToAdd: "",
    });
  };
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name="todoToAdd"
          onChange={this.onChange}
          placeholder="Add Todo"
          value={this.state.todoToAdd}
        />
        <input type="submit" />
      </form>
    );
  }
}

TodoAdd.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default TodoAdd;
