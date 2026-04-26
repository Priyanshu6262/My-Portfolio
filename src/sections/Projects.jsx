import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { projects } from '../data/data'

/**
 * Projects.jsx — Responsive card grid with image, tags, live and github links.
 */

function ProjectCard({ project, index }) {
  return (
    <div
      className="glass card-hover"
      style={{
        borderRadius: '1.25rem',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
      data-aos="fade-up"
      data-aos-delay={index * 80}
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

        {/* Cards grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
