'use client'

import React from 'react'
import { map } from 'lodash'
import { useTheme } from 'next-themes'
import { Button } from '@nextui-org/react'
import { socialMedias } from '@/data/social-medias'

export default function JoinHero() {
    const { theme } = useTheme()

    return (
        <>
            {/* Join Hero */}
            <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
                {/* Title */}
                <span className="text-lg font-semibold text-gray-400 dark:text-gray-200 uppercase">
                    Join Us On
                </span>

                {/* Social Medias Links */}
                <div className="flex flex-wrap justify-center items-center mt-8 sm:justify-between">
                    {map(socialMedias, (value, key) => {
                        return (
                            <a
                                target="_blank"
                                href={value.link}
                                title={value.name}
                                rel="noopener noreferrer"
                                key={`SocialMedia-${key}`}
                                className="md:mr-5 md:mb-5 lg:mb-0"
                            >
                                {/* Social Media Icon */}
                                <Button
                                    color="inherit"
                                    className="h-11 m-5 shadow-lg "
                                >
                                    {React.cloneElement(value?.icon, {
                                        size: 'auto',
                                        color: {
                                            dark: 'white',
                                            light: 'black',
                                        }[theme],
                                    })}
                                </Button>
                            </a>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
