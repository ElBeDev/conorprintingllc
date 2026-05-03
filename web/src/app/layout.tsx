import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CONOR Printing LLC — High-Quality Printing & Embroidery | Eagleville, PA",
  description:
    "Professional printing, embroidery, vehicle wraps, signage, and custom apparel in Eagleville, PA. 6+ years of experience. Call (484) 213-5355 for a free quote.",
  keywords: [
    "printing Eagleville PA",
    "embroidery Norristown PA",
    "vehicle wraps Pennsylvania",
    "custom apparel printing",
    "business cards printing",
    "signs banners PA",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
