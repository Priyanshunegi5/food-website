import './globals.css'

import { setting } from '@/data/setting'
import { Providers } from '@/app/providers'

export const metadata = {
    icons: setting?.icons,
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            {/* Main Body */}
            <body className="min-h-screen bg-background font-sans antialiased">
                {/* Provider */}
                <Providers>{children}</Providers>
            </body>
        </html>
    )
}
