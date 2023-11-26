'use client'

import React from 'react'
import NextLink from 'next/link'
import { setting } from '@/data/setting'
import useRouter from '@/hooks/useRouter'
import { web } from '@/config/router/web'

export default function Credits() {
    const router = useRouter(web)

    return (
        <div className="bg-slate-200 dark:bg-slate-950 w-full p-4 text-center">
            {/* Copyright Year */}
            <span className="text-black dark:text-white">
                © {new Date().getFullYear()} - {new Date().getFullYear() + 1}
            </span>
            {/* Company Name */}
            <span>
                <NextLink
                    href={router.getRouteByName('Home')?.path}
                    className="text-[#ffbf31] hover:text-[#ff4b4b]"
                >
                    {' '}
                    {setting?.name}
                </NextLink>
            </span>
            <span className="text-black dark:text-white">
                . All Rights Reserved.
            </span>
        </div>
    )
}
