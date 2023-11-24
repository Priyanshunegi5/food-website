'use client'

import { useState } from 'react'
import { Card, CardBody, Image } from '@nextui-org/react'
import { backdropType } from '@/data/utils/backdrop-type'

export default function BackgroundVideo({
    blur,
    children,
    imageSource,
    videoSource,
}) {
    const [backdrop, setBackdrop] = useState(backdropType.video)

    return (
        <>
            <header class="relative flex items-center justify-center h-screen overflow-hidden">
                {/* Overlay card for showing our content over background */}
                <Card
                    isBlurred
                    shadow="sm"
                    radius="none"
                    className="absolute h-full w-full z-30 border-none object-cover"
                >
                    {/* Overlay Content */}
                    <CardBody>{children}</CardBody>
                </Card>

                {backdrop === backdropType.image && (
                    <div className="h-full w-full object-cover">
                        {/* Incase: fallback backdrop */}
                        <Image
                            layout="fill"
                            src={imageSource}
                            objectFit="contain"
                            style={{
                                width: '100%',
                                height: 'auto',
                                filter: `blur(${blur}px)`,
                                WebkitFilter: `blur(${blur}px)`,
                            }}
                        />
                    </div>
                )}

                {backdrop === backdropType.video && (
                    <div className="video h-full w-full object-cover">
                        {/* Incase: default backdrop */}
                        <video
                            muted
                            loop="loop"
                            playsInline
                            autoPlay="autoplay"
                            poster={imageSource}
                            style={{
                                width: '100%',
                                height: 'auto',
                                filter: `blur(${blur}px)`,
                                WebkitFilter: `blur(${blur}px)`,
                            }}
                            onError={() => setBackdrop(backdropType.image)}
                        >
                            <source src={videoSource} type="video/mp4" />
                            {/* Incase: someone using browser made during stone age */}
                            Your browser does not support the video tag.
                        </video>
                    </div>
                )}
            </header>

            <span id="video-bottom"></span>
        </>
    )
}
