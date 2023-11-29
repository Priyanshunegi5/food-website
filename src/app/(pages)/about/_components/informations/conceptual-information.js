import { Image } from '@nextui-org/react'

export default function ConceptualInformation() {
    return (
        <>
            <section className="">
                <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                    {/* Images */}
                    <div>
                        <Image
                            alt="dashboard image"
                            className="w-full dark:hidden"
                            src={'/images/branches/first/poster.jpg'}
                        />
                        <Image
                            alt="dashboard image"
                            className="w-full hidden dark:block"
                            src={'/images/branches/first/poster.jpg'}
                        />
                    </div>

                    {/* Conceptual Information */}
                    <div className="mt-4 md:mt-0">
                        {/* Title */}
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                            From Australia to India: The Birth of a Culinary
                            Venture
                        </h2>

                        {/* Description */}
                        <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400 text-justify">
                            Their journey began in Australia, where they were
                            exposed to a variety of cultures and cuisines. This
                            experience broadened their culinary horizons and
                            sparked a desire to bring a piece of their homeland
                            to the global stage. Their love for food and their
                            roots led them back to India, where they decided to
                            embark on a new venture, “Australian Gol Guppay
                            Wala”.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}
