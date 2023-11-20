import { Image } from '@nextui-org/react'

export default function EmpiricalInformation() {
    return (
        <section className="">
            <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                {/* Empirical Information */}
                <div className="mt-4 md:mt-0">
                    {/* Title */}
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        Where does it come from?
                    </h2>

                    {/* Description */}
                    <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400 text-justify">
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical Latin
                        literature from 45 BC, making it over 2000 years old.
                        Richard McClintock, a Latin professor at Hampden-Sydney
                        College in Virginia, looked up one of the more obscure
                        Latin words, consectetur, from a Lorem Ipsum passage,
                        and going through the cites of the word in classical
                        literature, discovered the undoubtable source. Lorem
                        Ipsum comes from sections 1.10.32 and 1.10.33 of "de
                        Finibus Bonorum et Malorum" (The Extremes of Good and
                        Evil) by Cicero, written in 45 BC. This book is a
                        treatise on the theory of ethics, very popular during
                        the Renaissance. The first line of Lorem Ipsum, "Lorem
                        ipsum dolor sit amet..", comes from a line in section
                        1.10.32. The standard chunk of Lorem Ipsum used since
                        the 1500s is reproduced below for those interested.
                        Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
                        Malorum" by Cicero are also reproduced in their exact
                        original form, accompanied by English versions from the
                        1914 translation by H. Rackham.
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
