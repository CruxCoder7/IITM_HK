"use client"

import { Anton } from "next/font/google"

const AntonFont = Anton({
  weight: ["400"],
  subsets: ["latin"],
})

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-center">
      <div className="w-[75%] mt-7 h-14 bg-white rounded-lg shadow-lg flex justify-between items-center p-5">
        <h2 className={`${AntonFont.className}`}>CYBERPUNKS</h2>
        <div className="flex gap-5 items-center justify-center">
          <h2 className="text-[#5651e5] cursor-pointer font-medium">
            Dashboard
          </h2>
          <h2 className="text-[#5651e5] cursor-pointer font-medium">
            Simulate
          </h2>
          <h2 className="text-[#5651e5] cursor-pointer font-medium">Login</h2>
        </div>
      </div>
    </nav>
  )
}
