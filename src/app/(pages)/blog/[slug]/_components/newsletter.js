import { setting } from '@/data/setting'

export default function NewsLetter() {
    return (
        <div className="container font-sans bg-zinc-300 dark:bg-zinc-800 rounded mt-8 p-4 md:p-24 text-center">
            {/* Title */}
            <h2 className="font-bold break-normal text-2xl md:text-4xl">
                Subscribe to {setting?.shortName}
            </h2>

            {/* Description */}
            <h3 className="font-bold break-normal text-gray-500 text-sm md:text-xl">
                Get the latest posts delivered right to your inbox
            </h3>

            {/* News Letter Form */}
            <div className="w-full text-center pt-4">
                <form action="#">
                    <div className="max-w-sm mx-auto p-1 pr-0 flex flex-wrap items-center">
                        {/* Email Input */}
                        <input
                            type="email"
                            placeholder="youremail@example.com"
                            className="flex-1 appearance-none rounded shadow p-3 text-gray-600 mr-2 focus:outline-none"
                        />

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="flex-1 mt-4 md:mt-0 block md:inline-block appearance-none bg-green-500 text-white text-base font-semibold tracking-wider uppercase py-4 rounded shadow hover:bg-green-400"
                        >
                            Subscribe
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
