import Image from "next/image";
import { Phone, Clock } from "lucide-react";
import QuoteForm from "@/components/QuoteForm";

export default function QuotePage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="relative h-56 flex items-center overflow-hidden">
        <Image src="/carousel-2.jpg" alt="Free Quote" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-[#1B3A6B]/75" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#fed000] text-xs font-semibold uppercase tracking-widest mb-1">Home / Free Quote</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">Free Quote</h1>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#f04128] text-sm font-semibold uppercase tracking-widest mb-2">Request a Quote</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1B3A6B]">Need a Free Quote? Please Feel Free to Contact Us</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Info */}
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                Reach out to us for professional printing solutions! Our team will respond quickly and provide guidance for your project needs. From window signage to embroidery, we handle all your printing requirements with quality and care.
              </p>

              <div className="flex items-center gap-3 p-4 bg-[#1B3A6B]/5 rounded-xl">
                <Clock className="h-5 w-5 text-[#1B3A6B] shrink-0" />
                <div>
                  <p className="font-semibold text-[#1B3A6B] text-sm">Business Hours</p>
                  <p className="text-gray-600 text-sm">Monday – Saturday: 8:00 AM – 6:00 PM</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-[#f04128]/5 rounded-xl">
                <Phone className="h-5 w-5 text-[#f04128] shrink-0" />
                <div>
                  <p className="font-semibold text-[#1B3A6B] text-sm">Prefer to call?</p>
                  <a href="tel:+14842135355" className="text-[#f04128] font-bold hover:underline">(484) 213-5355</a>
                </div>
              </div>

              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <Image src="/about.jpg" alt="CONOR Printing" fill className="object-cover" />
              </div>
            </div>

            {/* Quote Form */}
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
