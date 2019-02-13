import  { addNotes }  from '../actions';
import { fetchCall } from '../utils/api';

export const getNotes = (url) => {
  return async (dispatch) => {
    const data = await fetchCall(url)
    console.log('from thunk', data)
    dispatch(addNotes(data))   
  }
}