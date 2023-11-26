'use client'

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Image,
    Button,
} from '@nextui-org/react'
import { useState, useLayoutEffect } from 'react'
import AddToCartIcon from '@/components/icons/add-to-cart-icon'

export default function MenuShort() {
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
                src: 'https://australiangolguppaywala.com/images/fastfood/gallery1.jpg',
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
                src: `https://australiangolguppaywala.com/images/fastfood/gallery5.jpg`,
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
                src: `https://australiangolguppaywala.com/images/fastfood/gallery6.jpg`,
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
                src: `https://australiangolguppaywala.com/images/fastfood/gallery12.jpg`,
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
                src: `https://australiangolguppaywala.com/images/fastfood/gallery2.jpg`,
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
                src: `https://australiangolguppaywala.com/images/fastfood/gallery3.jpg`,
            },
        },
    ]

    return (
        <section className="py-5">
            <div class="py-5 px-4 mx-auto max-w-screen-md text-center lg:py-10 lg:px-12">
                {/* Menu Title */}
                <h1 class="mb-4 text-4xl font-bold tracking-tight leading-none text-gray-900 lg:mb-6 md:text-5xl xl:text-6xl dark:text-white">
                    Our Short Menu
                </h1>
            </div>

            {!hydrated ? (
                <div class="flex justify-center items-center h-screen">
                    <div class="rounded-full h-20 w-20 bg-violet-800 animate-ping"></div>
                </div>
            ) : (
                <div class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
                    {Menu.map((item, index) => {
                        return (
                            <Card
                                key={index}
                                shadow="sm"
                                isHoverable
                                class="w-72 bg-white dark:bg-jet-500 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
                            >
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
                                        class="h-80 w-72 object-cover rounded-t-xl"
                                    />

                                    {/* Item Details */}
                                    <div class="px-4 py-3 w-72">
                                        {/* Item Category */}
                                        <span class="mr-3 uppercase text-xs">
                                            {item?.category}
                                        </span>

                                        {/* Title */}
                                        {/* <p class="text-lg font-bold truncate block capitalize">
                                            <b>{item.title}</b>
                                        </p> */}

                                        {/* Price */}
                                        <div class="flex items-center">
                                            {/* Item Price Discouted */}
                                            {/* <p class="text-lg font-semibold cursor-auto my-3">
                                                {item.price}
                                            </p> */}

                                            {/* Item Price Actual */}
                                            <del>
                                                {/* <p class="text-sm text-gray-600 cursor-auto ml-2">
                                                    {item.price}
                                                </p> */}
                                            </del>

                                            {/* Add To Cart Icon */}
                                            <div class="ml-auto">
                                                <AddToCartIcon
                                                    class="bi bi-bag-plus"
                                                    filled
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        )
                    })}
                </div>
            )}
        </section>
    )
}
