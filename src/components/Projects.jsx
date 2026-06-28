// src/components/Projects.jsx
import { projects } from '../data'
import SectionHeader from './SectionHeader'
import { useScrollReveal } from '../hooks/useScrollReveal'

const ExternalLinkIcon = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
)

const GithubIcon = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 1.7 2.6 1.2 3.2.9.1-.7.4-1.2.7-1.5-2.5-.3-5.2-1.3-5.2-5.7 0-1.3.5-2.3 1.1-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2.9-.3 1.9-.4 2.9-.4s2 .1 2.9.4c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.7.8 1.1 1.8 1.1 3.1 0 4.4-2.7 5.4-5.2 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
  </svg>
)

function ProjectCard({ project, delay }) {
  const { title, description, emoji, color, stack, liveUrl, githubUrl, featured } = project

  return (
    <div
      className="fade-up bg-bg-card border border-border rounded-2xl p-7 flex flex-col gap-4 relative overflow-hidden group card-hover"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Top accent bar on hover */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent to-accent-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Card top row */}
      <div className="flex items-start justify-between gap-3">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
          style={{ background: color }}
        >
          {emoji}
        </div>

        <div className="flex flex-col items-end gap-2">
          {featured && (
            <span className="text-[10px] font-semibold px-2.5 py-1 rounded-md tracking-wide"
              style={{ background: 'rgba(110,231,183,.1)', border: '1px solid rgba(110,231,183,.3)', color: '#6ee7b7' }}>
              Featured
            </span>
          )}
          <div className="flex gap-3">
            {liveUrl !== '#' && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noreferrer"
                className="text-muted hover:text-accent-2 transition-colors"
                title="Live demo"
              >
                <ExternalLinkIcon />
              </a>
            )}
            {githubUrl !== '#' && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="text-muted hover:text-accent-2 transition-colors"
                title="Source code"
              >
                <GithubIcon />
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="flex-1">
        <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
        <p className="text-muted text-sm leading-[1.75]">{description}</p>
      </div>

      {/* Stack tags */}
      <div className="flex flex-wrap gap-1.5 pt-1">
        {stack.map((s) => (
          <span
            key={s}
            className="font-mono text-[11px] px-2.5 py-1 rounded-md"
            style={{
              background: 'rgba(124,108,252,.1)',
              border: '1px solid rgba(124,108,252,.25)',
              color: '#a78bfa',
            }}
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Projects() {
  const ref = useScrollReveal()

  return (
    <section id="projects" ref={ref}>
      <div className="section-padding">
        <SectionHeader label="What I've built" title="Featured projects" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} delay={i * 75} />
          ))}
        </div>

        <div className="fade-up text-center mt-10">
          <a
            href="https://github.com/Manthan-Bhegade7781"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-accent-2 border border-border hover:border-accent px-6 py-3 rounded-xl transition-all"
          >
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 1.7 2.6 1.2 3.2.9.1-.7.4-1.2.7-1.5-2.5-.3-5.2-1.3-5.2-5.7 0-1.3.5-2.3 1.1-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2.9-.3 1.9-.4 2.9-.4s2 .1 2.9.4c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.7.8 1.1 1.8 1.1 3.1 0 4.4-2.7 5.4-5.2 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
            </svg>
            View all on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
