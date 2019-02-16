import React from "react";
import { shallow } from "enzyme";
import { App, mapDispatchToProps } from "./App";
import { getNotes } from "../../thunks";

jest.mock("../../thunks");
getNotes.mockReturnValue({
  title: "Hello",
  noteItems: [{ text: "world", id: 5, isCompleted: "true" }],
  id: 1
});

const getNotesMock = jest.fn();

describe("App", () => {
  let wrapper;
  window.fetch = jest.fn();
  beforeEach(() => {
    wrapper = shallow(<App getNotes={getNotesMock} />);
  });

  it("should match snapshot and not error", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call getNotes on componentDidMount", () => {
    expect(wrapper.instance().props.getNotes).toHaveBeenCalled();
  });

  describe("mapDispatchToProps", () => {
    let mockDispatch = jest.fn();
    let props = mapDispatchToProps(mockDispatch);

    it("should call dispatch with correct params", () => {
      //setup
      const expected = {
        title: "Hello",
        noteItems: [{ text: "world", id: 5, isCompleted: "true" }],
        id: 1
      };
      
      //execution
      props.getNotes();

      //expectation
      expect(mockDispatch).toHaveBeenCalledWith(expected);
    });
  });
});
