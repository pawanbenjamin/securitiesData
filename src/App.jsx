import { useState, useEffect } from "react"
import { fetchRates } from "./api/interest"
import BarChart from "./BarChart"
import Interest from "./Interest"
import PriceIndex from "./CPI"

function App() {
  return (
    <div>
      <Interest />
      <PriceIndex />
    </div>
  )
}

export default App
