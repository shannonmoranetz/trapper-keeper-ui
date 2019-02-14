import { addAllNotes, setLoading, setError } from "../actions";
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
      dispatch(setError(error.message))
    }
  };
};

export const postNote = newNote => {
  return async dispatch => {
    const notes = await fetchCall(baseUrl, getOptions("POST", newNote));
    dispatch(addAllNotes(notes));
  };
};

// export const deleteNote = newNote => {
//   return async dispatch => {
//     const notes = await fetchCall(`${baseUrl}/${newNote.id}`, getOptions("DELETE", newNote));
//     dispatch(addNotes(notes));
//   };
// };
// export const putNote = newNote => {
//   return async dispatch => {
//     const notes = await fetchCall(`${baseUrl}/${newNote.id}`, getOptions("DELETE", newNote));
//     dispatch(addNotes(notes));
//   };
// };
