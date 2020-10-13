import React from "react";
import TodoItem from "./TodoItem";

import { useSelector, useDispatch } from "react-redux";

import { deleteTodo, markComplete } from "./../actions";

const TodoList = (props) => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const getStyle = () => {
    return {
      listStyle: "none",
    };
  };

  const marking = (id) => {
    dispatch(markComplete(id));
  };

  const del = (id) => {
    dispatch(deleteTodo(id));
  };
  return (
    <ul style={getStyle()}>
      {todos.length === 0 && <li>Please add item</li>}
      {todos.map((e, i) => {
        return (
          <TodoItem todo={e} key={i} markComplete={marking} delete={del} />
        );
      })}
    </ul>
  );
};

export default TodoList;
