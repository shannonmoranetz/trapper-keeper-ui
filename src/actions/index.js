
export const ADD_NOTE = "ADD_NOTE";
export const addNote = newNote => ({
  type: ADD_NOTE,
  newNote
});

export const ADD_NOTES = "ADD_NOTES";
export const addNotes = notes => ({
  type: ADD_NOTES,
  notes
});