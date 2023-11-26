'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Preloader({
    children,
    title = null,
    image = null,
    description = null,
}) {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => setLoading(false), 1500)
    }, [])

    if (!loading) {
        return children
    }

    return (
        <>
            <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden flex flex-col items-center justify-center">
                {/* Preloader Image */}
                {image && (
                    <Image
                        src={image?.src}
                        width={image?.width}
                        height={image?.height}
                        alt={image?.alt ?? image?.src}
                        className="ease-linear rounded-full h-[10vh] w-[10vh] mb-4"
                    />
                )}

                {(title || description) && (
                    <>
                        {/* Preloader Title */}
                        {title && (
                            <h2 className="text-center text-white text-xl font-semibold">
                                {title}
                            </h2>
                        )}

                        {/* Preloader Description */}
                        {description && (
                            <p className="w-1/3 text-center text-white">
                                {description}
                            </p>
                        )}
                    </>
                )}
            </div>
        </>
    )
}
