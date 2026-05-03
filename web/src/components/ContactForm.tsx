"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
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
        <h3 className="text-xl font-semibold text-[#1B3A6B]">Message Sent!</h3>
        <p className="text-gray-600">We'll get back to you as soon as possible.</p>
        <Button onClick={() => setStatus("idle")} variant="outline" className="border-[#1B3A6B] text-[#1B3A6B]">Send Another</Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name *</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1B3A6B] focus:border-transparent"
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
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1B3A6B] focus:border-transparent"
            placeholder="john@company.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject *</label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1B3A6B] focus:border-transparent"
          placeholder="How can we help you?"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1B3A6B] focus:border-transparent resize-none"
          placeholder="Tell us about your project..."
        />
      </div>
      {status === "error" && (
        <p className="text-sm text-red-500">Something went wrong. Please try again or call us directly.</p>
      )}
      <Button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-[#f04128] hover:bg-[#c73520] text-white font-semibold py-3 flex items-center justify-center gap-2"
      >
        {status === "loading" ? "Sending..." : (<><Send className="h-4 w-4" /> Send Message</>)}
      </Button>
    </form>
  );
}
