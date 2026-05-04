import { useState, useEffect } from 'react'
import { FiExternalLink, FiGithub, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { projects } from '../data/data'

/**
 * Projects.jsx — Responsive card slider with image, tags, live and github links.
 */

function ProjectCard({ project }) {
  return (
    <div
      className="glass card-hover"
      style={{
        borderRadius: '1.25rem',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      {/* Image */}
      <div style={{ position: 'relative', overflow: 'hidden', height: '200px' }}>
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s ease',
          }}
          onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.08)')}
          onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
        />
        {/* Overlay gradient */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(2,6,23,0.8), transparent)',
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* Content */}
      <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: '1.1rem',
            color: 'var(--text-primary)',
            marginBottom: '0.5rem',
          }}
        >
          {project.title}
        </h3>

        <p
          style={{
            color: 'var(--text-secondary)',
            fontSize: '0.875rem',
            lineHeight: 1.7,
            flex: 1,
            marginBottom: '1rem',
          }}
        >
          {project.description}
        </p>

        {/* Tags */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.4rem',
            marginBottom: '1.25rem',
          }}
        >
          {project.tags.map(tag => (
            <span
              key={tag}
              style={{
                padding: '0.2rem 0.6rem',
                borderRadius: '999px',
                background: 'rgba(99,102,241,0.1)',
                border: '1px solid rgba(99,102,241,0.2)',
                color: 'var(--accent)',
                fontSize: '0.72rem',
                fontWeight: 600,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ flex: 1, justifyContent: 'center', fontSize: '0.85rem', padding: '0.6rem 1rem' }}
          >
            <FiExternalLink size={14} /> Live Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            style={{ flex: 1, justifyContent: 'center', fontSize: '0.85rem', padding: '0.6rem 1rem' }}
          >
            <FiGithub size={14} /> GitHub
          </a>
        </div>
      </div>
    </div>
  )
}

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2)
      } else {
        setItemsPerPage(3)
      }
    }
    
    // Initial call
    handleResize()
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const totalPages = Math.ceil(projects.length / itemsPerPage)

  const handlePrev = () => {
    setCurrentIndex(prev => (prev === 0 ? totalPages - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex(prev => (prev === totalPages - 1 ? 0 : prev + 1))
  }

  const goToPage = (pageIndex) => {
    setCurrentIndex(pageIndex)
  }

  return (
    <section
      id="projects"
      className="section-padding"
      style={{ background: 'var(--bg-secondary)' }}
    >
      <div className="section-container">
        {/* Header */}
        <h2 className="section-title" data-aos="fade-up">
          My <span className="gradient-text">Projects</span>
        </h2>
        <p className="section-subtitle" data-aos="fade-up" data-aos-delay="50">
          Things I've built with passion and code
        </p>
        <div className="section-divider" data-aos="fade-up" data-aos-delay="80" />

        {/* Carousel Container */}
        <div style={{ position: 'relative', marginTop: '2rem' }} data-aos="fade-up" data-aos-delay="100">
          
          {/* Controls */}
          <button 
            onClick={handlePrev}
            style={{ 
              position: 'absolute', left: '-15px', top: '50%', transform: 'translateY(-50%)', zIndex: 10,
              width: '45px', height: '45px', borderRadius: '50%', background: 'var(--accent)', color: '#fff',
              border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 4px 15px rgba(0,0,0,0.3)', transition: 'transform 0.2s ease, background 0.2s ease'
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(-50%) scale(1)'}
            aria-label="Previous Projects"
          >
            <FiChevronLeft size={28} />
          </button>
          
          <button 
            onClick={handleNext}
            style={{ 
              position: 'absolute', right: '-15px', top: '50%', transform: 'translateY(-50%)', zIndex: 10,
              width: '45px', height: '45px', borderRadius: '50%', background: 'var(--accent)', color: '#fff',
              border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 4px 15px rgba(0,0,0,0.3)', transition: 'transform 0.2s ease, background 0.2s ease'
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(-50%) scale(1)'}
            aria-label="Next Projects"
          >
            <FiChevronRight size={28} />
          </button>

          {/* Carousel Track Wrapper */}
          <div style={{ overflow: 'hidden', padding: '1rem 0' }}>
            <div
              style={{
                display: 'flex',
                transition: 'transform 0.5s ease-in-out',
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project) => (
                <div 
                  key={project.id} 
                  style={{ 
                    minWidth: `${100 / itemsPerPage}%`, 
                    padding: '0 1rem',
                    boxSizing: 'border-box'
                  }}
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>
          
          {/* Pagination Dots */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginTop: '2rem' }}>
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToPage(idx)}
                style={{
                  width: '12px', height: '12px', borderRadius: '50%', border: 'none', cursor: 'pointer',
                  background: currentIndex === idx ? 'var(--accent)' : 'rgba(99,102,241,0.2)',
                  boxShadow: currentIndex === idx ? '0 0 10px var(--accent)' : 'none',
                  transition: 'all 0.3s ease'
                }}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
