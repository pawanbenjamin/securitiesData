const baseUrl =
  "https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v2/accounting/od/avg_interest_rates"

export async function fetchRates(url) {
  const fullUrl = url === undefined ? baseUrl : `${baseUrl}?${url}`
  const response = await fetch(fullUrl)
  const result = await response.json()
  return result
}
