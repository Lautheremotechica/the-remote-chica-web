import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#34bae3',
          pink: '#c73960',
          orange: '#f59321',
          'blue-medium': '#648dc9',
          cream: '#fbe6ce',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
