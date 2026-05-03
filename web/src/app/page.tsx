"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  Phone,
  ArrowRight,
  Zap,
  ShieldCheck,
  Palette,
  Users,
  ChevronDown,
} from "lucide-react";

// ── Animation helpers ───────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 56 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 0.61, 0.36, 1] } },
};
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.75 } },
};
const slideLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 0.61, 0.36, 1] } },
};
const slideRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 0.61, 0.36, 1] } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11 } },
};

function AnimIn({
  children,
  variants = fadeUp,
  className = "",
}: {
  children: React.ReactNode;
  variants?: object;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function StaggerIn({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={stagger}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── Data ────────────────────────────────────────────────────────────
const services = [
  {
    tag: "Get Noticed",
    title: "Signs & Printing",
    desc: "Business cards, banners, yard signs, stickers — everything your brand needs in print.",
    img: "/carousel-2.jpg",
    items: ["Business Cards", "Banners & Posters", "Yard Signs", "Stickers & Decals"],
  },
  {
    tag: "Hit the Road",
    title: "Vehicle Wraps",
    desc: "Turn your vehicle into a rolling billboard with wraps, lettering, and window vinyl.",
    img: "/carousel-1.jpg",
    items: ["Full Vehicle Wraps", "Car Lettering", "Window Vinyl", "Magnetic Signs"],
  },
  {
    tag: "Wear Your Brand",
    title: "Embroidery & Apparel",
    desc: "Professional embroidery and DTF on t-shirts, hoodies, caps, jackets, and more.",
    img: "/about.jpg",
    items: ["T-Shirts & Hoodies", "Caps & Hats", "Jackets & Sweats", "DTF Print"],
  },
  {
    tag: "Build Your Brand",
    title: "Logo & Design",
    desc: "Creative logo and brand identity services to give your business a professional edge.",
    img: "/team-1.jpg",
    items: ["Logo Design", "Brand Identity", "Custom Graphics", "Print-Ready Files"],
  },
];

const whyUs = [
  {
    icon: Palette,
    title: "Custom Designs",
    desc: "Unique, tailored designs for signage, apparel, and marketing that make your brand stand out.",
  },
  {
    icon: ShieldCheck,
    title: "Premium Materials",
    desc: "Durable, top-grade materials on every print and embroidery — built to look great and last.",
  },
  {
    icon: Users,
    title: "Expert Team",
    desc: "Skilled professionals that complete every project with precision and obsessive attention to detail.",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    desc: "Quick delivery without compromising quality — we help you hit even the tightest deadlines.",
  },
];

const heroSlides = [
  "/carousel-1.jpg",
  "/carousel-2.jpg",
  "/about.jpg",
];

const galleryNums = [3, 8, 14, 20, 27, 35];

const marqueeItems = [
  "PRINTING",
  "EMBROIDERY",
  "VEHICLE WRAPS",
  "BUSINESS CARDS",
  "LOGO DESIGN",
  "YARD SIGNS",
  "CUSTOM APPAREL",
  "STICKERS & DECALS",
  "MAGNETIC SIGNS",
  "WINDOW VINYL",
];

// ── Page ────────────────────────────────────────────────────────────
export default function HomePage() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % heroSlides.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {/* ╔══════════════════════════════════════╗
          ║  HERO                                ║
          ╚══════════════════════════════════════╝ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Slideshow */}
        <AnimatePresence initial={false}>
          <motion.div
            key={slide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={heroSlides[slide]}
              alt="CONOR Printing LLC"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-[#04080F]/93 via-[#0D1F40]/88 to-[#04080F]/90" />

        {/* Ambient glow orbs */}
        <div className="absolute top-1/3 left-1/4 w-150 h-150 bg-[#f04128]/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/3 w-125 h-125 bg-[#fed000]/7 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 w-full">
          {/* Main headline — two lines with overflow clip for reveal effect */}
          <div className="overflow-hidden mb-1">
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.75, ease: [0.22, 0.61, 0.36, 1] }}
              className="text-[clamp(3.2rem,9vw,7rem)] font-black text-white leading-[0.92] tracking-tighter"
            >
              PRINTING &amp;
            </motion.div>
          </div>
          <div className="overflow-hidden mb-5">
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 0.61, 0.36, 1] }}
              className="text-[clamp(3.2rem,9vw,7rem)] font-black leading-[0.92] tracking-tighter"
              style={{ WebkitTextStroke: "2px #fed000", color: "transparent" }}
            >
              EMBROIDERY
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="text-white/55 text-lg max-w-md leading-relaxed mb-9"
          >
            Custom signs, vehicle wraps, apparel and more — delivered with precision
            and speed from Eagleville, PA.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <Link
              href="/quote"
              className="group glow-red inline-flex items-center gap-2 bg-[#f04128] hover:bg-[#f04128] text-white font-black px-8 py-4 rounded-full text-base transition-all duration-300"
            >
              Get Free Quote
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+14842135355"
              className="inline-flex items-center gap-2 border border-white/22 text-white/75 hover:text-white font-semibold px-8 py-4 rounded-full text-base hover:border-white/45 hover:bg-white/5 transition-all duration-300"
            >
              <Phone className="h-4 w-4" />
              (484) 213-5355
            </a>
          </motion.div>

          {/* Inline stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap gap-8 sm:gap-12 pt-8 border-t border-white/10"
          >
            {[
              ["6+", "Years Experience"],
              ["500+", "Happy Clients"],
              ["64+", "Portfolio Projects"],
              ["100%", "Quality Guaranteed"],
            ].map(([v, l]) => (
              <div key={l}>
                <div className="text-3xl sm:text-4xl font-black text-[#fed000]">{v}</div>
                <div className="text-[10px] text-white/45 uppercase tracking-widest mt-0.5">{l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Slide dots */}
        <div className="absolute bottom-8 right-8 flex gap-2 z-10">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              className={`transition-all duration-300 rounded-full ${
                i === slide ? "w-6 h-2 bg-white" : "w-2 h-2 bg-white/35 hover:bg-white/60"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        >
          <span className="text-white/25 text-[10px] uppercase tracking-widest">Scroll</span>
          <ChevronDown className="h-5 w-5 text-white/30" />
        </motion.div>
      </section>

      {/* ╔══════════════════════════════════════╗
          ║  MARQUEE TICKER                      ║
          ╚══════════════════════════════════════╝ */}
      <div className="bg-[#f04128] py-3 overflow-hidden select-none">
        <div className="animate-marquee">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-5 px-5">
              <span className="text-white font-black text-xs tracking-[0.28em] uppercase whitespace-nowrap">
                {item}
              </span>
              <span className="text-white/35 text-base">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* ╔══════════════════════════════════════╗
          ║  ABOUT                               ║
          ╚══════════════════════════════════════╝ */}
      <section className="py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image side */}
            <AnimIn variants={slideLeft} className="relative">
              <div className="relative aspect-4/3 rounded-3xl overflow-hidden shadow-2xl shadow-black/15">
                <Image src="/about.jpg" alt="CONOR Printing team at work" fill className="object-cover" />
                <div className="absolute inset-0 bg-linear-to-t from-[#1B3A6B]/40 to-transparent" />
              </div>
              {/* Floating badges */}
              <div className="absolute -bottom-5 -right-5 bg-[#f04128] rounded-2xl px-5 py-4 shadow-xl shadow-red-500/30">
                <div className="text-4xl font-black text-white leading-none">6+</div>
                <div className="text-[10px] text-red-200 uppercase tracking-widest mt-0.5">Years in Business</div>
              </div>
              <div className="absolute -top-5 -left-5 bg-[#1B3A6B] rounded-2xl px-4 py-3 shadow-xl shadow-blue-900/30">
                <div className="text-2xl font-black text-[#fed000] leading-none">500+</div>
                <div className="text-[10px] text-blue-200 uppercase tracking-widest mt-0.5">Happy Clients</div>
              </div>
            </AnimIn>

            {/* Text side */}
            <AnimIn variants={slideRight}>
              <p className="text-[#f04128] text-[11px] font-black uppercase tracking-[0.3em] mb-4">
                About CONOR Printing
              </p>
              <h2 className="text-4xl sm:text-5xl font-black text-[#1B3A6B] leading-[1.05] mb-5">
                We Make Your Brand
                <span className="block text-[#f04128]">Unforgettable.</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-7 text-[15px]">
                With over 6 years serving businesses in Eagleville, Norristown, and Greater
                Philadelphia, CONOR Printing LLC transforms ideas into high-impact branding.
                From vehicle wraps that stop traffic to embroidered apparel your team is proud
                to wear — we deliver quality that speaks for itself.
              </p>
              <ul className="grid grid-cols-2 gap-3 mb-8">
                {["Custom Designs", "Premium Materials", "Expert Team", "Fast Delivery"].map(
                  (item) => (
                    <li key={item} className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                      <CheckCircle2 className="h-4 w-4 text-[#f04128] shrink-0" />
                      {item}
                    </li>
                  )
                )}
              </ul>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-[#1B3A6B] hover:bg-[#152d55] text-white font-bold px-7 py-3 rounded-full transition-colors"
                >
                  Our Story <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="tel:+14842135355"
                  className="inline-flex items-center gap-2 border-2 border-[#1B3A6B] text-[#1B3A6B] font-bold px-7 py-3 rounded-full hover:bg-[#1B3A6B] hover:text-white transition-all"
                >
                  <Phone className="h-4 w-4" /> Call Us
                </a>
              </div>
            </AnimIn>
          </div>
        </div>
      </section>

      {/* ╔══════════════════════════════════════╗
          ║  SERVICES (DARK)                     ║
          ╚══════════════════════════════════════╝ */}
      <section className="py-28 bg-[#04080F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimIn variants={fadeIn} className="text-center mb-16">
            <p className="text-[#f04128] text-[11px] font-black uppercase tracking-[0.3em] mb-3">
              What We Do
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-white">
              Services That{" "}
              <span className="text-[#fed000]">Deliver Results</span>
            </h2>
          </AnimIn>

          <StaggerIn className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((s) => (
              <motion.div
                key={s.title}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-2xl cursor-pointer"
                style={{ aspectRatio: "3/4" }}
              >
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                {/* Base overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-[#04080F] via-[#04080F]/55 to-transparent transition-all duration-400" />
                {/* Hover overlay intensifies */}
                <div className="absolute inset-0 bg-[#04080F]/0 group-hover:bg-[#04080F]/30 transition-all duration-400" />

                {/* Tag pill */}
                <div className="absolute top-4 left-4">
                  <span className="bg-[#f04128] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                    {s.tag}
                  </span>
                </div>

                {/* Bottom content */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-white font-black text-lg leading-tight mb-2">{s.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed mb-3 opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-400">
                    {s.desc}
                  </p>
                  <ul className="space-y-1.5">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-[11px] text-[#fed000]/75">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#fed000]/60 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </StaggerIn>

          <AnimIn variants={fadeIn} className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border border-white/18 text-white/60 hover:text-white hover:border-white/40 font-semibold px-8 py-3 rounded-full transition-all duration-300"
            >
              View All Services <ArrowRight className="h-4 w-4" />
            </Link>
          </AnimIn>
        </div>
      </section>

      {/* ╔══════════════════════════════════════╗
          ║  WHY CHOOSE US                       ║
          ╚══════════════════════════════════════╝ */}
      <section className="py-28 bg-gray-50/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimIn variants={fadeIn} className="text-center mb-16">
            <p className="text-[#f04128] text-[11px] font-black uppercase tracking-[0.3em] mb-3">
              Why CONOR?
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-[#1B3A6B]">
              The Difference is in
              <span className="block text-[#f04128]"> the Details.</span>
            </h2>
          </AnimIn>

          <StaggerIn className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="group bg-white rounded-2xl p-7 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-350 border border-transparent hover:border-[#f04128]/15"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#f04128]/9 group-hover:bg-[#f04128] flex items-center justify-center mb-5 transition-colors duration-300">
                  <item.icon className="h-7 w-7 text-[#f04128] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-black text-[#1B3A6B] text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </StaggerIn>
        </div>
      </section>

      {/* ╔══════════════════════════════════════╗
          ║  GALLERY PREVIEW (NAVY)              ║
          ╚══════════════════════════════════════╝ */}
      <section className="py-28 bg-[#1B3A6B] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
            <AnimIn>
              <p className="text-[#fed000] text-[11px] font-black uppercase tracking-[0.3em] mb-3">
                Our Work
              </p>
              <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
                Real Projects,
                <span className="block text-[#fed000]">Real Results.</span>
              </h2>
            </AnimIn>
            <AnimIn variants={fadeIn}>
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 bg-[#fed000] hover:bg-[#fed000] text-[#1B3A6B] font-black px-7 py-3 rounded-full transition-colors shrink-0"
              >
                Full Portfolio <ArrowRight className="h-4 w-4" />
              </Link>
            </AnimIn>
          </div>

          <StaggerIn className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {galleryNums.map((n) => (
              <motion.div
                key={n}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-2xl aspect-square"
              >
                <Image
                  src={`/gallery/${n}.jpg`}
                  alt={`Portfolio project ${n}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-[#1B3A6B]/0 group-hover:bg-[#1B3A6B]/65 transition-all duration-350 flex items-center justify-center">
                  <ArrowRight className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </StaggerIn>
        </div>
      </section>

      {/* ╔══════════════════════════════════════╗
          ║  FINAL CTA (DARK + GLOW)             ║
          ╚══════════════════════════════════════╝ */}
      <section className="relative py-36 overflow-hidden bg-[#04080F]">
        {/* Background glow */}
        <div className="absolute inset-0 bg-linear-to-br from-[#f04128]/12 via-transparent to-[#fed000]/8 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-175 bg-[#1B3A6B]/35 rounded-full blur-[130px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimIn variants={fadeUp}>
            <p className="text-[#fed000] text-[11px] font-black uppercase tracking-[0.3em] mb-6">
              Ready to Start?
            </p>
            <h2 className="text-5xl sm:text-6xl lg:text-[5.5rem] font-black text-white leading-[0.95] tracking-tight mb-4">
              Let&apos;s Build
              <span className="block text-[#fed000]">Your Brand</span>
            </h2>
            <p className="text-white/40 text-3xl sm:text-4xl font-bold mb-8">together.</p>
            <p className="text-white/45 text-base max-w-lg mx-auto mb-10 leading-relaxed">
              From concept to delivery — we handle everything. Get a free,
              personalized quote and see what CONOR Printing can do for you.
            </p>
            <Link
              href="/quote"
              className="group glow-red inline-flex items-center gap-2 bg-[#f04128] hover:bg-[#f04128] text-white font-black px-12 py-5 rounded-full text-lg transition-all duration-300"
            >
              Get Free Quote
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <div className="mt-10 flex flex-wrap justify-center gap-6 sm:gap-10">
              <a
                href="tel:+14842135355"
                className="text-white/45 hover:text-white/80 transition-colors text-sm font-medium"
              >
                📞 (484) 213-5355
              </a>
              <a
                href="tel:+16105870444"
                className="text-white/45 hover:text-white/80 transition-colors text-sm font-medium"
              >
                📞 (610) 587-0444
              </a>
              <a
                href="mailto:conorcompanypa@gmail.com"
                className="text-white/45 hover:text-white/80 transition-colors text-sm font-medium"
              >
                ✉ conorcompanypa@gmail.com
              </a>
            </div>
          </AnimIn>
        </div>
      </section>
    </>
  );
}
