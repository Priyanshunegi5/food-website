import { headers } from 'next/headers'
import { setting } from '@/data/setting'
import useRouter from '@/hooks/useRouter'
import { web } from '@/config/router/web'
import { layouts } from '@/data/layouts/layout'
import Layout from '@/components/layouts/layout'
import Hero from '@/app/(pages)/about/_components/hero'
import Awards from '@/app/(pages)/about/_components/app'
import JustStart from '@/app/(pages)/about/_components/just-start'
import EmpiricalInformation from '@/app/(pages)/about/_components/informations/empirical-information'
import DirectiveInformation from '@/app/(pages)/about/_components/informations/directive-information'
import ConceptualInformation from '@/app/(pages)/about/_components/informations/conceptual-information'

export const metadata = {}

export default function About() {
    const router = useRouter(web)
    const url = headers().get('x-pathname') || '/'
    const route = router.getRouteByPath(url)

    if (route !== null) {
        metadata.description = setting.description
        metadata.title = `${setting?.shortName} - ${route?.name}`
    }

    return (
        <Layout type={layouts.maximmal}>
            {/* Hero Section */}
            <Hero />

            {/* Just Start */}
            <JustStart />

            {/* Details */}
            <>
                <ConceptualInformation />
                <EmpiricalInformation />
            </>

            {/* Last But Not Least */}
            <DirectiveInformation />

            {/* Company Legacy */}
            <Awards />
        </Layout>
    )
}
