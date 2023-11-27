export default function Body({ summary, content }) {
    return (
        <div className="bg-zinc-200 dark:bg-zinc-950 w-full p-8 md:p-24 text-lg md:text-xl leading-normal">
            {/* Blog Summary */}
            {summary && (
                <p class="text-2xl md:text-3xl mb-5 font-bold">{summary}</p>
            )}

            {/* Blog Content */}
            {content && content}
        </div>
    )
}
