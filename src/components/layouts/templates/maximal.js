import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'
import Transition from '@/components/transitions/transition'

export default function Maximal(props) {
    return (
        <div className="relative flex flex-col h-screen">
            {/* Header Section */}
            <Header />

            {/* Content Section */}

            <main>
                <Transition>{props.children}</Transition>
            </main>

            {/* Footer Section */}
            <Footer />
        </div>
    )
}
