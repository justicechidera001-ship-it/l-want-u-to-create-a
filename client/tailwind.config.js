/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#07090e',
          900: '#0b0f17',
          850: '#101522',
          800: '#161c2d',
          700: '#1f273d',
          600: '#2b3652',
        },
        brand: {
          neon: '#00f5a0',
          cyan: '#00d9f5',
          violet: '#7b2cbf',
          gold: '#f59e0b',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Syne"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glow-cyan': '0 0 35px -5px rgba(0, 217, 245, 0.3)',
        'glow-neon': '0 0 35px -5px rgba(0, 245, 160, 0.3)',
        'glow-violet': '0 0 35px -5px rgba(123, 44, 191, 0.35)',
      }
    },
  },
  plugins: [],
}
