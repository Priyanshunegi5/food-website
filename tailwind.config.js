const { nextui } = require('@nextui-org/react')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                peach: {
                    DEFAULT: '#FBC996',
                    100: '#4e2803',
                    200: '#9c5106',
                    300: '#e97908',
                    400: '#f8a14a',
                    500: '#fbc996',
                    600: '#fcd4ac',
                    700: '#fddfc1',
                    800: '#feead6',
                    900: '#fef4ea',
                },
                naples_yellow: {
                    DEFAULT: '#F7D265',
                    100: '#423203',
                    200: '#846507',
                    300: '#c6970a',
                    400: '#f3bf22',
                    500: '#f7d265',
                    600: '#f8db83',
                    700: '#fae4a2',
                    800: '#fcedc1',
                    900: '#fdf6e0',
                },
            },
        },
    },
    darkMode: 'class',
    plugins: [nextui()],
}
