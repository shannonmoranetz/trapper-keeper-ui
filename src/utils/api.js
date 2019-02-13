export const fetchCall = async (url, options= {}) => {
  const response = await fetch(url, options)
  if (response.ok) {
    const data = await response.json()
    console.log('from fetch', data)
    return data
  } else {
    throw new Error(`Error fetching, code: ${response.status}`)
  }
}