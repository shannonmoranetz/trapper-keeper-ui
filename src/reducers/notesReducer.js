import { ADD_NEW_NOTE, ADD_ALL_NOTES } from "../actions";

export function notesReducer(state = [], action) {
  switch (action.type) {
    case ADD_NEW_NOTE:
      return [...state, action.newNote];
    case ADD_ALL_NOTES:
      return action.notes
    default:
      return state;
  }
}
