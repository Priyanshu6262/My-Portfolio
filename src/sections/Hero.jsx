import { TypeAnimation } from 'react-type-animation'
import { FiArrowDown, FiDownload } from 'react-icons/fi'
import profileImg from '../assets/profile.png'

/**
 * Hero.jsx — Responsive two-column hero section.
 * Left: Name, typing text, short summary, and gradient buttons.
 * Right: Profile image with glassmorphism and floating animation.
 */
function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '5rem',
      }}
    >
      {/* ── Animated background orbs ── */}
      <div className="hero-bg" aria-hidden="true">
        <div
          className="hero-orb"
          style={{
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, #6366f1, #8b5cf6)',
            top: '-200px',
            right: '-150px',
            animationDelay: '0s',
          }}
        />
        <div
          className="hero-orb"
          style={{
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, #06b6d4, #3b82f6)',
            bottom: '-100px',
            left: '-100px',
            animationDelay: '3s',
          }}
        />
        {/* Grid pattern overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className="section-container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div className="hero-layout">

          {/* ── LEFT: Content ── */}
          <div className="hero-content" data-aos="fade-right">
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                fontWeight: 900,
                lineHeight: 1.1,
                color: 'var(--text-primary)',
                marginBottom: '1rem',
                letterSpacing: '-0.02em',
              }}
            >
              Hi, I'm{' '}
              <span className="gradient-text">Priyanshu</span>
            </h1>

            <div
              style={{
                fontSize: 'clamp(1.2rem, 3vw, 1.75rem)',
                fontWeight: 600,
                color: 'var(--text-secondary)',
                marginBottom: '1.5rem',
                minHeight: '2.5rem',
              }}
            >
              <TypeAnimation
                sequence={[
                  'MERN Stack Developer',
                  2000,
                  'React.js Developer',
                  2000,
                  'Full Stack Developer',
                  2000,
                  'Node.js Developer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                style={{
                  background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              />
            </div>

            <p
              style={{
                fontSize: '1.05rem',
                color: 'var(--text-secondary)',
                marginBottom: '2.5rem',
                lineHeight: 1.75,
                maxWidth: '600px',
              }}
            >
              I am a passionate full-stack developer focused on building modern, scalable, and user-friendly web applications.<br />
              I specialize in the MERN stack and enjoy creating clean, efficient, and responsive solutions.<br />
              I am always eager to learn new technologies and improve my development skills.
            </p>

            {/* CTA Buttons */}
            <div
              style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap',
              }}
              className="hero-buttons"
            >
              <a href="/resume.pdf" download className="btn-primary" style={{ padding: '0.875rem 2rem' }}>
                <FiDownload size={18} /> Download Resume
              </a>
              <button
                onClick={scrollToProjects}
                className="btn-primary"
                style={{
                  padding: '0.875rem 2rem',
                  background: 'linear-gradient(135deg, #06b6d4, #3b82f6)'
                }}
              >
                View Projects <FiArrowDown size={18} />
              </button>
            </div>
          </div>

          {/* ── RIGHT: Profile Image ── */}
          <div className="hero-image-container" data-aos="fade-left" data-aos-delay="100">
            <div className="hero-image-wrapper glass">
              <img
                src={profileImg}
                alt="Priyanshu"
                className="hero-image"
              />
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .hero-layout {
          display: flex;
          align-items: center;
          gap: 4rem;
          justify-content: space-between;
        }
        
        .hero-content {
          flex: 1.2;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        .hero-image-container {
          flex: 1;
          display: flex;
          justify-content: center;
        }

        .hero-image-wrapper {
          position: relative;
          width: 350px;
          height: 350px;
          border-radius: 50%;
          padding: 1rem;
          animation: floatHero 6s ease-in-out infinite;
          box-shadow: 0 25px 50px -12px rgba(99, 102, 241, 0.4);
        }

        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
        }

        @keyframes floatHero {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @media (max-width: 992px) {
          .hero-layout {
            flex-direction: column;
            text-align: center;
            gap: 3rem;
            margin-top: 2rem;
            margin-bottom: 2rem;
          }
          .hero-image-container {
            order: 1;
          }
          .hero-content {
            align-items: center;
            text-align: center;
            order: 2;
          }
          .hero-buttons {
            justify-content: center;
          }
          .hero-image-wrapper {
            width: 280px;
            height: 280px;
          }
        }
      `}</style>
    </section >
  )
}

export default Hero
