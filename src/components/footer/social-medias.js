import React from 'react'
import { map } from 'lodash'
import { useTheme } from 'next-themes'
import { socialMedias } from '@/data/social-medias'

export default function SocialMedias() {
    const { theme } = useTheme()

    return (
        <div className="bg-slate-200 dark:bg-slate-950 flex items-center justify-center border-slate-100 p-6 dark:border-slate-800 lg:justify-between">
            {/* Slogan */}
            <div className="text-[#ffbf31] mr-12 font-bold hidden lg:block">
                <span>Get connected with us on social networks:</span>
            </div>

            {/* Social Medias Icons */}
            <div className="flex justify-center">
                {map(socialMedias, (value, key) => {
                    return (
                        <a
                            target="_blank"
                            href={value.link}
                            title={value.name}
                            rel="noopener noreferrer"
                            key={`CreditSocialMedia-${key}`}
                            className="mr-6 w-5 h-5 text-neutral-600 dark:text-neutral-200 hover:scale-150"
                        >
                            {/* Social Media Icon */}
                            {React.cloneElement(value?.icon, {
                                size: 'auto',
                                color: {
                                    dark: 'white',
                                    light: 'black',
                                }[theme],
                            })}
                        </a>
                    )
                })}
            </div>
        </div>
    )
}
