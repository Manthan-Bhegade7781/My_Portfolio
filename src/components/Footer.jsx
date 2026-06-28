import { personal } from '../data'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-8 px-4 sm:px-8">
      <div className="max-w-[1100px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted">
        <span>
          Designed &amp; built by{' '}
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            className="text-accent-2 hover:underline"
          >
            {personal.name}
          </a>
        </span>

        <span className="font-mono">
  © {year} . Crafted with passion and code.
</span>


        <div className="flex gap-4">
          <a href={personal.github} target="_blank" rel="noreferrer"
            className="hover:text-accent-2 transition-colors">GitHub</a>
          <a href={personal.linkedin} target="_blank" rel="noreferrer"
            className="hover:text-accent-2 transition-colors">LinkedIn</a>
          <a href={`mailto:${personal.email}`}
            className="hover:text-accent-2 transition-colors">Email</a>
        </div>
      </div>
    </footer>
  )
}
