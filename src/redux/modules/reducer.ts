import { combineReducers } from "redux";
import auth from "./auth";
import books from "./books";

const reducer = (routerReducer: any) =>
  combineReducers({
    auth,
    books,
    router: routerReducer,
  });

export default reducer;
