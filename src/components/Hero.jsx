import { personal } from '../data'
import { TypeAnimation } from 'react-type-animation';


const GithubIcon = () => (
  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 1.7 2.6 1.2 3.2.9.1-.7.4-1.2.7-1.5-2.5-.3-5.2-1.3-5.2-5.7 0-1.3.5-2.3 1.1-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2.9-.3 1.9-.4 2.9-.4s2 .1 2.9.4c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.7.8 1.1 1.8 1.1 3.1 0 4.4-2.7 5.4-5.2 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
  </svg>
)

const LinkedinIcon = () => (
  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const MailIcon = () => (
  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
)


function PhotoPlaceholder() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-3 select-none">
      {/* Silhouette SVG */}
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-28 h-28 opacity-40"
      >
        {/* Head */}
        <circle cx="60" cy="42" r="22" fill="#a78bfa" />
        {/* Body */}
        <ellipse cx="60" cy="95" rx="34" ry="26" fill="#a78bfa" />
      </svg>
      <span className="font-mono text-[11px] text-muted tracking-widest uppercase opacity-60">
      </span>
    </div>
  )
}


function FloatingBadge({ children, className }) {
  return (
    <div
      className={`absolute hidden sm:flex items-center gap-2 bg-bg-card border border-border px-3 py-2 rounded-xl shadow-lg text-xs font-medium text-white whitespace-nowrap ${className}`}
    >
      {children}
    </div>
  )
}

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 px-4 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="hero-glow" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#a78bfa 1px,transparent 1px),linear-gradient(90deg,#a78bfa 1px,transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-[1100px] mx-auto w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-8">

          {/* ── LEFT: Text content ─────────────────────────────────────────── */}
          <div className="flex-1 text-center md:text-left">
            {/* Eyebrow */}
            <p
              className="font-mono text-xs text-accent-3 tracking-widest uppercase mb-5 animate-fadeUp opacity-0"
              style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
            >
              👋 Welcome to my portfolio
            </p>

            {/* Name */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] mb-4 animate-fadeUp opacity-0"
              style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
            >
              <span className="text-white">Hi, I'm </span>
              <br />
              <span className="text-white">{personal.firstName} </span>
              <span className="text-gradient">{personal.lastName}</span>
            </h1>

            {/* Animated role line */}
            <h2 className="text-2xl font-bold text-gradient mb-3">
              <TypeAnimation
                sequence={[
                  'Full Stack Developer', 2000,
                  'MERN Stack Developer', 2000,
                  'React Developer', 2000,
                  'Node.js Developer', 2000,
                  'Problem Solver', 2000,
                ]}
                wrapper="span"
                speed={70}
                repeat={Infinity}
              />
            </h2>

            {/* Tagline */}
            <p
              className="text-sm sm:text-base text-muted leading-[1.8] mb-8 max-w-lg mx-auto md:mx-0 animate-fadeUp opacity-0"
              style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
            >
              {personal.tagline}
            </p>

            {/* CTA Buttons */}
            <div
              className="flex items-center justify-center md:justify-start flex-wrap gap-3 mb-8 animate-fadeUp opacity-0"
              style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
            >
              <a
                href="#projects"
                className="bg-accent hover:opacity-85 text-white font-semibold px-7 py-3 rounded-xl transition-all text-sm"
              >
                View my work →
              </a>
              <a
                href={personal.resumeUrl}
                className="border border-border-2 hover:border-accent-2 text-white hover:text-accent-2 font-semibold px-7 py-3 rounded-xl transition-all text-sm"
              >
                Download CV
              </a>
            </div>

            {/* Social Icons */}
            <div
              className="flex items-center justify-center md:justify-start gap-3 animate-fadeUp opacity-0"
              style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
            >
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-border text-muted hover:text-accent-2 hover:border-accent transition-all"
                title="GitHub"
              >
                <GithubIcon />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-border text-muted hover:text-accent-2 hover:border-accent transition-all"
                title="LinkedIn"
              >
                <LinkedinIcon />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-border text-muted hover:text-accent-2 hover:border-accent transition-all"
                title="Email"
              >
                <MailIcon />
              </a>

              {/* Divider */}
              <div className="w-px h-6 bg-border mx-1" />

              {/* Available badge */}
              <span className="flex items-center gap-2 text-xs text-muted border border-border px-3 py-1.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-accent-3 animate-pulse" />
                Available for work
              </span>
            </div>
          </div>

          {/* ── RIGHT: Photo ───────────────────────────────────────────────── */}
          <div
            className="flex-shrink-0 flex items-center justify-center animate-fadeUp opacity-0 relative"
            style={{ animationDelay: '0.25s', animationFillMode: 'forwards' }}
          >
            {/* Outer glow ring */}
            <div
              className="absolute rounded-full"
              style={{
                width: '300px',
                height: '300px',
                background:
                  'radial-gradient(circle, rgba(124,108,252,0.2) 0%, transparent 70%)',
                filter: 'blur(20px)',
              }}
            />

            {/* Spinning dashed ring */}
            <div
              className="absolute rounded-full border border-dashed border-accent opacity-30"
              style={{
                width: '290px',
                height: '290px',
                animation: 'spin 18s linear infinite',
              }}
            />

            {/* Spinning dotted ring (opposite direction) */}
            <div
              className="absolute rounded-full border border-dotted border-accent-3 opacity-20"
              style={{
                width: '320px',
                height: '320px',
                animation: 'spin 24s linear infinite reverse',
              }}
            />

            {/* Gradient border ring */}
            <div
              className="relative rounded-full p-[3px] z-10"
              style={{
                background: 'linear-gradient(135deg, #7c6cfc, #6ee7b7, #a78bfa)',
                width: '260px',
                height: '260px',
              }}
            >
              {/* Inner circle — photo goes here */}
              <div
                className="w-full h-full rounded-full overflow-hidden bg-bg-3 flex items-center justify-center"
                style={{ border: '4px solid #0a0a0f' }}
              >
               <img                              
                  src="\photos\WhatsApp Image 2026-06-27 at 2.11.41 PM.jpeg"                              
                  alt="Manthan Bhegade"                           
                  className="w-full h-full object-cover"         
                 />
              </div>
            </div>

            {/* Floating badge — React */}
            <FloatingBadge className="-top-2 -right-4">
              <span className="text-base">⚛️</span>
              <span className="text-accent-2">FullStack</span>
            </FloatingBadge>

            {/* Floating badge — Experience */}
            <FloatingBadge className="-bottom-2 -left-6">
              <span className="text-base">🚀</span>
              <span>Devloper.</span>
            </FloatingBadge>

            {/* Floating badge — Projects */}
            <FloatingBadge className="top-1/2 -left-10 -translate-y-1/2">
              <span className="text-base">💻</span>
              <span className="text-accent-3">10+ Projects</span>
            </FloatingBadge>
          </div>

        </div>
      </div>

      {/* Spin keyframe */}
      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </section>
  )
}
