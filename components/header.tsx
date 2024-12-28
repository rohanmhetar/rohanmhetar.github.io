'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function Header() {
  useEffect(() => {
    const handleScroll = (e: Event) => {
      e.preventDefault()
      const target = e.target as HTMLAnchorElement
      const id = target.getAttribute('href')?.slice(1)
      if (id) {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }

    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach(link => {
      link.addEventListener('click', handleScroll)
    })

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleScroll)
      })
    }
  }, [])

  return (
    <header className="bg-gray-800 text-white py-4 sticky top-0 z-10">
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Rohan Mhetar
        </Link>
        <div className="space-x-4">
          <Link href="#education" className="hover:text-gray-300">Education</Link>
          <Link href="#experience" className="hover:text-gray-300">Experience</Link>
          <Link href="#projects" className="hover:text-gray-300">Projects</Link>
          <Link href="#skills" className="hover:text-gray-300">Skills</Link>
        </div>
      </nav>
    </header>
  )
}