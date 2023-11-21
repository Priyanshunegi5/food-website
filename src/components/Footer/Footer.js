'use client'

import NextLink from 'next/link'
import { setting } from '@/data/setting'
import { web } from '@/config/router/web'
import useRouter from '@/hooks/useRouter'
import Logo from '@/components/images/logo'
import { usePathname } from 'next/navigation'
import Credits from '@/components/footer/credits'

export default function Footer(props) {
    const pathname = usePathname()
    const router = useRouter({ version: 'v1', pathname, ...web })

    // TODO: Use router web for creating links
    const linkGroups = [
        {
            title: 'where are we ..!',
            links: [
                {
                    title: 'Oasis Mall, Haridwar Rd, Dehradun, Uttarakhand 248005',
                    href: '/',
                },
            ],
        },
        {
            title: 'Links',
            links: [
                {
                    title: 'HOME',
                    href: '/',
                },
                {
                    title: 'ABOUT',
                    href: '/',
                },
                {
                    title: 'CONTACT',
                    href: '/',
                },
                {
                    title: 'GALLERY',
                    href: '/',
                },
            ],
        },
        {
            title: 'Get in touch ',
            links: [
                {
                    title: 'Facebook',
                    href: 'https://www.facebook.com/ausgolguppaywala/?show_switched_toast=0&show_invite_to_follow=0&show_switched_tooltip=0&show_podcast_settings=0&show_community_review_changes=0&show_community_rollback=0&show_follower_visibility_disclosure=0',
                },
                {
                    title: 'Google',
                    href: '/',
                },
                {
                    title: 'Linked in',
                    href: 'https://www.linkedin.com/in/nishant-tomar-3a36534b/',
                },
                {
                    title: 'Instgram',
                    href: 'https://www.instagram.com/ausgolguppaywala/',
                },
            ],
        },
    ]

    return (
        <footer class="p-4 ">
            <div class="mx-auto max-w-screen-xl">
                <div class="md:flex md:justify-between ">
                    <div class="mb-6 md:mb-0  ">
                        <NextLink
                            class="flex items-center"
                            href={router.getRouteByName('Home')}
                        >
                            {/* Company Logo */}
                            <Logo />

                            {/* Company Title */}
                            <span class="self-center pl-3 text-2xl font-semibold whitespace-nowrap dark:text-white">
                                {setting?.shortName}
                            </span>
                        </NextLink>
                    </div>

                    {/* Footer Links */}
                    <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
                        {linkGroups.map((group, index) => {
                            const { title, links } = group

                            if (links.length <= 0) return

                            return (
                                <div key={`FooterLinkGroup-${index}`}>
                                    {/* Link Group */}
                                    <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                        {title}
                                    </h2>

                                    {/* Group Links */}
                                    <ul class="text-gray-600 dark:text-gray-400">
                                        {links.map((link, id) => {
                                            return (
                                                <li
                                                    key={`FooterGroupLink-${id}`}
                                                    class="mb-4"
                                                >
                                                    <NextLink
                                                        href={link?.href}
                                                        class="hover:underline"
                                                    >
                                                        {link.title}
                                                    </NextLink>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Horizontal Divider */}
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

                {/* Company Credits */}
                <Credits />
            </div>
        </footer>
    )
}
