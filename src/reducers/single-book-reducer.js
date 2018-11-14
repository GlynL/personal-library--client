import { FETCH_BOOK, CLEAR_BOOK, ADD_COMMENT } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_BOOK:
      return action.payload.data;
    case ADD_COMMENT:
      return action.payload.data;
    case CLEAR_BOOK:
      return {};
    default:
      return state;
  }
}
