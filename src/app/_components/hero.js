import { setting } from '@/data/setting'
import JoinHero from '@/app/_components/join-hero'
import Herotitle from '@/app/_components/top/hero-title'
import HeroLinks from '@/app/_components/bottom/hero-links'
import BackgroundVideo from '@/components/utils/background-video'
import HeroDescription from '@/app/_components/middle/hero-description'

export default function Hero() {
    // TODO: Fetch video from the server
    const background = {
        image: {
            src: 'https://www.udrop.com/file/L97O/pexels-photo-9022271.jpeg',
        },
        video: {
            src: 'https://www.udrop.com/file/L97L/pexels-tom-leishman-9022271_(Original).mp4',
        },
    }

    return (
        <BackgroundVideo
            imageSource={background?.image?.src}
            videoSource={background?.video?.src}
        >
            <section className="lg:pt-10 pt-10">
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                    {/* Hero Title */}
                    <Herotitle
                        title={setting?.name}
                        shortTitle={setting?.shortName}
                    />
                    {/* Hero Description */}
                    <HeroDescription
                        slogans={setting?.slogans}
                        description={setting?.description}
                    />
                    {/* Hero Links */}
                    <HeroLinks /> <JoinHero />
                </div>
            </section>
        </BackgroundVideo>
    )
}
