import { Image } from '@nextui-org/react'

export default function DirectiveInformation() {
    return (
        <section className="bg-zinc-200 dark:bg-zinc-950 my-10">
            {/* Directive Information */}
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    {/* Title */}
                    <p className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        Best gol guppay wala in Dehradun
                    </p>

                    {/* Description */}
                    <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400 text-justify">
                        Located in Jogiwala, this eatery, known as Australian
                        Gol Guppy Wala, serves golgappas with diverse fillings
                        and flavors, providing an assortment of tastes to its
                        customers Dehradun might have a variety of popular
                        places where you can enjoy golgappa, The street food of
                        India is probably the best in the world. You can fall in
                        a love affair with the lip-smacking food .I am a very
                        big fan of street food and I have tasted street food
                        from all parts of India.The street foods that I love are
                        ...!
                    </p>
                </div>

                {/* Images */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                    <Image
                        alt="Content 1"
                        className="w-full rounded-lg"
                        src={'/images/branches/first/environment.jpg'}
                    />
                    <Image
                        alt="Content 2"
                        className="mt-4 w-full lg:mt-10 rounded-lg"
                        src={'/images/branches/first/service.jpg'}
                    />
                </div>
            </div>
        </section>
    )
}
