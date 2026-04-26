/**
 * Loader.jsx — Full-screen loading animation shown on first visit.
 */
function Loader() {
  return (
    <div className="loader-wrapper">
      {/* Animated ring spinner */}
      <div className="loader-ring" />

      {/* Name text */}
      <div style={{ textAlign: 'center' }}>
        <p
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.5rem',
            fontWeight: 700,
            background: 'linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '0.05em',
          }}
        >
          Priyanshu
        </p>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '0.25rem' }}>
          Loading Portfolio...
        </p>
      </div>
    </div>
  )
}

export default Loader
