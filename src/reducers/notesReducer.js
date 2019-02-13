import { ADD_NOTE } from "../actions";

export function notesReducer(state = [], action) {
  switch (action.type) {
    case ADD_NOTE:
      return [...state, action.newNote];
    default:
      return state;
  }
}
