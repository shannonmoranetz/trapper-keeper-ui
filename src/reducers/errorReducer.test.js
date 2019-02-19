import { errorReducer } from './errorReducer';
import { setError, setLoading } from '../actions';
describe('errorReducer', () => {
  it('should return error message when given correct type', () => {
    const result = errorReducer(undefined, setError('Did not Post'));
    expect(result).toEqual('Did not Post');
  });

  it('should return empty string when wrong action is given and there is no state', () => {
    const result = errorReducer(undefined, setLoading(null));
    expect(result).toEqual('');
  });

  it('should return state when wrong action is given', () => {
    const result = errorReducer('Did not Post', setLoading(null));
    expect(result).toEqual('Did not Post');
  });  

});
