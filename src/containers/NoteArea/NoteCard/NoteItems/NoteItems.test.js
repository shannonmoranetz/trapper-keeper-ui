import React from 'react';
import NoteItems from './NoteItems';
import { shallow } from 'enzyme';

describe('NoteItems', () => {
  let wrapper;
  let mockItems = [{text: 'Dylan', id: 1}, 
  {text: 'Justin', id: 2},
  {text: 'Shannon', id: 3}]

  beforeEach(() => {
    wrapper = shallow(<NoteItems noteItems={mockItems}/>)
  });
  
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});