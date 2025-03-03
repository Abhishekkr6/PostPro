import type { Config } from "tailwindcss";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

// Helper function to add CSS variables for all colors in the theme
function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class", "class"], // Enable class-based dark mode
  theme: {
    extend: {
      // Custom font families
      fontFamily: {
        abel: ["var(--font-abel)", "sans-serif"],
        outfit: ["var(--font-outfit)", "sans-serif"],
        delius: ["var(--font-delius)", "sans-serif"],
      },
      // Custom color palette
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        dark: "#0a0a0a", // Static dark color
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      // Custom border radius
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      // Custom animations (if needed)
      keyframes: {
        slideDown: {
          "0%": { opacity: 0, transform: "translateY(-20px) translateX(5px) rotate(-90deg)", filter: "blur(5px)" },
          "30%": { opacity: 1, transform: "translateY(4px) translateX(0) rotate(0)", filter: "blur(0)" },
          "50%": { opacity: 1, transform: "translateY(-3px) translateX(0) rotate(0)" },
          "100%": { opacity: 1, transform: "translateY(0) translateX(0) rotate(0)" },
        },
        wave: {
          "30%": { opacity: 1, transform: "translateY(4px) translateX(0) rotate(0)" },
          "50%": { opacity: 1, transform: "translateY(-3px) translateX(0) rotate(0)" },
          "100%": { opacity: 1, transform: "translateY(0) translateX(0) rotate(0)" },
        },
        disapear: {
          from: { opacity: 1 },
          to: { opacity: 0, transform: "translateX(5px) translateY(20px)", filter: "blur(5px)" },
        },
        takeOff: {
          "0%": { opacity: 1 },
          "60%": { opacity: 1, transform: "translateX(70px) rotate(45deg) scale(2)" },
          "100%": { opacity: 0, transform: "translateX(160px) rotate(45deg) scale(0)" },
        },
        land: {
          "0%": { transform: "translateX(-60px) translateY(30px) rotate(-50deg) scale(2)", opacity: 0, filter: "blur(3px)" },
          "100%": { transform: "translateX(0) translateY(0) rotate(0)", opacity: 1, filter: "blur(0)" },
        },
        contrail: {
          "0%": { width: 0, opacity: 1 },
          "8%": { width: "15px" },
          "60%": { opacity: 0.7, width: "80px" },
          "100%": { opacity: 0, width: "160px" },
        },
        appear: {
          "0%": { opacity: 0, transform: "scale(4) rotate(-40deg)", filter: "blur(4px)" },
          "30%": { opacity: 1, transform: "scale(0.6)", filter: "blur(1px)" },
          "50%": { opacity: 1, transform: "scale(1.2)", filter: "blur(0)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
      },
      animation: {
        slideDown: "slideDown 0.8s ease forwards",
        wave: "wave 0.5s ease forwards",
        disapear: "disapear 0.6s ease forwards",
        takeOff: "takeOff 0.8s linear forwards",
        land: "land 0.6s ease forwards",
        contrail: "contrail 0.8s linear forwards",
        appear: "appear 1.2s ease forwards",
      },
    },
  },
  plugins: [
    addVariablesForColors, // Add CSS variables for colors
    require("tailwindcss-animate"), // Enable Tailwind CSS animations
  ],
} satisfies Config;

export default config;