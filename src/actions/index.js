import axios from "axios";

const ROOT_URL = `https://personal-library--glyn.herokuapp.com/api`;

export const FETCH_BOOKS = "fetch_books";
export const FETCH_BOOK = "fetch_book";
export const DELETE_BOOK = "delete_book";
export const CLEAR_BOOK = "clear_book";
export const ADD_COMMENT = "add_comment";
export const ADD_BOOK = "add_book";
export const DELETE_BOOKS = "delete_books";

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

export function clearBook(id) {
  return {
    type: CLEAR_BOOK,
    payload: id
  };
}

export function deleteBook(id, callback) {
  axios.delete(`${ROOT_URL}/books/${id}`).then(callback);
  return {
    type: DELETE_BOOK,
    payload: id
  };
}

export function addComment(id, comment) {
  const request = axios.post(`${ROOT_URL}/books/${id}`, comment);
  return {
    type: ADD_COMMENT,
    payload: request
  };
}

export function addBook(book) {
  const request = axios.post(`${ROOT_URL}/books`, book);
  return {
    type: ADD_BOOK,
    payload: request
  };
}

export function deleteAllBooks() {
  const request = axios.delete(`${ROOT_URL}/books`);
  return {
    type: DELETE_BOOKS,
    payload: request
  };
}
