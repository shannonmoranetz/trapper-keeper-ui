import { combineReducers } from "redux";
import { notesReducer } from "./notesReducer";
import { errorReducer } from './errorReducer';
import { loadingReducer } from './loadingReducer';

const rootReducer = combineReducers({
  notes: notesReducer,
  isLoading: loadingReducer,
  error: errorReducer,
});

export default rootReducer;
