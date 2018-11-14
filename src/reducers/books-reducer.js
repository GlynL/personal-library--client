import { FETCH_BOOKS, DELETE_BOOK } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_BOOKS: {
      let books = {};
      action.payload.data.forEach(book => {
        books[book._id] = book;
      });
      return books;
    }
    case DELETE_BOOK: {
      const books = { ...state };
      delete books[action.payload];
      return books;
    }
    default:
      return state;
  }
}
