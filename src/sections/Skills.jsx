import { skills } from '../data/data'

/**
 * Skills.jsx — Categorized skill tags with clean cards and hover effects.
 */

// Category accent colors
const categoryColors = {
  Frontend: { from: '#6366f1', to: '#8b5cf6', icon: '🎨' },
  Backend: { from: '#06b6d4', to: '#3b82f6', icon: '⚙️' },
  Database: { from: '#f59e0b', to: '#ef4444', icon: '🗄️' },
  'Programming Languages': { from: '#10b981', to: '#059669', icon: '💻' },
}

function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="section-container">
        {/* Header */}
        <h2 className="section-title" data-aos="fade-up">
          My <span className="gradient-text">Skills</span>
        </h2>
        <p className="section-subtitle" data-aos="fade-up" data-aos-delay="50">
          Technologies and tools I work with
        </p>
        <div className="section-divider" data-aos="fade-up" data-aos-delay="80" />

        {/* Skill categories grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.5rem',
          }}
        >
          {Object.entries(skills).map(([category, items], idx) => {
            const colors = categoryColors[category] || { from: '#6366f1', to: '#8b5cf6', icon: '💡' }

            return (
              <div
                key={category}
                className="glass card-hover"
                style={{ borderRadius: '1.25rem', padding: '2rem' }}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                {/* Category header */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    marginBottom: '2rem',
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '1rem',
                      background: `linear-gradient(135deg, ${colors.from}20, ${colors.to}20)`,
                      border: `1px solid ${colors.from}30`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.4rem',
                    }}
                  >
                    {colors.icon}
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize: '1.3rem',
                      color: 'var(--text-primary)',
                      margin: 0,
                    }}
                  >
                    {category}
                  </h3>
                </div>

                {/* Skill tags */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.8rem',
                  }}
                >
                  {items.map(skill => (
                    <span
                      key={skill.name}
                      style={{
                        padding: '0.5rem 1rem',
                        borderRadius: '0.75rem',
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid var(--border-color)',
                        color: 'var(--text-secondary)',
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        transition: 'all 0.3s ease',
                        cursor: 'default',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.color = '#fff'
                        e.currentTarget.style.background = `linear-gradient(135deg, ${colors.from}, ${colors.to})`
                        e.currentTarget.style.borderColor = 'transparent'
                        e.currentTarget.style.transform = 'translateY(-2px)'
                        e.currentTarget.style.boxShadow = `0 10px 20px -5px ${colors.from}60`
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.color = 'var(--text-secondary)'
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)'
                        e.currentTarget.style.borderColor = 'var(--border-color)'
                        e.currentTarget.style.transform = 'translateY(0)'
                        e.currentTarget.style.boxShadow = 'none'
                      }}
                    >
                      {skill.logo && (
                        <img 
                          src={skill.logo} 
                          alt={`${skill.name} logo`} 
                          style={{ width: '1.2rem', height: '1.2rem', objectFit: 'contain' }} 
                        />
                      )}
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Tech tags row */}
        <div
          style={{
            marginTop: '4rem',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.75rem',
            justifyContent: 'center',
          }}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {['Git & GitHub', 'VS Code', 'Postman', 'Linux', 'Vercel', 'Render',].map(tool => (
            <span
              key={tool}
              style={{
                padding: '0.4rem 1rem',
                borderRadius: '999px',
                background: 'rgba(99,102,241,0.08)',
                border: '1px solid rgba(99,102,241,0.2)',
                color: 'var(--accent)',
                fontSize: '0.82rem',
                fontWeight: 600,
                transition: 'all 0.3s ease',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(99,102,241,0.2)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(99,102,241,0.08)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
