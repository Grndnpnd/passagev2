/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Eberron noir custom palette
        "eb-bg": {
          primary: "#0a0a12",
          secondary: "#12121e",
          tertiary: "#1a1a2e",
          surface: "#0f0f1a",
        },
        "eb-accent": {
          amber: "#d4a853",
          "amber-dim": "#8a7342",
          teal: "#5f9ea0",
          crimson: "#8b0000",
          "crimson-soft": "#3a1515",
          gold: "#c9a84c",
          indigo: "#3a3a6e",
        },
        "eb-text": {
          primary: "#e8e4dc",
          secondary: "#9a958c",
          muted: "#5a5650",
          inverse: "#0a0a12",
        },
      },
      fontFamily: {
        display: ['"Cinzel"', 'Georgia', 'serif'],
        heading: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"Source Code Pro"', 'monospace'],
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        "hero-zoom": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.03)" },
        },
        "pulse-glow": {
          "0%,100%": { boxShadow: "0 0 0 0 rgba(212,168,83,0.4)" },
          "50%": { boxShadow: "0 0 0 8px rgba(212,168,83,0)" },
        },
        "grain": {
          "0%,100%": { transform: "translate(0,0)" },
          "10%": { transform: "translate(-5%,-10%)" },
          "20%": { transform: "translate(-15%,5%)" },
          "30%": { transform: "translate(7%,-25%)" },
          "40%": { transform: "translate(-5%,25%)" },
          "50%": { transform: "translate(-15%,10%)" },
          "60%": { transform: "translate(15%,0%)" },
          "70%": { transform: "translate(0%,15%)" },
          "80%": { transform: "translate(3%,35%)" },
          "90%": { transform: "translate(-10%,10%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "hero-zoom": "hero-zoom 20s ease-out forwards",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "grain": "grain 8s steps(10) infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
