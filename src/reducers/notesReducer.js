import { ADD_NEW_NOTE, ADD_ALL_NOTES, UPDATE_NOTE, DELETE_NOTE } from "../actions";

export function notesReducer(state = [], action) {
  switch (action.type) {
    case ADD_NEW_NOTE:
      return [...state, action.newNote];
    case ADD_ALL_NOTES:
      return action.notes
    case UPDATE_NOTE:
      const index = state.findIndex(note => note.id == action.updatedNote.id);
      let tempNotes = state.slice();
      tempNotes.splice(index, 1, action.updatedNote);
      return tempNotes;
    case DELETE_NOTE:
      return state.filter(note => note.id !== action.deletedNoteId);
    default:
      return state;
  }
}