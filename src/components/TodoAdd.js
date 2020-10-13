import React, { useContext, useState } from "react";

import { TodosContext } from "./../TodosContext";

const TodoAdd = () => {
  const [todos, setTodos] = useContext(TodosContext);
  const [todoToAdd, setTodoToAdd] = useState("");

  const onChange = (e) => {
    setTodoToAdd(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        id: Date.now(),
        todo: todoToAdd,
        complete: false,
      },
    ]);
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
