import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: { DEFAULT: 'hsl(var(--card))', foreground: 'hsl(var(--card-foreground))' },
        popover: { DEFAULT: 'hsl(var(--popover))', foreground: 'hsl(var(--popover-foreground))' },
        primary: { DEFAULT: 'hsl(var(--primary))', foreground: 'hsl(var(--primary-foreground))' },
        secondary: { DEFAULT: 'hsl(var(--secondary))', foreground: 'hsl(var(--secondary-foreground))' },
        muted: { DEFAULT: 'hsl(var(--muted))', foreground: 'hsl(var(--muted-foreground))' },
        accent: { DEFAULT: 'hsl(var(--accent))', foreground: 'hsl(var(--accent-foreground))' },
        destructive: { DEFAULT: 'hsl(var(--destructive))', foreground: 'hsl(var(--destructive-foreground))' },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        // Brand blue — from logo icon
        brand: {
          50:  '#E6F4FC',
          100: '#BAE0F6',
          200: '#8DCBEF',
          300: '#5FB5E8',
          400: '#1FA3DF',
          500: '#048DD1',
          600: '#0373AC',
          700: '#025A88',
          800: '#014264',
          900: '#012D44',
          950: '#011C2C',
        },
        // Deep navy — from logo icon shadow
        navy: {
          50:  '#E8EDF4',
          100: '#C5D0E3',
          200: '#9AAECF',
          300: '#6E8ABA',
          400: '#4B6EA8',
          500: '#265788',
          600: '#1D4470',
          700: '#153358',
          800: '#0E2240',
          900: '#07152A',
          950: '#030C18',
        },
        // Brand orange — from logo icon
        orange: {
          50:  '#FEF3E7',
          100: '#FCDCB8',
          200: '#FAC488',
          300: '#F7AB57',
          400: '#F39533',
          500: '#ED7E1A',
          600: '#C46611',
          700: '#9B4F0B',
          800: '#733906',
          900: '#4C2503',
        },
        // Keep gold as alias for orange mid-tones (backwards compat)
        gold: {
          50:  '#FEF3E7',
          100: '#FCDCB8',
          200: '#FAC488',
          300: '#F7AB57',
          400: '#F39533',
          500: '#ED7E1A',
          600: '#C46611',
          700: '#9B4F0B',
          800: '#733906',
          900: '#4C2503',
        },
        chart: {
          '1': 'hsl(var(--chart-1))', '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))', '4': 'hsl(var(--chart-4))', '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)', md: 'calc(var(--radius) - 2px)', sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 24px rgba(4,141,209,0.08)',
        'card-hover': '0 8px 40px rgba(4,141,209,0.18)',
        orange: '0 4px 20px rgba(237,126,26,0.35)',
        blue: '0 4px 20px rgba(4,141,209,0.35)',
      },
      keyframes: {
        'accordion-down': { from: { height: '0' }, to: { height: 'var(--radix-accordion-content-height)' } },
        'accordion-up': { from: { height: 'var(--radix-accordion-content-height)' }, to: { height: '0' } },
        'fade-in-up': { '0%': { opacity: '0', transform: 'translateY(30px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        'fade-in': { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'fade-in': 'fade-in 0.5s ease-out forwards',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
