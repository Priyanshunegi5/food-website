import { Card, CardBody, Image, Button, Slider } from '@nextui-org/react'

export default function BackgroundVideo({
    blur,
    children,
    imageSource,
    videoSource,
}) {
    return (
        <>
            <header class="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
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

                <div className="md:hidden block h-full w-full object-cover">
                    {/* For showing on low end devices only */}
                    <Image
                        layout="fill"
                        src={imageSource}
                        objectFit="contain"
                        style={{
                            filter: `blur(${blur}px)`,
                            WebkitFilter: `blur(${blur}px)`,
                        }}
                    />
                </div>

                <div className="md:block hidden video h-full w-full object-cover">
                    {/* For high end devices only */}
                    <video
                        muted
                        loop="loop"
                        playsInline
                        autoPlay="autoplay"
                        style={{
                            filter: `blur(${blur}px)`,
                            WebkitFilter: `blur(${blur}px)`,
                        }}
                    >
                        <source src={videoSource} type="video/mp4" />
                        {/* Incase: someone using browser made during stone age */}
                        Your browser does not support the video tag.
                    </video>
                </div>
            </header>

            <span id="video-bottom"></span>
        </>
    )
}
