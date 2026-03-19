"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${scrolled ? "bg-background/95 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
                    <a href="#" className="font-serif text-2xl tracking-[0.2em] uppercase text-primary transition-colors duration-500 hover:opacity-80">
                        Cihangir Perde
                    </a>

                    <nav className="hidden md:flex gap-10">
                        {[
                            { name: "Koleksiyon", id: "koleksiyon" },
                            { name: "Çalışmalarımız", id: "galeri" },
                            { name: "Yorumlar", id: "yorumlar" },
                            { name: "İletişim", id: "iletisim" },
                        ].map((item) => (
                            <a
                                key={item.name}
                                href={`#${item.id}`}
                                className={`text-xs tracking-[0.2em] uppercase hover:text-primary transition-colors duration-300 relative group ${scrolled ? "text-foreground/80" : "text-white/90"}`}
                            >
                                {item.name}
                                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-primary transition-all duration-500 ease-out group-hover:w-full" />
                            </a>
                        ))}
                    </nav>

                    <button
                        className={`md:hidden ${scrolled ? "text-foreground" : "text-white"} transition-colors duration-500`}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                            <path d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 7h16M4 12h16M4 17h16"} strokeLinecap="round" />
                        </svg>
                    </button>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-background z-40 flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
                <nav className="flex flex-col gap-10 text-center">
                    {[
                        { name: "Koleksiyon", id: "koleksiyon" },
                        { name: "Çalışmalarımız", id: "galeri" },
                        { name: "Yorumlar", id: "yorumlar" },
                        { name: "İletişim", id: "iletisim" },
                    ].map((item) => (
                        <a
                            key={item.name}
                            href={`#${item.id}`}
                            onClick={() => setMobileMenuOpen(false)}
                            className="font-serif text-4xl text-foreground hover:text-primary transition-colors duration-300"
                        >
                            {item.name}
                        </a>
                    ))}
                </nav>
            </div>
        </>
    );
}
