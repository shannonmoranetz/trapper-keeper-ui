import { notesReducer } from "./notesReducer";
import * as actions from "../actions";

describe("notesReducer", () => {
  let note1 = { text: "note", isCompleted: false, id: 1 };
  let note2 = { text: "note", isCompleted: false, id: 2 };
  let note3 = { text: "note", isCompleted: false, id: 3 };
  let note4 = { text: "note", isCompleted: false, id: 4 };
  let note5 = { text: "note", isCompleted: false, id: 5 };
  let notes = [note1, note2, note3, note4];

  it("should add a note to notes array", () => {
    const result = notesReducer(notes, actions.addNewNote(note5));
    expect(result.length).toBe(5);
    expect(result.some(note => note.id === 5)).toBe(true);
  });

  it("should add one note when there is not state", () => {
    const result = notesReducer(undefined, actions.addNewNote(note4));
    expect(result.length).toBe(1);
    expect(result.shift()).toBe(note4);
  });

  it("should add all notes to empty state", () => {
    const result = notesReducer(undefined, actions.addAllNotes(notes));
    expect(result.length).toBe(4);
  });

  it("should remove item from state", () => {
    const result = notesReducer(notes, actions.removeNote(note1.id));
    expect(result.length).toBe(3);
    expect(result.some(note => note.id === 1)).toBe(false);
  });

  it("should update an item in state", () => {
    const oldState = notesReducer(notes, actions.addAllNotes(notes));
    const updatedNote = { ...note1, isCompleted: true };
    const result = notesReducer(oldState, actions.updateNote(updatedNote));

    expect(result.find(note => note.id === 1).isCompleted).toBe(true);
  });

  it('should return empty array if given wrong action', () => {
    const expected = []
    const result = notesReducer(undefined, actions.setError('Could not Post'))

    expect(result).toEqual(expected)
  })
});
