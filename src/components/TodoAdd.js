import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { addTodo } from "./../actions";

const TodoAdd = () => {
  const [todoToAdd, setTodoToAdd] = useState("");

  const dispatch = useDispatch();

  const onChange = (e) => {
    setTodoToAdd(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTodo({
        id: Date.now(),
        todo: todoToAdd,
        complete: false,
      })
    );
    setTodoToAdd("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="todoToAdd"
        onChange={onChange}
        placeholder="Add Todo"
        value={todoToAdd}
      />
      <input type="submit" />
    </form>
  );
};

export default TodoAdd;
