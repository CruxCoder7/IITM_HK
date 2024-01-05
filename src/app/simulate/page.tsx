"use client"
import axios from "axios"
import { useEffect, useState } from "react"

export default function Simulate() {
  const [name, setName] = useState("sdg")
  const [isHigh, setIsHigh] = useState("sdgsdg")

  useEffect(() => {
    async function getUser() {
      const data = await axios.get("http://localhost:5000/user", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })

      console.log(data.data)
      setName(data.data.name)
      setIsHigh(data.data.high_spender)
    }
    getUser()
  }, [])

  const [formData, setFormData] = useState({
    time: "",
    transId: "",
    accNum: "",
    amount: "",
    category: "",
    city: "",
  })

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    console.log(formData)
    const data = await axios.post("http://localhost:5000/transaction", {
      formData,
    })
    console.log(data.data)
  }

  return (
    <div className="text-center font-semibold min-h-screen ">
      <p className="font-semibold text-green-500 mt-10">
        Your User profile has been generated!
      </p>
      <p className="font-semibold text-green-500 ">Hi, {name.toUpperCase()}!</p>
      <p className="font-semibold text-green-500 ">
        You are a {!isHigh ? "Low Spender" : "High Spender"}
      </p>
      <h1 className="text-3xl mt-20 font-semibold">Simulate a transaction</h1>
      <form
        className="max-w-md mx-auto bg-white p-8 rounded shadow-md mt-10"
        onSubmit={handleSubmit}
      >
        <label className="block mb-4">
          <span className="text-gray-700">Time:</span>
          <input
            type="text"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="form-input mt-1 block w-full border "
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Trans Id:</span>
          <input
            type="text"
            name="transId"
            value={formData.transId}
            onChange={handleChange}
            className="form-input mt-1 block w-full border"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Acc Num:</span>
          <input
            type="text"
            name="accNum"
            value={formData.accNum}
            onChange={handleChange}
            className="form-input mt-1 block w-full border"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Amount:</span>
          <input
            type="text"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            className="form-input mt-1 block w-full border"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Category:</span>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="form-input mt-1 block w-full border"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">City:</span>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="form-input mt-1 block w-full border"
          />
        </label>

        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none focus:shadow-outline-green"
        >
          Submit
        </button>
      </form>
    </div>
  )
}
