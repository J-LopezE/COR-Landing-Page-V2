/** @type {import('tailwindcss').Config} */

const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
   prefix: "",
 theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem",
      },
      screens: {
        ultrawide: "2560px",
        "4k": "3840px",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-from-bottom": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "slide-in-from-bottom-5": "slide-in-from-bottom 0.3s ease-out",
      },
    },
  },
  darkMode: "class", // Permitir modo oscuro con la clase "dark"
  plugins: [
    nextui({
      layout: {
        disabledOpacity: "0.3", // Opacidad deshabilitada
        radius: {
          small: "2px", // Bordes pequeños
          medium: "4px", // Bordes medianos
          large: "6px", // Bordes grandes
        },
        borderWidth: {
          small: "1px", // Bordes pequeños
          medium: "1px", // Bordes medianos
          large: "2px", // Bordes grandes
        },
      },
      themes: {
        light: {
          colors: {
            primary: "#0077B6", // Azul moderno
            secondary: "#00B4D8", // Verde menta
            background: "#f0f4f8", // Fondo gris suave
            text: "#034aa6", // Texto oscuro
            cardBackground: "rgba(03, 74, 166, 0.1)", // Usando la variable para aplicar el color translúcido
            cardHover: "var(--tw-color-cardHover)",
            cardBorder: "var(--tw-color-cardBorder)",
            cardShadow: "var(--tw-color-cardShadow)",
            cardText: "#034aa6",
          },
        },
        dark: {
          colors: {
            primary: "#034aa6", // Azul clásico
            secondary: "#0f6ca7", // Azul más claro
            background: "#011F3F", // Fondo oscuro
            text: "#edf2f7", // Texto claro
            cardBackground: "rgba(255, 255, 255, 0.9)", // Usando la variable para aplicar el color translúcido
            cardHover: "var(--tw-color-cardHover)",
            cardBorder: "var(--tw-color-cardBorder)",
            cardShadow: "var(--tw-color-cardShadow)",
            cardText: "#034aa6",
          },
        },
      },
    }),
    require("tailwindcss-filters"), // Plugin para aplicar filtros como el desenfoque (backdrop-filter)
  ],
};
