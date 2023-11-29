import { Image } from '@nextui-org/react'

export default function Hero() {
    return (
        <section className="">
            <div className="flex relative z-20 items-center overflow-hidden">
                <div className="container mx-auto px-6 flex relative py-16">
                    <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
                        <span className="w-20 h-2  mb-12"> </span>

                        {/* Title */}
                        <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                            About Us
                            {/* Icon */}
                            <span className="text-5xl sm:text-7xl">💓</span>
                        </h1>

                        {/* Description */}
                        <p className="text-sm pt-5 sm:text-base text-gray-700 dark:text-white text-justify">
                            After their successful stint in Australia,
                            experiencing different cultures and cuisines, the
                            two friends, Honey & Nishant, decided it was time to
                            move back to their roots in India to start a new
                            phase of their lives with "Australian Gol Guppay
                            Wala".
                        </p>
                    </div>

                    {/* Image */}
                    <div className="hidden sm:block sm:w-1/3 lg:w-3/5  relative">
                        <div className="max-w-xs md:max-w-sm m-auto">
                            <Image src="/images/company/nishant.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
