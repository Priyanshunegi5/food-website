export default function BackdropPoster({ poster }) {
    return (
        <>
            {/* Article Poster Backdrop */}
            <div
                style={{
                    backgroundImage: `url(${poster})`,
                }}
                className="container w-full h-[75vh] max-w-6xl mx-auto bg-cover mt-8 bg-zinc-300 dark:bg-zinc-800 rounded"
            ></div>
        </>
    )
}
