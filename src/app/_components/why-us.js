import Status from '@/app/_components/status'
import HeartIcon from '@/components/icons/heart-icon'

export default function WhyUs() {
    // TODO: Fetched this unique features from server
    const UniqueFeatures = [
        {
            icon: <HeartIcon />,
            title: 'Lorem ipsum leo laoreet aptent',
            description: `
                Lorem ipsum leo laoreet aptent vulputate
                fusce gravida suspendisse eros luctus imperdiet suscipit,
                sapien eget gravida hendrerit egestas est blandit vivamus
            `,
        },
        {
            icon: <HeartIcon />,
            title: 'Lorem ipsum leo laoreet aptent',
            description: `
                Lorem ipsum leo laoreet aptent vulputate
                fusce gravida suspendisse eros luctus imperdiet suscipit,
                sapien eget gravida hendrerit egestas est blandit vivamus
            `,
        },
        {
            icon: <HeartIcon />,
            title: 'Lorem ipsum leo laoreet aptent',
            description: `
                Lorem ipsum leo laoreet aptent vulputate
                fusce gravida suspendisse eros luctus imperdiet suscipit,
                sapien eget gravida hendrerit egestas est blandit vivamus
            `,
        },
        {
            icon: <HeartIcon />,
            title: 'Lorem ipsum leo laoreet aptent',
            description: `
                Lorem ipsum leo laoreet aptent vulputate
                fusce gravida suspendisse eros luctus imperdiet suscipit,
                sapien eget gravida hendrerit egestas est blandit vivamus
            `,
        },
        {
            icon: <HeartIcon />,
            title: 'Lorem ipsum leo laoreet aptent',
            description: `
                Lorem ipsum leo laoreet aptent vulputate
                fusce gravida suspendisse eros luctus imperdiet suscipit,
                sapien eget gravida hendrerit egestas est blandit vivamus
            `,
        },
        {
            icon: <HeartIcon />,
            title: 'Lorem ipsum leo laoreet aptent',
            description: `
                Lorem ipsum leo laoreet aptent vulputate
                fusce gravida suspendisse eros luctus imperdiet suscipit,
                sapien eget gravida hendrerit egestas est blandit vivamus
            `,
        },
        {
            icon: <HeartIcon />,
            title: 'Lorem ipsum leo laoreet aptent',
            description: `
                Lorem ipsum leo laoreet aptent vulputate
                fusce gravida suspendisse eros luctus imperdiet suscipit,
                sapien eget gravida hendrerit egestas est blandit vivamus
            `,
        },
        {
            icon: <HeartIcon />,
            title: 'Lorem ipsum leo laoreet aptent',
            description: `
                Lorem ipsum leo laoreet aptent vulputate
                fusce gravida suspendisse eros luctus imperdiet suscipit,
                sapien eget gravida hendrerit egestas est blandit vivamus
            `,
        },
        {
            icon: <HeartIcon />,
            title: 'Lorem ipsum leo laoreet aptent',
            description: `
                Lorem ipsum leo laoreet aptent vulputate
                fusce gravida suspendisse eros luctus imperdiet suscipit,
                sapien eget gravida hendrerit egestas est blandit vivamus
            `,
        },
    ]

    return (
        <section className="relative block px-6 py-10 md:py-20 md:px-10 border-t border-b">
            <div className="relative mx-auto max-w-5xl text-center">
                {/* Encourage */}
                <span className=" my-3 flex items-center justify-center font-medium uppercase tracking-wider">
                    Why choose us
                </span>

                {/* Slogan */}
                <a class="border border-white-700 dark:border-gray-300 rounded-lg py-2 px-4 text-white-400 dark:text-gray-300 text-sm mb-5 transition duration-300 ease-in-out hover:text-gray-500 dark:hover:text-gray-400">
                    Forget about spending hundreds $
                </a>

                {/* Title */}
                <h2 className="block w-full bg-gradient-to-b bg-clip-text font-bold text-3xl sm:text-4xl pt-10">
                    We Make Food, That Customers Love
                </h2>

                {/* Description */}
                <p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide">
                    Lorem ipsum leo laoreet aptent vulputate fusce gravida
                    suspendisse eros luctus imperdiet suscipit, sapien eget
                    gravida hendrerit egestas est blandit vivamus
                </p>
            </div>

            {/* Company Status */}
            <Status />

            {/* Unique Features */}
            <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
                {UniqueFeatures.map((feature, index) => {
                    return (
                        <div
                            key={`WhyUsFeature-${index}`}
                            className="rounded-md border p-8 text-center shadow"
                        >
                            {/* Icon */}
                            <div className="button-text text-red-500 mx-auto flex h-12 w-12 items-center justify-center rounded-md border">
                                {feature?.icon}
                            </div>

                            {/* Title */}
                            <h3 className="mt-6">{feature?.title}</h3>

                            {/* Description */}
                            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide">
                                {feature?.description}
                            </p>
                        </div>
                    )
                })}
            </div>

            <div className="absolute bottom-0 left-0 z-0 h-1/3 w-full border-b"></div>
            <div className="absolute bottom-0 right-0 z-0 h-1/3 w-full"></div>
        </section>
    )
}
