'use client'

import React from 'react'
import { map } from 'lodash'
import { useTheme } from 'next-themes'
import { setting } from '@/data/setting'
import useRouter from '@/hooks/useRouter'
import { web } from '@/config/router/web'
import { SocialMedias } from '@/data/social-medias'

export default function Credits({ children }) {
    const { theme } = useTheme()
    const router = useRouter(web)

    return (
        <div class="sm:flex sm:items-center sm:justify-between">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                {/* Copyright Year */}© {new Date().getFullYear()} -{' '}
                {new Date().getFullYear() + 1}
                {/* Company Name */}
                <a href={router.getRouteByName('Home')} class="hover:underline">
                    {' '}
                    {setting?.name}
                </a>
                . All Rights Reserved.
            </span>

            {/* Social Medias Icons */}
            <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                {map(SocialMedias, (value, key) => {
                    return (
                        <a
                            target="_blank"
                            href={value.link}
                            title={value.name}
                            rel="noopener noreferrer"
                            key={`CreditSocialMedia-${key}`}
                            class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                        >
                            {/* Social Media Icon */}
                            {React.cloneElement(value?.icon, {
                                color: {
                                    dark: 'white',
                                    light: 'black',
                                    class: 'w-5 h-5',
                                }[theme],
                            })}
                        </a>
                    )
                })}
            </div>
        </div>
    )
}
