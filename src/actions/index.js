import axios from "axios";

const ROOT_URL = `https://personal-library--glyn.herokuapp.com/api`;

export const FETCH_BOOKS = "fetch_books";
export const FETCH_BOOK = "fetch_book";

export function fetchBooks() {
  const request = axios.get(`${ROOT_URL}/books`);
  return {
    type: FETCH_BOOKS,
    payload: request
  };
}

export function fetchBook(id) {
  const request = axios.get(`${ROOT_URL}/books/${id}`);
  return {
    type: FETCH_BOOK,
    payload: request
  };
}
