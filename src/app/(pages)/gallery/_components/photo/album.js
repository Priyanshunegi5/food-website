'use client'

import 'yet-another-react-lightbox/styles.css'
import 'yet-another-react-lightbox/plugins/counter.css'
import 'yet-another-react-lightbox/plugins/captions.css'

import { useRef, useState } from 'react'
import { Image } from '@nextui-org/react'
import Lightbox from 'yet-another-react-lightbox'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import Share from 'yet-another-react-lightbox/plugins/share'
import Video from 'yet-another-react-lightbox/plugins/video'
import Counter from 'yet-another-react-lightbox/plugins/counter'
import Download from 'yet-another-react-lightbox/plugins/download'
import Captions from 'yet-another-react-lightbox/plugins/captions'
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow'
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen'
import Category from '@/app/(pages)/gallery/_components/photo/category'

export default function Album() {
    // TODO: Fetch gallery images categories from server
    const categories = [
        {
            id: 1,
            title: 'All',
        },
        {
            id: 2,
            title: 'Food',
        },
        {
            id: 3,
            title: 'Place',
        },
        {
            id: 4,
            title: 'Kitchen',
        },
        {
            id: 5,
            title: 'Customer',
        },
    ]

    // TODO: Fetch gallery images from server
    const images = [
        {
            id: 1,
            category: 2,
            title: 'Lorem ipsum',
            description: 'Lorem ipsum leo laoreet aptent',
            src: `https://australiangolguppaywala.com/images/fastfood/gallery1.jpg`,
        },
        {
            id: 2,
            category: 4,
            title: 'Lorem ipsum',
            description: 'Lorem ipsum leo laoreet aptent',
            src: `https://australiangolguppaywala.com/images/fastfood/gallery2.jpg`,
        },
        {
            id: 3,
            category: 4,
            title: 'Lorem ipsum',
            description: 'Lorem ipsum leo laoreet aptent',
            src: `https://australiangolguppaywala.com/images/fastfood/gallery3.jpg`,
        },
        {
            id: 4,
            category: 2,
            title: 'Lorem ipsum',
            description: 'Lorem ipsum leo laoreet aptent',
            src: `https://australiangolguppaywala.com/images/fastfood/gallery4.jpg`,
        },
        {
            id: 5,
            category: 2,
            title: 'Lorem ipsum',
            description: 'Lorem ipsum leo laoreet aptent',
            src: `https://australiangolguppaywala.com/images/fastfood/gallery5.jpg`,
        },
        {
            id: 6,
            category: 5,
            title: 'Lorem ipsum',
            description: 'Lorem ipsum leo laoreet aptent',
            src: `https://australiangolguppaywala.com/images/fastfood/gallery6.jpg`,
        },
        {
            id: 7,
            category: 5,
            title: 'Lorem ipsum',
            description: 'Lorem ipsum leo laoreet aptent',
            src: `https://australiangolguppaywala.com/images/fastfood/gallery7.jpg`,
        },
        {
            id: 8,
            category: 5,
            title: 'Lorem ipsum',
            description: 'Lorem ipsum leo laoreet aptent',
            src: `https://australiangolguppaywala.com/images/fastfood/gallery8.jpg`,
        },
        {
            id: 9,
            category: 5,
            title: 'Lorem ipsum',
            description: 'Lorem ipsum leo laoreet aptent',
            src: `https://australiangolguppaywala.com/images/fastfood/gallery9.jpg`,
        },
        {
            id: 11,
            category: 4,
            title: 'Lorem ipsum',
            description: 'Lorem ipsum leo laoreet aptent',
            src: `https://australiangolguppaywala.com/images/fastfood/gallery10.jpg`,
        },
        {
            id: 12,
            category: 5,
            title: 'Lorem ipsum',
            description: 'Lorem ipsum leo laoreet aptent',
            src: `https://australiangolguppaywala.com/images/fastfood/gallery11.jpg`,
        },
        {
            id: 13,
            category: 2,
            title: 'Lorem ipsum',
            description: 'Lorem ipsum leo laoreet aptent',
            src: `https://australiangolguppaywala.com/images/fastfood/gallery12.jpg`,
        },
        {
            id: 14,
            category: 5,
            title: 'Lorem ipsum',
            description: 'Lorem ipsum leo laoreet aptent',
            src: `https://australiangolguppaywala.com/images/fastfood/gallery13.jpg`,
        },
        {
            id: 15,
            category: 3,
            title: 'Lorem ipsum',
            description: 'Lorem ipsum leo laoreet aptent',
            src: `https://australiangolguppaywala.com/images/fastfood/gallery14.jpg`,
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
        if (currCategory === categories[0]?.id) {
            setCurrImages(images)
            return
        }

        setCurrImages(images.filter(image => image?.category === currCategory))
    }

    const captionsRef = useRef(null)
    const [index, setIndex] = useState(-1)

    return (
        <>
            <section className="bg-zinc-200 dark:bg-zinc-950 container mx-auto max-w-7xl px-6 flex-grow pb-10 rounded-3xl">
                {/* Gallery Categories */}
                <Category categories={categories} onUpdate={onCategoryUpdate} />

                <Lightbox
                    index={index}
                    layout="columns"
                    open={index >= 0}
                    slides={getImages()}
                    close={() => setIndex(-1)}
                    counter={{
                        container: { style: { top: 'unset', bottom: '20px' } },
                    }}
                    plugins={[
                        Zoom,
                        Share,
                        Video,
                        Counter,
                        Captions,
                        Download,
                        Slideshow,
                        Fullscreen,
                    ]}
                    on={{
                        click: () => {
                            ;(captionsRef.current?.visible
                                ? captionsRef.current?.hide
                                : captionsRef.current?.show)?.()
                        },
                    }}
                />

                {/* Gallery Images */}
                <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {currImages.map((image, index) => {
                        return (
                            <div
                                key={`GalleryImage-${index}`}
                                onClick={() => setIndex(index)}
                            >
                                <Image
                                    isZoomed
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
