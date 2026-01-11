import { NextRequest, NextResponse } from "next/server";
import { validateRequiredFields, CARRIER_SETUP_REQUIRED_FIELDS } from "@/lib/api/validation";
import { generateCarrierSetupEmailHtml, sendEmailViaResend } from "@/lib/api/email";
import { CarrierSetupFormData } from "@/lib/types";

export async function POST(request: NextRequest) {
  try {
    console.log('Carrier setup form submission received');
    const formData: CarrierSetupFormData = await request.json();
    console.log('Form data parsed:', { companyName: formData.companyName, email: formData.email });

    // Validate required fields
    const validationError = validateRequiredFields(formData, CARRIER_SETUP_REQUIRED_FIELDS);
    if (validationError) {
      console.log('Validation error:', validationError);
      return validationError;
    }

    // Send email
    const recipientEmail = process.env.CARRIER_SETUP_EMAIL || 'op@nextmoglobal.com';
    // Use your verified domain email
    const fromEmail = process.env.FROM_EMAIL || 'op@nextmoglobal.com';

    console.log('Sending carrier setup email - From:', fromEmail, 'To:', recipientEmail);

    const htmlContent = generateCarrierSetupEmailHtml(formData);
    console.log('Generated HTML content length:', htmlContent.length);

    const emailResult = await sendEmailViaResend({
      to: recipientEmail,
      from: fromEmail,
      subject: `New Carrier Setup Request - ${formData.companyName}`,
      html: htmlContent,
    });

    console.log('Email result:', emailResult);

    if (!emailResult.success) {
      console.error('Email failed to send:', emailResult.error);
      return NextResponse.json({ error: emailResult.error }, { status: 500 });
    }

    console.log('Carrier setup email sent successfully');
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
