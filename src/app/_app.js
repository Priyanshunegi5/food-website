export default function App({ Component, pageProps }) {
    if (typeof window === 'undefined') {
        return null
    }

    return (
        <div>
            <Component {...pageProps} />
        </div>
    )
}
