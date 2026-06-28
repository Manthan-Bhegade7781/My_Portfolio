/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        bg: {
          DEFAULT: '#0a0a0f',
          2: '#111118',
          3: '#1a1a24',
          card: '#16161f',
        },
        border: {
          DEFAULT: '#2a2a3a',
          2: '#3a3a50',
        },
        accent: {
          DEFAULT: '#7c6cfc',
          2: '#a78bfa',
          3: '#6ee7b7',
        },
        muted: '#8888aa',
      },
      animation: {
        bounce2: 'bounce2 2s ease-in-out infinite',
        fadeUp: 'fadeUp 0.6s ease forwards',
      },
      keyframes: {
        bounce2: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(6px)' },
        },
        fadeUp: {
          from: { opacity: 0, transform: 'translateY(24px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
