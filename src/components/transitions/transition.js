'use client'

import { web } from '@/config/router/web'
import useRouter from '@/hooks/useRouter'
import { usePathname } from 'next/navigation'
import { AnimatePresence } from 'framer-motion'
import { effect } from '@/data/transitions/effect'
import Fade from '@/components/transitions/effects/fade'
import { useRef, useState, cloneElement, useLayoutEffect } from 'react'

export default function Transition({ children }) {
    const effectRef = useRef(null)
    const pathname = usePathname()
    const [hydrated, setHydrated] = useState(false)

    const route = useRouter({
        version: 'v1',
        ...web,
    }).getRouteByPath(pathname)

    switch (route?.transition) {
        case effect.fade:
            effectRef.current = <Fade />
            break
        case effect.none:
        default:
            return <>{children}</>
    }

    useLayoutEffect(() => {
        setHydrated(true)
    }, [hydrated])

    if (!hydrated) {
        return <>{children}</>
    }

    return (
        <AnimatePresence>
            {cloneElement(
                effectRef.current,
                {
                    key: pathname,
                },
                children,
            )}
        </AnimatePresence>
    )
}
