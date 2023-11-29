import { Image } from '@nextui-org/react'

export default function Hero() {
    return (
        <section>
            <div class="py-20">
                <div class="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
                    <div class="flex flex-col w-full lg:w-1/2 justify-center p-8">
                        {/* Title */}
                        <h1 class="uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800 mb-2">
                            About
                        </h1>

                        {/* Icon */}
                        <h2 class="text-3xl md:text-4xl leading-relaxed md:leading-snug mb-2">
                            {/* <span className="text-5xl sm:text-7xl">💓</span> */}
                            <span className="uppercase">{' us '}</span>
                            <span className="animate-pulse text-poppy-500 dark:text-sandy-brown-500 text-4xl sm:text-5xl">
                                AusGGW
                            </span>
                        </h2>

                        <p class="text-sm pt-5 sm:text-base text-gray-700 dark:text-white text-justify">
                            Honey and Nishant, after a successful stint in
                            Australia, returned to India to start “Australian
                            Gol Guppay Wala”. They were inspired by the vibrant
                            street food scene in India, particularly the chaat
                            stalls. They traveled across India, learning about
                            the secret spices, perfect chutneys, and the art of
                            balancing flavors. Finally, they opened “Australian
                            Gol Guppay Wala” in Dehradun, offering a wide
                            variety of chaat options from different regions of
                            India.
                        </p>
                    </div>

                    <div class="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3">
                        <div class="h-48 flex flex-wrap content-center">
                            <div>
                                <Image src="/images/company/nishant.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
