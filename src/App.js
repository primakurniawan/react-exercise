import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import TodoList from "./components/TodoList";
import TodoAdd from "./components/TodoAdd";
import TodoFilter from "./components/TodoFilter";

import Header from "./layout/Header";
import About from "./pages/About";
import Detail from "./pages/Detail";
import "./App.css";

class App extends React.Component {
  state = {
    todos: [],
    todosToShow: [],
  };

  markComplete = (id) => {
    this.setState({
      todos: [
        ...this.state.todos.map((e) => {
          if (e.id == id) e.complete = !e.complete;
          return e;
        }),
      ],
    });
  };

  delete = (id) => {
    console.log(id);
    this.setState(
      {
        todos: [...this.state.todos.filter((e) => e.id != id)],
      },
      () => {
        this.setState({
          todosToShow: [...this.state.todos],
        });
      }
    );
  };

  addTodo = (todoToAdd) => {
    this.setState(
      {
        todos: [
          ...this.state.todos,
          {
            id: Date.now(),
            todo: todoToAdd,
            complete: false,
          },
        ],
      },
      () => {
        this.setState({
          todosToShow: [...this.state.todos],
        });
      }
    );
  };

  filterTodo = (todoToSearch, filteredByComplete) => {
    this.setState({
      todosToShow: this.state.todos.filter((e) => {
        if (filteredByComplete == 0) return e;
        else if (filteredByComplete == 1) return e.complete == true;
        else if (filteredByComplete == -1) return e.complete == false;
      }),
    });
    if (todoToSearch != "") {
      this.setState({
        todosToShow: this.state.todos.filter((e) =>
          e.todo.toLowerCase().includes(todoToSearch.trim())
        ),
      });
    }
  };

  componentDidMount = () => {
    fetch("./data/todos.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((todos) => {
        this.setState(
          {
            todos,
          },
          () => {
            this.setState({
              todosToShow: [...this.state.todos],
            });
          }
        );
      })
      .catch((e) => console.log(e));
  };

  useEffect = () => {
    this.setState(
      {
        todosToShow: [...this.state.todos],
      },
      []
    );
  };

  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <TodoFilter filterTodo={this.filterTodo} />
              <TodoList
                todos={this.state.todosToShow}
                markComplete={this.markComplete}
                delete={this.delete}
              />
              <TodoAdd addTodo={this.addTodo} />
            </Route>
            <Route path="/about" component={About} />
            <Route path="/detail/:id" component={Detail} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
