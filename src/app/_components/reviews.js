import { Image } from '@nextui-org/react'

export default function Reviews() {
    // TODO: Fetch reviews from the server
    const reviews = [
        {
            author: 'jenifer ',
            message: 'Awesome Food',
            image: {
                src: 'https://images.unsplash.com/photo-1441123694162-e54a981ceba5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
        },
        {
            author: 'Anshika negi',
            message: 'Great Service',
            image: {
                src: 'https://images.unsplash.com/photo-1482555670981-4de159d8553b?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
        },
        {
            author: 'Diya sharma',
            message: 'Delicious and Healthy',
            image: {
                src: 'https://images.unsplash.com/photo-1512310604669-443f26c35f52?q=80&w=1034&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
        },
        {
            author: 'Kevin Lee',
            message: 'Fast Delivery',
            image: {
                src: 'https://images.unsplash.com/photo-1485811661309-ab85183a729c?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
        },
        {
            author: 'Emma Brown',
            message: 'Friendly Staff',
            image: {
                src: 'https://images.unsplash.com/photo-1464863979621-258859e62245?q=80&w=986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
        },
        {
            author: 'honey',
            message: 'Good Value for Money',
            image: {
                src: 'https://images.unsplash.com/photo-1624523276755-4f11827d2386?q=80&w=971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
        },
        {
            author: 'Anna Taylor',
            message: 'Cozy Atmosphere',
            image: {
                src: 'https://images.unsplash.com/photo-1503342394128-c104d54dba01?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
        },
        {
            author: 'John Davis',
            message: 'Variety of Choices',
            image: {
                src: 'https://images.unsplash.com/photo-1617014857819-c71c8e3eb7bb?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
        },
        {
            author: 'Sarah Miller',
            message: 'Fresh and Tasty',
            image: {
                src: 'https://images.unsplash.com/photo-1687036806155-99c182042c3c?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
        },
        {
            author: 'Michael Clark',
            message: 'Best Place in Town',
            image: {
                src: 'https://images.unsplash.com/photo-1603923407658-51dfdd0ed49c?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
        },
        {
            author: 'Sarah Miller',
            message: 'Fresh and Tasty',
            image: {
                src: 'https://images.unsplash.com/photo-1463674349210-38e4fa154dda?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
        },
        {
            author: 'Michael Clark',
            message: 'Best Place in Town',
            image: {
                src: 'https://images.unsplash.com/photo-1610257745158-86a6784f1efe?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
                        here are some review f
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
                                <div className="mx-auto mb-4 w-20 h-36 img-Reviews ">
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
