import { Image } from '@nextui-org/react'

export default function DirectiveInformation() {
    return (
        <section className="">
            {/* Directive Information */}
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    {/* Title */}
                    <p className="font-bold text-lg text-bold mb-4">
                        What Makes Our Food Special?
                    </p>

                    {/* Description */}
                    <p className="text-base text-justify">
                        After Their Successful Stint In Australia, Experiencing
                        Different Cultures And Cuisines, The Two Friends, Honey
                        & Nishant, Decided It Was Time To Move Back To Their
                        Roots In India To Start A New Phase Of Their Lives With
                        "Australian Gol Guppay Wala". They Fell In Love With The
                        Vibrant Street Food Scene In India, Particularly The
                        Famous Chaat Stalls That Dotted Every Neighbourhood.
                        With Their Love And Passion For Food, They Set Out To
                        Achieve Their Vision Of Providing Authentic Chat
                        Flavours To Their Customers. They Travelled Across
                        India, Delving Into The Heart Of Its Street Food
                        Culture. From The Bustling Lanes Of Delhi To The Narrow
                        Alleys Of Kolkata, They Learned About The Secret Spices,
                        The Perfect Chutneys, And The Art Of Balancing Flavours.
                        Finally, Armed With Their Extensive Knowledge And A Menu
                        Featuring A Wide Variety Of Chaat Options From Different
                        Regions Of India, They Opened The Doors To Australian
                        Gol Guppay Wala In Their Hometown (Dehradun) In India.
                        They Were Determined To Give Their Customers A Taste Of
                        India's Rich Culinary Heritage, Infused With Their Own
                        Experiences.
                    </p>
                </div>

                {/* Images */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                    <Image
                        alt="Content 1"
                        className="w-full rounded-lg"
                        src={
                            'https://australiangolguppaywala.com/images/fastfood/team-1.jpg' +
                            Date.now()
                        }
                    />
                    <Image
                        alt="Content 2"
                        className="mt-4 w-full lg:mt-10 rounded-lg"
                        src={
                            'https://source.unsplash.com/random/370x527?sig=' +
                            Date.now()
                        }
                    />
                </div>
            </div>
        </section>
    )
}
