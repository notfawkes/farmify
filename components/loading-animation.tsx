"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const animationSteps = [
  { text: "Sowing a sustainable future...", duration: 1500 },
  { text: "Nurturing with care...", duration: 1500 },
  { text: "Embracing green practices...", duration: 1500 },
  { text: "Reaping the rewards...", duration: 1500 },
]

export function LoadingAnimation() {
  const [currentStep, setCurrentStep] = useState(0)
  const [showLogo, setShowLogo] = useState(false)

  useEffect(() => {
    const stepTimer = setTimeout(() => {
      if (currentStep < animationSteps.length - 1) {
        setCurrentStep(currentStep + 1)
      } else {
        setShowLogo(true)
      }
    }, animationSteps[currentStep]?.duration || 1500)

    return () => clearTimeout(stepTimer)
  }, [currentStep])

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center overflow-hidden">
      <div className="text-center space-y-8">
        {/* Animation Container */}
        <div className="relative w-80 h-80 mx-auto">
          <AnimatePresence mode="wait">
            {!showLogo && (
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.2 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {/* Step 0: Seed drops */}
                {currentStep === 0 && (
                  <div className="relative">
                    <motion.div
                      initial={{ y: -100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="w-4 h-4 bg-amber-600 rounded-full mb-4"
                    />
                    <div className="w-64 h-1 bg-amber-800 rounded-full" />
                  </div>
                )}

                {/* Step 1: Sapling grows */}
                {currentStep === 1 && (
                  <motion.div
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 1 }}
                    className="origin-bottom"
                  >
                    <svg width="120" height="120" viewBox="0 0 120 120" className="text-green-600">
                      <path
                        d="M60 100 L60 60 L50 50 Q60 40 70 50 L60 60"
                        stroke="currentColor"
                        strokeWidth="3"
                        fill="none"
                      />
                      <circle cx="55" cy="45" r="8" fill="currentColor" opacity="0.7" />
                      <circle cx="65" cy="45" r="8" fill="currentColor" opacity="0.7" />
                    </svg>
                  </motion.div>
                )}

                {/* Step 2: Plant with water and sun */}
                {currentStep === 2 && (
                  <div className="relative">
                    <svg width="160" height="160" viewBox="0 0 160 160" className="text-green-600">
                      <path
                        d="M80 140 L80 80 L65 60 Q80 45 95 60 L80 80"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <circle cx="70" cy="55" r="12" fill="currentColor" />
                      <circle cx="90" cy="55" r="12" fill="currentColor" />
                      <circle cx="75" cy="70" r="10" fill="currentColor" />
                      <circle cx="85" cy="70" r="10" fill="currentColor" />
                    </svg>

                    {/* Water droplet */}
                    <motion.div
                      initial={{ x: -60, opacity: 0 }}
                      animate={{ x: -60, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      className="absolute top-8 left-8"
                    >
                      <svg width="32" height="32" viewBox="0 0 32 32" className="text-blue-500">
                        <path
                          d="M16 4 C12 8, 8 12, 8 18 C8 22, 11 26, 16 26 C21 26, 24 22, 24 18 C24 12, 20 8, 16 4 Z"
                          fill="currentColor"
                        />
                      </svg>
                    </motion.div>

                    {/* Sun */}
                    <motion.div
                      initial={{ x: 60, opacity: 0 }}
                      animate={{ x: 60, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      className="absolute top-8 right-8"
                    >
                      <svg width="32" height="32" viewBox="0 0 32 32" className="text-yellow-500">
                        <circle cx="16" cy="16" r="8" fill="currentColor" />
                        <g stroke="currentColor" strokeWidth="2">
                          <line x1="16" y1="2" x2="16" y2="6" />
                          <line x1="16" y1="26" x2="16" y2="30" />
                          <line x1="2" y1="16" x2="6" y2="16" />
                          <line x1="26" y1="16" x2="30" y2="16" />
                          <line x1="6.34" y1="6.34" x2="9.17" y2="9.17" />
                          <line x1="22.83" y1="22.83" x2="25.66" y2="25.66" />
                          <line x1="6.34" y1="25.66" x2="9.17" y2="22.83" />
                          <line x1="22.83" y1="9.17" x2="25.66" y2="6.34" />
                        </g>
                      </svg>
                    </motion.div>
                  </div>
                )}

                {/* Step 3: Shield with points */}
                {currentStep === 3 && (
                  <div className="relative">
                    <svg width="180" height="180" viewBox="0 0 180 180" className="text-green-700">
                      <path
                        d="M90 160 L90 90 L70 65 Q90 45 110 65 L90 90"
                        stroke="currentColor"
                        strokeWidth="5"
                        fill="none"
                      />
                      <circle cx="75" cy="60" r="15" fill="currentColor" />
                      <circle cx="105" cy="60" r="15" fill="currentColor" />
                      <circle cx="80" cy="80" r="12" fill="currentColor" />
                      <circle cx="100" cy="80" r="12" fill="currentColor" />
                      <circle cx="90" cy="100" r="10" fill="currentColor" />
                    </svg>

                    {/* Shield */}
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <svg width="100" height="100" viewBox="0 0 100 100" className="text-green-600">
                        <path
                          d="M50 10 L20 25 L20 55 Q20 75 50 90 Q80 75 80 55 L80 25 Z"
                          fill="currentColor"
                          opacity="0.9"
                        />
                        <polygon points="50,35 55,45 65,45 57,52 60,62 50,57 40,62 43,52 35,45 45,45" fill="white" />
                      </svg>
                    </motion.div>

                    {/* Floating points */}
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ y: 0, opacity: 1 }}
                        animate={{ y: -50, opacity: 0 }}
                        transition={{
                          duration: 2,
                          delay: 0.8 + i * 0.2,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatDelay: 1,
                        }}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        style={{ marginLeft: (i - 1) * 20 }}
                      >
                        <span className="text-2xl font-bold text-yellow-600">+50</span>
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            )}

            {/* Logo transition */}
            {showLogo && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="text-center">
                  <div className="flex items-center justify-center mb-4">
                    <svg width="80" height="80" viewBox="0 0 80 80" className="text-green-600">
                      <path d="M40 10 L20 25 Q15 35 25 45 L40 35 L55 45 Q65 35 60 25 Z" fill="currentColor" />
                      <polygon points="40,25 45,35 55,35 47,42 50,52 40,47 30,52 33,42 25,35 35,35" fill="#fbbf24" />
                    </svg>
                  </div>
                  <h1 className="text-4xl font-bold text-green-800 font-sans">Farmify</h1>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Text */}
        <AnimatePresence mode="wait">
          {!showLogo && (
            <motion.p
              key={currentStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-xl text-green-800 font-medium"
            >
              {animationSteps[currentStep]?.text}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
