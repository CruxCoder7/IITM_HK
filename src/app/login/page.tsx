"use client"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Login() {
  const [loginData, setLoginData] = useState({ email: "", password: "" })
  const router = useRouter()
  const handleLogin = async () => {
    console.log(loginData)

    const data = await axios.post("http://localhost:5000/login", {
      email: loginData.email,
      password: loginData.password,
    })

    const token = data.data
    console.log(token)
    localStorage.setItem("token", token)
    router.replace("http://localhost:3000/")
  }

  return (
    <div className="bg-gray-200 min-h-screen flex justify-center items-center">
      <div className="bg-gray-200  rounded-md max-w-md w-full border border-gray-400 p-10 shadow-lg">
        <h2 className="text-center text-[#5651e5] text-2xl mb-4">Login</h2>
        <form>
          <label className="block mb-4 text-[#5651e5]">
            Email:
            <input
              type="text"
              value={loginData.email}
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
              className="ml-11 px-2 py-1 border border-[#5651e5] rounded-md focus:border-none"
            />
          </label>
          <label className="block mb-4 text-[#5651e5]">
            Password:
            <input
              type="password"
              value={loginData.password}
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
              className="ml-3 px-2 py-1 border border-[#5651e5] rounded-md "
            />
          </label>
          <button
            type="button"
            onClick={handleLogin}
            className="bg-[#5651e5] text-white px-4 py-2 rounded-md cursor-pointer w-full"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}
