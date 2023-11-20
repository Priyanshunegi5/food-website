import { Image } from '@nextui-org/react'
import ArrowRightIcon from '@/components/icons/arrow-right-icon'
import NextLink from 'next/link'

export default function BlogInfo() {
    // TODO: Fetch blog info from server
    const BlogInfos = [
        {
            blog: {
                category: 'Origin',
                createdAt: '14 days ago',
                slug: 'Origin',
                title: 'Origin',
                summary: ` Golgappa is a popular Indian street food that originated in the Northern parts of India but is now relished across the country, known by different names like Pani Puri, Puchka, or Gupchup in various regions`,
            },
            author: {
                name: 'priyanshu negi',
                avatar: {
                    src: 'https://i1.sndcdn.com/avatars-SJRJOkLWSKPiTv1j-U8f0eA-t500x500.jpg',
                },
            },
        },
        {
            blog: {
                category: 'Flavor',
                createdAt: '4 days ago',
                slug: 'Flavored Water (Pani)',
                title: 'Flavored Water (Pani)',
                summary: ` There's a range of flavored water options like tangy tamarind (Imli), spicy mint (Pudina), tangy-sweet (Imli), cumin (Jeera), and more, each adding a unique taste to the overall experience `,
            },
            author: {
                name: 'adiytya rawat',
                avatar: {
                    src: 'https://images.pexels.com/photos/1208015/pexels-photo-1208015.jpeg?cs=srgb&dl=pexels-rahul-shah-1208015.jpg&fm=jpg',
                },
            },
        },
        {
            blog: {
                category: 'Variations ',
                createdAt: '6 days ago',
                slug: 'Variations ',
                title: 'Variations ',
                summary: `There are numerous innovative variations in the fillings and flavored water. Some modern versions include chocolate-filled puris, avocado, vodka-infused pani, and various fruit juices [2][4][6].`,
            },
            author: {
                name: 'Anil Verma',
                avatar: {
                    src: 'https://img.freepik.com/free-photo/cheerful-indian-man_1098-18167.jpg',
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
                name: 'Harsh Tomar',
                avatar: {
                    src: 'https://static9.depositphotos.com/1093689/1159/i/450/depositphotos_11594175-stock-photo-photo-of-handsome-middle-aged.jpg',
                },
            },
        },
        {
            blog: {
                category: 'Ingredients',
                createdAt: '7 days ago',
                slug: 'Ingredients and Preparation',
                title: 'Ingredients and Preparation',
                summary: ` This snack typically consists of small, hollow, crispy puris filled with a mixture of flavored water (pani), tamarind chutney, spicy mashed potatoes or chickpeas, onions, and spices. The puris are made from a dough of semolina (sooji), flour (maida), baking soda, and salt, deep-fried until crispy`,
            },
            author: {
                name: 'Riya Rawat',
                avatar: {
                    src: 'data:image/jpeg;base64,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',
                },
            },
        },
        {
            blog: {
                category: 'Popularity',
                createdAt: '3 days ago',
                slug: 'Popularity',
                title: 'Popularity',
                summary: ` Golgappa remains a favorite street snack, appreciated for its burst of flavors and the joy of customization, allowing each person to tailor the taste to their preference.`,
            },
            author: {
                name: 'Alia Panwar',
                avatar: {
                    src: 'https://yt3.googleusercontent.com/vnJ1mBo5s_ZlrBzBAY98-cQJg5HuZcJ4390VTwOluwowZvnOJnLctnlEExgXkLVJE_aMCWb8Vk8=s900-c-k-c0x00ffffff-no-rj',
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
