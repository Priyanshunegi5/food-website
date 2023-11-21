'use client'

import { Navbar as NextUiNavbar } from '@nextui-org/react'

import { useState } from 'react'
import { web } from '@/config/router/web'
import useRouter from '@/hooks/useRouter'
import { usePathname } from 'next/navigation'
import Small from '@/components/header/navbar/sizes/small'
import Large from '@/components/header/navbar/sizes/large'

export default function Navbar() {
    const pathname = usePathname()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const router = useRouter({ version: 'v1', pathname, ...web })

    return (
        <NextUiNavbar
            maxWidth="xl"
            position="sticky"
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
        >
            {/* Navbar for high end devices */}
            <Large pathname={pathname} router={router} />

            {/* Navbar for low end devices */}
            <Small pathname={pathname} router={router} />
        </NextUiNavbar>
    )
}
