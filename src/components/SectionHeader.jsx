// src/components/SectionHeader.jsx
export default function SectionHeader({ label, title }) {
  return (
    <div className="mb-10">
      <p className="font-mono text-xs text-accent-3 tracking-widest uppercase mb-3">
        {label}
      </p>
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4 leading-tight">
        {title}
      </h2>
      <div className="w-14 h-[3px] rounded-full bg-gradient-to-r from-accent to-accent-3" />
    </div>
  )
}
