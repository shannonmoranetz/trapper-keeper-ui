import {fetchCall} from './api'

describe('fetchCall', () => {
  let mockReturnData;
  let mockURL
  let mockOptions

  beforeEach(() => {
    mockReturnData = [{}, {}]
    mockURL = 'http://localhost:3001'
    mockOptions = { method: 'POST' }
  })

  it('should call fetch with the correct paramaters', () => {
    //setup
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(mockReturnData),
      ok: true
    }))
    //execution
    fetchCall(mockURL, mockOptions)
    //expectation
    expect(window.fetch).toHaveBeenCalledWith(mockURL, mockOptions)
  })

  it('should return the expected data if response ok', async () => {
    //setup
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(mockReturnData),
      ok: true
    }))
    //execution
    const result = await fetchCall(mockURL, mockOptions)
    //expectation
    expect(result).toEqual(mockReturnData)
  })

  it('should throw an error if response not ok', async () => {
    //setup
    const expectedError = Error('Error fetching, code: 404')
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 404,
      ok: false
    }))
    //execution & expectation
    await expect(fetchCall(mockURL, mockOptions)).rejects.toEqual(expectedError)
  })
})





