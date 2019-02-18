import { getNotes, postNote, putNote, deleteNote } from './index';
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
  
    it('should dispatch setLoading(false) and addNewNote(notes) if the response is ok', async () => {
      await thunk(mockDispatch);
      expect(mockDispatch).toHaveBeenCalledWith(actions.setLoading(false));
      expect(mockDispatch).toHaveBeenCalledWith(actions.addNewNote('notes'));
    });
  
    it('should dispatch setError with an error message if the response is not ok', async () => {
      window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: false
      }))
      await thunk(mockDispatch);
      expect(mockDispatch).toHaveBeenCalledWith(actions.setError('Error posting note'));
    });
  });

  describe("putNote", () => {
    let thunk;
    beforeEach(() => {
      thunk = putNote({id: 1});
    });
  
    it("calls dispatch with setLoading", () => {
      thunk(mockDispatch);
      expect(mockDispatch).toHaveBeenCalledWith(actions.setLoading(true));
    });
  
    it('should dispatch setLoading(false) and updateNote(note) if the response is ok', async () => {
      await thunk(mockDispatch);
      expect(mockDispatch).toHaveBeenCalledWith(actions.setLoading(false));
      expect(mockDispatch).toHaveBeenCalledWith(actions.updateNote('notes'));
    });
  
    it('should dispatch setError with an error message if the response is not ok', async () => {
      window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: false
      }))
      await thunk(mockDispatch);
      expect(mockDispatch).toHaveBeenCalledWith(actions.setError('Error updating note'));
    });
  });

  describe("deleteNote", () => {
    let thunk;
    beforeEach(() => {
      thunk = deleteNote({id: 2});
    });
  
    it("calls dispatch with setLoading", () => {
      thunk(mockDispatch);
      expect(mockDispatch).toHaveBeenCalledWith(actions.setLoading(true));
    });
  
    it('should dispatch setLoading(false) and removeNote(2) if the response is ok', async () => {
      await thunk(mockDispatch);
      expect(mockDispatch).toHaveBeenCalledWith(actions.setLoading(false));
      expect(mockDispatch).toHaveBeenCalledWith(actions.removeNote(2));
    });
  
    it('should dispatch setError with an error message if the response is not ok', async () => {
      window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: false
      }))
      await thunk(mockDispatch);
      expect(mockDispatch).toHaveBeenCalledWith(actions.setError('Error deleting note'));
    });
  });
});

