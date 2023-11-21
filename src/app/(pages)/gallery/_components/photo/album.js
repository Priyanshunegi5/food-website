'use client'

import { useState } from 'react'
import { Image } from '@nextui-org/react'
import Category from '@/app/(pages)/gallery/_components/photo/category'

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

    const onCategoryUpdate = currCategory => {
        if (currCategory === 0) {
            setCurrImages(images)
            return
        }

        setCurrImages(images.filter(image => image?.category === currCategory))
    }

    return (
        <>
            <section className="container mx-auto max-w-7xl px-6 flex-grow">
                {/* Gallery Categories */}
                <Category categories={categories} onUpdate={onCategoryUpdate} />

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
