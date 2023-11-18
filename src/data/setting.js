/**
 * All app setting will be defined here.
 *
 * Things that are not completly
 * dynamic but still need changes later on.
 *
 * @var const setting
 */
export const setting = {
    icons: [
        {
            rel: 'icon',
            type: 'image/png',
            sizes: '48x48',
            url: '/favicons/favicon.ico',
        },
        {
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            url: '/favicons/favicon-32x32.png',
        },
        {
            rel: 'icon',
            type: 'image/png',
            sizes: '16x16',
            url: '/favicons/favicon-16x16.png',
        },
        {
            rel: 'apple-touch-icon',
            sizes: '180x180',
            url: '/favicons/apple-touch-icon.png',
        },
        {
            rel: 'apple-touch-icon',
            sizes: '192x192',
            url: '/favicons/android-chrome-192x192.png',
        },
        {
            rel: 'apple-touch-icon',
            sizes: '512x512',
            url: '/favicons/android-chrome-512x512.png',
        },
    ],
    colors: ['#00008B', '#FF0000'],
    shortName: 'AusGGW',
    name: 'Australian Gol Guppay Wala',
    logo: '/favicons/favicon-32x32.png',
    description: '(AusGGW) - Australian Gol Guppay Wala',
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: 'white' },
        { media: '(prefers-color-scheme: dark)', color: 'black' },
    ],
    slogans: [
        'From Australia to India: Chaat-filled journey brings culinary dreams',
        'Australian friends start Indian chaat venture after exploring global flavors',
        'Friends return to India, start "Australian Gol Guppay Wala," share chaat journey.',
    ],
}
