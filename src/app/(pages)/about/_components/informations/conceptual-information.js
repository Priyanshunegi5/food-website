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

                    {/* Conceptual Information */}
                    <div className="mt-4 md:mt-0">
                        {/* Title */}
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                            Why do we use it?
                        </h2>

                        {/* Description */}
                        <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400 text-justify">
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem
                            Ipsum is that it has a more-or-less normal
                            distribution of letters, as opposed to using
                            'Content here, content here', making it look like
                            readable English. Many desktop publishing packages
                            and web page editors now use Lorem Ipsum as their
                            default model text, and a search for 'lorem ipsum'
                            will uncover many web sites still in their infancy.
                            Various versions have evolved over the years,
                            sometimes by accident, sometimes on purpose
                            (injected humour and the like).
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}
