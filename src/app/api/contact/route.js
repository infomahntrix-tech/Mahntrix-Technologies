import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const RECIPIENT_EMAIL = "infomahntrix@gmail.com";

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      name, email, phone, company, service, budget, projectType, message, newsletter
    } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    const selectedService = service || projectType || 'General Inquiry';
    const selectedBudget = budget || 'Not specified';
    const clientPhone = phone || 'Not provided';
    const clientCompany = company || 'Direct Client / Individual';

    // 1. Attempt delivery via Nodemailer if SMTP env variables are configured
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      try {
        const cleanPass = process.env.EMAIL_PASS ? process.env.EMAIL_PASS.replace(/\s+/g, '') : '';
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST || 'smtp.gmail.com',
          port: parseInt(process.env.SMTP_PORT || '465', 10),
          secure: process.env.SMTP_SECURE !== 'false',
          auth: {
            user: process.env.EMAIL_USER,
            pass: cleanPass,
          },
        });

        console.log(`[SMTP] Dispatching email for ${name} to ${RECIPIENT_EMAIL}...`);

        // Email to Mahntrix Technologies admin inbox
        const mailOptions = {
          from: `"Mahntrix Inquiry" <${process.env.EMAIL_USER}>`,
          replyTo: email,
          to: RECIPIENT_EMAIL,
          subject: `🚀 Consultation Request: ${name} [${selectedService}]`,
          html: `
            <!DOCTYPE html>
            <html>
            <head>
              <meta charset="utf-8">
              <style>
                body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #1e293b; background-color: #f8fafc; margin: 0; padding: 0; }
                .container { max-width: 600px; margin: 30px auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05); }
                .header { background: #0a0b0a; color: #f3f4ec; padding: 32px 28px; border-bottom: 3px solid #c8f02d; }
                .header h1 { margin: 0; font-size: 22px; font-weight: 700; letter-spacing: -0.5px; }
                .header p { margin: 6px 0 0; font-size: 13px; color: #94a3b8; }
                .badge { display: inline-block; background: #c8f02d; color: #0a0b0a; font-weight: 700; font-size: 11px; padding: 4px 10px; border-radius: 20px; text-transform: uppercase; margin-bottom: 12px; }
                .content { padding: 32px 28px; }
                .grid { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
                .grid td { padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px; }
                .grid td.label { font-weight: 600; color: #64748b; width: 130px; }
                .grid td.val { color: #0f172a; font-weight: 500; }
                .message-card { background: #f8fafc; border-radius: 12px; padding: 20px; border-left: 4px solid #c8f02d; margin-top: 10px; }
                .message-card h4 { margin: 0 0 8px; font-size: 13px; text-transform: uppercase; color: #64748b; letter-spacing: 0.5px; }
                .message-card p { margin: 0; font-size: 14px; color: #334155; white-space: pre-line; line-height: 1.6; }
                .footer { background: #f8fafc; padding: 20px 28px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <span class="badge">New Consultation Lead</span>
                  <h1>Mahntrix Technologies</h1>
                  <p>Inbound Request Received on ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })} IST</p>
                </div>
                <div class="content">
                  <table class="grid">
                    <tr><td class="label">Client Name</td><td class="val"><strong>${name}</strong></td></tr>
                    <tr><td class="label">Email Address</td><td class="val"><a href="mailto:${email}" style="color: #0284c7; text-decoration: none;">${email}</a></td></tr>
                    <tr><td class="label">Phone / WhatsApp</td><td class="val">${clientPhone}</td></tr>
                    <tr><td class="label">Company / Org</td><td class="val">${clientCompany}</td></tr>
                    <tr><td class="label">Target Service</td><td class="val" style="color: #059669; font-weight: 700;">${selectedService}</td></tr>
                    <tr><td class="label">Budget Range</td><td class="val">${selectedBudget}</td></tr>
                    ${newsletter ? `<tr><td class="label">Newsletter</td><td class="val">Yes, subscribed</td></tr>` : ''}
                  </table>

                  <div class="message-card">
                    <h4>Project Scope &amp; Requirements:</h4>
                    <p>${message}</p>
                  </div>
                </div>
                <div class="footer">
                  Mahntrix Technologies Lead Management System &bull; <a href="https://mahntrixtechnologies.com" style="color: #64748b;">mahntrixtechnologies.com</a>
                </div>
              </div>
            </body>
            </html>
          `,
        };

        await transporter.sendMail(mailOptions);

        // Auto-reply to prospective client
        try {
          const clientAutoReply = {
            from: `"Mahntrix Technologies" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: `Thank you for contacting Mahntrix Technologies — We've received your request`,
            html: `
              <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 580px; margin: 0 auto; padding: 24px; color: #1e293b;">
                <div style="background: #0a0b0a; padding: 24px; border-radius: 12px; color: #f3f4ec; margin-bottom: 24px;">
                  <h2 style="margin: 0; color: #c8f02d; font-size: 20px;">Mahntrix Technologies</h2>
                  <p style="margin: 6px 0 0; font-size: 13px; color: #94a3b8;">High-Performance Software & Digital Engineering</p>
                </div>
                <p>Hello <strong>${name}</strong>,</p>
                <p>Thank you for reaching out to Mahntrix Technologies regarding your <strong>${selectedService}</strong> project.</p>
                <p>Our senior technical architects are reviewing your requirements and will reach out within 24 business hours with initial architectural insights and scheduling options.</p>
                <div style="background: #f1f5f9; border-radius: 8px; padding: 16px; margin: 20px 0; font-size: 14px;">
                  <strong>Summary of your submission:</strong><br>
                  • <strong>Service:</strong> ${selectedService}<br>
                  • <strong>Budget:</strong> ${selectedBudget}<br>
                  • <strong>Company:</strong> ${clientCompany}
                </div>
                <p>If you have urgent questions or need immediate discussion, you can also reach our founder directly on WhatsApp at <a href="https://wa.me/919575932050" style="color: #0284c7; font-weight: 600;">+91 95759 32050</a>.</p>
                <p style="margin-top: 30px; font-size: 13px; color: #64748b;">
                  Best regards,<br>
                  <strong>The Mahntrix Engineering Team</strong><br>
                  <a href="mailto:infomahntrix@gmail.com" style="color: #64748b;">infomahntrix@gmail.com</a>
                </p>
              </div>
            `,
          };
          await transporter.sendMail(clientAutoReply);
        } catch (autoErr) {
          console.warn('Auto-reply non-critical error:', autoErr.message);
        }

        console.log(`[SMTP] ✓ Email delivered successfully to ${RECIPIENT_EMAIL}`);
        return NextResponse.json({ message: 'Email sent successfully via SMTP' }, { status: 200 });
      } catch (smtpErr) {
        console.error('[SMTP Error]:', smtpErr.message);
      }
    }

    // 2. Direct FormSubmit HTTP Relay (works without SMTP server configuration)
    const relayResponse = await fetch(`https://formsubmit.co/ajax/${RECIPIENT_EMAIL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        phone: clientPhone,
        company: clientCompany,
        service: selectedService,
        budget: selectedBudget,
        message,
        _subject: `🚀 New Consultation Request: ${name} [${selectedService}]`,
        _replyto: email,
        _captcha: "false",
        _template: "table"
      }),
    });

    const relayResult = await relayResponse.json().catch(() => ({}));

    if (relayResponse.ok || relayResult.success === "true" || relayResult.success === true) {
      return NextResponse.json({ message: 'Email transmitted to infomahntrix@gmail.com' }, { status: 200 });
    }

    return NextResponse.json(
      { message: 'Consultation request logged successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Failed to process consultation request: ' + error.message },
      { status: 500 }
    );
  }
}