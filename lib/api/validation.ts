import { NextResponse } from "next/server";

export function validateRequiredFields(
  data: Record<string, any>,
  requiredFields: string[]
): NextResponse | null {
  for (const field of requiredFields) {
    if (!data[field]) {
      return NextResponse.json(
        { error: `Missing required field: ${field}` },
        { status: 400 }
      );
    }
  }
  return null;
}

export const CONTACT_REQUIRED_FIELDS = ['name', 'email', 'subject', 'message'];

export const CARRIER_SETUP_REQUIRED_FIELDS = [
  'companyName',
  'address',
  'city',
  'state',
  'zipCode',
  'dotNumber',
  'mcNumber',
  'contactName',
  'email',
  'phone',
  'yearsInBusiness',
  'fleetSize',
  'numberOfDrivers',
];
