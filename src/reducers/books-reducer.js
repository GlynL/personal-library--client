import { FETCH_BOOKS } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_BOOKS:
      let books = {};
      action.payload.data.forEach(book => {
        books[book._id] = book;
      });
      return books;
    default:
      return state;
  }
}
