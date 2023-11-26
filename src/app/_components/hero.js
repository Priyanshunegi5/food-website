import { setting } from '@/data/setting'
import JoinHero from '@/app/_components/join-hero'
import Herotitle from '@/app/_components/top/hero-title'
import HeroLinks from '@/app/_components/bottom/hero-links'
import Backdrop from '@/components/utils/backdrop'
import HeroDescription from '@/app/_components/middle/hero-description'

export default function Hero() {
    // TODO: Fetch video from the server
    const background = {
        image: {
            type: 'image/webp',
            src: 'images/hero/golguppaywala-image.webp',
        },
        video: {
            type: 'video/mp4',
            src: 'videos/hero/golguppaywala-video.mp4',
        },
    }

    return (
        <Backdrop image={background?.image} video={background?.video}>
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
                    <HeroLinks />
                </div>
            </section>
        </Backdrop>
    )
}
