// import React, { useState, useContext } from "react";
// import { TodosToShowContext } from "./../TodosContext";

// const TodoFilter = () => {
//   const [todosToShow, setTodosToShow] = useContext(TodosToShowContext);
//   const [todoToSearch, setTodoToSearch] = useState("");
//   const [filteredByComplete, setFilteredByComplete] = useState(0);

//   const filterTodo = (todoToSearch, filteredByComplete) => {
//     setTodosToShow(
//       todosToShow.filter((e) => {
//         if (filteredByComplete == 0) return e;
//         else if (filteredByComplete == 1) return e.complete == true;
//         else if (filteredByComplete == -1) return e.complete == false;
//       })
//     );

//     if (todoToSearch != "") {
//       setTodosToShow(
//         todosToShow.filter((e) =>
//           e.todo.toLowerCase().includes(todoToSearch.trim())
//         )
//       );
//     }
//   };

//   const onChangeSearch = (e) => {
//     setTodoToSearch(e.target.value);
//     filterTodo(todoToSearch, filteredByComplete);
//   };

//   const onChangeFilter = (e) => {
//     setFilteredByComplete(e.target.value);
//     filterTodo(todoToSearch, filteredByComplete);
//   };

//   return (
//     <>
//       <input
//         type="text"
//         name="todoToSearch"
//         placeholder="Search Todo"
//         onChange={onChangeSearch}
//         value={todoToSearch}
//       />
//       <select onChange={onChangeFilter} name="filteredByComplete">
//         <option value={0}>All</option>
//         <option value={-1}>Not Complete</option>
//         <option value={1}>Complete</option>
//       </select>
//     </>
//   );
// };

// export default TodoFilter;
