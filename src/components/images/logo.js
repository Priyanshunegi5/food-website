import Image from 'next/image'
import { setting } from '@/data/setting'

export default function Logo({
    width = 36,
    height = 36,
    src = setting?.logo,
    ...Attr
}) {
    return (
        <>
            <Image width={width} height={height} src={src} {...Attr} />
        </>
    )
}
