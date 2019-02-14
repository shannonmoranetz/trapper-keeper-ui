import { SET_ERROR } from '../actions';

export function errorReducer(state = '', action) {
  switch (action.type) {
    case SET_ERROR:
      return action.error;
    default:
      return state;
  }
}