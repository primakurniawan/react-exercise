import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import TodoList from "./components/TodoList";
import TodoAdd from "./components/TodoAdd";
// import TodoFilter from "./components/TodoFilter";

import Header from "./layout/Header";
import About from "./pages/About";
import Detail from "./pages/Detail";

import { TodosProvider, TodosToShowProvider } from "./TodosContext";

import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todosToShow, setTodosToShow] = useState([]);

  useEffect(() => {
    setTodosToShow([...todos]);
  }, [todos]);

  return (
    <TodosProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            {/* <TodoFilter /> */}
            <TodoList todos={todosToShow} />
            <TodoAdd />
          </Route>
          <Route path="/about" component={About} />
          <Route path="/detail/:id" component={Detail} />
        </Switch>
      </Router>
    </TodosProvider>
  );
};

export default App;
