import {
  addAllNotes,
  setLoading,
  setError,
  addNewNote,
  updateNote,
  removeNote
} from "../actions";
import { fetchCall } from "../utils/api";

const baseUrl = "http://localhost:3001/notes";

export const getOptions = (method, data) => ({
  method,
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(data)
});

export const getNotes = () => {
  return async dispatch => {
    try {
      dispatch(setLoading(true));
      const notes = await fetchCall(baseUrl);
      dispatch(setLoading(false));
      dispatch(addAllNotes(notes));
    } catch (error) {
      dispatch(setError("Error fetching notes"));
    }
  };
};

export const postNote = newNote => {
  return async dispatch => {
    try {
      dispatch(setLoading(true));
      let note = await fetchCall(baseUrl, getOptions("POST", newNote));
      dispatch(setLoading(false));
      dispatch(addNewNote(note));
    } catch (error) {
      dispatch(setError(error.message));
    }
  };
};

export const putNote = updatedNote => {
  return async dispatch => {
    try {
      dispatch(setLoading(true));
      const note = await fetchCall(
        `${baseUrl}/${updatedNote.id}`,
        getOptions("PUT", updatedNote)
      );
      dispatch(setLoading(false));
      dispatch(updateNote(note));
    } catch (error) {
      dispatch(setError(error.message));
    }
  };
};

export const deleteNote = newNote => {
  return async dispatch => {
    try {
      dispatch(setLoading(true));
      await fetchCall(`${baseUrl}/${newNote.id}`, { method: 'DELETE' });
      dispatch(setLoading(false));
      dispatch(removeNote(newNote.id));
    } catch (error) {
      dispatch(setError(error.message));
    }
  };
};
