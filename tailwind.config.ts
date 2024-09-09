import { fontFamily } from 'tailwindcss/defaultTheme.js'
import type { Config } from 'tailwindcss'

export default {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ["Roboto", ...fontFamily.sans]
      }
    },
  },
  plugins: [],
} satisfies Config

