// src/components/Skills.jsx
import { skillCategories } from '../data'
import SectionHeader from './SectionHeader'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Skills() {
  const ref = useScrollReveal()

  return (
    <section id="skills" ref={ref} className="bg-bg-2">
      <div className="section-padding">
        <SectionHeader label="What I know" title="Skills & technologies" />

        <div className="grid sm:grid-cols-2 gap-7">
          {skillCategories.map(({ title, emoji, color, tags }, i) => (
            <div
              key={title}
              className="fade-up bg-bg-card border border-border glow-border rounded-2xl p-7 card-hover"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Icon */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-4"
                style={{ background: color }}
              >
                {emoji}
              </div>

              <h3 className="text-white font-semibold text-base mb-4">{title}</h3>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs px-3 py-1.5 rounded-md bg-bg-3 border border-border text-muted hover:border-accent-2 hover:text-accent-2 transition-all cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
