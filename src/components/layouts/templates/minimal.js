export default function Minimal(props) {
    return (
        <div className="relative flex flex-col h-screen">
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
                {props.children}
            </main>
        </div>
    )
}
