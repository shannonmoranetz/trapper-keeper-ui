import { setLoading, setError } from "../actions";
import { loadingReducer } from "./loadingReducer";

describe('setLoadingReducer', () => {
  it('should return correct action type', () => {
    const result = loadingReducer(undefined, setLoading(true))
    expect(result).toBe(true)
  })

  it('should return false when given wrong action and has no state', () => {
    const result = loadingReducer(undefined, setError('Could not Post'))
    expect(result).toBe(false)
  })

})
