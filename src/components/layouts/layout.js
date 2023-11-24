import { layouts } from '@/data/layouts/layout'
import Minimal from '@/components/layouts/templates/minimal'
import Maximal from '@/components/layouts/templates/maximal'

export default function Layout({ type, children, ...props }) {
    switch (type) {
        case layouts.minimal:
            return <Minimal {...props}>{children}</Minimal>
        case layouts.maximmal:
            return <Maximal {...props}>{children}</Maximal>
    }

    return <>{children}</>
}
