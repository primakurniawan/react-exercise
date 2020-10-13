import { combineReducers } from "redux";

import isLogged from "./isLogged";
import todos from "./todos";

const allReducers = combineReducers({
  isLogged,
  todos,
});

export default allReducers;
