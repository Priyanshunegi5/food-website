'use client'

import { useState, useLayoutEffect } from 'react'
import AnimatedText from '@/components/framer/animated-text'

export default function HeroDescription({ slogans, description }) {
    const [hydrated, setHydrated] = useState(false)

    useLayoutEffect(() => {
        setHydrated(true)
    }, [hydrated])

    return (
        <>
            {/* Hero Description */}
            <p className="mb-8 text-lg font-normal text-gray-700 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-100">
                {hydrated && (
                    <AnimatedText
                        text={
                            slogans[Math.floor(Math.random() * slogans.length)]
                        }
                    />
                )}
            </p>
        </>
    )
}
