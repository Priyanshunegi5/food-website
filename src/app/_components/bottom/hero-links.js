import NextLink from 'next/link'
import { web } from '@/config/router/web'
import useRouter from '@/hooks/useRouter'
import { Button } from '@nextui-org/react'

export default function HeroLinks() {
    const router = useRouter({ version: 'v1', ...web })

    return (
        <>
            {/* Hero Links */}
            <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                {/* Learn More */}
                <NextLink
                    href={router.getRouteByName('Contact')?.path}
                    className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-500 dark:text-white rounded-lg focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                >
                    Learn more
                    {/* Right Arrow */}
                    <svg
                        className="ml-2 -mr-1 w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                </NextLink>

                {/* Get Your Now */}
                <NextLink href={router.getRouteByName('Contact')?.path}>
                    <Button
                        size="lg"
                        radius="full"
                        className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
                    >
                        Get Your Nows
                    </Button>
                </NextLink>
            </div>
        </>
    )
}
