export const ADD_NEW_NOTE = 'ADD_NEW_NOTE';
export const addNewNote = newNote => ({
  type: ADD_NEW_NOTE,
  newNote
});

export const ADD_ALL_NOTES = 'ADD_ALL_NOTES';
export const addAllNotes = notes => ({
  type: ADD_ALL_NOTES,
  notes
});

export const SET_LOADING = 'SET_LOADING';
export const setLoading = isLoading => ({
  type: SET_LOADING,
  isLoading
});

export const SET_ERROR = 'SET_ERROR';
export const setError = error => ({
  type: SET_ERROR,
  error
});

export const UPDATE_NOTE = 'UPDATE_NOTE';
export const updateNote = updatedNote => ({
  type: UPDATE_NOTE,
  updatedNote
});

export const DELETE_NOTE = 'DELETE_NOTE';
export const removeNote = deletedNoteId => ({
  type: DELETE_NOTE,
  deletedNoteId
});
