import { headers } from 'next/headers'
import { web } from '@/config/router/web'
import { setting } from '@/data/setting'
import useRouter from '@/hooks/useRouter'
import { layouts } from '@/data/layouts/layout'
import Layout from '@/components/layouts/layout'
import Hero from '@/app/(pages)/gallery/_components/hero'
import Album from '@/app/(pages)/gallery/_components/photo/album'
import NeedHelp from '@/app/(pages)/gallery/_components/need-help'

export const metadata = {}

export default function Gallery() {
    const url = headers().get('x-pathname') || '/'
    const route = useRouter(web).getRouteByPath(url)

    if (route !== null) {
        metadata.description = setting.description
        metadata.title = `${setting?.shortName} - ${route?.name}`
    }

    return (
        <Layout type={layouts.maximmal}>
            {/* Hero Section */}
            <Hero />

            {/* Main Gallery Content */}
            <Album />

            {/* Needs Further Help */}
            <NeedHelp />
        </Layout>
    )
}
