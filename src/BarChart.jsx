import React from "react"
import { Bar } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top"
    },
    title: {
      display: true,
      text: "Average interest rates for US securities"
    }
  }
}

export default function BarChart(props) {
  let labels = props.data.map((entry) => {
    return entry.security_desc
  })

  const data = {
    labels,
    datasets: [
      {
        label: "Average Interest Rate Amount",
        data: props.data.map((entry) => {
          return entry.avg_interest_rate_amt
        }),
        backgroundColor: "rgba(255, 99, 132, 0.5)"
      }
    ]
  }

  return (
    <div>
      <Bar options={options} data={data} />
    </div>
  )
}
