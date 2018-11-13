import { combineReducers } from "redux";
import BooksReducer from "./books-reducer";
import SingleBookReducer from "./single-book-reducer";

const rootReducer = combineReducers({
  books: BooksReducer,
  singleBook: SingleBookReducer
});

export default rootReducer;
