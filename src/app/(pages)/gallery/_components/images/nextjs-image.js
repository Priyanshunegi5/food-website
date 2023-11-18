'use client'
// import Image from 'next/image'
import { Image } from '@nextui-org/react'
import { RenderPhotoProps } from 'react-photo-album'

export default function NextJsImage({
    photo,
    imageProps: { alt, title, sizes, className, onClick },
    wrapperStyle,
}) {
    return (
        <div style={{ ...wrapperStyle, position: 'relative' }}>
            <Image
                width={photo?.width}
                height={photo?.height}
                {...{ alt, title, sizes, className, onClick }}
                // placeholder={'blurDataURL' in photo ? 'blur' : undefined}
                src={`https://app.requestly.io/delay/5000/${photo?.src}`}
            />
        </div>
    )
}
