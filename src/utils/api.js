export const fetchCall = async (url, option) => {
  const response = await fetch(url, option);
  if (response.ok && response.status !== 204) {
    const data = await response.json();
    return data;
  } else if (response.status === 204) {
    return 'Note deleted.'
  } else {
    throw new Error(`Error fetching, code: ${response.status}, ${response.body}`);
  }
};