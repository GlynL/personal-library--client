import { FETCH_BOOK } from "../actions";

export default function(state = {}, action) {
  console.log(action.type);
  switch (action.type) {
    case FETCH_BOOK:
      return action.payload.data;
    default:
      return state;
  }
}
