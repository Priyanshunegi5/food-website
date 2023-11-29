import { map, chunk } from 'lodash'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import { Card, CardBody, CardHeader, Image } from '@nextui-org/react'

export default function Reviews() {
    // TODO: Fetch reviews from the server
    const reviews = [
        {
            author: 'jenifer ',
            position: 'Customer',
            message: 'Awesome Food',
            image: {
                src: 'https://images.unsplash.com/photo-1441123694162-e54a981ceba5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
        },
        {
            author: 'Anshika negi',
            position: 'Customer',
            message: 'Great Service',
            image: {
                src: 'https://images.unsplash.com/photo-1482555670981-4de159d8553b?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
        },
        {
            author: 'Diya sharma',
            position: 'Customer',
            message: 'Delicious and Healthy',
            image: {
                src: 'https://images.unsplash.com/photo-1512310604669-443f26c35f52?q=80&w=1034&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
        },
        {
            author: 'Kevin Lee',
            position: 'Customer',
            message: 'Fast Delivery',
            image: {
                src: 'https://images.unsplash.com/photo-1485811661309-ab85183a729c?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
        },
        {
            author: 'Emma Brown',
            position: 'Vlogger',
            message: 'Friendly Staff',
            image: {
                src: 'https://images.unsplash.com/photo-1464863979621-258859e62245?q=80&w=986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
        },
        {
            author: 'honey',
            position: 'Vlogger',
            message: 'Good Value for Money',
            image: {
                src: 'https://images.unsplash.com/photo-1624523276755-4f11827d2386?q=80&w=971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
        },
        {
            author: 'Anna Taylor',
            position: 'Critic',
            message: 'Cozy Atmosphere',
            image: {
                src: 'https://images.unsplash.com/photo-1503342394128-c104d54dba01?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
        },
        {
            author: 'John Davis',
            position: 'Critic',
            message: 'Variety of Choices',
            image: {
                src: 'https://images.unsplash.com/photo-1617014857819-c71c8e3eb7bb?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
        },
        {
            author: 'Sarah Miller',
            position: 'Critic',
            message: 'Fresh and Tasty',
            image: {
                src: 'https://images.unsplash.com/photo-1687036806155-99c182042c3c?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
        },
        {
            author: 'Michael Clark',
            position: 'Critic',
            message: 'Best Place in Town',
            image: {
                src: 'https://images.unsplash.com/photo-1603923407658-51dfdd0ed49c?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
        },
        {
            author: 'Sarah Miller',
            position: 'Youtuber',
            message: 'Fresh and Tasty',
            image: {
                src: 'https://images.unsplash.com/photo-1463674349210-38e4fa154dda?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
        },
        {
            author: 'Michael Clark',
            position: 'Youtuber',
            message: 'Best Place in Town',
            image: {
                src: 'https://images.unsplash.com/photo-1610257745158-86a6784f1efe?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
        },
    ]

    return (
        <section id="testimonies" class="bg-zinc-200 dark:bg-zinc-950 py-20">
            <div class="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">
                <div class="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
                    <div class="mb-12 space-y-5 md:mb-16 md:text-center">
                        {/* Title */}
                        <div class="text-gray-900 dark:text-white inline-block px-3 py-1 text-sm font-semibold rounded-lg md:text-center text-cn hover:cursor-pointer hover:bg-opacity-40">
                            Our Reviews
                        </div>

                        {/* Subtitle */}
                        <h1 class="text-gray-900 dark:text-white mb-5 text-3xl font-semibol md:text-center md:text-5xl">
                            It's not just us.
                        </h1>

                        {/* Description */}
                        <p class="text-gray-900 dark:text-white text-xl md:text-center md:text-2xl">
                            Here's what others have to say about us.
                        </p>
                    </div>
                </div>

                <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                    {map(chunk(reviews, 4), (chunks, id) => {
                        return (
                            <ul class="space-y-8" key={`ReviewChunk-${id}`}>
                                {map(chunks, (review, index) => {
                                    return (
                                        <li
                                            class="text-sm leading-6"
                                            key={`Review-${index}`}
                                        >
                                            <div class="relative group">
                                                <div class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-poppy-600 to-xanthous-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                                                <div class="cursor-pointer">
                                                    <div class="relative p-6 space-y-6 leading-none rounded-lg bg-white dark:bg-jet-500 ring-1 ring-gray-900/5">
                                                        <div class="flex items-center space-x-4">
                                                            {/* Author Avatar */}
                                                            <Image
                                                                shadow="md"
                                                                radius="full"
                                                                alt={
                                                                    review?.author
                                                                }
                                                                src={
                                                                    review
                                                                        ?.image
                                                                        ?.src
                                                                }
                                                                className="w-12 h-12 bg-center bg-cover border rounded-full"
                                                            />

                                                            <div>
                                                                {/* Author Name */}
                                                                <h3 class="text-lg font-semibold">
                                                                    {
                                                                        review?.author
                                                                    }
                                                                </h3>

                                                                {/* Author Position */}
                                                                <p class="text-md">
                                                                    {
                                                                        review?.position
                                                                    }
                                                                </p>
                                                            </div>
                                                        </div>

                                                        <p class="leading-normal text-md">
                                                            {/* Quote Left Icon */}
                                                            <FaQuoteLeft
                                                                size="10"
                                                                className="inline-block"
                                                            />

                                                            {/* Author Review */}
                                                            <span>
                                                                {' '}
                                                                {
                                                                    review?.message
                                                                }{' '}
                                                            </span>

                                                            {/* Quote Right Icon*/}
                                                            <FaQuoteRight
                                                                size="10"
                                                                className="inline-block"
                                                            />
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
