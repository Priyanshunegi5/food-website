import { headers } from 'next/headers'
import { web } from '@/config/router/web'
import { setting } from '@/data/setting'
import useRouter from '@/hooks/useRouter'
import { layouts } from '@/data/layouts/layout'
import Layout from '@/components/layouts/layout'
import Faqs from '@/app/(pages)/contact/_components/faqs'
import Hero from '@/app/(pages)/contact/_components/hero'
import Motivate from '@/app/(pages)/contact/_components/motivate'

export const metadata = {}

export default function Contact() {
    const url = headers().get('x-pathname') || '/'
    const route = useRouter(web).getRouteByPath(url)

    if (route !== null) {
        metadata.description = setting.description
        metadata.title = `${setting?.shortName} - ${route?.name}`
    }

    return (
        <Layout type={layouts.maximmal}>
            {/* Main Section */}
            <Hero />

            {/* Help Section */}
            <>
                {/* Motivational Lecture */}
                <Motivate />

                {/* Frequently Asked Questions */}
                <Faqs />
            </>
        </Layout>
    )
}
