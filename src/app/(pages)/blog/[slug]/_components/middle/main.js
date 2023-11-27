import Body from '@/app/(pages)/blog/[slug]/_components/middle/body'
import Author from '@/app/(pages)/blog/[slug]/_components/middle/author'
import NewsLetter from '@/app/(pages)/blog/[slug]/_components/newsletter'

export default function Main({ blog }) {
    return (
        <div className="container max-w-5xl mx-auto -mt-32">
            <div className="mx-0 sm:mx-6">
                {/* Article Body */}
                <Body
                    content={blog?.article?.body}
                    summary={blog?.article?.summary}
                />

                {/* News Letter */}
                <NewsLetter />

                {/* Article Author */}
                <Author user={blog?.author} />
            </div>
        </div>
    )
}
