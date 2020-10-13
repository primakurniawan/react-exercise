const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "DELETE_TODO":
      return [...state.filter((e) => action.payload !== e.id)];
    case "MARK_COMPLETE":
      return [
        ...state.map((e) => {
          if (e.id === action.payload) e.complete = !e.complete;
          return e;
        }),
      ];
    default:
      return state;
  }
};

export default todos;
