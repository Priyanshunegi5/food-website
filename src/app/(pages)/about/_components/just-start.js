import { setting } from '@/data/setting'

export default function JustStart() {
    return (
        <section className="">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center">
                    {/* Title */}
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">
                        (
                        <span className="animate-pulse text-poppy-500 dark:text-sandy-brown-500">
                            {setting?.shortName}
                        </span>
                        ) {setting?.name}
                    </h2>

                    {/* Description */}
                    <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
                        Journey Back to Roots: The Genesis of “{setting?.name}”
                    </p>
                </div>
            </div>
        </section>
    )
}
