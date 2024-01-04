import Image from "next/image"
import Navbar from "@/components/components/Navbar"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <div className="w-full flex justify-between items-center px-32">
        <div className="flex">
          <button className="border text-white p-5 bg-[#5651e5] rounded-lg ml-14 mt-10 cursor-pointer hover:opacity-85">
            Simulate Transaction
          </button>
          <button className="border text-[#5651e5] p-5 w-[12.5rem] bg-white rounded-lg ml-14 mt-10 cursor-pointer hover:opacity-85">
            How It Works
          </button>
        </div>
        <img
          src="/hero.svg"
          alt="hero"
          className="hover:scale-105 ease-in duration-300 mt-20 h-[375px]"
        />
      </div>
      <Footer />
    </main>
  )
}
