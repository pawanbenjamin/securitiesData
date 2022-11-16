const baseUrl = "https://www.econdb.com/api/series/CPIUS/?format=json"

export async function fetchCPIData() {
  const response = await fetch(baseUrl)
  const result = await response.json()
  return result
}
