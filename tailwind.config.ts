import plugin from 'tailwindcss/plugin'
import { Config } from 'tailwindcss/types/config'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'card-shadow':
          'rgba(50, 50, 93, 0.23) 0px 8px 1px -2px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;',
        'button-shadow':
          'rgba(50, 50, 93, 0.32) 0px -10px 1px -2px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;',
      },
      gridTemplateColumns: {
        'card-container': '1fr 50px 1fr',
      },
      backgroundImage: {
        'pentagram-image': "url('/src/assets/images/bg-pentagon.svg')",
      },
      backgroundSize: {
        '75%': '75%',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: '#000',
        white: '#fff',
        primary: '#141539',
        secondary: '#1f3756',
        Rock: 'red',
        bgRules: 'rgba(0, 0, 0, 0.3)',
        textRules: '#3B4262',
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        '.Rock': {
          'background-color': 'red',
        },
      })
    }),
  ],
}

export default config
