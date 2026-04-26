import { achievements } from '../data/data'

/**
 * Achievements.jsx — Icon + text list of key accomplishments.
 */
function Achievements() {
  return (
    <section id="achievements" className="section-padding">
      <div className="section-container">
        {/* Header */}
        <h2 className="section-title" data-aos="fade-up">
          My <span className="gradient-text">Achievements</span>
        </h2>
        <p className="section-subtitle" data-aos="fade-up" data-aos-delay="50">
          Milestones and recognitions along the way
        </p>
        <div className="section-divider" data-aos="fade-up" data-aos-delay="80" />

        {/* Achievement cards grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {achievements.map((ach, idx) => (
            <div
              key={ach.id}
              className="glass card-hover"
              style={{
                borderRadius: '1.25rem',
                padding: '1.5rem',
                display: 'flex',
                gap: '1rem',
                alignItems: 'flex-start',
              }}
              data-aos="fade-up"
              data-aos-delay={idx * 80}
            >
              {/* Icon */}
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '0.875rem',
                  background: 'rgba(99,102,241,0.12)',
                  border: '1px solid rgba(99,102,241,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  flexShrink: 0,
                }}
              >
                {ach.icon}
              </div>

              {/* Text */}
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '1rem',
                    color: 'var(--text-primary)',
                    marginBottom: '0.35rem',
                  }}
                >
                  {ach.title}
                </h3>
                <p
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.865rem',
                    lineHeight: 1.65,
                  }}
                >
                  {ach.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
