import './globals.css'

import { Inter } from 'next/font/google'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Australian Gol Guppay Wala',
    description: '(AusGGW) - Australian Gol Guppay Wala',
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
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${inter.className}`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}
