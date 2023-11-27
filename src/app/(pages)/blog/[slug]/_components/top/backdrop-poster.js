export default function BackdropPoster({ poster }) {
    return (
        <>
            {/* Article Poster Backdrop */}
            <div
                style={{
                    height: '75vh;',
                    backgroundImage: `url(${poster})`,
                }}
                className="container w-full max-w-6xl mx-auto bg-cover mt-8 bg-zinc-300 dark:bg-zinc-800 rounded"
            ></div>
        </>
    )
}
