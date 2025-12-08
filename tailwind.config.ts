import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Typography plugin configuration for prose content
      typography: {
        DEFAULT: {
          css: {
            // H2 subheadings
            h2: {
              fontSize: '1.5rem',
              fontWeight: '700',
              marginTop: '2rem',
              marginBottom: '1rem',
            },
            // Paragraphs
            p: {
              marginTop: '0',
              marginBottom: '0.75rem',
              lineHeight: '1.6',
            },
            // Images
            img: {
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
              borderRadius: '0.5rem',
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
            },
            // Links - use Daisy UI primary color
            a: {
              color: 'oklch(var(--p))',
              textDecoration: 'none',
              fontWeight: '500',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
            // Italic text
            em: {
              fontStyle: 'italic',
            },
            // Remove default prose max-width
            maxWidth: 'none',
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui"),
  ],
  
  // DaisyUI configuration
  daisyui: {
    themes: ["cupcake"],
    darkTheme: "cupcake",
    base: true,
    styled: true,
    utils: true,
  },
};

export default config;
