import { NextRequest, NextResponse } from "next/server";
import { validateRequiredFields, CONTACT_REQUIRED_FIELDS } from "@/lib/api/validation";
import { generateContactEmailHtml, sendEmailViaResend } from "@/lib/api/email";
import { ContactFormData } from "@/lib/types";

export async function POST(request: NextRequest) {
  try {
    const formData: ContactFormData = await request.json();

    // Validate required fields
    const validationError = validateRequiredFields(formData, CONTACT_REQUIRED_FIELDS);
    if (validationError) {
      return validationError;
    }

    // Send email
    const recipientEmail = process.env.CONTACT_EMAIL || process.env.CARRIER_SETUP_EMAIL || 'op@nextmoglobal.com';
    // Use your verified domain email
    const fromEmail = process.env.FROM_EMAIL || 'op@nextmoglobal.com';

    console.log('Sending email - From:', fromEmail, 'To:', recipientEmail);

    const emailResult = await sendEmailViaResend({
      to: recipientEmail,
      from: fromEmail,
      subject: `Contact Form: ${formData.subject} - ${formData.name}`,
      replyTo: formData.email,
      html: generateContactEmailHtml(formData),
    });

    if (!emailResult.success) {
      return NextResponse.json({ error: emailResult.error }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully',
    });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to process form submission' },
      { status: 500 }
    );
  }
}


