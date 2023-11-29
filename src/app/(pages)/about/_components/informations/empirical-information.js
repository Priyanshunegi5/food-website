import { Image } from '@nextui-org/react'

export default function EmpiricalInformation() {
    return (
        <section className="">
            <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                {/* Empirical Information */}
                <div className="mt-4 md:mt-0">
                    {/* Title */}
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        A Gastronomic Expedition: Unveiling the Flavors of India
                    </h2>

                    {/* Description */}
                    <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400 text-justify">
                        Their passion for food took them on a culinary journey
                        across India, exploring the bustling lanes of Delhi and
                        the narrow alleys of Kolkata. They delved deep into the
                        heart of India’s street food culture, learning about the
                        secret spices that give Indian street food its unique
                        flavor, the perfect chutneys that add a tangy twist, and
                        the art of balancing flavors to create a symphony on the
                        palate. With this extensive knowledge, they curated a
                        menu that offered a wide variety of chaat options from
                        different regions of India. Their venture, “Australian
                        Gol Guppay Wala”, was not just a food stall, but a
                        celebration of India’s rich culinary heritage, presented
                        with a touch of their own experiences. They were
                        determined to give their customers a taste of authentic
                        Indian chaat, right in their hometown of Dehradun. Their
                        story is a testament to their love for food and their
                        commitment to sharing the flavors of India with the
                        world.
                    </p>
                </div>

                {/* Images */}
                <div>
                    <Image
                        alt="dashboard image"
                        className="w-full dark:hidden"
                        src={
                            'https://source.unsplash.com/random/990x715?sig=' +
                            Date.now()
                        }
                    />
                    <Image
                        alt="dashboard image"
                        className="w-full hidden dark:block"
                        src={
                            'https://source.unsplash.com/random/990x715?sig=' +
                            Date.now()
                        }
                    />
                </div>
            </div>
        </section>
    )
}
