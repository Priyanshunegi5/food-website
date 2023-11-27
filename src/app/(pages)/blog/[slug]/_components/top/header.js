import BackdropPoster from '@/app/(pages)/blog/[slug]/_components/top/backdrop-poster'

export default function Header({ blog }) {
    return (
        <>
            <div className="text-center pt-16 md:pt-32">
                {/* Information */}
                <p className="text-sm md:text-base font-bold">
                    {/* Timestamp */}
                    {blog?.article?.createdAt}

                    {/* Divider */}
                    <span className="text-gray-900"> / </span>

                    {/* Category */}
                    {blog?.article?.category}
                </p>

                {/* Title */}
                <h1 className="font-bold break-normal text-3xl md:text-5xl">
                    {blog?.article?.title}
                </h1>
            </div>

            {/* Article Backdrop */}
            <BackdropPoster poster={blog?.article?.poster} />
        </>
    )
}
