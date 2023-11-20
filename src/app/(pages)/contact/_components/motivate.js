import { Image } from '@nextui-org/react'

export default function Motivate() {
    return (
        <section className="">
            <div className="min-h-screen flex flex-col p-8 sm:p-16 md:p-24 justify-center">
                <div data-theme="teal" className="mx-auto max-w-6xl">
                    {/* Title */}
                    <h2 className="sr-only">Featured case study</h2>

                    {/* Motivativate User To Ask For Help If Needed */}
                    <section className="font-sans">
                        <div className="[ lg:flex lg:items-center ] [ fancy-corners fancy-corners--large fancy-corners--top-left fancy-corners--bottom-right ]">
                            {/* Motivational Image */}
                            <div className="flex-shrink-0 self-stretch sm:flex-basis-40 md:flex-basis-50 xl:flex-basis-60">
                                <div className="h-full">
                                    <article className="h-full">
                                        <div className="h-full">
                                            <Image
                                                alt='""'
                                                width="733"
                                                height="412"
                                                className="h-full object-cover"
                                                src="https://source.unsplash.com/random/733x412?sig=12345"
                                            />
                                        </div>
                                    </article>
                                </div>
                            </div>

                            {/* Motivational Speech */}
                            <div className="p-6 bg-grey">
                                <div className="leading-relaxed">
                                    {/* Title */}
                                    <h2 className="leading-tight text-4xl font-bold">
                                        Lorem Ipsum
                                    </h2>

                                    {/* Summary */}
                                    <p className="mt-4 text-justify">
                                        "Neque porro quisquam est qui dolorem
                                        ipsum quia dolor sit amet, consectetur,
                                        adipisci velit..." "There is no one who
                                        loves pain itself, who seeks after it
                                        and wants to have it, simply because it
                                        is pain..."
                                    </p>

                                    {/* Description */}
                                    <p className="mt-4 text-justify">
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard
                                        dummy text ever since the 1500s
                                    </p>

                                    {/* External Links */}
                                    <p>
                                        <a
                                            href="/"
                                            className="mt-4 button button--secondary"
                                        >
                                            Explore this event
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    )
}
