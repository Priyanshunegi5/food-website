import { Image } from '@nextui-org/react'
import ArrowRightIcon from '@/components/icons/arrow-right-icon'
import NextLink from 'next/link'

export default function BlogInfo() {
    // TODO: Fetch blog info from server
    const BlogInfos = [
        {
            blog: {
                category: 'Tutorial',
                createdAt: '14 days ago',
                slug: 'how-to-quickly-deploy-a-static-website',
                title: 'How to quickly deploy a static website',
                summary: `Static websites are now used to bootstrap`,
            },
            author: {
                name: 'Jese Leos',
                avatar: {
                    src: 'https://api.minimalavatars.com/avatar/random/png',
                },
            },
        },
        {
            blog: {
                category: 'Entertainment',
                createdAt: '4 days ago',
                slug: 'best-movies-of-2023',
                title: 'Best movies of 2023',
                summary: `Looking for some entertainment? Here are our picks for the best movies of 2023, from comedy to drama, from action to horror.`,
            },
            author: {
                name: 'Tom Cruise',
                avatar: {
                    src: 'https://api.minimalavatars.com/avatar/random/png',
                },
            },
        },
        {
            blog: {
                category: 'Business',
                createdAt: '6 days ago',
                slug: 'how-to-start-a-successful-online-business',
                title: 'How to start a successful online business',
                summary: `Online business is booming, but it's not easy to succeed. In this post, I share some of the key steps and strategies to start and grow a successful online business.`,
            },
            author: {
                name: 'Lisa Chen',
                avatar: {
                    src: 'https://api.minimalavatars.com/avatar/random/png',
                },
            },
        },
        {
            blog: {
                category: 'Health',
                createdAt: '1 day ago',
                slug: 'how-to-stay-fit-and-healthy',
                title: 'How to stay fit and healthy',
                summary: `Fitness and health are not only about exercise and diet, but also about lifestyle and mindset. In this post, I share some simple and effective ways to stay fit and healthy in your daily life.`,
            },
            author: {
                name: 'John Lee',
                avatar: {
                    src: 'https://api.minimalavatars.com/avatar/random/png',
                },
            },
        },
        {
            blog: {
                category: 'Travel',
                createdAt: '7 days ago',
                slug: 'top-10-destinations-for-2024',
                title: 'Top 10 destinations for 2024',
                summary: `Planning your next vacation? Here are the top 10 destinations for 2024, according to Lonely Planet. From exotic islands to cultural cities, there's something for everyone.`,
            },
            author: {
                name: 'Emma Jones',
                avatar: {
                    src: 'https://api.minimalavatars.com/avatar/random/png',
                },
            },
        },
        {
            blog: {
                category: 'Interview',
                createdAt: '3 days ago',
                slug: 'how-to-ace-a-job-interview',
                title: 'How to ace a job interview',
                summary: `Job interviews can be nerve-wracking, but they don't have to be. In this post, I share some tips and tricks on how to prepare, present, and follow up for a job interview.`,
            },
            author: {
                name: 'David Smith',
                avatar: {
                    src: 'https://api.minimalavatars.com/avatar/random/png',
                },
            },
        },
    ]

    return (
        <section className="">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                    {/* Title */}
                    <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        Our Blog
                    </h2>

                    {/* Description */}
                    <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
                        We use an agile approach to test assumptions and connect
                        with the needs of your audience early and often.
                    </p>
                </div>

                {/* Blog Links */}
                <div className="grid gap-8 lg:grid-cols-2">
                    {BlogInfos.map((blogInfo, index) => {
                        return (
                            <article key={`BlogInfo-${index}`} className="p-6">
                                <div className="flex justify-between items-center mb-5 text-gray-500">
                                    {/* Blog Category */}
                                    <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                                        {blogInfo?.blog?.category}
                                    </span>

                                    {/* Blog Created At */}
                                    <span className="text-sm">
                                        {blogInfo?.blog?.createdAt}
                                    </span>
                                </div>

                                {/* Blog Title */}
                                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    <a href="#">{blogInfo?.blog?.title}</a>
                                </h2>

                                {/* Blog Summary */}
                                <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
                                    {blogInfo?.blog?.summary}
                                </p>

                                <div className="flex justify-between items-center">
                                    <div className="flex items-center space-x-4">
                                        {/* Blog Author Image */}
                                        <Image
                                            alt={blogInfo?.author?.name}
                                            className="w-7 h-7 rounded-full"
                                            src={blogInfo?.author?.avatar?.src}
                                        />

                                        {/* Blog Author Name */}
                                        <span className="font-medium dark:text-white">
                                            {blogInfo?.author?.name}
                                        </span>
                                    </div>

                                    {/* Blog Article Link */}
                                    <NextLink
                                        href={blogInfo?.blog?.slug}
                                        className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
                                    >
                                        Read more
                                        <ArrowRightIcon
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            className="ml-2 w-4 h-4"
                                        />
                                    </NextLink>
                                </div>
                            </article>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
