import React from 'react';
import { shallow } from 'enzyme';
import { CreateNote } from './CreateNote';
import {mapDispatchToProps} from './CreateNote'
import * as actions from '../../actions'
import { postNote, putNote } from '../../thunks';
import uuid from 'uuid/v4';

jest.mock('../../thunks');
jest.mock('uuid/v4');
uuid.mockReturnValue(1);
let findMatchingNoteItemMock = jest.fn([{title: 'title', id: 1}]);
let mockEvent = { target: { value:'newTitle', closest: () => ({ id: 1 }) }, preventDefault:() => jest.fn() };
const mockNoteItems = [
  { text: 'mockTitle', id: 1, isCompleted: false },
  { text: 'mockTitle2', id: 2, isCompleted: false }
];

describe('CreateNote', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CreateNote location={{ pathname: 'a' }}
                                  findMatchingNoteItem={ findMatchingNoteItemMock} 
                                  classes={{ formtext: '', iconButton: '' }}
                                  postNote={postNote}
                                  putNote={putNote}
                                  history={[]}
    />);
    wrapper.setState({ noteItems: mockNoteItems });
  });

  it('should render with no error and match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have the proper default state', () => {
    expect(wrapper.state()).toEqual({
      title: '',
      noteItems: mockNoteItems,
      currentFocus: null
    });
  });

  it('should change the title and currentFocus in state when handleChangeTitle is called', () => {
    expect(wrapper.state('title')).toEqual('');
    expect(wrapper.state('currentFocus')).toEqual(null);
    wrapper.find('WithStyles(Dialog)').dive().find('WithStyles(DialogTitle)')
      .dive().find('WithStyles(Input)').simulate('change', mockEvent)
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
    const result = wrapper.instance().getListItems();
    expect(result.length).toBe(2);
  });

  it('should call getListItems when renderListItems is called', () => {
    const result = wrapper.instance().renderListItems();
    expect(result.length).toBe(3);
  });

  it('should call handleChangeNoteItems when input is changed', () => {
    wrapper.find('WithStyles(ListItem)').first().dive().find('WithStyles(Input)').simulate('change', mockEvent);
    expect(wrapper.state('noteItems')[0].text).toEqual('newTitle');
  });

  it('should call handleSubmit on formSubmit for a new note',() => {
    wrapper.find('WithStyles(Dialog)').dive().find('WithStyles(DialogContent)')
      .dive().find('form').simulate('submit', mockEvent)
      expect(postNote).toHaveBeenCalledWith({id:1, noteItems:mockNoteItems, title:''})
  });

  it('should call handleSubmit on formSubmit for an existing note',() => {
    wrapper = shallow(<CreateNote location={{ pathname: 'a' }}
                                  classes={{ formtext: '', iconButton: '' }}
                                  putNote={putNote}
                                  history={[]}
                                  id={1}
    />);
    wrapper.setState({noteItems:mockNoteItems});
    wrapper.find('WithStyles(Dialog)').dive().find('WithStyles(DialogContent)')
      .dive().find('form').simulate('submit', mockEvent);
      expect(putNote).toHaveBeenCalledWith({id:1, noteItems:mockNoteItems, title:''});
  });

  describe('mapDispatchToProps',() =>{
    let mockDispatch;
    let props;
    beforeEach(()=>{
       mockDispatch = jest.fn();
       props = mapDispatchToProps(mockDispatch);
    });

    it('calls addNewNote with the correct params', () => {
      props.addNewNote({name:'yes'});
      expect(mockDispatch).toHaveBeenCalledWith(actions.addNewNote({name:'yes'}));
    });

    it('calls postNote with the correct params', () => {
      props.postNote({name:'yes'});
      expect(mockDispatch).toHaveBeenCalledWith(postNote({name:'yes'}));
    });

    it('calls putNote with the correct params', () => {
      props.putNote({name:'yes'});
      expect(mockDispatch).toHaveBeenCalledWith(putNote({name:'yes'}));
    });

    it('calls updateNote with the correct params', () => {
      props.updateNote({name:'yes'});
      expect(mockDispatch).toHaveBeenCalledWith(actions.updateNote({name:'yes'}));
    });
  });
}); 