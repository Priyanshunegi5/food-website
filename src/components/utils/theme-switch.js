'use client'

import clsx from 'clsx'
import { useTheme } from 'next-themes'
import { useIsSSR } from '@react-aria/ssr'
import { useSwitch } from '@nextui-org/switch'
import SunIcon from '@/components/icons/sun-icon'
import MoonIcon from '@/components/icons/moon-icon'
import { VisuallyHidden } from '@react-aria/visually-hidden'

export default function ThemeSwitch({ className, classNames }) {
    const isSSR = useIsSSR()
    const { theme, setTheme } = useTheme()

    const onChange = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }

    const {
        slots,
        Component,
        isSelected,
        getBaseProps,
        getInputProps,
        getWrapperProps,
    } = useSwitch({
        isSelected: theme === 'light' || isSSR,
        'aria-label': `Switch to ${
            theme === 'light' || isSSR ? 'dark' : 'light'
        } mode`,
        onChange,
    })

    return (
        <Component
            {...getBaseProps({
                className: clsx(
                    'px-px transition-opacity hover:opacity-80 cursor-pointer',
                    className,
                    classNames?.base,
                ),
            })}
        >
            {/* Input */}
            <VisuallyHidden>
                <input {...getInputProps()} />
            </VisuallyHidden>

            {/* Theme switch button */}
            <div
                {...getWrapperProps()}
                className={slots.wrapper({
                    class: clsx(
                        [
                            'px-0',
                            'mx-0',
                            'pt-px',
                            'rounded-lg',
                            'bg-transparent',
                            'w-auto h-auto',
                            '!text-default-500',
                            'flex items-center justify-center',
                            'group-data-[selected=true]:bg-transparent',
                        ],
                        classNames?.wrapper,
                    ),
                })}
            >
                {!isSelected || isSSR ? (
                    <SunIcon className="text-xanthous-500" size={22} />
                ) : (
                    <MoonIcon className="text-blue-700" size={22} />
                )}
            </div>
        </Component>
    )
}
