import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, phone, message } = await req.json();

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Kontaktų forma" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "📧 Nauja žinutė iš Anglų kalbos kontaktinės formos",
      html: `
        <h3>📋 Kontaktinė forma</h3>
        <p><strong>Vardas:</strong> ${name}</p>
        <p><strong>El. paštas:</strong> ${email}</p>
        <p><strong>Telefonas:</strong> ${phone}</p>
        <p><strong>Žinutė:</strong><br/>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
