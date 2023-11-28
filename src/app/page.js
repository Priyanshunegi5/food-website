import { headers } from 'next/headers'
import { setting } from '@/data/setting'
import { web } from '@/config/router/web'
import useRouter from '@/hooks/useRouter'
import Hero from '@/app/_components/hero'
import WhyUs from '@/app/_components/why-us'
import { layouts } from '@/data/layouts/layout'
import Reviews from '@/app/_components/reviews'
import Layout from '@/components/layouts/layout'
import BlogInfo from '@/app/_components/blog-info'
import MenuShort from '@/app/_components/menu-short'
import MenuLarge from '@/app/_components/menu-large'
import CommingSoon from '@/app/_components/comming-soon'
import WaveFirst from '@/app/_components/waves/wave-first'
import WaveSecond from '@/app/_components/waves/wave-second'

export const metadata = {}

export default function Home() {
    const url = headers().get('x-pathname') || '/'
    const route = useRouter(web).getRouteByPath(url)

    if (route !== null) {
        metadata.description = setting.description
        metadata.title = `${setting?.shortName} - ${route?.name}`
    }

    return (
        <Layout type={layouts.maximmal}>
            {/* Highlights */}
            <div className="relative">
                <Hero />

                {/* Backdrop waves */}
                <WaveFirst />
                <WaveSecond />
            </div>

            {/* Products */}
            <div className="relative bg-zinc-200 dark:bg-zinc-950 pb-5 z-20">
                {/* Comming Soon */}
                <CommingSoon />

                {/* Waves */}
                <MenuShort />
                <MenuLarge />
            </div>

            {/* References */}
            <>
                {/* Why Us */}
                <WhyUs />

                {/* From People */}
                <Reviews />

                {/* From Website */}
                <BlogInfo />
            </>
        </Layout>
    )
}
