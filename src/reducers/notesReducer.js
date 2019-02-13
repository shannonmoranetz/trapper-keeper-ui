import { ADD_NOTE, ADD_NOTES } from "../actions";

export function notesReducer(state = [], action) {
  switch (action.type) {
    case ADD_NOTE:
      return [...state, action.newNote];
    case ADD_NOTES:
      return action.notes
    default:
      return state;
  }
}
