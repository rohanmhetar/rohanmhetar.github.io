'use client'

import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js'

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
  const el = useRef(null)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: phrases,
      typeSpeed: 40,
      backSpeed: 50,
      loop: true
    })

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <div className="text-center py-8 bg-blue-50">
      <h2 className="text-3xl font-bold text-blue-800 mb-4">I am a</h2>
      <span ref={el} className="text-2xl text-blue-600"></span>
    </div>
  )
}