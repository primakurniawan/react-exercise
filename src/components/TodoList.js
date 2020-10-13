import React, { useContext } from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

import { TodosContext } from "./../TodosContext";

const TodoList = (props) => {
  const [todos, setTodos] = useContext(TodosContext);

  const getStyle = () => {
    return {
      listStyle: "none",
    };
  };

  const markComplete = (id) => {
    setTodos([
      ...todos.map((e) => {
        if (e.id == id) e.complete = !e.complete;
        return e;
      }),
    ]);
  };

  const del = (id) => {
    setTodos([...todos.filter((e) => e.id != id)]);
  };
  return (
    <ul style={getStyle()}>
      {todos.length === 0 && <li>Please add item</li>}
      {todos.map((e, i) => {
        return (
          <TodoItem todo={e} key={i} markComplete={markComplete} delete={del} />
        );
      })}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
};

export default TodoList;
