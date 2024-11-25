/** @type {import('tailwindcss').Config} */

const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          primary: "#0077B6",
          secondary: "#00B4D8",
          background: "#f0f4f8", // Fondo gris claro
          cardBackground: "#ffffff", // Fondo blanco puro
          cardHover: "#f8fafc", // Hover gris muy claro
          cardBorder: "#d1d5db", // Borde gris claro
          cardShadow: "rgba(0, 0, 0, 0.1)", // Sombra suave
          cardText: "#1a202c", // Texto oscuro
        },
        dark: {
          primary: "#034aa6",
          secondary: "#0f6ca7",
          background: "#011F3F", // Fondo oscuro
          cardBackground: "#1a3a5c", // Fondo ligeramente más claro
          cardHover: "#213d5a", // Hover azul más claro
          cardBorder: "#2a4365", // Borde azul grisáceo
          cardShadow: "rgba(0, 0, 0, 0.3)", // Sombra más fuerte
          cardText: "#cbd5e0", // Texto claro
        },
      },
      fontFamily: {
        sans: ["Inter", "Helvetica", "Arial", "sans-serif"], // Fuente moderna y limpia
      },
      spacing: {
        128: "18rem", // Espaciado más grande
      },
      boxShadow: {
        custom: "0 4px 12px rgba(0, 0, 0, 0.1)", // Sombra personalizada para los cards
        card: "0 4px 8px rgba(0, 0, 0, 0.1)", // Sombra más suave para cards
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
            cardBackground: "var(--tw-color-cardBackground)",
            cardHover: "var(--tw-color-cardHover)",
            cardBorder: "var(--tw-color-cardBorder)",
            cardShadow: "var(--tw-color-cardShadow)",
            cardText: "var(--tw-color-cardText)",
          },
        },
        dark: {
          colors: {
            primary: "#034aa6", // Azul clásico
            secondary: "#0f6ca7", // Azul más claro
            background: "#011F3F", // Fondo oscuro
            text: "#edf2f7", // Texto claro
            cardBackground: "#011F3F", // Azul marino oscuro para profundidad
            cardHover: "#1c3a4a", // Hover con un azul ligeramente más claro
            cardBorder: "#2a4365", // Borde azul grisáceo para separar
            cardShadow: "rgba(0, 0, 0, 0.3)", // Sombra más profunda en el modo oscuro
            cardText: "#cbd5e0", // Texto gris claro para excelente contraste
          },
        },
      },
    }),
    require("tailwindcss-filters"),
  ],
};
