import { setting } from '@/data/setting'
import { Image } from '@nextui-org/react'

export default function Author({ user }) {
    return (
        <div className="flex w-full items-center font-sans p-8 md:p-24">
            {/* Author Avatar */}
            <Image
                src={user?.avatar?.src}
                className="w-24 h-24 rounded-full mr-4"
                alt={user?.avatar?.alt ?? user?.avatar?.src}
            />

            {/* Author Details */}
            <div className="flex-1">
                {/* Name */}
                <p className="text-base font-bold md:text-xl leading-none">
                    {user?.name}
                </p>

                {/* Company */}
                <p className="text-sm">
                    {' at '}
                    <a
                        href="/"
                        class="no-underline border-b-2 text-gray-800 hover:text-green-500 border-green-500 dark:text-gray-200 dark:border-green-800 hover:dark:text-green-700"
                    >
                        {setting?.shortName}
                    </a>
                </p>

                {/* Summary */}
                <p className="text-gray-600 text-xs md:text-base">
                    {user?.details}
                </p>
            </div>

            <div className="justify-end"></div>
        </div>
    )
}
