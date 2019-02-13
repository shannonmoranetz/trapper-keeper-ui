export const fetchCall = async (url, options) => {
  const response = await fetch(url, options)
  if (response.ok) {
    return response.json()
  } else {
    throw new Error(`Error fetching, code: ${response.status}`)
  }
}