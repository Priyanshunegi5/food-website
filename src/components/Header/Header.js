import Navbar from '@/components/header/navbar/navbar'

export default function Header(props) {
    return (
        <>
            {/* Navbar */}
            <Navbar />

            {/* Header content */}
            {props.children}
        </>
    )
}
