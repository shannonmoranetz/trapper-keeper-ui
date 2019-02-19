import React from "react";
import { shallow} from "enzyme";
import { NoteCard, mapDispatchToProps } from "./NoteCard";
import { deleteNote } from "../../thunks";
import { removeNote } from "../../actions";
jest.mock("../../thunks");
deleteNote.mockReturnValue(removeNote(1));

describe("NoteCard", () => {
  let wrapper;
  let deleteNoteMock = jest.fn();
  const mockNote = {
    id: 1,
    title: "Best Note",
    noteItems: [{ text: "lala" }, { text: "hooray" }]
  };

  beforeEach(() => {
    wrapper = shallow(<NoteCard note={mockNote} classes={{card:''}} deleteNote={deleteNoteMock} />)
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call delete note when clicked", () => {
    wrapper = shallow(<NoteCard note={mockNote} classes={{card:''}} deleteNote={deleteNoteMock} />)
    wrapper.find("WithStyles(IconButton)").simulate("click");
    expect(deleteNoteMock).toHaveBeenCalled();
  });

  describe("mapDispatchToProps", () => {
    const note = { text: "note", id: 1 };
    const mockDispatch = jest.fn()
    const props = mapDispatchToProps(mockDispatch)
    props.deleteNote(note)
    expect(deleteNote).toHaveBeenCalled()
  });
});
