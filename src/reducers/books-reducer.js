import { FETCH_BOOKS, DELETE_BOOK, ADD_BOOK, DELETE_BOOKS } from "../actions";

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
    case ADD_BOOK: {
      const book = action.payload.data;
      return { ...state, [book._id]: book };
    }
    case DELETE_BOOKS: {
      return {};
    }
    default:
      return state;
  }
}
