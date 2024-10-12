/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Lobster: ['Lobster', 'sans-serif'],
      },
      colors: {
        Breakfast_color_from: "rgba(112, 130, 70, 0)",
        Breakfast_color_to: "rgba(112, 130, 70, 0.1)",
        Vegan_color_from: "rgba(108, 198, 63, 0)",
        Vegan_color_to: "rgba(108, 198, 63, 0.1)",
        Meat_color_from: "rgba(204, 38, 27, 0)",
        Meat_color_to: "rgba(204, 38, 27, 0.1)",
        Dessert_color_from: "rgba(240, 158, 0, 0)",
        Dessert_color_to: "rgba(240, 158, 0, 0.1)",
        Lunch_color_from: "rgba(0, 0, 0, 0)",
        Lunch_color_to: "rgba(0, 0, 0, 0.05)",
        Chocolate_color_from: "rgba(0, 0, 0, 0)",
        Chocolate_color_to: "rgba(0, 0, 0, 0.05)",
        Recipe_color_from: "rgba(231, 249, 253, 0)",
        Recipe_color_to: "rgba(231, 249, 253, 1)",
        Chef_color_from: "rgba(231, 249, 253, 0)",
        Chef_color_to: "rgba(231, 249, 253, 1)",
        Healty_food_color_from: "rgba(53, 115, 85, 1)",
        Healty_food_color_to: "rgba(29, 72, 59, 1)",
        Form_text_color: "rgba(0, 0, 0, 0.6)",
        Share_color: "rgba(231, 250, 254, 1)",
      },
      rotate: {
        '1': '1deg',
        '5': '5deg',
        '10': '10deg',
        '15': '15deg',
        'x-15': '-15deg',
        '25': '25deg',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}