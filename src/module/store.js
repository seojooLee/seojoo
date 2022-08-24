import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";

import { MAIN, mainReducer } from "./appSlice";

const createRootReducer = () =>
  combineReducers({
    [MAIN]: mainReducer,
  });

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  // yield all([()]);
}

export default function createStore() {
  const store = configureStore({
    reducer: createRootReducer(),
    devTools: true,
    middleware: [sagaMiddleware],
  });

  sagaMiddleware.run(rootSaga);

  return store;
}
