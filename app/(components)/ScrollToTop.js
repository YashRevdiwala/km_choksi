"use client"
import { ArrowUp } from "lucide-react"

const ScrollTop = () => {
  return (
    <div className="rounded-full">
      <ArrowUp
        className="fixed bottom-5 right-5 z-50 cursor-pointer bg-white rounded-full p-2 shadow-md"
        size={50}
        onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
      />
    </div>
  )
}

export default ScrollTop
