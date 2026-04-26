import { useState, useEffect } from 'react'
import { FiGithub, FiLinkedin, FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi'

/**
 * Navbar.jsx — Sticky top navigation bar.
 * Props: darkMode (bool), setDarkMode (fn)
 */

// Navigation links config
const navLinks = [
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Certificates', href: '#certificates' },
  // { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  // Detect scroll and active section
  useEffect(() => {
    // 1. Scroll event for navbar background style
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })

    // 2. Intersection Observer for active nav links
    const observerOptions = {
      root: null,
      rootMargin: '-80px 0px -70% 0px', // Offset for navbar height and accurate detection
      threshold: 0
    }

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.id === 'home') {
            setActiveSection('') // Do not highlight any link when in Hero section
          } else {
            setActiveSection(entry.target.id)
          }
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    // Observe all sections we care about
    const sectionIds = ['home', ...navLinks.map(link => link.href.replace('#', ''))]

    // We use setTimeout to ensure the DOM elements are fully mounted
    setTimeout(() => {
      sectionIds.forEach(id => {
        const el = document.getElementById(id)
        if (el) observer.observe(el)
      })
    }, 100)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  }, [])

  // Smooth scroll to section
  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="section-container">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '4rem',
          }}
        >
          {/* ── LEFT: Logo / Name ── */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.4rem',
              fontWeight: 700,
              background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              border: 'none',
              cursor: 'pointer',
              background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
            aria-label="Go to top"
          >
            &lt;Priyanshu /&gt;
          </button>

          {/* ── CENTER: Nav Links (desktop) ── */}
          <div
            style={{ display: 'flex', gap: '1.75rem' }}
            className="hidden-mobile"
          >
            {navLinks.map(link => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`nav-link ${activeSection === link.href.replace('#', '') ? 'active' : ''}`}
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.4rem 0' }}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* ── RIGHT: Icons ── */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {/* GitHub */}
            <a
              href="https://github.com/Priyanshu"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'var(--text-secondary)',
                transition: 'color 0.3s',
                display: 'flex',
                alignItems: 'center',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
              aria-label="GitHub"
            >
              <FiGithub size={20} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/Priyanshu"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'var(--text-secondary)',
                transition: 'color 0.3s',
                display: 'flex',
                alignItems: 'center',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
              aria-label="LinkedIn"
            >
              <FiLinkedin size={20} />
            </a>

            {/* Dark / Light mode toggle */}
            <button
              onClick={() => setDarkMode(prev => !prev)}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'var(--text-secondary)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FiSun size={17} /> : <FiMoon size={17} />}
            </button>

            {/* Hamburger (mobile) */}
            <button
              onClick={() => setMenuOpen(prev => !prev)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--text-secondary)',
                display: 'none',
              }}
              className="hamburger-btn"
              aria-label="Toggle menu"
            >
              {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile Dropdown Menu ── */}
      <div
        className="mobile-menu"
        style={{ maxHeight: menuOpen ? '400px' : '0' }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.25rem',
            padding: menuOpen ? '1rem 1.5rem' : '0 1.5rem',
          }}
        >
          {navLinks.map(link => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                padding: '0.625rem 0',
                color: 'var(--text-secondary)',
                fontSize: '0.95rem',
                fontWeight: 500,
                borderBottom: '1px solid var(--border-color)',
                transition: 'color 0.3s',
              }}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>

      {/* Inline responsive style for hamburger & hidden mobile */}
      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}

export default Navbar
