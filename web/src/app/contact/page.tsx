import Image from "next/image";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="relative h-56 flex items-center overflow-hidden">
        <Image src="/carousel-1.jpg" alt="Contact Us" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-[#1B3A6B]/75" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#fed000] text-xs font-semibold uppercase tracking-widest mb-1">Home / Contact</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">Contact Us</h1>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#f04128] text-sm font-semibold uppercase tracking-widest mb-2">Contact Us</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1B3A6B]">Have Questions? Get In Touch With Our Team</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1B3A6B]/10 flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-[#1B3A6B]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1B3A6B] mb-1">Call Our Experts</h3>
                  <a href="tel:+14842135355" className="text-gray-600 hover:text-[#f04128] transition-colors block">(484) 213-5355</a>
                  <a href="tel:+16105870444" className="text-gray-600 hover:text-[#f04128] transition-colors block">(610) 587-0444</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1B3A6B]/10 flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-[#1B3A6B]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1B3A6B] mb-1">Email Us</h3>
                  <a href="mailto:conorcompanypa@gmail.com" className="text-gray-600 hover:text-[#f04128] transition-colors">conorcompanypa@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1B3A6B]/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-[#1B3A6B]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1B3A6B] mb-1">Visit Our Office</h3>
                  <p className="text-gray-600">Eagleville, PA 19403</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1B3A6B]/10 flex items-center justify-center shrink-0">
                  <Clock className="h-5 w-5 text-[#1B3A6B]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1B3A6B] mb-1">Business Hours</h3>
                  <p className="text-gray-600">Monday – Saturday: 8:00 AM – 6:00 PM</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
