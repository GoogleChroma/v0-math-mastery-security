"use client"

import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    window.location.href = "/app.html"
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8fafc]">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#2563eb] mx-auto mb-4"></div>
        <p className="text-[#64748b]">Loading MathMastery Pro...</p>
      </div>
    </div>
  )
}
