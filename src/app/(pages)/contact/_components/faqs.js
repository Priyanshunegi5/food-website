import FaqIcon from '@/components/icons/faq-icon'

export default function Faqs() {
    // TODO: Fetch faqs form the server
    const faqs = [
        [
            {
                title: 'What is Lorem Ipsum?',
                description: `
                    You will have access to download the full Figma
                    project including all of the pages, the
                    components, responsive pages, and also the
                    icons, illustrations, and images included in the
                    screens.
                `,
                icon: (
                    <FaqIcon
                        className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                        filled
                    />
                ),
            },
            {
                title: 'What is Lorem Ipsum?',
                description: `
                    You will have access to download the full Figma
                    project including all of the pages, the
                    components, responsive pages, and also the
                    icons, illustrations, and images included in the
                    screens.
                `,
                icon: (
                    <FaqIcon
                        className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                        filled
                    />
                ),
            },
            {
                title: 'What is Lorem Ipsum?',
                description: `
                    You will have access to download the full Figma
                    project including all of the pages, the
                    components, responsive pages, and also the
                    icons, illustrations, and images included in the
                    screens.
                `,
                icon: (
                    <FaqIcon
                        className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                        filled
                    />
                ),
            },
            {
                title: 'What is Lorem Ipsum?',
                description: `
                    You will have access to download the full Figma
                    project including all of the pages, the
                    components, responsive pages, and also the
                    icons, illustrations, and images included in the
                    screens.
                `,
                icon: (
                    <FaqIcon
                        className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                        filled
                    />
                ),
            },
            {
                title: 'What is Lorem Ipsum?',
                description: `
                    You will have access to download the full Figma
                    project including all of the pages, the
                    components, responsive pages, and also the
                    icons, illustrations, and images included in the
                    screens.
                `,
                icon: (
                    <FaqIcon
                        className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                        filled
                    />
                ),
            },
        ],
        [
            {
                title: 'What is Lorem Ipsum?',
                description: `
                    You will have access to download the full Figma
                    project including all of the pages, the
                    components, responsive pages, and also the
                    icons, illustrations, and images included in the
                    screens.
                `,
                icon: (
                    <FaqIcon
                        className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                        filled
                    />
                ),
            },
            {
                title: 'What is Lorem Ipsum?',
                description: `
                    You will have access to download the full Figma
                    project including all of the pages, the
                    components, responsive pages, and also the
                    icons, illustrations, and images included in the
                    screens.
                `,
                icon: (
                    <FaqIcon
                        className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                        filled
                    />
                ),
            },
            {
                title: 'What is Lorem Ipsum?',
                description: `
                    You will have access to download the full Figma
                    project including all of the pages, the
                    components, responsive pages, and also the
                    icons, illustrations, and images included in the
                    screens.
                `,
                icon: (
                    <FaqIcon
                        className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                        filled
                    />
                ),
            },
            {
                title: 'What is Lorem Ipsum?',
                description: `
                    You will have access to download the full Figma
                    project including all of the pages, the
                    components, responsive pages, and also the
                    icons, illustrations, and images included in the
                    screens.
                `,
                icon: (
                    <FaqIcon
                        className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                        filled
                    />
                ),
            },
            {
                title: 'What is Lorem Ipsum?',
                description: `
                    You will have access to download the full Figma
                    project including all of the pages, the
                    components, responsive pages, and also the
                    icons, illustrations, and images included in the
                    screens.
                `,
                icon: (
                    <FaqIcon
                        className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                        filled
                    />
                ),
            },
        ],
    ]

    return (
        <section className="">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                {/* Title */}
                <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                    Frequently asked questions
                </h2>

                {/* (Faqs) Frequently Asked Questions */}
                <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
                    {faqs.map((chunk, index) => {
                        return (
                            <div key={`FaqChunk-${index}`}>
                                {chunk.map((faq, id) => {
                                    return (
                                        <div
                                            className="mb-10"
                                            key={`FaqChunk-${index}:${id}`}
                                        >
                                            <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                                {/* Icon */}
                                                {faq?.icon}
                                                {/* Title */}
                                                <span>{faq?.title}</span>
                                            </h3>

                                            {/* Description */}
                                            <p className="text-gray-500 dark:text-gray-400 px-5">
                                                {faq?.description}
                                            </p>
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
