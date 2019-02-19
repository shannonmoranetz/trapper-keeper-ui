import React from 'react';
import { shallow } from 'enzyme';
import { CreateNote } from './CreateNote';
import uuid from "uuid/v4";

jest.mock('uuid/v4');
let findMatchingNoteItemMock = jest.fn([{title: 'title', id: 1}]);
let mockEvent = { target: { value:'newTitle', closest: () => ({ id: 1 }) }};
let noteItemsMock = [{ id: 1, text: 'test', isCompleted: false }];

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

  it.skip('should change the matched item text when handleChangeNoteItems is called if the item already exists', () => {
    wrapper.setState({ noteItems: [{ text: 'mockTitle', id: 1, isCompleted: true }] });
    wrapper.instance().handleChangeNoteItems(mockEvent);
    expect('matchedNoteItem.text').toEqual('mockTitle');
  });

  it.skip('should add a new item when handleChangeNoteItems is called if the item does not exist', () => {});

  it.skip('should update the state of noteItems and currentFocus when handleItemDelete is called', () => {
    const updateNoteItems = jest.fn();
    wrapper.setState({ noteItems: [{ text: 'mockTitle', id: 1, isCompleted: true }] });
    wrapper.instance().handleItemDelete(mockEvent);
  });

  it('should update the state of noteItems and currentFocus when updateNoteItems is called', () => {
    expect(wrapper.state('noteItems')).toEqual([]);
    expect(wrapper.state('currentFocus')).toEqual(null);
    wrapper.instance().updateNoteItems(noteItemsMock, 1);
    expect(wrapper.state('noteItems')).toEqual(noteItemsMock);
    expect(wrapper.state('currentFocus')).toEqual(1);
  });

  it('should call getListItems when renderListItems is called', () => {
    const getListItems = jest.fn();
    wrapper.instance().renderListItems();
    expect(getListItems).toBeCalled();
  });


}); 