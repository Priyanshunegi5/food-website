import { setting } from '@/data/setting'

export default function Herotitle({ shortTitle, title }) {
    const scaler = (x, min, max, a, b) => {
        return ((b - a) / (max - min)) * (x - min) + a
    }

    const clipping = (x, min, max, a, b) => {
        return Math.max(a, Math.min(b, scaler(x, min, max, a, b)))
    }

    return (
        <>
            {/* Hero Title */}
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                {title.split(' ').map((word, index) => (
                    <span
                        key={word}
                        style={{
                            color: setting.colors[
                                clipping(
                                    index + 1,
                                    1,
                                    title.split(' ').length,
                                    1,
                                    setting.colors.length,
                                ) - 1
                            ],
                        }}
                    >
                        {word} &nbsp;
                    </span>
                ))}
            </h1>
        </>
    )
}
