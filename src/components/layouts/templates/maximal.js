import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'
import Preloader from '@/components/utils/preloader'
import Transition from '@/components/transitions/transition'

export default function Maximal(props) {
    return (
        <div className="relative flex flex-col">
            <Preloader
                opacity={80}
                delay="5000"
                image={{
                    width: 100,
                    height: 100,
                    alt: 'panipuri',
                    src: '/images/preloaders/panipuri.webp',
                }}
            >
                <div {...props}>
                    {/* Header Section */}
                    <Header />

                    {/* Content Section */}
                    <main>
                        <Transition>{props.children}</Transition>
                    </main>

                    {/* Footer Section */}
                    <Footer />
                </div>
            </Preloader>
        </div>
    )
}
