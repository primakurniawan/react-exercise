import React from "react";
import PropTypes from "prop-types";

class TodoFilter extends React.Component {
  state = {
    todoToSearch: "",
    filteredByComplete: 0,
  };

  onChange = (e) => {
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => {
        this.props.filterTodo(
          this.state.todoToSearch,
          this.state.filteredByComplete
        );
      }
    );
  };

  render() {
    return (
      <>
        <input
          type="text"
          name="todoToSearch"
          placeholder="Search Todo"
          onChange={this.onChange}
          value={this.state.todoToSearch}
        />
        <select onChange={this.onChange} name="filteredByComplete">
          <option value={0}>All</option>
          <option value={-1}>Not Complete</option>
          <option value={1}>Complete</option>
        </select>
      </>
    );
  }
}

TodoFilter.propTypes = {
  filterTodo: PropTypes.func.isRequired,
};

export default TodoFilter;
