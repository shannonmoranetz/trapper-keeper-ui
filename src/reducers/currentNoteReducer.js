import { SET_CURRENT_NOTE } from "../actions";

export function currentNoteReducer(state = {}, action) {
  switch (action.type) {
    case SET_CURRENT_NOTE:
      return action.note;
    default:
      return state;
  }
}
