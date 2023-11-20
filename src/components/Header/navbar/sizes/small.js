'use client'

import {
    NavbarMenu,
    NavbarContent,
    NavbarMenuItem,
    NavbarMenuToggle,
} from '@nextui-org/react'

import NextLink from 'next/link'
import ThemeSwitch from '@/components/utils/theme-switch'

export default function Small({ router }) {
    return (
        <>
            <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
                {/* Theme switch */}
                <ThemeSwitch />

                {/* Toggle button */}
                <NavbarMenuToggle />
            </NavbarContent>

            <NavbarMenu>
                {/* Navbar Menu */}
                <div className="mx-4 mt-2 flex flex-col gap-2">
                    {router.getRoutes()?.map((route, index) => (
                        <NavbarMenuItem
                            key={`${route.name}-${index}`}
                            isActive={router.isActiveRoutePath(route.path)}
                        >
                            <NextLink href={route.path} size="lg">
                                {route.name}
                            </NextLink>
                        </NavbarMenuItem>
                    ))}
                </div>
            </NavbarMenu>
        </>
    )
}
