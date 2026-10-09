import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F9F6F0',
        ink: '#1C1B1A',
        electric: '#1238FC',
        lime: '#9CEB0C',
      },
      fontFamily: {
        sans: ['var(--font-work-sans)', 'sans-serif'],
        serif: ['var(--font-biorhyme)', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
