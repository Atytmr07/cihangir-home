import type { Metadata } from 'next'
import { Montserrat, Playfair_Display } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair-display' })

const siteUrl = "https://cihangirhome.com"

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: "Cihangir Home | Perde & Dekorasyon Antalya Kepez",
        template: "%s | Cihangir Home",
    },
    description: "Antalya Kepez Masadağı'nda tül perde, fon perde, jaluzi ve ev tekstili. Ölçüye özel perde dikimi, aynı gün teslimat. Cihangir Perde & Home Collection.",
    keywords: [
        "perde antalya", "perde kepez", "perde masadağı",
        "tül perde antalya", "fon perde antalya", "jaluzi antalya",
        "stor perde antalya", "perde dikimi antalya", "ölçüye özel perde",
        "cihangir perde", "cihangir home", "perde mağazası antalya",
        "ev tekstili antalya", "perde montaj antalya", "jaluzi kepez",
    ],
    authors: [{ name: "Cihangir Home" }],
    creator: "Cihangir Home",
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true },
    },
    alternates: {
        canonical: siteUrl,
    },
    openGraph: {
        type: "website",
        locale: "tr_TR",
        url: siteUrl,
        siteName: "Cihangir Home",
        title: "Cihangir Home | Perde & Dekorasyon Antalya Kepez",
        description: "Antalya Kepez Masadağı'nda tül perde, fon perde, jaluzi ve ev tekstili. Ölçüye özel perde dikimi, aynı gün teslimat.",
        images: [
            {
                url: "/hero.jpeg",
                width: 1200,
                height: 630,
                alt: "Cihangir Home - Perde & Dekorasyon Antalya",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Cihangir Home | Perde & Dekorasyon Antalya",
        description: "Antalya Kepez Masadağı'nda tül perde, fon perde, jaluzi ve ev tekstili.",
        images: ["/hero.jpeg"],
    },
    icons: {
        icon: "/icon.jpg",
        shortcut: "/icon.jpg",
        apple: "/icon.jpg",
    },
}

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Cihangir Perde & Home Collection",
    "image": `${siteUrl}/hero.jpeg`,
    "url": siteUrl,
    "telephone": "+905397020041",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Çankaya Mah. Barış Manço Bulvarı, Nadir Alper İş Merkezi No: 210/A",
        "addressLocality": "Kepez",
        "addressRegion": "Antalya",
        "addressCountry": "TR"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": 36.9484804,
        "longitude": 30.6798704
    },
    "sameAs": ["https://instagram.com/cihangirhomecollection"],
    "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "19:00"
    },
    "priceRange": "₺₺",
    "description": "Antalya Kepez Masadağı'nda tül perde, fon perde, jaluzi ve ev tekstili. Ölçüye özel perde dikimi, aynı gün teslimat.",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="tr">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className={`${montserrat.variable} ${playfair.variable} bg-[#FAF9F6] text-[#1A1A1A] font-sans antialiased selection:bg-[#C5A059] selection:text-white`}>
                {children}
            </body>
        </html>
    )
}
