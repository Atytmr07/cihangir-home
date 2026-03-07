"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function HeroParallax({
    children,
    backgroundImage,
}: {
    children: React.ReactNode;
    backgroundImage: string;
}) {
    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section
            ref={heroRef}
            className="relative w-full h-screen flex items-center justify-center overflow-hidden"
        >
            <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
                <div className="absolute inset-0 bg-black/45 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 z-10" />
                <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url('${backgroundImage}')` }}
                />
            </motion.div>

            <motion.div
                style={{ opacity }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-20 text-center px-6 max-w-4xl mx-auto flex flex-col items-center"
            >
                {children}
            </motion.div>
        </section>
    );
}
