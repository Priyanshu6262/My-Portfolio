import { FiGithub, FiLinkedin, FiInstagram, FiHeart } from 'react-icons/fi'

/**
 * Footer.jsx — Simple footer with social icons and copyright.
 */
function Footer() {
  const socialLinks = [
    { icon: <FiGithub size={20} />, href: 'https://github.com/Priyanshu', label: 'GitHub' },
    { icon: <FiLinkedin size={20} />, href: 'https://linkedin.com/in/Priyanshu', label: 'LinkedIn' },
    { icon: <FiInstagram size={20} />, href: 'https://instagram.com/Priyanshu', label: 'Instagram' },
  ]

  return (
    <footer
      style={{
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-color)',
        padding: '2.5rem 1.5rem',
      }}
    >
      <div
        className="section-container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.25rem',
        }}
      >
        {/* Logo */}
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.25rem',
            fontWeight: 700,
            background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          &lt;Priyanshu /&gt;
        </span>

        {/* Social Icons */}
        <div style={{ display: 'flex', gap: '1rem' }}>
          {socialLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              style={{
                color: 'var(--text-muted)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: '1px solid var(--border-color)',
                transition: 'all 0.3s ease',
                background: 'var(--bg-card)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = '#fff'
                e.currentTarget.style.background = 'linear-gradient(135deg, var(--accent), var(--accent-2))'
                e.currentTarget.style.borderColor = 'transparent'
                e.currentTarget.style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'var(--text-muted)'
                e.currentTarget.style.background = 'var(--bg-card)'
                e.currentTarget.style.borderColor = 'var(--border-color)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p
          style={{
            color: 'var(--text-muted)',
            fontSize: '0.85rem',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
          }}
        >
          © {new Date().getFullYear()} Priyanshu. Made with{' '}
          <FiHeart size={14} style={{ color: '#f43f5e' }} /> using React & Tailwind
        </p>
      </div>
    </footer>
  )
}

export default Footer
