import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { beerReducer } from "./beerReducer";

const rootReducer = combineReducers({
  beer: beerReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))