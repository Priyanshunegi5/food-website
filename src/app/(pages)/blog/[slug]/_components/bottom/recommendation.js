import NextLink from 'next/link'
import { web } from '@/config/router/web'
import { Image } from '@nextui-org/react'
import useRouter from '@/hooks/useRouter'
import { ScrollShadow } from '@nextui-org/react'

export default function Recommendation() {
    const route = useRouter({ version: 'v1', ...web })

    // TODO: Fetch recommendations from server
    const Recommendations = [
        {
            blog: {
                category: 'Origin',
                createdAt: '14 days ago',
                slug: 'origin',
                title: 'Origin',
                poster:
                    'https://source.unsplash.com/random/990x715?sig=' +
                    Date.now(),
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
                slug: 'flavored-water-pani',
                title: 'Flavored Water (Pani)',
                poster:
                    'https://source.unsplash.com/random/990x715?sig=' +
                    Date.now(),
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
                slug: 'variations ',
                title: 'Variations ',
                poster:
                    'https://source.unsplash.com/random/990x715?sig=' +
                    Date.now(),
                summary: `There are numerous innovative variations in the fillings and flavored water. Some modern versions include chocolate-filled puris, avocado, vodka-infused pani, and various fruit juices [2][4][6].`,
            },
            author: {
                name: 'Anil Verma',
                avatar: {
                    src: 'https://img.freepik.com/free-photo/cheerful-indian-man_1098-18167.jpg',
                },
            },
        },
    ]

    return (
        <div className="">
            <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                {/* Title */}
                <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                    Recommendations
                </h2>
            </div>

            <div className="container w-full max-w-6xl mx-auto px-2 py-8">
                <div className="flex flex-wrap -mx-2">
                    {Recommendations.map((recommendation, index) => {
                        return (
                            <div
                                key={`recommendation-${index}`}
                                className="w-full md:w-1/3 px-2 pb-12"
                            >
                                <div className="h-full bg-xv rounded overflow-hidden shadow-md hover:shadow-lg relative smooth hover:scale-105">
                                    <NextLink
                                        href={route.applyParameter('Blog', {
                                            slug: recommendation?.blog?.slug,
                                        })}
                                        className="no-underline hover:no-underline"
                                    >
                                        {/* Blog Poster */}
                                        <Image
                                            alt={recommendation?.blog?.title}
                                            src={recommendation?.blog?.poster}
                                            className="h-full w-full rounded-t shadow-lg p-3"
                                        />

                                        <div className="p-6 h-auto md:h-48">
                                            {/* Blog Category */}
                                            <p className="text-xs md:text-sm text-gray-600 dark:text-white">
                                                {recommendation?.blog?.category}
                                            </p>

                                            {/* Blog Title */}
                                            <div className="font-bold text-xl text-gray-900 dark:text-white">
                                                {recommendation?.blog?.title}
                                            </div>

                                            {/* Blog Summary */}
                                            <ScrollShadow className="text-gray-500 font-serif text-base mb-5 h-32 pb-5 scrollbar-hide">
                                                <div className="text-justify">
                                                    {
                                                        recommendation?.blog
                                                            ?.summary
                                                    }
                                                </div>
                                            </ScrollShadow>
                                        </div>

                                        <div className="flex items-center justify-between inset-x-0 bottom-0 p-6">
                                            {/* Blog Author Image */}
                                            <Image
                                                alt={
                                                    recommendation?.author?.name
                                                }
                                                src={
                                                    recommendation?.author
                                                        ?.avatar?.src
                                                }
                                                className="w-8 h-8 rounded-full mr-4"
                                            />

                                            {/* Blog Created At */}
                                            <p className="text-gray-600 text-xs md:text-sm">
                                                {
                                                    recommendation?.blog
                                                        ?.createdAt
                                                }
                                            </p>
                                        </div>
                                    </NextLink>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
