export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface CarrierSetupFormData {
  companyName: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  contactName: string;
  email: string;
  phone: string;
  dotNumber: string;
  mcNumber: string;
  truckType: string;
  yearsInBusiness: string;
  fleetSize: string;
  numberOfDrivers: string;
  primaryLanes: string;
  additionalInfo: string;
}

export interface ApiResponse {
  success: boolean;
  message?: string;
  error?: string;
}
