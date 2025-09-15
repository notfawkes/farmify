"use client"

import { useState, useEffect } from "react"
import { LoadingAnimation } from "@/components/loading-animation"
import { LandingPage } from "@/components/landing-page"

export default function Home() {
  const [showAnimation, setShowAnimation] = useState(true)

  useEffect(() => {
    // Show animation for 6 seconds, then transition to landing page
    const timer = setTimeout(() => {
      setShowAnimation(false)
    }, 6000)

    return () => clearTimeout(timer)
  }, [])

  if (showAnimation) {
    return <LoadingAnimation />
  }

  return <LandingPage />
}
