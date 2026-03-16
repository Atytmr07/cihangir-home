import { siteConfig } from "@/data/config";
import Image from "next/image";
import { HeroParallax } from "@/components/HeroParallax";
import { FadeInStagger, FadeInItem } from "@/components/FadeInScroll";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WorksSection } from "@/components/WorksSection";

export default function Home() {
    return (
        <main className="min-h-screen bg-background text-foreground overflow-hidden">
            <Header />

            {/* --- HERO SECTION --- */}
            <HeroParallax backgroundImage="/hero.jpeg">
                <div className="w-12 h-[1px] bg-primary mb-8" />
                <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight text-white mb-6 drop-shadow-lg leading-tight">
                    Evinizin Kıyafeti İçin <span className="italic font-light">Tasarlıyoruz.</span>
                </h1>
                <p className="font-sans text-lg md:text-xl text-white/90 max-w-2xl font-light tracking-wide leading-relaxed mb-12">
                    Kalite tesadüf değildir. Antalya Masadağında, evinize özel dokunuşlar.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-10 mt-8">
                    <a href="#koleksiyon" className="group flex items-center gap-6 cursor-pointer">
                        <div className="relative flex items-center justify-center w-16 h-16 rounded-full border border-white/30 text-white transition-all duration-700 ease-out group-hover:border-primary group-hover:bg-primary">
                            <svg className="w-5 h-5 -rotate-45 transition-transform duration-700 ease-out group-hover:rotate-0 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </div>
                        <span className="text-white text-xs tracking-[0.3em] uppercase transition-colors duration-500 group-hover:text-primary">
                            Koleksiyonu Keşfet
                        </span>
                    </a>
                </div>
            </HeroParallax>

            {/* --- THE COLLECTION SECTION (100x Upgraded) --- */}
            <section id="koleksiyon" className="py-32 md:py-48 px-6 md:px-12 lg:px-24 bg-background relative">
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-[50vw] h-full bg-zinc-50/50 -z-10" />

                <FadeInStagger className="max-w-[1400px] mx-auto">
                    <FadeInItem className="mb-24 md:mb-40 flex flex-col md:flex-row md:items-end justify-between gap-12 relative z-10">
                        <div className="relative">
                            <span className="absolute -top-16 -left-8 text-[12rem] text-zinc-100 font-serif leading-none select-none -z-10">C</span>
                            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground tracking-tight">Koleksiyon</h2>
                            <div className="w-24 h-[1px] bg-primary mt-8" />
                        </div>
                        <p className="max-w-md text-foreground/60 font-light leading-relaxed text-sm md:text-base tracking-wide flex items-center gap-4">
                            <span className="w-8 h-[1px] bg-foreground/20 hidden md:block" />
                            İnce işçilik ve kusursuz dokularla hazırlanan, yaşam alanlarınıza değer katacak yüksek kaliteli seçkimiz.
                        </p>
                    </FadeInItem>

                    {/* Ultra-Premium Asymmetric Layout */}
                    <div className="flex flex-col gap-32 md:gap-48 relative z-10">
                        {/* ITEM 1 - Tül */}
                        {siteConfig.collection[0] && (
                            <FadeInItem className="group flex flex-col md:flex-row items-center gap-12 md:gap-24">
                                <div className="w-full md:w-3/5 relative overflow-hidden h-[60vh] md:h-[80vh]">
                                    <Image
                                        src={siteConfig.collection[0].image}
                                        alt={siteConfig.collection[0].title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 60vw"
                                        className="object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-black/10 transition-opacity duration-700 group-hover:opacity-0" />
                                </div>
                                <div className="w-full md:w-2/5 flex flex-col items-start relative transform transition-all duration-700 group-hover:translate-x-4">
                                    <span className="text-primary text-xs tracking-[0.4em] uppercase mb-4 opacity-70">01 — {siteConfig.collection[0].category}</span>
                                    <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">{siteConfig.collection[0].title}</h3>
                                    <p className="text-foreground/60 font-light leading-loose text-sm mb-10">{siteConfig.collection[0].description}</p>
                                </div>
                            </FadeInItem>
                        )}

                        {/* ITEM 2 - Fon Perde (Reversed) */}
                        {siteConfig.collection[1] && (
                            <FadeInItem className="group flex flex-col md:flex-row-reverse items-center gap-12 md:gap-24">
                                <div className="w-full md:w-1/2 relative overflow-hidden h-[50vh] md:h-[70vh]">
                                    <Image
                                        src={siteConfig.collection[1].image}
                                        alt={siteConfig.collection[1].title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/10 transition-opacity duration-700 group-hover:opacity-0" />
                                </div>
                                <div className="w-full md:w-1/2 flex flex-col items-start md:items-end text-left md:text-right relative transform transition-all duration-700 md:group-hover:-translate-x-4 group-hover:translate-x-4">
                                    <span className="text-primary text-xs tracking-[0.4em] uppercase mb-4 opacity-70">02 — {siteConfig.collection[1].category}</span>
                                    <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">{siteConfig.collection[1].title}</h3>
                                    <p className="text-foreground/60 font-light leading-loose text-sm mb-10 max-w-sm">{siteConfig.collection[1].description}</p>
                                </div>
                            </FadeInItem>
                        )}

                        {/* ITEM 3 - Jaluzi */}
                        {siteConfig.collection[2] && (
                            <FadeInItem className="group flex flex-col md:flex-row items-center gap-12 md:gap-24 md:pl-24">
                                <div className="w-full md:w-[45%] relative overflow-hidden h-[45vh] md:h-[65vh]">
                                    <Image
                                        src={siteConfig.collection[2].image}
                                        alt={siteConfig.collection[2].title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 45vw"
                                        className="object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/10 transition-opacity duration-700 group-hover:opacity-0" />
                                </div>
                                <div className="w-full md:w-[55%] flex flex-col items-start relative transform transition-all duration-700 group-hover:translate-x-4">
                                    <span className="text-primary text-xs tracking-[0.4em] uppercase mb-4 opacity-70">03 — {siteConfig.collection[2].category}</span>
                                    <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">{siteConfig.collection[2].title}</h3>
                                    <p className="text-foreground/60 font-light leading-loose text-sm mb-10 max-w-sm">{siteConfig.collection[2].description}</p>
                                </div>
                            </FadeInItem>
                        )}
                    </div>
                </FadeInStagger>
            </section>

            {/* --- WORKS SECTION --- */}
            <section id="galeri" className="py-24 md:py-40 px-6 md:px-12 lg:px-24 bg-background">
                <FadeInStagger className="max-w-[1400px] mx-auto">
                    <FadeInItem className="mb-16 md:mb-24">
                        <h2 className="font-serif text-5xl md:text-7xl text-foreground tracking-tight">Çalışmalarımız</h2>
                        <div className="w-24 h-[1px] bg-primary mt-8" />
                    </FadeInItem>
                    <FadeInItem>
                        <WorksSection photos={siteConfig.gallery.photos} videos={siteConfig.gallery.videos} />
                    </FadeInItem>
                </FadeInStagger>
            </section>

            {/* --- REVIEWS SECTION --- */}
            <section id="yorumlar" className="py-24 md:py-40 bg-white px-6 md:px-12 lg:px-24">
                <FadeInStagger className="max-w-6xl mx-auto text-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-32">
                        {siteConfig.reviews.map((review) => (
                            <FadeInItem key={review.id} className="flex flex-col items-center">
                                <div className="flex gap-1 mb-10">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10.894 2.553a1 1 0 00-1.788 0l-2.322 4.644-5.108.742a1 1 0 00-.554 1.706l3.697 3.603-.872 5.087a1 1 0 001.451 1.054L10 16.347l4.566 2.403a1 1 0 001.451-1.054l-.872-5.087 3.697-3.603a1 1 0 00-.554-1.706l-5.108-.742-2.322-4.644z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-snug mb-10">
                                    &quot;{review.text}&quot;
                                </p>
                                <div className="w-8 h-[1px] bg-primary mb-6" />
                                <p className="text-sm tracking-[0.2em] font-light uppercase text-foreground/60">
                                    {review.author}
                                </p>
                            </FadeInItem>
                        ))}
                    </div>
                </FadeInStagger>
            </section>

            {/* --- REACH US SECTION --- */}
            <section id="iletisim" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-background">
                <FadeInStagger className="max-w-7xl mx-auto">
                    <FadeInItem className="mb-16 md:mb-24">
                        <h2 className="font-serif text-4xl md:text-6xl text-foreground mb-6">Ulaşım ve İletişim</h2>
                        <div className="w-16 h-[1px] bg-primary" />
                    </FadeInItem>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        {/* Map Column */}
                        <FadeInItem className="relative h-[400px] md:h-[600px] w-full grayscale contrast-125 hover:grayscale-0 transition-all duration-1000 ease-in-out overflow-hidden border border-foreground/5 shadow-2xl">
                            <iframe
                                src={siteConfig.contact.googleMapsEmbed}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="absolute inset-0"
                            />
                        </FadeInItem>

                        {/* Info Column */}
                        <FadeInItem className="flex flex-col gap-12 pt-8">
                            <div>
                                <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4 font-semibold italic">Mağazamıza Bekleriz</p>
                                <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-6 leading-tight">Ziyaret Edin veya <br /> Hemen Arayın</h3>
                                <p className="text-lg text-foreground/70 font-light leading-relaxed mb-10 max-w-sm">
                                    {siteConfig.contact.address}
                                </p>
                            </div>

                            <div className="flex flex-col gap-8">
                                <a
                                    href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                                    className="flex items-center gap-6 group cursor-pointer"
                                >
                                    <div className="w-14 h-14 rounded-full border border-foreground/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                                        <svg className="w-6 h-6 text-foreground group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <span className="block text-foreground font-serif text-2xl group-hover:text-primary transition-colors duration-500">{siteConfig.contact.phone}</span>
                                        <span className="text-[10px] tracking-[0.2em] uppercase text-foreground/40">Telefonla Ulaşın</span>
                                    </div>
                                </a>

                                <a
                                    href={siteConfig.contact.instagram.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-6 group cursor-pointer"
                                >
                                    <div className="w-14 h-14 rounded-full border border-foreground/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                                        <svg className="w-6 h-6 text-foreground group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                        </svg>
                                    </div>
                                    <div>
                                        <span className="block text-foreground font-serif text-2xl group-hover:text-primary transition-colors duration-500">{siteConfig.contact.instagram.handle}</span>
                                        <span className="text-[10px] tracking-[0.2em] uppercase text-foreground/40">Instagram&apos;da Takip Edin</span>
                                    </div>
                                </a>
                            </div>
                        </FadeInItem>
                    </div>
                </FadeInStagger>
            </section>

            <Footer />
        </main>
    );
}
