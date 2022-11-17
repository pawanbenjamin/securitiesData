import { useState, useEffect } from "react"

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js"
import { Line } from "react-chartjs-2"
import { fetchCPIData } from "./api/cpi.js"

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top"
    },
    title: {
      display: true,
      text: "United States - Consumer price index"
    }
  }
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export default function PriceIndex() {
  const [description, setDescription] = useState("")
  const [values, setValues] = useState([])
  const [dates, setDates] = useState([])

  const labels = dates
  const data = {
    labels,
    datasets: [
      {
        label: "CPI",
        data: values,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)"
      }
    ]
  }

  useEffect(() => {
    fetchCPIData()
      .then((result) => {
        console.log(result)
        setDescription(result.description)
        setValues(result.data.values)
        setDates(result.data.dates)
      })
      .catch((e) => console.error(e))
  }, [])

  return (
    <div>
      <h3>US CPI</h3>
      <Line options={options} data={data} />
    </div>
  )
}
