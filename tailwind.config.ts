import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'oukonva-beige' : "#FBF6F3",
        'oukonva-saumon': "#EBD9CB",
        'oukonva-orange': "#FB8500",
        'oukonva-marine' : "#023047",
        'oukonva-bleu-clair': "#8EDAE6"
      }
    },
  },
  plugins: [],
}
export default config
