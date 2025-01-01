'use client'
import React, { useState, useEffect } from 'react'

const phrases = [
  'Software Engineer',
  'Full-Stack Developer',
  'Machine Learning Engineer',
  'Pacers Fan',
  'CJ Stroud Glazer',
  'Constant Learner',
  "Roy Hibbert's Number One Fan",
  "Raj Mhetar's Brother", 
]

export function TypingAnimation() {
  const [currentPhrase, setCurrentPhrase] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const typingSpeed = 100 // Speed for typing
    const deletingSpeed = 50 // Speed for deleting
    const pauseDuration = 1000 // Pause duration at the end of typing/deleting

    const typeCharacter = () => {
      const currentText = phrases[currentIndex]

      if (!isDeleting) {
        // Typing
        if (currentPhrase.length < currentText.length) {
          setCurrentPhrase(currentText.slice(0, currentPhrase.length + 1))
          return typingSpeed
        } else {
          // Finished typing
          setIsDeleting(true)
          return pauseDuration
        }
      } else {
        // Deleting
        if (currentPhrase.length > 0) {
          setCurrentPhrase(currentText.slice(0, currentPhrase.length - 1))
          return deletingSpeed
        } else {
          // Finished deleting
          setIsDeleting(false)
          setCurrentIndex((prev) => (prev + 1) % phrases.length)
          return typingSpeed
        }
      }
    }

    const timer = setTimeout(typeCharacter, isDeleting ? deletingSpeed : typingSpeed)
    return () => clearTimeout(timer)
  }, [currentPhrase, isDeleting, currentIndex])

  return (
    <div className="text-center py-8 bg-blue-50">
      <h2 className="text-3xl font-bold text-blue-800 mb-4">I am a</h2>
      <div className="text-2xl text-blue-600 h-8">
        {currentPhrase}
        <span className="animate-pulse">|</span>
      </div>
    </div>
  )
}