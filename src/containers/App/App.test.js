import React from 'react';
import { shallow } from 'enzyme';
import { App, mapDispatchToProps, mapStateToProps } from './App';
import { getNotes } from '../../thunks';
import { CreateNote } from '../';

jest.mock('../../thunks');
getNotes.mockReturnValue([
  {
    title: 'Hello',
    noteItems: [{ text: 'world', id: 4, isCompleted: 'true' }],
    id: 1
  },
  {
    title: 'Hello',
    noteItems: [{ text: 'world', id: 5, isCompleted: 'false' }],
    id: 2
  },
  {
    title: 'Hello',
    noteItems: [{ text: 'world', id: 6, isCompleted: 'true' }],
    id: 3
  }
]);

describe('App', () => {
  let wrapper;
  window.fetch = jest.fn();
  beforeEach(() => {
    wrapper = shallow(<App getNotes={getNotes} notes={getNotes()} />);
  });

  it('should match snapshot and not error', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call getNotes on componentDidMount', () => {
    expect(wrapper.instance().props.getNotes).toHaveBeenCalled();
  });

  describe('findNote', () => {

    it('should return the matched item', () => {
      //setup
      const note = getNotes()[0];
      const expected = <CreateNote {...note} />;

      //execution
      const result = wrapper
        .instance()
        .findNote({ match: { params: { id: 1 } } });

      expect(result).toEqual(expected);
    });
  });

  describe('mapStateToProps', () => {
    //setup
    let mockState = { notes: getNotes(), notThis: 'Not this' };
    let expected = getNotes();

    //execution
    let props = mapStateToProps(mockState);

    //expectation
    expect(props.notes).toEqual(expected);
  });

  describe('mapDispatchToProps', () => {
    let mockDispatch = jest.fn();
    let props = mapDispatchToProps(mockDispatch);

    it('should call dispatch with correct params', () => {
      //setup
      const expected = getNotes();

      //execution
      props.getNotes();

      //expectation
      expect(mockDispatch).toHaveBeenCalledWith(expected);
    });
  });
});
