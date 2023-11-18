'use client'

import { Image } from '@nextui-org/react'
import { useEffect, useState } from 'react'

export default function Album() {
    // TODO: Fetch gallery images categories from server
    const categories = [
        {
            id: 0,
            title: 'All',
        },
        {
            id: 1,
            title: 'Lorem ipsum',
        },
        {
            id: 2,
            title: 'Lorem ipsum',
        },
        {
            id: 3,
            title: 'Lorem ipsum',
        },
        {
            id: 4,
            title: 'Lorem ipsum',
        },
        {
            id: 5,
            title: 'Lorem ipsum',
        },
        {
            id: 6,
            title: 'Lorem ipsum',
        },
        {
            id: 7,
            title: 'Lorem ipsum',
        },
        {
            id: 8,
            title: 'Lorem ipsum',
        },
        {
            id: 9,
            title: 'Lorem ipsum',
        },
        {
            id: 10,
            title: 'Lorem ipsum',
        },
    ]

    // TODO: Fetch gallery images from server
    const images = [
        {
            id: Date.now(),
            title: 'Lorem ipsum',
            src: `https://pic.re/image`,
            description: 'Lorem ipsum leo laoreet aptent',
            category: Math.round(Math.random() * categories.length),
        },
        {
            id: Date.now(),
            title: 'Lorem ipsum',
            src: `https://pic.re/image`,
            description: 'Lorem ipsum leo laoreet aptent',
            category: Math.round(Math.random() * categories.length),
        },
        {
            id: Date.now(),
            title: 'Lorem ipsum',
            src: `https://pic.re/image`,
            description: 'Lorem ipsum leo laoreet aptent',
            category: Math.round(Math.random() * categories.length),
        },
        {
            id: Date.now(),
            title: 'Lorem ipsum',
            src: `https://pic.re/image`,
            description: 'Lorem ipsum leo laoreet aptent',
            category: Math.round(Math.random() * categories.length),
        },
        {
            id: Date.now(),
            title: 'Lorem ipsum',
            src: `https://pic.re/image`,
            description: 'Lorem ipsum leo laoreet aptent',
            category: Math.round(Math.random() * categories.length),
        },
        {
            id: Date.now(),
            title: 'Lorem ipsum',
            src: `https://pic.re/image`,
            description: 'Lorem ipsum leo laoreet aptent',
            category: Math.round(Math.random() * categories.length),
        },
        {
            id: Date.now(),
            title: 'Lorem ipsum',
            src: `https://pic.re/image`,
            description: 'Lorem ipsum leo laoreet aptent',
            category: Math.round(Math.random() * categories.length),
        },
        {
            id: Date.now(),
            title: 'Lorem ipsum',
            src: `https://pic.re/image`,
            description: 'Lorem ipsum leo laoreet aptent',
            category: Math.round(Math.random() * categories.length),
        },
        {
            id: Date.now(),
            title: 'Lorem ipsum',
            src: `https://pic.re/image`,
            description: 'Lorem ipsum leo laoreet aptent',
            category: Math.round(Math.random() * categories.length),
        },
        {
            id: Date.now(),
            title: 'Lorem ipsum',
            src: `https://pic.re/image`,
            description: 'Lorem ipsum leo laoreet aptent',
            category: Math.round(Math.random() * categories.length),
        },
    ]

    const [currCategory, setCurrCategory] = useState(0)
    const [currImages, setCurrImages] = useState(images)

    const getImages = () => {
        return images.map((image, index) => {
            return {
                src: image?.src,
                title: image?.title,
                key: `Image-${index}`,
                downloadUrl: image?.src,
                downloadFilename: image?.id,
                description: image?.description,
                share: { url: image?.src, title: image?.title },
            }
        })
    }

    useEffect(() => {
        if (currCategory === 0) {
            setCurrImages(images)
            return
        }

        setCurrImages(images.filter(image => image?.category === currCategory))
    }, [currCategory])

    return (
        <>
            <section className="container mx-auto max-w-7xl px-6 flex-grow">
                {/* Gallery Categories */}
                <div class="flex items-center justify-center py-4 md:py-8 flex-wrap">
                    {categories.map((category, index) => {
                        return (
                            <button
                                type="button"
                                onClick={() => setCurrCategory(category?.id)}
                                key={`GalleryCategory-${index}:${category?.id}`}
                                class={
                                    currCategory !== category?.id
                                        ? 'text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800'
                                        : 'text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800'
                                }
                            >
                                {category?.title}
                            </button>
                        )
                    })}
                </div>

                {/* Gallery Images */}
                <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {currImages.map((image, index) => {
                        return (
                            <div key={`GalleryImage-${index}`}>
                                <Image
                                    src={image?.src}
                                    alt={image?.title}
                                    title={image?.title}
                                    class="h-auto max-w-full rounded-lg"
                                />
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}
