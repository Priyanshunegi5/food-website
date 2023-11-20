import { layouts } from '@/data/layouts/layout'
import Minimal from '@/components/layouts/templates/minimal'
import Maximal from '@/components/layouts/templates/maximal'

export default function Layout({ type, children }) {
    switch (type) {
        case layouts.minimal:
            // For simpler pages
            // Like: auth
            return <Minimal>{children}</Minimal>
        case layouts.maximmal:
            // For complex pages
            // Like home
            return <Maximal>{children}</Maximal>
    }

    return <>{children}</>
}
