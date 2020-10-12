import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import TodoList from "./components/TodoList";
import TodoAdd from "./components/TodoAdd";
import TodoFilter from "./components/TodoFilter";

import Header from "./layout/Header";
import About from "./pages/About";
import Detail from "./pages/Detail";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todosToShow, setTodosToShow] = useState([]);

  useEffect(() => {
    setTodosToShow([...todos]);
  }, [todos]);

  const markComplete = (id) => {
    setTodos([
      ...todos.map((e) => {
        if (e.id == id) e.complete = !e.complete;
        return e;
      }),
    ]);
  };

  const del = (id) => {
    console.log(id);
    setTodos([...todos.filter((e) => e.id != id)]);
  };

  const addTodo = (todoToAdd) => {
    console.log("It's work");
    setTodos([
      ...todos,
      {
        id: Date.now(),
        todo: todoToAdd,
        complete: false,
      },
    ]);
    setTodosToShow([...todos]);
  };

  const filterTodo = (todoToSearch, filteredByComplete) => {
    setTodosToShow(
      todos.filter((e) => {
        if (filteredByComplete == 0) return e;
        else if (filteredByComplete == 1) return e.complete == true;
        else if (filteredByComplete == -1) return e.complete == false;
      })
    );

    if (todoToSearch != "") {
      setTodosToShow(
        todos.filter((e) => e.todo.toLowerCase().includes(todoToSearch.trim()))
      );
    }
  };

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <TodoFilter filterTodo={filterTodo} />
            <TodoList
              todos={todosToShow}
              markComplete={markComplete}
              delete={del}
            />
            <TodoAdd addTodo={addTodo} />
          </Route>
          <Route path="/about" component={About} />
          <Route path="/detail/:id" component={Detail} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
