import { SET_LOADING } from '../actions';

export function loadingReducer(state = false, action) {
  switch (action.type) {
    case SET_LOADING:
      return action.isLoading;
    default:
      return state;
  }
}