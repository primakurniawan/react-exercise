export const addTodo = (todo) => {
  return {
    type: "ADD_TODO",
    payload: todo,
  };
};
export const deleteTodo = (id) => {
  return {
    type: "DELETE_TODO",
    payload: id,
  };
};
export const markComplete = (id) => {
  return {
    type: "MARK_COMPLETE",
    payload: id,
  };
};

export const signIn = () => {
  return {
    type: "SIGN_IN",
  };
};
