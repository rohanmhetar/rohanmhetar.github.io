'use client'

import React, { useState, useEffect } from 'react'

const phrases = [
  'Software Engineer',
  'Full-Stack Developer',
  'Machine Learning Enthusiast',
  'Problem Solver',
  'Tech Innovator',
  'Code Craftsman',
  'Algorithm Architect',
  'Digital Creator',
  'AI Explorer',
  'Open Source Contributor'
]

export function TypingAnimation() {
  const [displayText, setDisplayText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isTyping) {
        if (charIndex < phrases[phraseIndex].length) {
          setDisplayText(prev => prev + phrases[phraseIndex][charIndex])
          setCharIndex(prev => prev + 1)
        } else {
          setIsTyping(false)
          setTimeout(() => setIsTyping(true), 1000) // Pause before backspacing
        }
      } else {
        if (charIndex > 0) {
          setDisplayText(prev => prev.slice(0, -1))
          setCharIndex(prev => prev - 1)
        } else {
          setIsTyping(true)
          setPhraseIndex((prev) => (prev + 1) % phrases.length)
        }
      }
    }, isTyping ? 100 : 50) // Type slower, backspace faster

    return () => clearInterval(intervalId)
  }, [charIndex, phraseIndex, isTyping])

  return (
    <div className="text-center py-8 bg-blue-50">
      <h2 className="text-3xl font-bold text-blue-800 mb-4">I am a</h2>
      <div className="text-2xl text-blue-600 h-8">
        {displayText}
        <span className="animate-blink">|</span>
      </div>
    </div>
  )
}