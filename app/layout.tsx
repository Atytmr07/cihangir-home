import type { Metadata } from 'next'
import { Montserrat, Playfair_Display } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair-display' })

const siteUrl = "https://cihangirperde.com.tr"

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: "Cihangir Perde | Perde & Dekorasyon Antalya Kepez",
        template: "%s | Cihangir Perde",
    },
    description: "Antalya Kepez Masadağı'nda tül perde, fon perde, jaluzi ve ev tekstili. Ölçüye özel perde dikimi, aynı gün teslimat. Cihangir Perde.",
    keywords: [
        "perde antalya", "perde kepez", "perde masadağı",
        "perdeci antalya", "perdeci kepez", "antalya perdeci", "masadağı perdeci",
        "tül perde antalya", "fon perde antalya", "jaluzi antalya",
        "stor perde antalya", "perde dikimi antalya", "ölçüye özel perde",
        "cihangir perde", "perde mağazası antalya", "perde kepez masadağı",
        "ev tekstili antalya", "perde montaj antalya", "jaluzi kepez",
        "perde fiyatları antalya", "antalya perde mağazaları", "kepez perde mağazası",
    ],
    authors: [{ name: "Cihangir Perde" }],
    creator: "Cihangir Perde",
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
        siteName: "Cihangir Perde",
        title: "Cihangir Perde | Perde & Dekorasyon Antalya Kepez",
        description: "Antalya Kepez Masadağı'nda tül perde, fon perde, jaluzi ve ev tekstili. Ölçüye özel perde dikimi, aynı gün teslimat.",
        images: [
            {
                url: "/hero.jpeg",
                width: 1200,
                height: 630,
                alt: "Cihangir Perde - Perde & Dekorasyon Antalya",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Cihangir Perde | Perde & Dekorasyon Antalya",
        description: "Antalya Kepez Masadağı'nda tül perde, fon perde, jaluzi ve ev tekstili.",
        images: ["/hero.jpeg"],
    },
    icons: {
        icon: "/hero.jpeg",
        shortcut: "/hero.jpeg",
        apple: "/hero.jpeg",
    },
}

const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Store"],
    "name": "Cihangir Perde",
    "image": `${siteUrl}/hero.jpeg`,
    "url": siteUrl,
    "telephone": "+905397020041",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Çankaya Mah. Barış Manço Bulvarı, Nadir Alper İş Merkezi No: 210/A",
        "addressLocality": "Kepez",
        "addressRegion": "Antalya",
        "postalCode": "07090",
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
    "areaServed": [
        { "@type": "City", "name": "Antalya" },
        { "@type": "AdministrativeArea", "name": "Kepez" },
        { "@type": "AdministrativeArea", "name": "Masadağı" },
        { "@type": "AdministrativeArea", "name": "Konyaaltı" },
        { "@type": "AdministrativeArea", "name": "Muratpaşa" }
    ],
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "reviewCount": "2",
        "bestRating": "5",
        "worstRating": "1"
    },
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Perde ve Dekorasyon Hizmetleri",
        "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tül Perde Antalya" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Fon Perde Antalya" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Jaluzi Antalya" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Stor Perde Antalya" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Ölçüye Özel Perde Dikimi Kepez" } }
        ]
    }
}

const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "Antalya'da perde nerede yaptırılır?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Cihangir Perde, Antalya Kepez Masadağı'nda hizmet vermektedir. Adresimiz: Çankaya Mah. Barış Manço Bulvarı, Nadir Alper İş Merkezi No: 210/A, Kepez / Antalya. 0539 702 00 41 numaralı telefondan ulaşabilirsiniz."
            }
        },
        {
            "@type": "Question",
            "name": "Kepez'de perde mağazası var mı?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Evet. Cihangir Perde, Kepez ilçesi Masadağı'nda konumlanmış bir perde ve dekorasyon mağazasıdır. Tül perde, fon perde, jaluzi ve stor perde gibi geniş bir ürün yelpazesi sunmaktayız."
            }
        },
        {
            "@type": "Question",
            "name": "Aynı gün perde dikimi ve montajı yapılıyor mu?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Evet, Cihangir Perde olarak Antalya ve Kepez bölgesinde aynı gün teslimat ve montaj hizmeti sunmaktayız. Detaylı bilgi için 0539 702 00 41'i arayabilirsiniz."
            }
        },
        {
            "@type": "Question",
            "name": "Masadağı'nda perdeci var mı?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Evet. Cihangir Perde, Masadağı Kepez Antalya'da faaliyet gösteren bir perde mağazasıdır. Ölçüye özel perde dikimi, jaluzi montajı ve ev tekstili konularında hizmet vermekteyiz."
            }
        }
    ]
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
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
                />
            </head>
            <body className={`${montserrat.variable} ${playfair.variable} bg-[#FAF9F6] text-[#1A1A1A] font-sans antialiased selection:bg-[#C5A059] selection:text-white`}>
                {children}
            </body>
        </html>
    )
}
