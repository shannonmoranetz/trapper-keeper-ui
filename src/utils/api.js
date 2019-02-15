export const fetchCall = async (url, option) => {
  const response = await fetch(url, option);
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw new Error(`Error fetching, code: ${response.status}, ${response.body}`);
  }
};