export const fetchCall = async (url, option) => {
  const response = await fetch(url, option);
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw new Error(`Error fetching, code: ${response.status}`);
  }
};



// export const getError = response => {
//   if (!response.ok) throw new Error(`Error fetching, code: ${response.status}`);
// };

// export const postData = async (path, data) => {
//   const response = await fetch(`${baseUrl}${path}`, options("POST", data));
//   getError(response);
//   const unfilteredData = await response.json();
//   return unfilteredData.data;
// };

// export const deleteData = async (path, data) => {
//   const response = await fetch(`${baseUrl}${path}`, options("DELETE", data));
//   getError(response);
//   const unfilteredData = await response.json();
//   return unfilteredData.results;
// };

// export const getData = async path => {
//   const response = await fetch(`${baseUrl}${path}`);
//   getError(response);
//   const unfilteredData = await response.json();
//   return unfilteredData.data;
// };
