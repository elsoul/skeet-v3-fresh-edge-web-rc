import { type Config } from 'tailwindcss'

import typographyConfig from '@tailwindcss/typography'
import animateConfig from 'tailwindcss-animate'
import scrollbarConfig from 'tailwind-scrollbar'

export default {
  darkMode: 'class',
  content: [
    '{routes,islands,components}/**/*.{ts,tsx,js,jsx}',
    'static/styles.css',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1440px',
      },
    },
    extend: {
      typography: () => ({
        DEFAULT: {
          css: {
            pre: {
              fontSize: 'inherit',
              background: 'none',
              color: 'inherit',
              boxShadow: 'none',
              padding: '0',
              margin: '0',
            },
          },
        },
      }),
    },
  },
  plugins: [typographyConfig, animateConfig, scrollbarConfig],
} satisfies Config
