import { fetchCall } from "./api";

describe("fetchCall", () => {
  let mockReturnData;
  let mockURL;
  let mockOptions;

  beforeEach(() => {
    mockReturnData = [{}, {}];
    mockURL = "http://localhost:3001";
    mockOptions = { method: "POST" };
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockReturnData),
        ok: true
      })
    );
  });

  it("should call fetch with the correct paramaters", () => {
    //execution
    fetchCall(mockURL, mockOptions);
    //expectation
    expect(window.fetch).toHaveBeenCalledWith(mockURL, mockOptions);
  });

  it("should return the expected data if response ok", async () => {
    //execution
    const result = await fetchCall(mockURL, mockOptions);
    //expectation
    expect(result).toEqual(mockReturnData);
  });

  it("should throw an error if response not ok", async () => {
    //setup
    const expectedError = Error("Error fetching, code: 404, Could not Post");
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        status: 404,
        ok: false,
        body: "Could not Post"
      })
    );
    //execution & expectation
    await expect(fetchCall(mockURL, mockOptions)).rejects.toEqual(
      expectedError
    );
  });

  it("should return correct message when status is 204", async () => {
     //setup
    const expected = 'Note deleted.'
    mockOptions = { method: "DELETE" };
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        status: 204,
        ok: true,
      }))
    const result = await fetchCall(mockURL, mockOptions)
    expect(result).toEqual(expected)
  });
});
