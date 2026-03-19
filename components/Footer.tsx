"use client";

import { FadeInStagger, FadeInItem } from "./FadeInScroll";
import { siteConfig } from "@/data/config";

export function Footer() {
    return (
        <footer className="bg-foreground text-background pt-32 pb-12 px-6 md:px-12 lg:px-24 overflow-hidden">
            <FadeInStagger className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">

                    {/* Main Brand & Contact Col */}
                    <FadeInItem className="md:col-span-5">
                        <h4 className="font-serif text-3xl md:text-5xl mb-6 leading-tight text-primary">Cihangir Perde</h4>
                        <p className="font-light text-background/60 leading-relaxed mb-10 max-w-sm text-lg">
                            Evinize en uygun tekstil çözümleri için mağazamızı ziyaret edebilir veya hemen arayabilirsiniz.
                        </p>
                        <a
                            href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                            className="inline-flex items-center gap-4 text-2xl md:text-3xl font-serif hover:text-primary transition-colors duration-500 group"
                        >
                            <span className="relative">
                                {siteConfig.contact.phone}
                                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-primary transition-all duration-700 ease-out group-hover:w-full" />
                            </span>
                        </a>
                    </FadeInItem>

                    {/* Address Col */}
                    <FadeInItem className="md:col-span-3">
                        <h5 className="text-xs tracking-[0.2em] uppercase text-primary mb-6 font-semibold">Adres</h5>
                        <p className="font-light text-background/80 leading-loose text-sm">
                            Çankaya Mah. Barış Manço Bulvarı,<br />
                            Nadir Alper İş Merkezi<br />
                            No: 210/A, Kepez / Antalya
                        </p>
                    </FadeInItem>

                    {/* Menu Col */}
                    <FadeInItem className="md:col-span-2">
                        <h5 className="text-xs tracking-[0.2em] uppercase text-primary mb-6 font-semibold">Menü</h5>
                        <ul className="flex flex-col gap-5">
                            {[
                                { name: "Koleksiyon", id: "koleksiyon" },
                                { name: "Çalışmalarımız", id: "galeri" },
                                { name: "Yorumlar", id: "yorumlar" },
                                { name: "İletişim", id: "iletisim" },
                            ].map((item) => (
                                <li key={item.name}>
                                    <a href={`#${item.id}`} className="text-sm tracking-widest uppercase text-background/70 hover:text-white transition-colors duration-300">
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </FadeInItem>

                    {/* Socials Col */}
                    <FadeInItem className="md:col-span-2">
                        <h5 className="text-xs tracking-[0.2em] uppercase text-primary mb-6 font-semibold">Sosyal Medya</h5>
                        <ul className="flex flex-col gap-5">
                            <li>
                                <a
                                    href={siteConfig.contact.instagram.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm tracking-widest uppercase text-background/70 hover:text-white transition-colors duration-300 relative group inline-block"
                                >
                                    Instagram
                                    <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-primary transition-all duration-500 group-hover:w-full" />
                                </a>
                            </li>
                        </ul>
                    </FadeInItem>
                </div>

                <div className="mt-20 md:mt-32 border-t border-background/10 pt-16" />

                <FadeInItem className="mt-12 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[10px] tracking-[0.2em] text-background/40 uppercase text-center md:text-left">
                        © {new Date().getFullYear()} Cihangir Perde. Tüm Hakları Saklıdır.
                    </p>
                    <p className="text-[10px] tracking-[0.2em] text-primary uppercase text-center md:text-right">
                        {siteConfig.contact.deliveryFeature}
                    </p>
                </FadeInItem>

            </FadeInStagger>
        </footer>
    );
}
