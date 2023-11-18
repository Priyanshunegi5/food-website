import HeartIcon from '@/components/icons/heart-icon'

export default function FormLayout({ children }) {
    // TODO: Fetch contact details form the server
    const details = [
        {
            icon: <HeartIcon />,
            title: 'Press',
            values: ['press@example.com', '+1 234-567-89'],
        },
        {
            icon: <HeartIcon />,
            title: 'Bug report',
            values: ['bugs@example.com', '+1 234-567-89'],
        },
        {
            icon: <HeartIcon />,
            title: 'Sales questions',
            values: ['sales@example.com', '+1 234-567-89'],
        },
        {
            icon: <HeartIcon />,
            title: 'Technical support',
            values: ['support@example.com', '+1 234-567-89'],
        },
    ]
    return (
        <div className="flex flex-wrap">
            {/* Childrens */}
            {children}

            <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                {/* Contact Details */}
                <div className="flex flex-wrap">
                    {details.map((detail, index) => {
                        return (
                            <div
                                key={`ContactDetail-${index}`}
                                className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12"
                            >
                                <div className="flex items-start">
                                    <div className="shrink-0">
                                        {/* Icon */}
                                        <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                                            {detail?.icon}
                                        </div>
                                    </div>

                                    {/* Details */}
                                    <div className="ml-6 grow">
                                        {/* Title */}
                                        <p className="mb-2 font-bold dark:text-white">
                                            {detail?.title}
                                        </p>

                                        {/* Value */}
                                        {detail?.values.map((value, id) => {
                                            return (
                                                <p
                                                    key={`ContactDetailValue-${index}:${id}`}
                                                    className="text-neutral-500 dark:text-neutral-200"
                                                >
                                                    {value}
                                                </p>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
