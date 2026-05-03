import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Phone, Users, Lightbulb, HeartHandshake, ShieldCheck } from "lucide-react";

const pillars = [
  { icon: HeartHandshake, title: "Customer-Focused", desc: "We build lasting relationships by prioritizing our clients' needs and delivering solutions that exceed expectations." },
  { icon: Lightbulb, title: "Innovative Solutions", desc: "We bring creativity and fresh ideas to every project, ensuring your brand stands out from the competition." },
  { icon: Users, title: "Expert Team", desc: "Our skilled professionals bring years of hands-on experience to every print, wrap, and embroidery project." },
  { icon: ShieldCheck, title: "Reliable Support", desc: "From first contact to final delivery, we're here to guide you and ensure your complete satisfaction." },
];

const standout = [
  { title: "Customer Support", desc: "We provide personalized assistance to ensure client satisfaction at every step of the process.", img: "/team-1.jpg" },
  { title: "Creative Excellence", desc: "We leverage the best equipment and techniques to deliver creative and visually stunning results.", img: "/team-2.jpg" },
  { title: "Expert Team", desc: "Our skilled professionals ensure the highest quality in every project we undertake.", img: "/team-3.jpg" },
];

export default function AboutPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="relative h-44 sm:h-56 flex items-end overflow-hidden">
        <Image src="/carousel-2.jpg" alt="About CONOR Printing" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-[#1B3A6B]/75" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8">
          <p className="text-[#fed000] text-xs font-semibold uppercase tracking-widest mb-1">Home / About</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">About Us</h1>
        </div>
      </section>

      {/* MAIN ABOUT */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <p className="text-[#f04128] text-sm font-semibold uppercase tracking-widest mb-2">About Us</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1B3A6B] leading-tight mb-5">
                6 Years of Delivering Professional Printing &amp; Branding Solutions
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                At CONOR Printing LLC, we specialize in transforming your ideas into professional branding solutions. From window and car signage to custom embroidered apparel, our team ensures every project is executed with precision and creativity.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our goal is to help your business stand out with high-quality materials and fast turnaround times, all delivered with exceptional customer service. Based in Eagleville, PA, we proudly serve businesses across the region.
              </p>
              <ul className="space-y-2 mb-8">
                {["Custom Designs", "Professional Team", "Fast Turnaround", "Affordable Prices"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm font-medium text-gray-700">
                    <CheckCircle2 className="h-4 w-4 text-[#f04128] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <Link href="/quote" className="inline-block bg-[#1B3A6B] hover:bg-[#152d55] text-white font-semibold px-6 py-2.5 rounded-lg transition-colors">
                  Request a Quote
                </Link>
                <a href="tel:+14842135355" className="inline-flex items-center gap-2 border border-[#1B3A6B] text-[#1B3A6B] hover:bg-[#1B3A6B] hover:text-white font-semibold px-6 py-2.5 rounded-lg transition-all">
                  <Phone className="h-4 w-4" /> (484) 213-5355
                </a>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image src="/about.jpg" alt="CONOR Printing work" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <p className="text-[#f04128] text-sm font-semibold uppercase tracking-widest mb-2">Our Values</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1B3A6B]">What We Stand For</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {pillars.map((p) => (
              <div key={p.title} className="bg-white rounded-2xl p-6 shadow-md text-center">
                <div className="w-12 h-12 rounded-xl bg-[#1B3A6B]/10 flex items-center justify-center mx-auto mb-4">
                  <p.icon className="h-6 w-6 text-[#1B3A6B]" />
                </div>
                <h3 className="font-semibold text-[#1B3A6B] mb-2">{p.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT MAKES US STAND OUT */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <p className="text-[#f04128] text-sm font-semibold uppercase tracking-widest mb-2">Our Expertise</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1B3A6B]">What Makes Our Company Stand Out</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
            {standout.map((s) => (
              <div key={s.title} className="text-center">
                <div className="relative w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 shadow-lg">
                  <Image src={s.img} alt={s.title} fill className="object-cover" />
                </div>
                <h3 className="font-semibold text-[#1B3A6B] mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
