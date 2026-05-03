"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const images = Array.from({ length: 65 }, (_, i) => i + 1)
  .filter((n) => n !== 46) // image 46 doesn't exist on server
  .map((n) => ({
    src: `/gallery/${n}.jpg`,
    alt: `CONOR Printing work ${n}`,
  }));

export default function GalleryPage() {
  const [index, setIndex] = useState(-1);

  return (
    <>
      {/* PAGE HERO */}
      <section className="relative h-44 sm:h-56 flex items-end overflow-hidden">
        <Image src="/carousel-2.jpg" alt="Gallery" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-[#1B3A6B]/75" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8">
          <p className="text-[#fed000] text-xs font-semibold uppercase tracking-widest mb-1">Home / Gallery</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">Our Gallery</h1>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <p className="text-[#f04128] text-sm font-semibold uppercase tracking-widest mb-2">Our Work</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1B3A6B]">Professional Printing &amp; Custom Embroidery</h2>
            <p className="text-gray-500 mt-3">{images.length} projects — click any image to enlarge</p>
          </div>

          <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3">
            {images.map((img, i) => (
              <div
                key={img.src}
                className="relative break-inside-avoid overflow-hidden rounded-xl cursor-pointer group shadow-sm hover:shadow-md transition-shadow"
                onClick={() => setIndex(i)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={400}
                  height={300}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-[#1B3A6B]/0 group-hover:bg-[#1B3A6B]/30 transition-colors duration-300 rounded-xl" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={images}
      />
    </>
  );
}
