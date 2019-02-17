import { getNotes, postNote } from './index';
import * as actions from '../actions';

describe('Thunks', () => {
  let mockDispatch;
  beforeEach(() => {
    mockDispatch = jest.fn();
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve('notes'),
        ok: true
      })
    );
  });
  describe("getNotes", () => {
    let thunk;
    beforeEach(() => {
      thunk = getNotes();
    });

    it("calls dispatch with setLoading", () => {
      thunk(mockDispatch);
      expect(mockDispatch).toHaveBeenCalledWith(actions.setLoading(true));
    });
  
    it('should dispatch setLoading(false) and addAllNotes(notes) if the response is ok', async () => {
      await thunk(mockDispatch);
      expect(mockDispatch).toHaveBeenCalledWith(actions.setLoading(false));
      expect(mockDispatch).toHaveBeenCalledWith(actions.addAllNotes('notes'));
    });
  
    it('should dispatch setError with an error message if the response is not ok', async () => {
      window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: false
      }))
      await thunk(mockDispatch);
      expect(mockDispatch).toHaveBeenCalledWith(actions.setError('Error fetching note'));
    });
  });
  
  describe("postNote", () => {
    let thunk;
    beforeEach(() => {
      thunk = postNote();
    });
  
    it("calls dispatch with setLoading", () => {
      thunk(mockDispatch);
      expect(mockDispatch).toHaveBeenCalledWith(actions.setLoading(true));
    });
  
    it('should dispatch setLoading(false) and addNewNote(note) if the response is ok', async () => {
      await thunk(mockDispatch);
      expect(mockDispatch).toHaveBeenCalledWith(actions.setLoading(false));
      expect(mockDispatch).toHaveBeenCalledWith(actions.addNewNote('notes'));
    });
  
    it('should dispatch setError with an error message if the response is not ok', async () => {
      window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: false
      }))
      const thunk = postNote();
      await thunk(mockDispatch);
      expect(mockDispatch).toHaveBeenCalledWith(actions.setError('Error posting note'));
    });
  });
});

