/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['"Space Grotesk"', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
      colors: {
        // ── Accent palette (shared across themes) ──
        'accent-blue':   '#2563EB',
        'accent-teal':   '#0D9488',
        'accent-amber':  '#D97706',
        'accent-rose':   '#E11D48',

        // ── Dark theme surfaces ──
        'dark-bg':       '#18181B',
        'dark-surface':  '#1F1F23',
        'dark-elevated': '#27272A',
        'dark-border':   '#3F3F46',
        'dark-text':     '#F4F4F5',
        'dark-muted':    '#A1A1AA',
        'dark-subtle':   '#71717A',

        // ── Light theme surfaces (beige/warm) ──
        'light-bg':      '#FAF7F2',
        'light-surface': '#F5F0E8',
        'light-elevated':'#EDE8DC',
        'light-border':  '#D6CEBF',
        'light-text':    '#1C1917',
        'light-muted':   '#57534E',
        'light-subtle':  '#A8A29E',
      },
      boxShadow: {
        'brutal':       '3px 3px 0px currentColor',
        'brutal-lg':    '5px 5px 0px currentColor',
        'glass':        '0 4px 24px rgba(0,0,0,0.12)',
        'glass-dark':   '0 4px 24px rgba(0,0,0,0.4)',
      },
      backdropBlur: {
        'glass': '12px',
      },
      animation: {
        'fade-up':    'fadeUp 0.5s ease forwards',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: 0, transform: 'translateY(16px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
