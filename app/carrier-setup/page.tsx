"use client";

import { useState } from "react";
import { Truck, CheckCircle, FileText } from "lucide-react";
import { CarrierSetupForm } from "@/components/forms/CarrierSetupForm";
import { SuccessMessage } from "@/components/SuccessMessage";

export default function CarrierSetup() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <SuccessMessage
        title="Thank You!"
        message="Your carrier setup request has been submitted successfully. Our team will review your information and contact you within 24-48 hours to complete the setup process."
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Carrier Setup</h1>
          <p className="text-xl text-gray-600">
            Join Next Move Global and start growing your business today. Fill out the form below
            to get started.
          </p>
        </div>

        {/* Form */}
        <div className="max-w-3xl mx-auto">
          <CarrierSetupForm onSuccess={() => setSubmitted(true)} />

          {/* Benefits Section */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-[#d9f1fe] rounded-lg flex items-center justify-center mb-3">
                <Truck className="w-6 h-6 text-sky-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">More Loads</h3>
              <p className="text-sm text-gray-600">
                Access to our extensive network of brokers and shippers
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-[#d9f1fe] rounded-lg flex items-center justify-center mb-3">
                <CheckCircle className="w-6 h-6 text-sky-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-sm text-gray-600">
                Round-the-clock dispatch support for your operations
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-[#d9f1fe] rounded-lg flex items-center justify-center mb-3">
                <FileText className="w-6 h-6 text-sky-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Easy Setup</h3>
              <p className="text-sm text-gray-600">
                Quick onboarding process to get you started fast
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
