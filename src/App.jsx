import { useState, useEffect } from "react"
import { fetchRates } from "./api/interest"
import BarChart from "../BarChart"

function App() {
  const [data, setData] = useState([])
  const [first, setFirst] = useState("")
  const [prev, setPrev] = useState("")
  const [next, setNext] = useState("")
  const [last, setLast] = useState("")
  const [labels, setLabels] = useState({})

  async function getData(e, url) {
    const {
      data,
      links: { first, prev, next, last },
      meta: { labels }
    } = await fetchRates(url)

    setData(data)
    setFirst(first)
    setPrev(prev)
    setNext(next)
    setLast(last)
    setLabels(labels)
  }

  useEffect(() => {
    getData().catch((e) => {
      console.error(e)
    })
  }, [])

  return (
    <div className="App">
      <button onClick={async (e) => await getData(e)}>Get Data!</button>
      <button onClick={async (e) => await getData(e, first)}>First</button>
      <button onClick={async (e) => await getData(e, prev)}>Prev</button>
      <button onClick={async (e) => await getData(e, next)}>Next</button>
      <button onClick={async (e) => await getData(e, last)}>Last</button>
      <BarChart data={data} labels={labels} />
    </div>
  )
}

export default App
