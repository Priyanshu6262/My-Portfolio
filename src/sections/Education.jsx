import { FiCalendar, FiAward } from 'react-icons/fi'
import { education } from '../data/data'

/**
 * Education.jsx — Timeline design alternating left/right on desktop.
 * On mobile it collapses to a single-column timeline.
 */
function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="section-container">
        {/* Header */}
        <h2 className="section-title" data-aos="fade-up">
          My <span className="gradient-text">Education</span>
        </h2>
        <p className="section-subtitle" data-aos="fade-up" data-aos-delay="50">
          Academic background and qualifications
        </p>
        <div className="section-divider" data-aos="fade-up" data-aos-delay="80" />

        {/* Timeline wrapper */}
        <div style={{ position: 'relative', maxWidth: '860px', margin: '0 auto' }}>
          {/* Center line */}
          <div className="timeline-line" aria-hidden="true" />

          {education.map((edu, idx) => {
            const isLeft = idx % 2 === 0

            return (
              <div
                key={edu.id}
                style={{
                  display: 'flex',
                  justifyContent: isLeft ? 'flex-start' : 'flex-end',
                  marginBottom: '3rem',
                  position: 'relative',
                }}
                data-aos={isLeft ? 'fade-right' : 'fade-left'}
                data-aos-delay={idx * 120}
              >
                {/* Card */}
                <div
                  className="glass card-hover"
                  style={{
                    width: 'calc(50% - 2rem)',
                    borderRadius: '1.25rem',
                    padding: '1.5rem',
                  }}
                >
                  {/* Year badge */}
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      padding: '0.3rem 0.8rem',
                      borderRadius: '999px',
                      background: 'rgba(99,102,241,0.12)',
                      border: '1px solid rgba(99,102,241,0.25)',
                      color: 'var(--accent)',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      marginBottom: '0.875rem',
                    }}
                  >
                    <FiCalendar size={12} />
                    {edu.year}
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize: '1rem',
                      color: 'var(--text-primary)',
                      marginBottom: '0.35rem',
                      lineHeight: 1.4,
                    }}
                  >
                    {edu.degree}
                  </h3>

                  <p
                    style={{
                      color: 'var(--accent)',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      marginBottom: '0.5rem',
                    }}
                  >
                    {edu.institution}
                  </p>

                  <p
                    style={{
                      color: 'var(--text-secondary)',
                      fontSize: '0.85rem',
                      lineHeight: 1.65,
                      marginBottom: '0.75rem',
                    }}
                  >
                    {edu.description}
                  </p>

                  {/* Grade badge */}
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      color: '#22c55e',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                    }}
                  >
                    <FiAward size={13} />
                    {edu.grade}
                  </div>
                </div>

                {/* Center dot */}
                <div
                  className="timeline-dot"
                  style={{
                    position: 'absolute',
                    left: '50%',
                    top: '1.25rem',
                    transform: 'translateX(-50%)',
                  }}
                />
              </div>
            )
          })}
        </div>
      </div>

      {/* Responsive: collapse to single column on mobile */}
      <style>{`
        @media (max-width: 640px) {
          .timeline-line { display: none; }
          [data-aos="fade-right"] > div,
          [data-aos="fade-left"] > div {
            width: 100% !important;
          }
          [data-aos] { justify-content: flex-start !important; }
          .timeline-dot { display: none; }
        }
      `}</style>
    </section>
  )
}

export default Education
