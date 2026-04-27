import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

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

    // Create email transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Contact: ${name} - ${company || 'Individual'}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px 20px; border-radius: 10px 10px 0 0; }
            .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; }
            .field { margin-bottom: 15px; border-bottom: 1px solid #e9ecef; padding-bottom: 10px; }
            .label { font-weight: bold; color: #495057; display: inline-block; width: 120px; }
            .value { color: #212529; }
            .message-box { background: white; padding: 20px; border-radius: 8px; margin-top: 20px; border-left: 4px solid #667eea; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Contact Form Submission</h2>
              <p>Received on ${new Date().toLocaleString()}</p>
            </div>
            <div class="content">
              <div class="field"><span class="label">Name:</span><span class="value">${name}</span></div>
              <div class="field"><span class="label">Email:</span><span class="value">${email}</span></div>
              <div class="field"><span class="label">Phone:</span><span class="value">${phone || 'Not provided'}</span></div>
              <div class="field"><span class="label">Company:</span><span class="value">${company || 'Not provided'}</span></div>
              <div class="field"><span class="label">Service:</span><span class="value">${service || projectType || 'Not specified'}</span></div>
              <div class="field"><span class="label">Budget:</span><span class="value">${budget || 'Not specified'}</span></div>
              ${newsletter !== undefined ? `<div class="field"><span class="label">Newsletter:</span><span class="value">${newsletter ? 'Subscribed' : 'Not subscribed'}</span></div>` : ''}
              <div class="message-box"><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</div>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);

    // Send auto-reply
    if (email) {
      const autoReplyOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Thank you for contacting SmartWeb Technology!',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #667eea;">Thank you for reaching out, ${name}!</h2>
            <p>We have received your message and will get back to you within 24 hours.</p>
            <p>Best regards,<br>SmartWeb Technology Team</p>
          </div>
        `,
      };
      await transporter.sendMail(autoReplyOptions);
    }

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}