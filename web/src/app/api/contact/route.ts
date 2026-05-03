import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    // TODO: Connect to email provider (Resend / Nodemailer)
    // For now, log to console — configure email in next phase
    console.log("New contact form submission:", { name, email, subject, message });

    // Once you add RESEND_API_KEY to .env.local, uncomment below:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "website@conorprintingllc.us",
    //   to: "conorcompanypa@gmail.com",
    //   replyTo: email,
    //   subject: subject || `New message from ${name}`,
    //   text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    // });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
