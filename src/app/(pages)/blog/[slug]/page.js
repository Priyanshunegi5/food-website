import { headers } from 'next/headers'
import { web } from '@/config/router/web'
import { setting } from '@/data/setting'
import useRouter from '@/hooks/useRouter'
import { layouts } from '@/data/layouts/layout'
import Layout from '@/components/layouts/layout'
import Faqs from '@/app/(pages)/contact/_components/faqs'
import Hero from '@/app/(pages)/contact/_components/hero'
import Motivate from '@/app/(pages)/contact/_components/motivate'
import Article from '@/app/(pages)/blog/[slug]/_components/article'

export const metadata = {}

export default function Blog({ params }) {
    const url = headers().get('x-pathname') || '/'
    const route = useRouter(web).getRouteByPath(url)

    if (route !== null) {
        metadata.description = setting.description
        metadata.title = `${setting?.shortName} - ${route?.name}`
    }

    return (
        <Layout type={layouts.maximmal}>
            <Article />
        </Layout>
    )
}
