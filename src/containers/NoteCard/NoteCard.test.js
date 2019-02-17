import React from "react";
import { shallow } from "enzyme";
import { NoteCard } from "./NoteCard";

describe("NoteCard", () => {
  let wrapper;
  let deleteNoteMock = jest.fn();
  const mockNote = {
    id: 1,
    title: "Best Note",
    noteItems: [{ text: "lala" }, { text: "hooray" }]
  };
  
  beforeEach(() => {
    wrapper = shallow(<NoteCard note={mockNote} deleteNote={deleteNoteMock} />);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
