import React from 'react'

export default function CommingSoon() {
    return (
        <section className=" ">
            <div class="py-5 px-4 mx-auto max-w-screen-md text-center lg:py-16 lg:px-12">
                {/* Menu Title */}
                <h1 class="mb-4 text-4xl font-bold tracking-tight leading-none text-gray-900 lg:mb-6 md:text-5xl xl:text-6xl dark:text-white">
                    Comming{' '}
                    <span className="text-naples-yellow-400 dark:text-naples-yellow-200">
                        {' '}
                        Soon{' '}
                    </span>
                </h1>

                {/* Menu description */}
                <p class="font-light text-gray-500 md:text-lg xl:text-xl dark:text-gray-400">
                    Our New Branch In Sydney
                </p>
            </div>
        </section>
    )
}
