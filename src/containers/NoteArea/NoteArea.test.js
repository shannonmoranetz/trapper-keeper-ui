import React from 'react';
import { shallow } from 'enzyme';
import { NoteArea, mapStateToProps } from './NoteArea';
import uuid from 'uuid/v4';

jest.mock('uuid/v4');
uuid.mockReturnValue(1);

describe('NoteArea', () => {
  let wrapper;
  const notes = [{ id: 1 }, { id: 2 }]
  it('should render with no error and match snapshot', () => {
    wrapper = shallow(<NoteArea notes={notes}/>);
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    const expected = notes;
    const mockState = { notes: [{ id: 1 }, { id: 2 }], notThis: 'Nope' };
    const props = mapStateToProps(mockState);
    expect(props.notes).toEqual(expected);
  });
});
