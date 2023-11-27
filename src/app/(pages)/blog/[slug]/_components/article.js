import Main from '@/app/(pages)/blog/[slug]/_components/middle/main'
import Header from '@/app/(pages)/blog/[slug]/_components/top/header'
import Recommendation from '@/app/(pages)/blog/[slug]/_components/bottom/recommendation'

export default function Article() {
    const moment = require('moment')()

    // TODO: Fetch blog from server
    const blog = {
        article: {
            category: 'Category',
            title: 'What is Lorem Ipsum?',
            createdAt: moment.format('YYYY-MM-DD HH:mm:ss'),
            poster:
                'https://source.unsplash.com/random/990x715?sig=' + Date.now(),
            body: `
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was popularised in
                the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum.
            `,
            summary:
                'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
        },
        author: {
            name: 'John Doe',
            details: 'There is no one who loves pain itself',
            avatar: {
                src: 'https://images.pexels.com/photos/1208015/pexels-photo-1208015.jpeg?cs=srgb&dl=pexels-rahul-shah-1208015.jpg&fm=jpg',
            },
        },
    }

    return (
        <>
            {/* Header */}
            <Header blog={blog} />

            {/* Article Main Body */}
            <Main blog={blog} />

            {/* Other Articles Recommendations */}
            <Recommendation />
        </>
    )
}
