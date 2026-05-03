import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Our Services" },
  { href: "/gallery", label: "Portfolio" },
  { href: "/contact", label: "Contact Us" },
];

const popularServices = [
  "Window & Car Signage",
  "Business Cards",
  "Logo Design",
  "Cap & Hat Embroidery",
  "Jacket, Sweatshirt & T-Shirt Embroidery",
  "Magnetic Signs",
];

export default function Footer() {
  return (
    <footer className="bg-[#1B3A6B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Image
              src="/logo.png"
              alt="CONOR Printing LLC"
              width={280}
              height={100}
              className="h-12 sm:h-16 w-auto brightness-0 invert"
            />
            <p className="text-sm text-blue-100 leading-relaxed">
              With over 6 years of experience, CONOR Printing LLC provides top-quality printing and embroidery services. We turn your ideas into professional branding solutions.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.facebook.com/p/CONOR-Printing-LLC-100076082371199/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-200 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-blue-100 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Services */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Popular Services</h3>
            <ul className="space-y-2">
              {popularServices.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-sm text-blue-100 hover:text-white transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Get In Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-[#f04128] mt-0.5 shrink-0" />
                <span className="text-sm text-blue-100">Eagleville, PA 19403</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#f04128] shrink-0" />
                <div className="text-sm text-blue-100">
                  <a href="tel:+14842135355" className="hover:text-white transition-colors block">(484) 213-5355</a>
                  <a href="tel:+16105870444" className="hover:text-white transition-colors block">(610) 587-0444</a>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#f04128] shrink-0" />
                <a href="mailto:conorcompanypa@gmail.com" className="text-sm text-blue-100 hover:text-white transition-colors">
                  conorcompanypa@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-[#f04128] shrink-0" />
                <span className="text-sm text-blue-100">Mon – Sat: 8:00 AM – 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-blue-300">© {new Date().getFullYear()} CONOR Printing LLC. All Rights Reserved.</p>
          <div className="flex items-center gap-4 text-xs text-blue-300">
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            <Link href="/quote" className="hover:text-white transition-colors">Free Quote</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
