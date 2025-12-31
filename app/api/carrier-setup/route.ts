import { NextRequest, NextResponse } from "next/server";
import { validateRequiredFields, CARRIER_SETUP_REQUIRED_FIELDS } from "@/lib/api/validation";
import { generateCarrierSetupEmailHtml, sendEmailViaResend } from "@/lib/api/email";
import { CarrierSetupFormData } from "@/lib/types";

export async function POST(request: NextRequest) {
  try {
    const formData: CarrierSetupFormData = await request.json();

    // Validate required fields
    const validationError = validateRequiredFields(formData, CARRIER_SETUP_REQUIRED_FIELDS);
    if (validationError) {
      return validationError;
    }

    // Send email
    const recipientEmail = process.env.CARRIER_SETUP_EMAIL || 'your-email@example.com';
    const fromEmail = process.env.FROM_EMAIL || 'onboarding@resend.dev';

    const emailResult = await sendEmailViaResend({
      to: recipientEmail,
      from: fromEmail,
      subject: `New Carrier Setup Request - ${formData.companyName}`,
      html: generateCarrierSetupEmailHtml(formData),
    });

    if (!emailResult.success) {
      return NextResponse.json({ error: emailResult.error }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      message: 'Form submitted successfully',
    });
  } catch (error) {
    console.error('Error processing carrier setup form:', error);
    return NextResponse.json(
      { error: 'Failed to process form submission' },
      { status: 500 }
    );
  }
}
