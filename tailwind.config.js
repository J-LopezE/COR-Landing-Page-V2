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
        // Colores para el modo claro
        primary: "#0077B6", // Azul moderno
        secondary: "#00B4D8", // Verde menta
        background: "#f0f4f8", // Fondo gris suave
        dark: "#1a202c", // Texto oscuro
        light: "#ffffff", // Blanco limpio
        'dark-glass': 'rgba(10, 29, 47, 0.1)', // Fondo oscuro para el modo oscuro
        'light-glass': '#f0f4f8', // Fondo para el modo claro
        accent: "#90E0EF", // Azul pastel para detalles
        danger: "#FF6F61", // Color de alerta o error
        cardBackground: "#ffffff", // Fondo blanco para los cards
        cardHover: "#f1f5f9", // Fondo ligeramente gris para el hover del card
        cardBorder: "#e2e8f0", // Borde sutil, gris claro
        cardShadow: "rgba(0, 0, 0, 0.1)", // Sombra suave para los cards
        cardText: "#333333", // Texto oscuro y legible dentro del card
      },
      fontFamily: {
        sans: ["Inter", "Helvetica", "Arial", "sans-serif"], // Fuente moderna y limpia
      },
      spacing: {
        128: "32rem", // Espaciado más grande
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
            cardBackground: "#ffffff", // Fondo blanco para los cards
            cardHover: "#f1f5f9", // Fondo gris claro para el hover
            cardBorder: "#e2e8f0", // Borde sutil de los cards
            cardText: "#333333", // Texto oscuro dentro de los cards
          },
        },
        dark: {
          colors: {
            primary: "#034aa6", // Azul clásico
            secondary: "#0f6ca7", // Azul más claro
            background: "#001f3d", // Fondo oscuro
            text: "#edf2f7", // Texto claro
            cardBackground: "#2d3748", // Fondo oscuro para los cards
            cardHover: "#4a5568", // Hover oscuro para los cards
            cardBorder: "#718096", // Borde gris claro
            cardText: "#edf2f7", // Texto claro dentro de los cards
          },
        },
      },
    }),
    require("tailwindcss-filters"),
  ],
};
