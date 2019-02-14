import { getNotes, postNotes } from './index';
import * as actions from '../actions';
import { fetchCall } from '../utils/api';


describe("getNotes", () => {
  let mockUrl;
  let mockDispatch;

  window.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve("stuff"),
      ok: true
    })
  );

  beforeEach(() => {
    mockDispatch = jest.fn();
  });

  it("calls dispatch with setLoading",  () => {
    const thunk = getNotes();
    thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(actions.setLoading(true));
  });
});