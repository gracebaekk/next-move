import { ContactFormData, CarrierSetupFormData } from "../types";

export function generateContactEmailHtml(data: ContactFormData): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #193B73;">New Contact Form Submission</h2>

      <h3 style="color: #193B73; border-bottom: 2px solid #193B73; padding-bottom: 5px;">Contact Information</h3>
      <table style="width: 100%; border-collapse: collapse;">
        <tr><td style="padding: 8px; font-weight: bold;">Name:</td><td style="padding: 8px;">${data.name}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold;">Email:</td><td style="padding: 8px;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
        ${data.phone ? `<tr><td style="padding: 8px; font-weight: bold;">Phone:</td><td style="padding: 8px;"><a href="tel:${data.phone}">${data.phone}</a></td></tr>` : ''}
        <tr><td style="padding: 8px; font-weight: bold;">Subject:</td><td style="padding: 8px;">${data.subject}</td></tr>
      </table>

      <h3 style="color: #193B73; border-bottom: 2px solid #193B73; padding-bottom: 5px; margin-top: 20px;">Message</h3>
      <div style="padding: 12px; background-color: #f5f5f5; border-radius: 4px; margin-top: 10px;">
        <p style="margin: 0; white-space: pre-wrap;">${data.message.replace(/\n/g, '<br>')}</p>
      </div>
    </div>
  `;
}

export function generateCarrierSetupEmailHtml(data: CarrierSetupFormData): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #193B73;">New Carrier Setup Request</h2>

      <h3 style="color: #193B73; border-bottom: 2px solid #193B73; padding-bottom: 5px;">Company Information</h3>
      <table style="width: 100%; border-collapse: collapse;">
        <tr><td style="padding: 8px; font-weight: bold;">Company Name:</td><td style="padding: 8px;">${data.companyName}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold;">Address:</td><td style="padding: 8px;">${data.address}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold;">City:</td><td style="padding: 8px;">${data.city}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold;">State:</td><td style="padding: 8px;">${data.state}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold;">ZIP Code:</td><td style="padding: 8px;">${data.zipCode}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold;">USDOT Number:</td><td style="padding: 8px;">${data.dotNumber}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold;">MC Number:</td><td style="padding: 8px;">${data.mcNumber}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold;">Truck Type:</td><td style="padding: 8px;">${data.truckType || 'Not specified'}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold;">Years in Business:</td><td style="padding: 8px;">${data.yearsInBusiness}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold;">Number of Trucks:</td><td style="padding: 8px;">${data.fleetSize}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold;">Number of Drivers:</td><td style="padding: 8px;">${data.numberOfDrivers}</td></tr>
      </table>

      <h3 style="color: #193B73; border-bottom: 2px solid #193B73; padding-bottom: 5px; margin-top: 20px;">Contact Information</h3>
      <table style="width: 100%; border-collapse: collapse;">
        <tr><td style="padding: 8px; font-weight: bold;">Contact Name:</td><td style="padding: 8px;">${data.contactName}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold;">Email:</td><td style="padding: 8px;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
        <tr><td style="padding: 8px; font-weight: bold;">Phone:</td><td style="padding: 8px;"><a href="tel:${data.phone}">${data.phone}</a></td></tr>
      </table>

      ${data.primaryLanes || data.additionalInfo ? `
      <h3 style="color: #193B73; border-bottom: 2px solid #193B73; padding-bottom: 5px; margin-top: 20px;">Additional Information</h3>
      <table style="width: 100%; border-collapse: collapse;">
        ${data.primaryLanes ? `<tr><td style="padding: 8px; font-weight: bold;">Primary Lanes:</td><td style="padding: 8px;">${data.primaryLanes}</td></tr>` : ''}
        ${data.additionalInfo ? `<tr><td style="padding: 8px; font-weight: bold; vertical-align: top;">Additional Info:</td><td style="padding: 8px;">${data.additionalInfo.replace(/\n/g, '<br>')}</td></tr>` : ''}
      </table>
      ` : ''}
    </div>
  `;
}

export async function sendEmailViaResend(params: {
  to: string;
  from: string;
  subject: string;
  html: string;
  replyTo?: string;
}): Promise<{ success: boolean; error?: string }> {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.log('No RESEND_API_KEY found. Email would be sent:', params.subject);
      console.log('To enable email, set up Resend. See EMAIL_SETUP.md for instructions.');
      return { success: true };
    }

    const { Resend } = require('resend');
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send(params);

    if (error) {
      console.error('Resend error:', error);
      return { success: false, error: 'Failed to send email' };
    }

    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: 'Failed to send email' };
  }
}
