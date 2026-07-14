// src/components/Education.jsx
import { education, certifications } from '../data'
import SectionHeader from './SectionHeader'
import { useScrollReveal } from '../hooks/useScrollReveal'

function EducationCard({ item, index }) {
  const { degree, institution, period, grade, description, highlights, icon, color } = item
  const isLeft = index % 2 === 0

  return (
    <div className="fade-up relative flex flex-col md:flex-row gap-6 md:gap-0 group"
      style={{ transitionDelay: `${index * 100}ms` }}>

      {/* Timeline line (desktop) */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border group-last:bg-linear-to-b group-last:from-border group-last:to-transparent -translate-x-1/2 z-0" />

      {/* Dot on timeline */}
      <div className="hidden md:flex absolute left-1/2 top-7 w-4 h-4 rounded-full border-2 border-accent bg-bg -translate-x-1/2 z-10 items-center justify-center">
        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
      </div>

      {/* Left / Right card layout */}
      <div className={`w-full md:w-[calc(50%-2rem)] ${isLeft ? 'md:pr-8 md:text-right' : 'md:ml-auto md:pl-8'}`}>
        <div className="bg-bg-card border border-border glow-border rounded-2xl p-6">
          {/* Header */}
          <div className={`flex items-start gap-4 mb-4 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
              style={{ background: color }}
            >
              {icon}
            </div>
            <div className={isLeft ? 'md:text-right' : ''}>
              <p className="font-mono text-xs text-accent-3 tracking-widest uppercase mb-1">
                {period}
              </p>
              <h3 className="text-white font-semibold text-base leading-snug">{degree}</h3>
              <p className="text-muted text-sm mt-0.5">{institution}</p>
            </div>
          </div>

          {/* Grade badge */}
          <div className={`mb-3 flex ${isLeft ? 'md:justify-end' : 'justify-start'}`}>
            <span
              className="font-mono text-xs px-3 py-1 rounded-full"
              style={{
                background: 'rgba(124,108,252,.1)',
                border: '1px solid rgba(124,108,252,.3)',
                color: '#a78bfa',
              }}
            >
              {grade}
            </span>
          </div>

          {/* Description */}
          <p className={`text-muted text-sm leading-relaxed mb-4 ${isLeft ? 'md:text-right' : ''}`}>
            {description}
          </p>

          {/* Highlights */}
          <div className={`flex flex-wrap gap-2 ${isLeft ? 'md:justify-end' : ''}`}>
            {highlights.map((h) => (
              <span
                key={h}
                className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-bg-3 border border-border text-muted"
              >
                {h}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function CertCard({ cert, delay }) {
  const Card = cert.href ? "a" : "div";

  return (
    <Card
      href={cert.href}
      target="_blank"
      rel="noopener noreferrer"
      className="fade-up bg-bg-card border border-border glow-border rounded-xl p-5 flex items-center gap-4 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lg hover:shadow-accent/20 cursor-pointer"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center text-xl shrink-0"
        style={{ background: "rgba(110,231,183,.08)" }}
      >
        {cert.icon}
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-white text-sm font-medium leading-snug">
          {cert.name}
        </p>
        <p className="text-muted text-xs mt-0.5">
          {cert.issuer}
        </p>
      </div>

      <div className="flex flex-col items-end gap-2">
        <span className="font-mono text-xs text-accent-3">
          {cert.year}
        </span>

        <svg
          width="18"
          height="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          className="text-accent opacity-0 group-hover:opacity-100 transition"
        >
          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
          <polyline points="15 3 21 3 21 9"/>
          <line x1="10" y1="14" x2="21" y2="3"/>
        </svg>
      </div>
    </Card>
  );
}

export default function Education() {
  const ref = useScrollReveal()

  return (
    <section id="education" ref={ref} className="bg-bg-2">
      <div className="section-padding">
        <SectionHeader label="My background" title="Education" />

        {/* Timeline */}
        <div className="space-y-10 mb-16">
          {education.map((item, i) => (
            <EducationCard key={item.degree} item={item} index={i} />
          ))}
        </div>

        {/* Certifications */}
        <div className="fade-up">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[2px] rounded-full bg-gradient-to-r from-accent to-accent-3" />
            <h3 className="text-white font-semibold text-lg">Certifications &amp; courses</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {certifications.map((cert, i) => (
              <CertCard key={cert.name} cert={cert} delay={i * 75} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
