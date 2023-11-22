import Status from '@/app/_components/status'
import HeartIcon from '@/components/icons/heart-icon'

export default function WhyUs() {
    // TODO: Fetched this unique features from server
    const UniqueFeatures = [
        {
            icon: <HeartIcon />,
            title: 'loyalty',
            description: `
            The toughest guys to please are pani puri lovers. They are also the most loyal to their pani puri wala.
            Golgappas are best enjoyed with brothers
            
            `,
        },
        {
            icon: <HeartIcon />,
            title: 'break time',
            description: `
            Relationships are similar to pani puri, if you hold on too tight, it may break.
            `,
        },
        {
            icon: <HeartIcon />,
            title: 'multitasking skills',
            description: `
            “Pani Puri: The ultimate test of your multitasking skills – trying not to spill while savoring the taste explosion! 😅🌮 #MultitaskingChampion”
            `,
        },
        {
            icon: <HeartIcon />,
            title: 'PaniPuriChampion',
            description: `
            “If Pani Puri were a sport, I’d be an Olympic gold medalist! 🏅🌮 #PaniPuriChampion”
            `,
        },
        {
            icon: <HeartIcon />,
            title: 'friendships',
            description: `
            “If someone says they don’t like Pani Puri, it’s time to reevaluate that friendship. 🙅‍♂️🌮 #PaniPuriLover”
            `,
        },
        {
            icon: <HeartIcon />,
            title: 'NeverEndingSurprises',
            description: `
            “Pani Puri is like that one friend who keeps surprising you, and you can’t get enough of them! 🌮🎉 #NeverEndingSurprises”
            `,
        },
        {
            icon: <HeartIcon />,
            title: 'TasteBudThrills',
            description: `
            Pani Puri is like a rollercoaster ride for your taste buds – you never know when the twist and turns will hit! 🎢🌮 #TasteBudThrills”
            `,
        },
        {
            icon: <HeartIcon />,
            title: 'PaniPuriWisdom',
            description: `
            Hindi-English Special: ‘Pani Puri khate waqt, zindagi ka saar chhodo!’ 🌮🍹 #PaniPuriWisdom”
            `,
        },
        {
            icon: <HeartIcon />,
            title: 'PaniPuriJoy',
            description: `
            “Pani Puri is my kind of ‘happy place’ – where happiness explodes in every bite! 😂🌮 #PaniPuriJoy”
            `,
        },
    ]

    return (
        <section className="relative block px-6 py-10 md:py-20 md:px-10 border-t border-b">
            <div class="absolute -inset-1 bg-gradient-to-r from-[#fb0404] to-[#04048c] rounded-half opacity-20 transition duration-1000 blur-lg m-[10px]"></div>
            <div className="relative mx-auto max-w-5xl text-center">
                {/* Encourage */}
                <span className="  text-[#FFBF31] my-3 flex items-center justify-center font-medium uppercase tracking-wider">
                    Why choose us
                </span>

                {/* Slogan */}
                <a class="border border-white-700 dark:border-gray-300 rounded-lg py-2 px-4 text-white-400 dark:text-gray-300 text-sm mb-5 transition duration-300 ease-in-out hover:text-gray-500 dark:hover:text-gray-400">
                    Forget about spending hundreds $
                </a>

                {/* Title */}
                <h2 className="block w-full bg-gradient-to-b bg-clip-text font-bold text-3xl sm:text-4xl pt-10">
                    We Make Food, That{' '}
                    <span className=" text-[#FFBF31]">Customers</span> Love
                </h2>

                {/* Description */}
                <p className="   mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide">
                    Indulge in the burst of flavors with every bite of our
                    authentic Gul Guppa
                </p>
            </div>

            {/* Company Status */}
            <Status />

            {/* Unique Features */}
            <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
                {UniqueFeatures.map((feature, index) => {
                    return (
                        <div
                            key={`WhyUsFeature-${index}`}
                            className="rounded-md border p-8 text-center shadow"
                        >
                            {/* Icon */}
                            <div className="button-text text-red-500 mx-auto flex h-12 w-12 items-center justify-center rounded-md border">
                                {feature?.icon}
                            </div>

                            {/* Title */}
                            <h3 className="mt-6">{feature?.title}</h3>

                            {/* Description */}
                            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide">
                                {feature?.description}
                            </p>
                        </div>
                    )
                })}
            </div>

            <div className="absolute bottom-0 left-0 z-0 h-1/3 w-full border-b"></div>
            <div className="absolute bottom-0 right-0 z-0 h-1/3 w-full"></div>
        </section>
    )
}
