'use client'

import {
    Card,
    Image,
    CardBody,
    CardHeader,
    CardFooter,
} from '@nextui-org/react'

import { useState, useLayoutEffect } from 'react'

export default function MenuLarge() {
    const [hydrated, setHydrated] = useState(false)

    useLayoutEffect(() => {
        setHydrated(true)
    }, [hydrated])

    // Random signature for unsplash
    const sig = Date.now()

    // TODO: Fetched this menu from server
    const Menu = [
        {
            title: 'Orange',
            price: '$5.50',
            category: 'Australian',
            count: Math.round(Math.random() * 10),
            image: {
                width: '100%',
                height: 'auto',
                src: `https://australiangolguppaywala.com/images/fastfood/gallery1.jpg`,
            },
        },
        {
            title: 'Tangerine',
            price: '$3.00',
            category: 'Australian',
            count: Math.round(Math.random() * 10),
            image: {
                width: '100%',
                height: 'auto',
                src: `https://australiangolguppaywala.com/images/fastfood/gallery2.jpg`,
            },
        },
        {
            title: 'Raspberry',
            price: '$10.00',
            category: 'Australian',
            count: Math.round(Math.random() * 10),
            image: {
                width: '100%',
                height: 'auto',
                src: `https://australiangolguppaywala.com/images/fastfood/gallery3.jpg`,
            },
        },
        {
            title: 'Lemon',
            price: '$5.30',
            category: 'Australian',
            count: Math.round(Math.random() * 10),
            image: {
                width: '100%',
                height: 'auto',
                src: `https://australiangolguppaywala.com/images/fastfood/gallery4.jpg`,
            },
        },
        {
            title: 'Avocado',
            price: '$15.70',
            category: 'Australian',
            count: Math.round(Math.random() * 10),
            image: {
                width: '100%',
                height: 'auto',
                src: `https://australiangolguppaywala.com/images/fastfood/gallery13.jpg`,
            },
        },
        {
            title: 'Lemon 2',
            price: '$8.00',
            category: 'Indian',
            count: Math.round(Math.random() * 10),
            image: {
                width: '100%',
                height: 'auto',
                src: `https://australiangolguppaywala.com/images/fastfood/gallery5.jpg`,
            },
        },
        {
            title: 'Banana',
            price: '$7.50',
            category: 'Indian',
            count: Math.round(Math.random() * 10),
            image: {
                width: '100%',
                height: 'auto',
                src: `https://australiangolguppaywala.com/images/fastfood/gallery6.jpg`,
            },
        },
        {
            title: 'Watermelon',
            price: '$12.20',
            category: 'Indian',
            count: Math.round(Math.random() * 10),
            image: {
                width: '100%',
                height: 'auto',
                src: `https://australiangolguppaywala.com/images/fastfood/gallery12.jpg`,
            },
        },
    ]

    return (
        <section className="bg-lozenge m-10 px-5 py-10">
            <div class="py-5 px-4 mx-auto max-w-screen-md text-center lg:py-16 lg:px-12">
                {/* Menu Title */}
                <h1 class="mb-4 text-4xl font-bold tracking-tight leading-none text-gray-900 lg:mb-6 md:text-5xl xl:text-6xl dark:text-white">
                    Our Large Menu
                </h1>

                {/* Menu description */}
                <p class="font-light text-gray-500 md:text-lg xl:text-xl dark:text-gray-400">
                    Our Enterprise administrators are performing.
                </p>
            </div>

            {!hydrated ? (
                <div class="flex justify-center items-center h-screen">
                    <div class="rounded-full h-20 w-20 bg-violet-800 animate-ping"></div>
                </div>
            ) : (
                <div className="w-fit mx-auto gap-2 grid grid-cols-2 sm:grid-cols-4">
                    {Menu.map((item, index) => (
                        <Card
                            key={index}
                            shadow="sm"
                            isPressable
                            className="bg-white dark:bg-jet-400 md:m-5 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
                        >
                            {/* Card Header */}
                            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                                {/* Item Category */}
                                <p className="text-tiny uppercase font-bold">
                                    {item?.category}
                                </p>
                            </CardHeader>

                            {/* Card Body */}
                            <CardBody className="overflow-visible py-2">
                                {/* Item Image */}
                                <Image
                                    shadow="sm"
                                    radius="lg"
                                    alt={item?.title}
                                    title={item?.title}
                                    src={item?.image?.src}
                                    width={item?.image?.width}
                                    height={item?.image?.height}
                                    className="w-full object-cover h-[140px]"
                                />
                            </CardBody>

                            {/* Card Footer */}
                            <CardFooter className="text-small justify-between">
                                {/* Title */}
                                <b>{item.title}</b>

                                {/* Price
                                <p className="text-default-500">{item.price}</p> */}
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            )}
        </section>
    )
}
