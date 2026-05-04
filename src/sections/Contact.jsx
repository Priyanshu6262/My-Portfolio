import { useState } from 'react'
import { FiMail, FiPhone, FiSend, FiMapPin, FiGithub, FiLinkedin } from 'react-icons/fi'

/**
 * Contact.jsx — Contact info + EmailJS-ready contact form.
 * To enable sending: install emailjs-com and fill in your serviceId,
 * templateId, and publicKey from https://dashboard.emailjs.com
 */

const contactInfo = [
  {
    icon: <FiMail size={20} />,
    label: 'Email',
    value: 'priyanshu@email.com',
    href: 'mailto:priyanshu@email.com',
  },
  {
    icon: <FiPhone size={20} />,
    label: 'Phone',
    value: '+91 98765 43210',
    href: 'tel:+919876543210',
  },
  {
    icon: <FiMapPin size={20} />,
    label: 'Location',
    value: 'India',
    href: null,
  },
]

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    /**
     * ── EmailJS Integration ──────────────────────────────────────────────────
     * 1. npm install @emailjs/browser
     * 2. Import: import emailjs from '@emailjs/browser'
     * 3. Uncomment and fill in your IDs below:
     *
     * try {
     *   await emailjs.send(
     *     'YOUR_SERVICE_ID',
     *     'YOUR_TEMPLATE_ID',
     *     { from_name: form.name, from_email: form.email, message: form.message },
     *     'YOUR_PUBLIC_KEY'
     *   )
     *   setStatus('success')
     *   setForm({ name: '', email: '', message: '' })
     * } catch {
     *   setStatus('error')
     * }
     * ─────────────────────────────────────────────────────────────────────────
     */

    // Simulated success for now (remove once EmailJS is configured)
    setTimeout(() => {
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 4000)
    }, 1200)
  }

  return (
    <section
      id="contact"
      className="section-padding"
      style={{ background: 'var(--bg-secondary)' }}
    >
      <div className="section-container">
        {/* Header */}
        <h2 className="section-title" data-aos="fade-up">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className="section-subtitle" data-aos="fade-up" data-aos-delay="50">
          Have a project in mind? Let's build something great together.
        </p>
        <div className="section-divider" data-aos="fade-up" data-aos-delay="80" />

        {/* Two-column layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2.5rem',
          }}
        >
          {/* ── LEFT: Info ── */}
          <div data-aos="fade-right">
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '1.4rem',
                color: 'var(--text-primary)',
                marginBottom: '0.75rem',
              }}
            >
              Let's talk 👋
            </h3>
            <p
              style={{
                color: 'var(--text-secondary)',
                lineHeight: 1.75,
                marginBottom: '2rem',
                fontSize: '0.95rem',
              }}
            >
              I'm currently available for freelance work and full-time opportunities.
              Feel free to reach out — I'll get back to you within 24 hours!
            </p>

            {/* Contact info cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              {contactInfo.map(info => (
                <div
                  key={info.label}
                  className="glass"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1rem 1.25rem',
                    borderRadius: '0.875rem',
                    transition: 'transform 0.3s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'translateX(6px)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'translateX(0)')}
                >
                  {/* Icon circle */}
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '0.75rem',
                      background: 'linear-gradient(135deg, rgba(99,102,241,0.2), rgba(139,92,246,0.2))',
                      border: '1px solid rgba(99,102,241,0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent)',
                      flexShrink: 0,
                    }}
                  >
                    {info.icon}
                  </div>
                  <div>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        style={{
                          color: 'var(--text-primary)',
                          fontWeight: 600,
                          fontSize: '0.9rem',
                          textDecoration: 'none',
                          transition: 'color 0.2s',
                        }}
                        onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                        onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-primary)')}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.9rem' }}>
                        {info.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social quick links */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {[
                { icon: <FiGithub size={18} />, href: 'https://github.com/Priyanshu6262', label: 'GitHub' },
                { icon: <FiLinkedin size={18} />, href: 'https://www.linkedin.com/in/priyanshu-kumar-b5bb9b259', label: 'LinkedIn' },
              ].map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="btn-outline"
                  style={{ padding: '0.6rem 1.25rem', fontSize: '0.85rem' }}
                >
                  {s.icon} {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Form ── */}
          <div data-aos="fade-left">
            <form
              onSubmit={handleSubmit}
              className="glass"
              style={{ borderRadius: '1.25rem', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}
                >
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="form-input"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}
                >
                  Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="form-input"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  rows={5}
                  className="form-input"
                  style={{ resize: 'vertical', minHeight: '130px' }}
                />
              </div>

              {/* Submit button */}
              <button
                id="contact-submit"
                type="submit"
                disabled={status === 'sending'}
                className="btn-primary"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  opacity: status === 'sending' ? 0.7 : 1,
                  cursor: status === 'sending' ? 'wait' : 'pointer',
                }}
              >
                {status === 'sending' ? (
                  <>
                    <span style={{ width: '16px', height: '16px', border: '2px solid rgba(255,255,255,0.4)', borderTopColor: '#fff', borderRadius: '50%', animation: 'spin 0.7s linear infinite', display: 'inline-block' }} />
                    Sending...
                  </>
                ) : (
                  <><FiSend size={15} /> Send Message</>
                )}
              </button>

              {/* Success / Error feedback */}
              {status === 'success' && (
                <div
                  style={{
                    padding: '0.875rem',
                    borderRadius: '0.75rem',
                    background: 'rgba(34,197,94,0.12)',
                    border: '1px solid rgba(34,197,94,0.3)',
                    color: '#22c55e',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    textAlign: 'center',
                  }}
                >
                  ✅ Message sent! I'll reply within 24 hours.
                </div>
              )}
              {status === 'error' && (
                <div
                  style={{
                    padding: '0.875rem',
                    borderRadius: '0.75rem',
                    background: 'rgba(239,68,68,0.12)',
                    border: '1px solid rgba(239,68,68,0.3)',
                    color: '#ef4444',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    textAlign: 'center',
                  }}
                >
                  ❌ Something went wrong. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
