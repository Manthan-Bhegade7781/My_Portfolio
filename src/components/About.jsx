// src/components/About.jsx
import { personal, stats } from '../data'
import SectionHeader from './SectionHeader'
import { useScrollReveal } from '../hooks/useScrollReveal'
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function About() {
  const ref = useScrollReveal()

  const { ref: statsRef, inView } = useInView({
  triggerOnce: true,
  threshold: 0.3,
});


  return (
    <section id="about" ref={ref}>
      <div className="section-padding">
        <SectionHeader label="Who I am" title="About me" />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Text */}
          <div className="fade-up space-y-4 text-muted leading-relaxed text-[0.97rem]">
            <p>
              Hi, I'm <span className="text-white font-medium">{personal.name}</span>, a passionate Full-Stack MERN Developer based in {personal.location}. I enjoy building scalable, user-centric web applications and transforming ideas into impactful digital experiences.
            </p>

            <p>
              I specialize in modern web technologies including React, Node.js, Express.js, and MongoDB, with a strong focus on writing clean, maintainable code and delivering seamless user experiences. I am also enthusiastic about Machine Learning and enjoy developing intelligent, data-driven solutions.
            </p>

            <p>
              Beyond development, I actively strengthen my problem-solving skills through competitive programming and continuously explore emerging technologies to grow as a Software Engineer and contribute to meaningful projects.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-accent-2 border border-border hover:border-accent px-4 py-2 rounded-lg transition-all"
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 1.7 2.6 1.2 3.2.9.1-.7.4-1.2.7-1.5-2.5-.3-5.2-1.3-5.2-5.7 0-1.3.5-2.3 1.1-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2.9-.3 1.9-.4 2.9-.4s2 .1 2.9.4c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.7.8 1.1 1.8 1.1 3.1 0 4.4-2.7 5.4-5.2 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
                </svg>
                GitHub
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-2 text-sm text-accent-2 border border-border hover:border-accent px-4 py-2 rounded-lg transition-all"
              >
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Email me
              </a>
            </div>
          </div>

          {/* Stats Grid */}
          <div ref={statsRef} className="grid grid-cols-2 gap-4">
            {stats.map(({ num, label }, i) => (
              <div
                key={i}
                className="fade-up bg-bg-card border border-border glow-border rounded-xl p-5"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="font-mono text-3xl font-bold text-accent-2 leading-none">
                  <CountUp
                    start={inView ? 0 : null}
                    end={inView ? parseInt(num) : 0}
                    duration={2.5}
                    suffix={num.includes("+") ? "+" : ""}
                  />
                </div>

                <div className="text-xs text-muted mt-2">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
