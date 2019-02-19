import React from 'react';
import { shallow } from 'enzyme';
import { CreateNote } from './CreateNote';
import uuid from "uuid/v4";

jest.mock('uuid/v4');
let findMatchingNoteItemMock = jest.fn([{title: 'title', id: 1}]);
let mockEvent = { target: { value:'newTitle', closest: () => ({ id: 1 }) }};
const mockNoteItems = [
  { text: 'mockTitle', id: 1, isCompleted: false },
  { text: 'mockTitle2', id: 2, isCompleted: false }
];

describe('CreateNote', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CreateNote location={{ pathname: 'a' }}
                                  findMatchingNoteItem={findMatchingNoteItemMock}
    />);
  });

  it("should render with no error and match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have the proper default state', () => {
    expect(wrapper.state()).toEqual({
      title: '',
      noteItems: [],
      currentFocus: null
    });
  });

  it('should change the title and currentFocus in state when handleChangeTitle is called', () => {
    expect(wrapper.state('title')).toEqual('');
    expect(wrapper.state('currentFocus')).toEqual(null);
    wrapper.instance().handleChangeTitle(mockEvent);
    expect(wrapper.state('title')).toEqual('newTitle');
    expect(wrapper.state('currentFocus')).toEqual(null);
  });

  it('should change the matched item text when handleChangeNoteItems is called if the item already exists', () => {
    wrapper.setState({ noteItems: [{ text: 'old text', id: 1, isCompleted: true }] });
    wrapper.instance().handleChangeNoteItems(mockEvent);
    expect(wrapper.state('noteItems')[0].text).toEqual('newTitle');
  });

  it('should add a new item when handleChangeNoteItems is called if the item does not exist', () => {
    wrapper.instance().handleChangeNoteItems(mockEvent);
    expect(wrapper.state('noteItems')[0].text).toEqual('newTitle');
  });

  it('should update the state of noteItems and currentFocus when handleItemDelete is called', () => {
    wrapper.setState({ noteItems: mockNoteItems });
    wrapper.instance().handleItemDelete(mockEvent);
    expect(wrapper.state('noteItems')[0].id).toBe(2);    
  });

  it('should toggle an items completed value when handleToggleIsComplete is called', () => {
    wrapper.setState({ noteItems: [{ text: 'old text', id: 1, isCompleted: false }] });
    wrapper.instance().handleToggleIsComplete(mockEvent);
    expect(wrapper.state('noteItems')[0].isCompleted).toBe(true);
  });

  it('should return a matching noteItem when findMatchingNoteItem is called', () => {
    const result = wrapper.instance().findMatchingNoteItem(mockNoteItems, 2);
    expect(result).toEqual(mockNoteItems[1]);
  });

  it('should update the state of noteItems and currentFocus when updateNoteItems is called', () => {
    wrapper.instance().updateNoteItems(mockNoteItems, 1);
    expect(wrapper.state('noteItems')).toEqual(mockNoteItems);
    expect(wrapper.state('currentFocus')).toEqual(1);
  });

  it('should return an array of noteItems when getListItems is called', () => {
    wrapper.setState({ noteItems: mockNoteItems });
    const result = wrapper.instance().getListItems();
    expect(result.length).toBe(2);
  });

  it('should call getListItems when renderListItems is called', () => {
    wrapper.setState({ noteItems: mockNoteItems });
    const result = wrapper.instance().renderListItems();
    expect(result.length).toBe(3);
  });
}); 