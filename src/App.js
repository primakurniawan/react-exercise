import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import TodoList from "./components/TodoList";
import TodoAdd from "./components/TodoAdd";
// import TodoFilter from "./components/TodoFilter";

import Header from "./layout/Header";
import About from "./pages/About";
import Detail from "./pages/Detail";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          {/* <TodoFilter /> */}
          <TodoList />
          <TodoAdd />
        </Route>
        <Route path="/about" component={About} />
        <Route path="/detail/:id" component={Detail} />
      </Switch>
    </Router>
  );
};

export default App;
