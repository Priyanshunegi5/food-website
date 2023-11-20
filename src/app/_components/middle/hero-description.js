export default function HeroDescription({ slogans, description }) {
    return (
        <>
            {/* Hero Description */}
            <p className="mb-8 text-lg font-normal text-gray-700 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-100">
                {slogans[Math.floor(Math.random() * slogans.length)]}
            </p>
        </>
    )
}
