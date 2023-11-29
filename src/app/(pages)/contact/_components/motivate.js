import { setting } from '@/data/setting'
import { Image } from '@nextui-org/react'

export default function Motivate() {
    return (
        <section className="bg-zinc-200 dark:bg-zinc-950">
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
                                                src="/images/mascot/serve.png"
                                                className="h-full object-cover p-5 sm:p-3"
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
                                        Need Help? Reach Out to Us!
                                    </h2>

                                    {/* Summary */}
                                    <p className="mt-4 text-justify">
                                        The team is ready to help with any
                                        issues, answer questions, and receive
                                        feedback to improve the user experience.
                                    </p>

                                    {/* Description */}
                                    <p className="mt-4 text-justify">
                                        We understand that you may have
                                        questions or need assistance while using
                                        our website, “{setting?.name}”. We’re
                                        here to help! Whether you’re having
                                        trouble navigating the website, need
                                        more information about our menu, or want
                                        to give us feedback, we’d love to hear
                                        from you. Our dedicated team is always
                                        ready to assist you and ensure your
                                        experience with us is smooth and
                                        enjoyable. Don’t hesitate to get in
                                        touch with us through the contact
                                        options available in the website.
                                        Remember, no question is too small, and
                                        your feedback is invaluable to us. Let’s
                                        embark on this culinary journey
                                        together!
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
