import * as thunks  from './index';
import { addNotes } from '../actions/index';

jest.mock('./index');

describe('Thunks', () => {
  beforeEach(() => {
    let dispatchMock = jest.fn();
  })
  describe('getNotes', () => {
    it('should call the fetchCall method with the correct params', () => {
      
    });
    it ('should dispatch the addNotes action with the correct params', () => {

    })
  })
})