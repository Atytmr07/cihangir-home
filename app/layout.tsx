import type { Metadata } from 'next'
import { Montserrat, Playfair_Display } from 'next/font/google'
import './globals.css'
import { siteConfig } from '@/data/config'

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair-display' })

export const metadata: Metadata = {
    title: siteConfig.name,
    description: siteConfig.description,
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="tr">
            <body className={`${montserrat.variable} ${playfair.variable} bg-[#FAF9F6] text-[#1A1A1A] font-sans antialiased selection:bg-[#C5A059] selection:text-white`}>
                {children}
            </body>
        </html>
    )
}
