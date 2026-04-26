import { FiExternalLink } from 'react-icons/fi'
import { certificates } from '../data/data'

/**
 * Certificates.jsx — Responsive grid of certificate cards with hover zoom.
 */
function Certificates() {
  return (
    <section
      id="certificates"
      className="section-padding"
      style={{ background: 'var(--bg-secondary)' }}
    >
      <div className="section-container">
        {/* Header */}
        <h2 className="section-title" data-aos="fade-up">
          My <span className="gradient-text">Certificates</span>
        </h2>
        <p className="section-subtitle" data-aos="fade-up" data-aos-delay="50">
          Certifications that validate my skills
        </p>
        <div className="section-divider" data-aos="fade-up" data-aos-delay="80" />

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {certificates.map((cert, idx) => (
            <a
              key={cert.id}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="glass cert-card card-hover"
              style={{
                borderRadius: '1.25rem',
                overflow: 'hidden',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
              }}
              data-aos="zoom-in"
              data-aos-delay={idx * 100}
            >
              {/* Certificate image */}
              <div style={{ height: '180px', overflow: 'hidden', position: 'relative' }}>
                <img
                  src={cert.image}
                  alt={cert.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                {/* Gradient overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to bottom, transparent 40%, rgba(2,6,23,0.7))',
                  }}
                />
                {/* Link icon */}
                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.15)',
                    backdropFilter: 'blur(8px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                  }}
                >
                  <FiExternalLink size={14} />
                </div>
              </div>

              {/* Info */}
              <div style={{ padding: '1.25rem' }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    color: 'var(--text-primary)',
                    marginBottom: '0.35rem',
                    lineHeight: 1.4,
                  }}
                >
                  {cert.title}
                </h3>
                <p
                  style={{
                    color: 'var(--accent)',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                  }}
                >
                  {cert.issuer}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certificates
