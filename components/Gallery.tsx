"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

type MediaItem = { type: "photo"; src: string } | { type: "video"; src: string };
type Filter = "all" | "photo" | "video";

export function Gallery({ photos, videos }: { photos: string[]; videos: string[] }) {
    const [filter, setFilter] = useState<Filter>("all");
    const [lightbox, setLightbox] = useState<number | null>(null);
    const [visible, setVisible] = useState(12);

    const allItems: MediaItem[] = [
        ...photos.map((src) => ({ type: "photo" as const, src })),
        ...videos.map((src) => ({ type: "video" as const, src })),
    ];

    const filtered = filter === "all" ? allItems : allItems.filter((i) => i.type === filter);
    const shown = filtered.slice(0, visible);

    const close = useCallback(() => setLightbox(null), []);
    const prev = useCallback(() =>
        setLightbox((i) => (i !== null ? (i - 1 + allItems.length) % allItems.length : null)),
        [allItems.length]
    );
    const next = useCallback(() =>
        setLightbox((i) => (i !== null ? (i + 1) % allItems.length : null)),
        [allItems.length]
    );

    useEffect(() => {
        if (lightbox === null) return;
        const handler = (e: KeyboardEvent) => {
            if (e.key === "Escape") close();
            if (e.key === "ArrowLeft") prev();
            if (e.key === "ArrowRight") next();
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [lightbox, close, prev, next]);

    useEffect(() => {
        document.body.style.overflow = lightbox !== null ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [lightbox]);

    return (
        <>
            {/* Filter + Count */}
            <div className="flex items-center gap-10 mb-16 border-b border-foreground/5 pb-8">
                {(["all", "photo", "video"] as Filter[]).map((f) => {
                    const labels: Record<Filter, string> = { all: "Tümü", photo: "Fotoğraflar", video: "Videolar" };
                    return (
                        <button
                            key={f}
                            onClick={() => { setFilter(f); setVisible(12); }}
                            className={`text-[11px] tracking-[0.3em] uppercase transition-all duration-300 pb-3 -mb-[calc(2rem+1px)] border-b ${
                                filter === f
                                    ? "text-foreground border-primary"
                                    : "text-foreground/35 hover:text-foreground/60 border-transparent"
                            }`}
                        >
                            {labels[f]}
                        </button>
                    );
                })}
                <span className="ml-auto text-[11px] text-foreground/25 tracking-[0.2em] font-light">
                    {filtered.length} öğe
                </span>
            </div>

            {/* Masonry Grid */}
            <div className="columns-2 md:columns-3 lg:columns-4 gap-[6px] space-y-[6px]">
                {shown.map((item, i) => {
                    const originalIndex = allItems.indexOf(item);
                    return (
                        <div
                            key={i}
                            className="break-inside-avoid relative overflow-hidden cursor-pointer group"
                            onClick={() => setLightbox(originalIndex)}
                        >
                            {item.type === "video" ? (
                                <div className="relative bg-zinc-900 aspect-video">
                                    <video
                                        src={item.src}
                                        className="w-full h-full object-cover opacity-75 transition-all duration-700 group-hover:opacity-50 group-hover:scale-105"
                                        muted
                                        playsInline
                                        preload="metadata"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-12 h-12 rounded-full border border-white/40 backdrop-blur-sm flex items-center justify-center transition-all duration-500 group-hover:border-white/70 group-hover:bg-white/10 group-hover:scale-110">
                                            <svg className="w-4 h-4 text-white translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="relative w-full">
                                    <Image
                                        src={item.src}
                                        alt={`Galeri ${i + 1}`}
                                        width={600}
                                        height={900}
                                        className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-500 flex items-end justify-end p-3">
                                        <div className="opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-1 group-hover:translate-y-0">
                                            <div className="w-8 h-8 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                                                <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Load More */}
            {visible < filtered.length && (
                <div className="flex justify-center mt-20">
                    <button
                        onClick={() => setVisible((v) => v + 12)}
                        className="group flex items-center gap-6 text-[11px] tracking-[0.3em] uppercase text-foreground/40 hover:text-foreground transition-colors duration-500"
                    >
                        <span className="block w-10 h-[1px] bg-foreground/15 group-hover:bg-primary group-hover:w-16 transition-all duration-700" />
                        Daha Fazla Göster
                        <span className="block w-10 h-[1px] bg-foreground/15 group-hover:bg-primary group-hover:w-16 transition-all duration-700" />
                    </button>
                </div>
            )}

            {/* Lightbox */}
            {lightbox !== null && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center"
                    style={{ backgroundColor: "rgba(0,0,0,0.96)" }}
                    onClick={close}
                >
                    {/* Close */}
                    <button
                        className="absolute top-6 right-6 text-white/30 hover:text-white transition-colors duration-300 z-10"
                        onClick={close}
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Prev */}
                    <button
                        className="absolute left-4 md:left-8 text-white/25 hover:text-white transition-colors duration-300 z-10"
                        onClick={(e) => { e.stopPropagation(); prev(); }}
                    >
                        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Media */}
                    <div
                        className="max-w-5xl max-h-[90vh] w-full px-16 md:px-24"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {allItems[lightbox].type === "video" ? (
                            <video
                                src={allItems[lightbox].src}
                                controls
                                autoPlay
                                className="max-h-[85vh] max-w-full mx-auto"
                            />
                        ) : (
                            <div className="flex items-center justify-center">
                                <Image
                                    src={allItems[lightbox].src}
                                    alt={`Galeri ${lightbox + 1}`}
                                    width={1200}
                                    height={1600}
                                    className="max-h-[85vh] w-auto object-contain mx-auto"
                                />
                            </div>
                        )}
                    </div>

                    {/* Next */}
                    <button
                        className="absolute right-4 md:right-8 text-white/25 hover:text-white transition-colors duration-300 z-10"
                        onClick={(e) => { e.stopPropagation(); next(); }}
                    >
                        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Counter */}
                    <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/20 text-[10px] tracking-[0.4em] uppercase">
                        {lightbox + 1} &nbsp;/&nbsp; {allItems.length}
                    </p>
                </div>
            )}
        </>
    );
}
