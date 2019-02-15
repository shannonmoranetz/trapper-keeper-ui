import { UPDATE_NOTE } from "../actions";

export function currentNoteReducer(state = {}, action) {
  switch (action.type) {
    case UPDATE_NOTE:
      return action.note;
    default:
      return state;
  }
}
