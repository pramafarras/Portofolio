import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // container: {
    //   center: true,
    //   padding: '16px',
    // },
    extend: {
      colors: {
        primary: '#f59e0b',
        secondary: '#172554',
        dark: '#0f172a',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      // screens:{
      //   '2xl': '1320px'
      // },
    },
  },
  plugins: [],
} satisfies Config;
