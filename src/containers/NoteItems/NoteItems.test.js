import React from "react";
import { NoteItems } from "./NoteItems";
import { shallow } from "enzyme";

describe("NoteItems", () => {
  let wrapper;
  let mockItems = [
    { text: "Dylan", id: 1 ,isCompleted:true},
    { text: "Justin", id: 2 ,isCompleted:true},
    { text: "Shannon", id: 3,isCompleted:false }
  ];

  beforeEach(() => {
    wrapper = shallow(<NoteItems classes={{divider:''}} noteItems={mockItems} />);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
