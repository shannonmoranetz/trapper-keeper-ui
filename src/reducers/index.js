import { combineReducers } from "redux";
import { notesReducer } from "./notesReducer";
import { errorReducer } from './errorReducer';
import { loadingReducer } from './loadingReducer';
import { currentNoteReducer } from './currentNoteReducer';
import { showPopUpReducer } from './showPopUpReducer';


const rootReducer = combineReducers({
  notes: notesReducer,
  isLoading: loadingReducer,
  error: errorReducer,
  currentNote: currentNoteReducer,
  showPopUp: showPopUpReducer
});

export default rootReducer;
