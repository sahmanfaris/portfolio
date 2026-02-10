import { Resend } from "resend";
import { NextResponse } from "next/server";

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }
  return new Resend(apiKey);
}

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 },
      );
    }

    const resend = getResendClient();
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL!,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #18181b; border-bottom: 2px solid #e4e4e7; padding-bottom: 10px;">
            Nova poruka s portfolia
          </h2>
          <div style="margin: 20px 0;">
            <p style="margin: 5px 0; color: #71717a;"><strong>Ime:</strong></p>
            <p style="margin: 5px 0; color: #18181b; font-size: 16px;">${name}</p>
          </div>
          <div style="margin: 20px 0;">
            <p style="margin: 5px 0; color: #71717a;"><strong>Email:</strong></p>
            <p style="margin: 5px 0; color: #18181b; font-size: 16px;">
              <a href="mailto:${email}" style="color: #7c3aed;">${email}</a>
            </p>
          </div>
          <div style="margin: 20px 0;">
            <p style="margin: 5px 0; color: #71717a;"><strong>Naslov:</strong></p>
            <p style="margin: 5px 0; color: #18181b; font-size: 16px;">${subject}</p>
          </div>
          <div style="margin: 20px 0;">
            <p style="margin: 5px 0; color: #71717a;"><strong>Poruka:</strong></p>
            <div style="background: #f4f4f5; padding: 15px; border-radius: 8px; margin-top: 5px;">
              <p style="margin: 0; color: #18181b; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          <hr style="border: none; border-top: 1px solid #e4e4e7; margin: 30px 0;" />
          <p style="color: #a1a1aa; font-size: 12px;">
            Ova poruka je poslana putem kontakt forme na portfoliu.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
