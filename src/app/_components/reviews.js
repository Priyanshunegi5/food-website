import { Image } from '@nextui-org/react'

export default function Reviews() {
    // TODO: Fetch reviews from the server
    const reviews = [
        {
            author: 'Bonnie Green',
            message: 'Awesome Food',
            image: {
                src: 'https://api.minimalavatars.com/avatar/random/png',
            },
        },
        {
            author: 'James Smith',
            message: 'Great Service',
            image: {
                src: 'https://api.minimalavatars.com/avatar/random/png',
            },
        },
        {
            author: 'Lisa Jones',
            message: 'Delicious and Healthy',
            image: {
                src: 'https://api.minimalavatars.com/avatar/random/png',
            },
        },
        {
            author: 'Kevin Lee',
            message: 'Fast Delivery',
            image: {
                src: 'https://api.minimalavatars.com/avatar/random/png',
            },
        },
        {
            author: 'Emma Brown',
            message: 'Friendly Staff',
            image: {
                src: 'https://api.minimalavatars.com/avatar/random/png',
            },
        },
        {
            author: 'David Wilson',
            message: 'Good Value for Money',
            image: {
                src: 'https://api.minimalavatars.com/avatar/random/png',
            },
        },
        {
            author: 'Anna Taylor',
            message: 'Cozy Atmosphere',
            image: {
                src: 'https://api.minimalavatars.com/avatar/random/png',
            },
        },
        {
            author: 'John Davis',
            message: 'Variety of Choices',
            image: {
                src: 'https://api.minimalavatars.com/avatar/random/png',
            },
        },
        {
            author: 'Sarah Miller',
            message: 'Fresh and Tasty',
            image: {
                src: 'https://api.minimalavatars.com/avatar/random/png',
            },
        },
        {
            author: 'Michael Clark',
            message: 'Best Place in Town',
            image: {
                src: 'https://api.minimalavatars.com/avatar/random/png',
            },
        },
        {
            author: 'Sarah Miller',
            message: 'Fresh and Tasty',
            image: {
                src: 'https://api.minimalavatars.com/avatar/random/png',
            },
        },
        {
            author: 'Michael Clark',
            message: 'Best Place in Town',
            image: {
                src: 'https://api.minimalavatars.com/avatar/random/png',
            },
        },
    ]

    return (
        <section className="">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
                    {/* Title */}
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        Our Reviews
                    </h2>

                    {/* Description */}
                    <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
                        "Neque porro quisquam est qui dolorem ipsum quia dolor
                        sit amet, consectetur, adipisci velit..." "There is no
                        one who loves pain itself, who seeks after it and wants
                        to have it, simply because it is pain..."
                    </p>
                </div>

                <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {reviews.map((review, index) => {
                        return (
                            <div
                                key={`Review-${index}`}
                                className="text-center text-gray-500 dark:text-gray-400"
                            >
                                {/* Author Image */}
                                <div className="mx-auto mb-4 w-36 h-36">
                                    <Image
                                        alt={review?.author}
                                        src={review?.image?.src}
                                        className="rounded-full"
                                    />
                                </div>

                                {/* Author Name */}
                                <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    {review?.author}
                                </h3>

                                {/* Author Review */}
                                <p>{review?.message}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
