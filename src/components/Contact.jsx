// src/components/Contact.jsx
import { useState } from 'react'
import { personal } from '../data'
import SectionHeader from './SectionHeader'
import { useScrollReveal } from '../hooks/useScrollReveal'
import emailjs from "@emailjs/browser";

const contactLinks = [
  {
    label: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'Manthan-Bhegade7781',
    href: personal.github,
    icon: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 1.7 2.6 1.2 3.2.9.1-.7.4-1.2.7-1.5-2.5-.3-5.2-1.3-5.2-5.7 0-1.3.5-2.3 1.1-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2.9-.3 1.9-.4 2.9-.4s2 .1 2.9.4c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.7.8 1.1 1.8 1.1 3.1 0 4.4-2.7 5.4-5.2 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'Manthan Bhegade',
    href: personal.linkedin,
    icon: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: 'Codolio',
    value: 'Manthan-7781',
    href: 'https://codolio.com/profile/Manthan-7781',
    icon: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.2l7.5 3.8L12 11.8 4.5 8 12 4.2zm-8 5.2l7 3.5v6.7l-7-3.5V9.4zm9 10.2v-6.7l7-3.5v6.7l-7 3.5z"/>
      </svg>
    ),
  },
]

export default function Contact() {
  const ref = useScrollReveal()
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))


const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        from_email: form.email,
        subject: form.subject,
        message: form.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    setSent(true);

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  } catch (error) {
    console.error("EmailJS Error:", error);
    alert("Failed to send message. Please try again.");
  }

  setLoading(false);
};

  const inputClass =
    'w-full bg-bg-card border border-border rounded-xl px-4 py-3 text-white text-sm placeholder-muted outline-none focus:border-accent transition-colors'

  return (
    <section id="contact" ref={ref}>
      <div className="section-padding">
        <SectionHeader label="Let's connect" title="Get in touch" />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div className="fade-up space-y-6">
            <p className="text-muted text-[0.97rem] leading-[1.8]">
              I'm open to freelance projects, internships, and full-time opportunities. If
              you have a project in mind or just want to say hi, feel free to reach out!
            </p>

            <div className="space-y-3">
              {contactLinks.map(({ label, value, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="flex items-center gap-4 bg-bg-card border border-border glow-border rounded-xl px-5 py-4 text-white hover:text-accent-2 transition-all group"
                >
                  <span className="text-accent-2 shrink-0">{icon}</span>
                  <span className="text-sm font-medium">{value}</span>
                  <span className="font-mono text-xs text-muted ml-auto group-hover:text-accent-2 transition-colors">
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="fade-up" style={{ transitionDelay: '100ms' }}>
            {sent ? (
              <div className="bg-bg-card border border-border rounded-2xl p-10 text-center">
                <div className="text-4xl mb-3">🎉</div>
                <h3 className="text-white font-semibold text-lg mb-2">Message sent!</h3>
                <p className="text-muted text-sm">Thanks for reaching out. I'll get back to you soon.</p>
                <button
                  onClick={() => { setSent(false); setForm({ name: '', email: '', subject: '', message: '' }) }}
                  className="mt-6 text-accent-2 text-sm border border-border hover:border-accent px-5 py-2.5 rounded-xl transition-all"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-muted font-medium mb-1.5 tracking-wide">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-muted font-medium mb-1.5 tracking-wide">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-muted font-medium mb-1.5 tracking-wide">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    required
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="block text-xs text-muted font-medium mb-1.5 tracking-wide">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or just say hello..."
                    required
                    rows={5}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-accent hover:opacity-85 disabled:opacity-60 text-white font-semibold py-3.5 rounded-xl transition-opacity text-sm"
                >
                  {loading ? 'Sending...' : 'Send message →'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
