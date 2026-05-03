import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone } from "lucide-react";

const serviceCategories = [
  {
    category: "Printing",
    color: "bg-[#1B3A6B]",
    services: [
      { title: "Logo Design", desc: "Creative and professional logo design to give your business a strong and unique brand identity." },
      { title: "Business Cards", desc: "Premium business cards printed with clarity and precision to elevate your professional image." },
      { title: "Door Hangers", desc: "Custom door hangers perfect for local marketing, promotions, and direct outreach to homes or businesses." },
      { title: "Cups", desc: "Personalized cups with your logo or design, ideal for promotional items, gifts, or business branding." },
      { title: "Yard Signs", desc: "Durable yard signs designed for promotions, events, business advertising, and outdoor visibility." },
      { title: "Card Magnets", desc: "Custom magnetic cards perfect for refrigerators, vehicles, and metal surfaces — long-lasting and practical branding." },
      { title: "Signs & Banners", desc: "High-quality signs and banners for business branding, events, storefronts, and indoor/outdoor advertising." },
      { title: "Stickers & Decals", desc: "Custom stickers and decals for vehicles, windows, products, packaging, and promotional branding." },
    ],
  },
  {
    category: "Vehicle / Vinyl",
    color: "bg-[#f04128]",
    services: [
      { title: "Fully Wrapped", desc: "Full vehicle wraps designed to transform your car into a moving advertisement with eye-catching graphics." },
      { title: "Car Lettering", desc: "Professional vehicle lettering that showcases your business on the go with clean and durable vinyl lettering." },
      { title: "Window Perforated Vinyl", desc: "Perforated window vinyl that provides privacy and shade while displaying vibrant graphics on the outside." },
    ],
  },
  {
    category: "Apparel & Embroidery",
    color: "bg-[#1B3A6B]",
    services: [
      { title: "Embroidery & DTF Print", desc: "Custom embroidery and DTF printing services for apparel with clean finishes and long-lasting detail." },
      { title: "Hoodies · T-Shirts · Hats · Caps", desc: "Custom apparel including hoodies, t-shirts, hats, and caps — available with embroidery or high-quality printing." },
    ],
  },
];

const qualities = [
  { title: "High-Resolution Printing", subtitle: "Precision & Detail", desc: "We deliver crisp, vibrant, and true-to-color prints using advanced printing technology designed to highlight every detail." },
  { title: "Fast Turnaround", subtitle: "Quick & Reliable", desc: "Your projects are completed efficiently without sacrificing quality, ensuring you meet deadlines with confidence." },
  { title: "Premium Materials", subtitle: "Durable & Professional", desc: "We work with high-quality papers, inks, and finishes to ensure every print feels solid, polished, and long-lasting." },
  { title: "Custom Solutions", subtitle: "Tailored Results", desc: "Every project is customizable — from size and materials to finishes — ensuring your prints match your exact vision." },
];

export default function ServicesPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="relative h-56 flex items-center overflow-hidden">
        <Image src="/carousel-1.jpg" alt="Our Services" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-[#1B3A6B]/75" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#fed000] text-xs font-semibold uppercase tracking-widest mb-1">Home / Services</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">Our Services</h1>
        </div>
      </section>

      {/* SERVICES BY CATEGORY */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center">
            <p className="text-[#f04128] text-sm font-semibold uppercase tracking-widest mb-2">Our Services</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1B3A6B]">Professional Printing &amp; Custom Embroidery</h2>
          </div>

          {serviceCategories.map((cat) => (
            <div key={cat.category}>
              <div className="flex items-center gap-3 mb-6">
                <Badge className={`${cat.color} text-white text-sm px-4 py-1.5`}>{cat.category}</Badge>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {cat.services.map((s) => (
                  <Card key={s.title} className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-5">
                      <h3 className="font-semibold text-[#1B3A6B] mb-2 text-sm">{s.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA QUOTE */}
      <section className="py-16 bg-[#f04128]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Call Us For a Quote</h2>
          <p className="text-red-100 mb-6">We provide high-quality printing, embroidery, vinyl, and custom signage with professional craftsmanship you can trust.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+14842135355" className="flex items-center gap-2 bg-white text-[#f04128] font-bold px-8 py-3 rounded-lg hover:bg-red-50 transition-colors text-lg">
              <Phone className="h-5 w-5" />
              (484) 213-5355
            </a>
            <Link href="/quote" className="inline-block bg-[#1B3A6B] hover:bg-[#152d55] text-white font-semibold px-8 py-3 rounded-lg text-lg transition-colors">
              Request a Quote Online
            </Link>
          </div>
        </div>
      </section>

      {/* KEY QUALITIES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#f04128] text-sm font-semibold uppercase tracking-widest mb-2">Why Choose Us</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1B3A6B]">Key Qualities That Define Our Printing Services</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualities.map((q) => (
              <div key={q.title} className="bg-white rounded-2xl p-6 shadow-md text-center">
                <h3 className="font-bold text-[#1B3A6B] mb-1">{q.title}</h3>
                <p className="text-[#f04128] text-xs font-semibold uppercase tracking-wide mb-3">{q.subtitle}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{q.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
