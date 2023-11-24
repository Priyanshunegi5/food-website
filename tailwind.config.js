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
                xanthous: {
                    DEFAULT: '#FEBF58',
                    100: '#442a00',
                    200: '#885401',
                    300: '#cc7e01',
                    400: '#fea414',
                    500: '#febf58',
                    600: '#fecb79',
                    700: '#fed89b',
                    800: '#ffe5bc',
                    900: '#fff2de',
                },
                sandy_brown: {
                    DEFAULT: '#F59D4C',
                    100: '#3d1f04',
                    200: '#793e07',
                    300: '#b65e0b',
                    400: '#f17d10',
                    500: '#f59d4c',
                    600: '#f7b170',
                    700: '#f9c594',
                    800: '#fbd8b8',
                    900: '#fdecdb',
                },
                cinnabar: {
                    DEFAULT: '#DD6243',
                    100: '#301109',
                    200: '#612112',
                    300: '#91321b',
                    400: '#c14323',
                    500: '#dd6243',
                    600: '#e38067',
                    700: '#eaa08d',
                    800: '#f1c0b3',
                    900: '#f8dfd9',
                },
                poppy: {
                    DEFAULT: '#E1323C',
                    100: '#300709',
                    200: '#600e12',
                    300: '#90151c',
                    400: '#c01d25',
                    500: '#e1323c',
                    600: '#e75c63',
                    700: '#ed858a',
                    800: '#f3adb1',
                    900: '#f9d6d8',
                },
                jet: {
                    DEFAULT: '#393335',
                    100: '#0b0a0a',
                    200: '#171415',
                    300: '#221e1f',
                    400: '#2d282a',
                    500: '#393335',
                    600: '#63585c',
                    700: '#8d7f84',
                    800: '#b3aaad',
                    900: '#d9d4d6',
                },
            },
            backgroundImage: {
                xv: "url('/images/patterns/xv.png')",
                exa: "url('/images/patterns/exa.png')",
                cubes: "url('/images/patterns/cubes.png')",
            },
        },
    },
    darkMode: 'class',
    plugins: [nextui()],
}
