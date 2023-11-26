'use client'

import React from 'react'
import NextLink from 'next/link'
import { web } from '@/config/router/web'
import useRouter from '@/hooks/useRouter'
import { usePathname } from 'next/navigation'
import Credits from '@/components/footer/credits'
import Company from '@/components/footer/company'
import NewsLetter from '@/components/footer/newsletter'
import SocialMedias from '@/components/footer/social-medias'

export default function Footer() {
    const pathname = usePathname()
    const router = useRouter({ version: 'v1', pathname, ...web })

    // TODO: Use router web for creating links
    const linkGroups = [
        {
            title: 'Internal Links',
            links: [
                {
                    title: 'HOME',
                    href: '/',
                },
                {
                    title: 'ABOUT',
                    href: '/about',
                },
                {
                    title: 'GALLERY',
                    href: '/gallery',
                },
                {
                    title: 'CONTACT',
                    href: '/contact',
                },
            ],
        },
        {
            title: 'External Links',
            links: [
                {
                    title: 'HOME',
                    href: '/',
                },
                {
                    title: 'ABOUT',
                    href: '/about',
                },
                {
                    title: 'GALLERY',
                    href: '/gallery',
                },
                {
                    title: 'CONTACT',
                    href: '/contact',
                },
            ],
        },
        {
            title: 'Get in touch ',
            links: [
                {
                    title: 'Facebook',
                    href: 'https://www.facebook.com/ausgolguppaywala/',
                },
                {
                    title: 'Instgram',
                    href: 'https://www.instagram.com/ausgolguppaywala/',
                },
                {
                    title: 'Linked in',
                    href: 'https://www.linkedin.com/in/nishant-tomar-3a36534b/',
                },
                {
                    title: 'Google',
                    href: 'https://www.google.co.in/search?q=australian+golgappe+wala',
                },
            ],
        },
    ]

    return (
        <footer className="text-neutral-600 dark:text-neutral-200 lg:text-left">
            <SocialMedias />

            <div className="mx-6 py-10 text-center md:text-left">
                <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <Company />

                    {/* Footer Links */}
                    {linkGroups.map((group, index) => {
                        const { title, links } = group

                        if (links.length <= 0) return

                        return (
                            <div
                                className="p-5"
                                key={`FooterLinkGroup-${index}`}
                            >
                                {/* Link Group */}
                                <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start text-gray-900 dark:text-white">
                                    {title}
                                </h6>

                                {/* Group Links */}
                                {links.map((link, id) => {
                                    return (
                                        <p
                                            className="mb-4 flex items-center justify-center md:justify-start"
                                            key={`FooterGroupLink-${id}`}
                                        >
                                            {/* Group Link */}
                                            <NextLink
                                                href={link?.href}
                                                className="text-neutral-800 dark:text-neutral-200 hover:underline"
                                            >
                                                {link?.title}
                                            </NextLink>
                                        </p>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
            </div>

            <Credits />
        </footer>
    )
}
