"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import type { CarImage } from "@/lib/types";

interface ImageGalleryProps {
  images: CarImage[];
  carName: string;
}

export default function ImageGallery({ images, carName }: ImageGalleryProps) {
  const [current, setCurrent] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  if (images.length === 0) {
    return (
      <div
        className="rounded-xl flex items-center justify-center"
        style={{ height: "360px", background: "#f1f5f9", border: "1px solid #e2e8f0" }}
      >
        <p className="text-gray-400">No photos available</p>
      </div>
    );
  }

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  return (
    <>
      <div className="rounded-xl overflow-hidden" style={{ background: "#0f1c3f" }}>
        {/* Main image */}
        <div
          className="relative cursor-zoom-in min-h-[340px] sm:min-h-[420px] md:min-h-[460px]"
          onClick={() => setLightboxOpen(true)}
        >
          <Image
            src={images[current].url}
            alt={images[current].alt}
            fill
            className="object-cover"
            priority={current === 0}
            sizes="(max-width: 1024px) 100vw, 65vw"
          />
          {/* Angle / View label */}
          <div
            className="absolute bottom-3 left-3 px-3 py-1 rounded-md text-xs font-medium text-white max-w-[65%] truncate pointer-events-none shadow-sm"
            style={{ background: "rgba(15, 23, 42, 0.8)", backdropFilter: "blur(4px)" }}
          >
            {images[current].alt}
          </div>

          {/* Counter & Zoom */}
          <div
            className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md text-xs font-semibold text-white flex items-center gap-1.5 shadow-sm"
            style={{ background: "rgba(15, 23, 42, 0.8)", backdropFilter: "blur(4px)" }}
          >
            <ZoomIn size={12} />
            {current + 1} / {images.length}
          </div>
          {/* Nav arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow hover:bg-white transition-all"
                aria-label="Previous image"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow hover:bg-white transition-all"
                aria-label="Next image"
              >
                <ChevronRight size={18} />
              </button>
            </>
          )}
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="flex gap-2 p-3 overflow-x-auto" style={{ background: "#07111f" }}>
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="relative flex-shrink-0 rounded-lg overflow-hidden transition-all"
                style={{
                  width: "80px",
                  height: "56px",
                  outline: i === current ? "2px solid var(--color-red-brand)" : "2px solid transparent",
                  outlineOffset: "1px",
                  opacity: i === current ? 1 : 0.65,
                }}
                aria-label={`View image ${i + 1}`}
              >
                <Image
                  src={img.url}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/30 transition-colors"
            aria-label="Close lightbox"
          >
            ✕
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/30"
          >
            <ChevronLeft size={22} />
          </button>
          <div
            className="relative max-w-4xl w-full mx-4"
            style={{ maxHeight: "80vh" }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[current].url}
              alt={images[current].alt}
              width={1200}
              height={800}
              className="object-contain w-full rounded-lg"
              style={{ maxHeight: "80vh" }}
            />
            <p className="text-center text-white/60 text-sm mt-3">{images[current].alt}</p>
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/30"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      )}
    </>
  );
}
