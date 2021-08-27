import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import users from './users/usersReducer';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (f) => f;


const store = createStore(
  users,
  compose(applyMiddleware(thunk), devTools)
);

export default store;