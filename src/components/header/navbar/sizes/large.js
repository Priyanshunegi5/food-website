'use client'

import { NavbarItem, NavbarBrand, NavbarContent } from '@nextui-org/react'

import NextLink from 'next/link'
import { setting } from '@/data/setting'
import Logo from '@/components/images/logo'
import ThemeSwitch from '@/components/utils/theme-switch'
import SquigglyUnderline from '@/components/framer/squiggly-underline'

export default function Large({ router }) {
    return (
        <>
            <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
                {/* Company Description */}
                <NavbarBrand as="li" className="gap-3 max-w-fit">
                    <NextLink
                        href={router.getRouteByName('Home')}
                        className="flex justify-start items-center gap-1"
                    >
                        {/* Company Logo */}
                        <Logo />

                        {/* Company Name */}
                        <p className="font-bold text-inherit">
                            {setting?.shortName}
                        </p>
                    </NextLink>
                </NavbarBrand>

                {/* Navbar Menu */}
                <ul className="hidden lg:flex gap-4 justify-start ml-2">
                    {router.getRoutes()?.map((route, index) => {
                        if (route?.dynamic) return

                        const isActive = router.isActiveRoutePath(route.path)

                        return (
                            <NavbarItem
                                isActive={isActive}
                                key={`${route.name}-${index}`}
                            >
                                {/* Link to the page */}
                                <NextLink
                                    href={route.path}
                                    color="foreground"
                                    className="data-[active=true]:text-primary data-[active=true]:font-medium"
                                >
                                    {/* Link Name */}
                                    {route.name}

                                    {/* Underline */}
                                    {isActive && <SquigglyUnderline />}
                                </NextLink>
                            </NavbarItem>
                        )
                    })}
                </ul>
            </NavbarContent>

            <NavbarContent
                justify="end"
                className="hidden sm:flex basis-1/5 sm:basis-full"
            >
                <NavbarItem className="hidden sm:flex gap-2">
                    {/* Theme switch */}
                    <ThemeSwitch />
                </NavbarItem>
            </NavbarContent>
        </>
    )
}
