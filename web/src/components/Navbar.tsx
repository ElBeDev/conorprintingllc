"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparent = isHome && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        transparent
          ? "bg-transparent border-transparent"
          : "bg-white/95 backdrop-blur-md border-b border-gray-200/60 shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/logo.png"
              alt="CONOR Printing LLC"
              width={280}
              height={100}
              className="h-20 w-auto transition-all duration-300"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  transparent
                    ? "text-white/80 hover:text-white"
                    : "text-gray-700 hover:text-[#1B3A6B]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+14842135355"
              className={`flex items-center gap-1.5 text-sm font-semibold transition-colors duration-200 ${
                transparent ? "text-white/80 hover:text-white" : "text-[#1B3A6B] hover:text-[#f04128]"
              }`}
            >
              <Phone className="h-4 w-4" />
              (484) 213-5355
            </a>
            <Link
              href="/quote"
              className="bg-[#f04128] hover:bg-[#f04128] text-white text-sm font-bold px-5 py-2 rounded-full transition-all duration-200 shadow-[0_0_20px_rgba(227,30,36,0.35)] hover:shadow-[0_0_35px_rgba(227,30,36,0.6)]"
            >
              Free Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className={`md:hidden p-2 rounded-md transition-colors ${
              transparent ? "text-white hover:text-white/80" : "text-gray-600 hover:text-[#1B3A6B]"
            }`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0D1B3E]/95 backdrop-blur-md border-t border-white/10 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-sm font-medium text-white/80 hover:text-white border-b border-white/5"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 space-y-2">
            <a
              href="tel:+14842135355"
              className="flex items-center gap-1.5 text-sm text-white/80 font-semibold"
            >
              <Phone className="h-4 w-4" />
              (484) 213-5355
            </a>
            <Link
              href="/quote"
              onClick={() => setOpen(false)}
              className="block text-center bg-[#f04128] text-white font-bold py-2.5 rounded-full"
            >
              Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
