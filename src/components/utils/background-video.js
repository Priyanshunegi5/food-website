'use client'

import { useState } from 'react'
import { Card, CardBody, Image } from '@nextui-org/react'
import { backdropType } from '@/data/utils/backdrop-type'

export default function BackgroundVideo({
    blur = 0,
    children,
    imageSource,
    videoSource,
}) {
    const [backdrop, setBackdrop] = useState(backdropType.video)

    return (
        <>
            <header class="relative h-screen flex flex-col items-center justify-center text-center">
                {/* Overlay */}
                <Card
                    shadow="sm"
                    radius="none"
                    isBlurred={blur > 0}
                    className="video-content bg-background/70 h-full w-full space-y-2 z-10 border-none"
                >
                    {/* Content */}
                    <CardBody className="flex justify-center flex-col m-auto h-screen overflow-visible space-y-2">
                        {children}
                    </CardBody>
                </Card>

                {/* Backdrop */}
                <div class="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
                    {/* Background */}
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
                                    ...(blur > 0 && {
                                        filter: `blur(${blur}px)`,
                                        WebkitFilter: `blur(${blur}px)`,
                                    }),
                                }}
                                class="min-w-full min-h-full absolute object-cover"
                            />
                        </div>
                    )}

                    {backdrop === backdropType.video && (
                        <div className="video h-full w-full object-cover">
                            {/* Incase: default backdrop */}
                            <video
                                muted
                                loop
                                autoPlay
                                playsInline
                                poster={imageSource}
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    ...(blur > 0 && {
                                        filter: `blur(${blur}px)`,
                                        WebkitFilter: `blur(${blur}px)`,
                                    }),
                                }}
                                onError={() => setBackdrop(backdropType.image)}
                                class="min-w-full min-h-full absolute object-cover"
                            >
                                <source src={videoSource} type="video/mp4" />
                                {/* Incase: someone using browser made during stone age */}
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    )}
                </div>
            </header>
        </>
    )
}
