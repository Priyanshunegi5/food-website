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
                            src={
                                'https://australiangolguppaywala.com/images/fastfood/about.jpg'
                            }
                        />
                        <Image
                            alt="dashboard image"
                            className="w-full hidden dark:block"
                            src={
                                'https://australiangolguppaywala.com/images/fastfood/about.jpg'
                            }
                        />
                    </div>

                    {/* Conceptual Information */}
                    <div className="mt-4 md:mt-0">
                        {/* Title */}
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                            Best gol guppay wala in Dehradun
                        </h2>

                        {/* Description */}
                        <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400 text-justify">
                            Located in Jogiwala, this eatery, known as
                            Australian Gol Guppy Wala, serves golgappas with
                            diverse fillings and flavors, providing an
                            assortment of tastes to its customers Dehradun might
                            have a variety of popular places where you can enjoy
                            golgappa, The street food of India is probably the
                            best in the world. You can fall in a love affair
                            with the lip-smacking food .I am a very big fan of
                            street food and I have tasted street food from all
                            parts of India.The street foods that I love are ...!
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}
