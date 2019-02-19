import * as actions from './';
describe('actions', () => {
  let note = { text: 'note', id: 45 };
  let notes = [note, note, note, note];
  it('should return an addNewNote action and correct value and type', () => {
    //setup
    const expected = { newNote: note, type: actions.ADD_NEW_NOTE };
    //execution
    const result = actions.addNewNote(note);
    //expectation
    expect(result).toEqual(expected);
  });

  it('should return an addAllNotes action correct value and type', () => {
    //setup
    const expected = { notes, type: actions.ADD_ALL_NOTES };
    //execution
    const result = actions.addAllNotes(notes);
    //expectation
    expect(result).toEqual(expected);
  });

  it('should return an setLoading action with correct type and true value', () => {
    //setup
    const expected = { isLoading: true, type: actions.SET_LOADING };
    //execution
    const result = actions.setLoading(true);
    //expectation
    expect(result).toEqual(expected);
  });

  it('should return an setLoading action with correct type and false value', () => {
    //setup
    const expected = { isLoading: false, type: actions.SET_LOADING };
    //execution
    const result = actions.setLoading(false);
    //expectation
    expect(result).toEqual(expected);
  });

  it('should return an setLoading action with correct type and false value', () => {
    //setup
    const expected = { error: 'Could not Post', type: actions.SET_ERROR };
    //execution
    const result = actions.setError('Could not Post');
    //expectation
    expect(result).toEqual(expected);
  });

  it('should return an updateNote action with correct type and value', () => {
    //setup
    const expected = { updatedNote: note, type: actions.UPDATE_NOTE };
    //execution
    const result = actions.updateNote(note);
    //expectation
    expect(result).toEqual(expected);
  });

  it('should return an removeNote action with correct type and value', () => {
    //setup
    const expected = { deletedNoteId: 45, type: actions.DELETE_NOTE };
    //execution
    const result = actions.removeNote(note.id);
    //expectation
    expect(result).toEqual(expected);
  });
});
