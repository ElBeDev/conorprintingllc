"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle2 } from "lucide-react";

const services = [
  "Logo Design",
  "Business Cards",
  "Door Hangers",
  "Cups",
  "Yard Signs",
  "Card Magnets",
  "Signs & Banners",
  "Stickers & Decals",
  "Fully Wrapped Vehicle",
  "Car Lettering",
  "Window Perforated Vinyl",
  "Embroidery & DTF Print",
  "Hoodies / T-Shirts / Hats",
  "Other",
];

export default function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      service: (form.elements.namedItem("service") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, subject: `Quote Request: ${data.service}` }),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("done");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="flex flex-col items-center justify-center h-64 gap-4 text-center">
        <CheckCircle2 className="h-12 w-12 text-green-500" />
        <h3 className="text-xl font-semibold text-[#1B3A6B]">Quote Request Sent!</h3>
        <p className="text-gray-600">We'll get back to you with a personalized quote shortly.</p>
        <Button onClick={() => setStatus("idle")} variant="outline" className="border-[#1B3A6B] text-[#1B3A6B]">Send Another</Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-gray-50 p-6 rounded-2xl">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name *</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1B3A6B] bg-white"
            placeholder="John Smith"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Your Email *</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1B3A6B] bg-white"
            placeholder="john@company.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Select a Service *</label>
        <select
          id="service"
          name="service"
          required
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1B3A6B] bg-white"
        >
          <option value="">-- Select a service --</option>
          {services.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1B3A6B] bg-white resize-none"
          placeholder="Describe your project: quantity, size, colors, deadline..."
        />
      </div>
      {status === "error" && (
        <p className="text-sm text-red-500">Something went wrong. Please try again or call (484) 213-5355.</p>
      )}
      <Button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-[#f04128] hover:bg-[#c73520] text-white font-semibold py-3 flex items-center justify-center gap-2"
      >
        {status === "loading" ? "Sending..." : (<><Send className="h-4 w-4" /> Request Free Quote</>)}
      </Button>
    </form>
  );
}
