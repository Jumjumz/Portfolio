import plugin from 'tailwindcss';

/** @type {import('tailwindcss').Config} */
export default {
  content: [".index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'coral': {
          900: '#FF8370',
          800: '#ff9180',
          700: '#ffa799',
          600: '#ffbdb3',
          500: '#ffd3cc',
        },
        'bluegrn': '#00B1B0',
        'freesia': '#FEC84D',
        'fuchsia': '#E42256',
        'burgundy': '#BA0F30',
        'purplehz': '#2F2440',
        'sanddlr': '#C6B79B',
        'rd': '#FF2511',
        'indgo': '#5E376D',
        'ylw': '#F7E951',
        'lilac': {
          500: '#D4BBDD',
          600: '#be99cc',
          700: '#b388c3',
          800: '#a977bb',
          900: '#9e66b2'
        },
        'rquartz': '#F6E6E8',
        'blu': '#304b7a',
        'rred': {
          900: '#AA1945',
          800: '#b11b48',
          700: '#de215a',
          600: '#e1376a',
          500: '#e44e7b',
        },
        'puce': '#391306',
        'honeysuckle': '#C8626D',
        'celadon': '#B3C0AE',
        'drose': '#BC8880',
        'cadet': {
          900: '#2D3047',
          700: '#7379a5',
          600: '#e0e1eb',
        },
        'hotpink': '#FB5E89',
        'champagne': {
          900: '#FAF0C0',
          800: '#f7e9a1',
          700: '#f4de71',
        },
      },
    },
  },
  plugins: [require("tailwind-gradient-mask-image"),
              function ({addUtilities}) {
                const newUtilities = {
                  ".thin-scrollbar::-webkit-scrollbar": {
                    display: "flex",
                  },
                  ".thin-scrollbar": {
                    "ms-overflow-style": "none",
                    "scrollbar-width": "thin",
                  },
                };
                addUtilities(newUtilities);
              }
            ],
}
