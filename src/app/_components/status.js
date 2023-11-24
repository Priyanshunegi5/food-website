import { map } from 'lodash'

export default function Status() {
    const statuses = {
        visited: {
            title: '73M+',
            value: 'VISITS',
        },
        served: {
            title: '1B+',
            value: 'SERVED',
        },
        branches: {
            title: '4M+',
            value: 'BRANCHES',
        },
    }

    return (
        <section className="">
            <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-10 lg:px-6">
                {/* List of statuses */}
                <dl className="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
                    {map(statuses, (status, index) => {
                        return (
                            <div
                                key={`Status-${index}`}
                                className="flex flex-col items-center justify-center"
                            >
                                {/* Status value */}
                                <dt className="text-poppy mb-2 text-3xl md:text-4xl font-extrabold">
                                    {status?.value}
                                </dt>

                                {/* Status title */}
                                <dd className="font-light text-gray-500 dark:text-gray-400">
                                    {status?.title}
                                </dd>
                            </div>
                        )
                    })}
                </dl>
            </div>
        </section>
    )
}
