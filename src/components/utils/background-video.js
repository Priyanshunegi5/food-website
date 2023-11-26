'use client'

import { useState } from 'react'
import { Card, CardBody } from '@nextui-org/react'
import { backdropType } from '@/data/utils/backdrop-type'

export default function BackgroundVideo({ image, video, blur = 0, children }) {
    const [backdrop, setBackdrop] = useState(backdropType.video)

    return (
        <>
            <header class="relative h-screen flex flex-col items-center justify-center text-center">
                {/* Backdrop */}
                <div class="absolute top-0 left-0 w-full h-full overflow-hidden z-5">
                    {/* Background */}
                    {backdrop === backdropType.image && (
                        <div className="video h-full w-full object-cover">
                            {/* Incase: fallback backdrop */}
                            <img
                                {...image}
                                layout="fill"
                                objectFit="contain"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    ...(blur > 0 && {
                                        filter: `blur(${blur}px)`,
                                        WebkitFilter: `blur(${blur}px)`,
                                    }),
                                }}
                                class="min-w-full min-h-full absolute object-fill"
                            />
                        </div>
                    )}

                    {backdrop === backdropType.video && (
                        <div className="video-docker h-full w-full object-cover">
                            {/* Incase: default backdrop */}
                            <video
                                muted
                                loop
                                autoPlay
                                playsInline
                                poster={image?.src}
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
                                <source {...video} />
                                {/* Incase: someone using browser made during stone age */}
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    )}
                </div>

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
            </header>
        </>
    )
}
