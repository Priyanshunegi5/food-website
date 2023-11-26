'use client'

import { NextUIProvider } from '@nextui-org/react'
import Preloader from '@/components/utils/preloader'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

export function Providers({ children }) {
    return (
        <NextUIProvider>
            <NextThemesProvider attribute="class" defaultTheme="dark">
                <Preloader
                    opacity={60}
                    delay="3000"
                    image={{
                        width: 100,
                        height: 100,
                        alt: 'panipuri',
                        src: '/images/preloaders/golguppa.webp',
                    }}
                >
                    {children}
                </Preloader>
            </NextThemesProvider>
        </NextUIProvider>
    )
}
