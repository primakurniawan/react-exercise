import React, { createContext, useState } from "react";

export const TodosContext = createContext();

export const TodosProvider = (props) => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      todo: "wow",
      complete: false,
    },
  ]);
  return (
    <TodosContext.Provider value={[todos, setTodos]}>
      {props.children}
    </TodosContext.Provider>
  );
};
