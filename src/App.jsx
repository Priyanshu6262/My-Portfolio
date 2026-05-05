import { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Components
import Loader from './components/Loader'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Education from './sections/Education'
import Certificates from './sections/Certificates'
import Achievements from './sections/Achievements'
import Contact from './sections/Contact'
import Footer from './components/Footer'

/**
 * Root App Component
 * Manages: dark/light mode, loading state, AOS initialization
 */
function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [loading, setLoading] = useState(!sessionStorage.getItem('hasVisited'))

  // Initialize AOS on mount
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
    })
  }, [])

  // Toggle dark class on html element
  useEffect(() => {
    const root = document.documentElement
    if (darkMode) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [darkMode])

  // Simulate loading screen
  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false)
        sessionStorage.setItem('hasVisited', 'true')
      }, 1800)
      return () => clearTimeout(timer)
    }
  }, [loading])

  if (loading) return <Loader />

  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh' }}>
      {/* Scroll progress bar at top */}
      <ScrollProgress />

      {/* Sticky Navbar */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Main Sections */}
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Education />
        <Certificates />
        {/* <Achievements /> */}
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
