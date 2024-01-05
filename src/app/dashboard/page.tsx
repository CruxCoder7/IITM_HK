"use client"

import axios from "axios"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import "chart.js/auto"
import { Line } from "react-chartjs-2"
import { Scatter } from "react-chartjs-2"

const LineChart = ({ data }: { data: any }) => {
  return (
    <div className="w-[75%]">
      <Line data={data} options={{ maintainAspectRatio: false }} />
    </div>
  )
}

const ScatterChart = ({ data }: { data: any }) => {
  return (
    <div className="w-[75%]">
      <Scatter data={data} options={{ maintainAspectRatio: false }} />
    </div>
  )
}

export default function Dashboard() {
  const [name, setName] = useState("")
  const [transaction, setTransaction] = useState({})
  const [phone_num, setPhoneNum] = useState("")

  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem("token")
    async function check() {
      const data = await axios.post(
        "http://localhost:5000/verify",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      const { name, phone_num, transactions } = data.data
      setName(name)
      setTransaction(transactions)
      setPhoneNum(phone_num)
    }
    if (token) {
      check()
    } else {
      router.replace("http://localhost:3000/login")
    }
  }, [])

  const chartData = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "My First Dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  }

  const data = {
    datasets: [
      {
        label: "Scatter Dataset",
        data: [
          {
            x: -10,
            y: 0,
          },
          {
            x: 0,
            y: 10,
          },
          {
            x: 10,
            y: 5,
          },
          {
            x: 0.5,
            y: 5.5,
          },
        ],
        backgroundColor: "rgb(255, 99, 132)",
      },
    ],
  }

  return (
    <div>
      {name === "" ? (
        <p>Loading...</p>
      ) : (
        <>
          <div>
            Dashboard for {name} - {phone_num}
            <h1>Line Chart Example</h1>
            <LineChart data={chartData} />
            <ScatterChart data={data} />
            {JSON.stringify(transaction)}
          </div>
        </>
      )}
    </div>
  )
}
