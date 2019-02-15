import { SHOW_POP_UP } from "../actions";

export function showPopUpReducer(state = false, action) {
  switch (action.type) {
    case SHOW_POP_UP:
      return action.shouldDisplay;
    default:
      return state;
  }
}
