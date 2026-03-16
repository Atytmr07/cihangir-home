"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";

type Filter = "all" | "photo" | "video";

/* ── Video Card ──────────────────────────────────────────── */
function VideoCard({ src, index }: { src: string; index: number }) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [playing, setPlaying] = useState(false);

    const toggle = () => {
        const v = videoRef.current;
        if (!v) return;
        if (v.paused) { v.play(); setPlaying(true); }
        else { v.pause(); setPlaying(false); }
    };

    return (
        <div
            className="relative overflow-hidden bg-zinc-900 cursor-pointer group aspect-video"
            onClick={toggle}
        >
            <video
                ref={videoRef}
                src={src}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                loop muted playsInline preload="metadata"
                onEnded={() => setPlaying(false)}
            />
            <div className={`absolute inset-0 transition-all duration-500 ${playing ? "bg-black/0" : "bg-black/30 group-hover:bg-black/20"}`} />
            <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-400 ${playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"}`}>
                <div className="w-14 h-14 rounded-full border border-white/50 backdrop-blur-sm flex items-center justify-center transition-all duration-500 group-hover:border-white/80 group-hover:bg-white/10 group-hover:scale-110">
                    {playing ? (
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                        </svg>
                    ) : (
                        <svg className="w-5 h-5 text-white translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    )}
                </div>
            </div>
            <span className="absolute bottom-3 right-4 text-white/30 text-[10px] tracking-[0.3em]">
                {String(index + 1).padStart(2, "0")}
            </span>
        </div>
    );
}

/* ── Photo Card ──────────────────────────────────────────── */
function PhotoCard({ src, index, onClick }: { src: string; index: number; onClick: () => void }) {
    return (
        <div
            className="relative overflow-hidden cursor-pointer group bg-zinc-100"
            onClick={onClick}
        >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src={src}
                alt={`Çalışma ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                loading="lazy"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 flex items-end justify-end p-3">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-1 group-hover:translate-y-0">
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center">
                        <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ── Lightbox ────────────────────────────────────────────── */
function Lightbox({ photos, index, onClose }: { photos: string[]; index: number; onClose: () => void }) {
    const [current, setCurrent] = useState(index);
    const prev = useCallback(() => setCurrent((i) => (i - 1 + photos.length) % photos.length), [photos.length]);
    const next = useCallback(() => setCurrent((i) => (i + 1) % photos.length), [photos.length]);

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowLeft") prev();
            if (e.key === "ArrowRight") next();
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [onClose, prev, next]);

    const content = (
        <div
            style={{
                position: "fixed",
                inset: 0,
                zIndex: 9999,
                backgroundColor: "rgba(0,0,0,0.95)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
            onClick={onClose}
        >
            <button
                style={{ position: "absolute", top: 20, right: 20, color: "rgba(255,255,255,0.4)", background: "none", border: "none", cursor: "pointer", lineHeight: 1 }}
                onClick={onClose}
            >
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            <button
                style={{ position: "absolute", left: 20, color: "rgba(255,255,255,0.3)", background: "none", border: "none", cursor: "pointer" }}
                onClick={(e) => { e.stopPropagation(); prev(); }}
            >
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <div
                style={{ maxHeight: "90vh", maxWidth: "80vw", display: "flex", alignItems: "center", justifyContent: "center" }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={photos[current]}
                    alt={`Çalışma ${current + 1}`}
                    style={{ maxHeight: "88vh", maxWidth: "80vw", objectFit: "contain", display: "block" }}
                />
            </div>

            <button
                style={{ position: "absolute", right: 20, color: "rgba(255,255,255,0.3)", background: "none", border: "none", cursor: "pointer" }}
                onClick={(e) => { e.stopPropagation(); next(); }}
            >
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            <p style={{ position: "absolute", bottom: 20, left: "50%", transform: "translateX(-50%)", color: "rgba(255,255,255,0.2)", fontSize: 10, letterSpacing: "0.3em" }}>
                {current + 1} / {photos.length}
            </p>
        </div>
    );

    return createPortal(content, document.body);
}

/* ── Main Component ──────────────────────────────────────── */
export function WorksSection({ photos, videos }: { photos: string[]; videos: string[] }) {
    const [filter, setFilter] = useState<Filter>("all");
    const [visiblePhotos, setVisiblePhotos] = useState(12);
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    const tabs: { key: Filter; label: string; count: number }[] = [
        { key: "all", label: "Tümü", count: photos.length + videos.length },
        { key: "photo", label: "Fotoğraflar", count: photos.length },
        { key: "video", label: "Videolar", count: videos.length },
    ];

    const showPhotos = filter === "all" || filter === "photo";
    const showVideos = filter === "all" || filter === "video";
    const displayedPhotos = photos.slice(0, visiblePhotos);
    const hasMorePhotos = visiblePhotos < photos.length && showPhotos;

    return (
        <>
            {/* Tabs */}
            <div className="flex items-center gap-8 mb-16 border-b border-foreground/5 pb-8">
                {tabs.map(({ key, label, count }) => (
                    <button
                        key={key}
                        onClick={() => { setFilter(key); setVisiblePhotos(12); }}
                        className={`flex items-center gap-2 text-[11px] tracking-[0.3em] uppercase transition-all duration-300 pb-3 -mb-[calc(2rem+1px)] border-b ${
                            filter === key
                                ? "text-foreground border-primary"
                                : "text-foreground/35 hover:text-foreground/60 border-transparent"
                        }`}
                    >
                        {label}
                        <span className={`text-[9px] ${filter === key ? "text-primary" : "text-foreground/20"}`}>
                            {count}
                        </span>
                    </button>
                ))}
            </div>

            {/* Videos Grid */}
            {showVideos && videos.length > 0 && (
                <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[6px] ${showPhotos ? "mb-[6px]" : ""}`}>
                    {videos.map((src, i) => (
                        <VideoCard key={i} src={src} index={i} />
                    ))}
                </div>
            )}

            {/* Photos Grid */}
            {showPhotos && displayedPhotos.length > 0 && (
                <div className="columns-2 md:columns-3 lg:columns-4 gap-[6px] space-y-[6px]">
                    {displayedPhotos.map((src, i) => (
                        <div key={i} className="break-inside-avoid">
                            <PhotoCard src={src} index={i} onClick={() => setLightboxIndex(i)} />
                        </div>
                    ))}
                </div>
            )}

            {/* Load More */}
            {hasMorePhotos && (
                <div className="flex justify-center mt-16">
                    <button
                        onClick={() => setVisiblePhotos((v) => v + 12)}
                        className="group flex items-center gap-6 text-[11px] tracking-[0.3em] uppercase text-foreground/40 hover:text-foreground transition-colors duration-500"
                    >
                        <span className="block w-10 h-[1px] bg-foreground/15 group-hover:bg-primary group-hover:w-16 transition-all duration-700" />
                        Daha Fazla
                        <span className="block w-10 h-[1px] bg-foreground/15 group-hover:bg-primary group-hover:w-16 transition-all duration-700" />
                    </button>
                </div>
            )}

            {/* Lightbox */}
            {lightboxIndex !== null && (
                <Lightbox
                    photos={photos}
                    index={lightboxIndex}
                    onClose={() => setLightboxIndex(null)}
                />
            )}
        </>
    );
}
