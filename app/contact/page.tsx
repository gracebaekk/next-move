"use client";

import { useState } from "react";
import { Mail, Phone } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { SuccessMessage } from "@/components/SuccessMessage";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <SuccessMessage
        title="Message Sent!"
        message="Thank you for contacting us. We'll get back to you as soon as possible, typically within 24 hours."
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">
            Have questions? We&apos;re here to help. Get in touch with our team today.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#87B5DE] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">(714) 742-7730</p>
                    <p className="text-sm text-gray-500 mt-1">24/7 Dispatch Line</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#87B5DE] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">General Inquiries</h3>
                    <p className="text-gray-600">op@nextmoveglobal.com</p>
                    <p className="text-sm text-gray-500 mt-1">General inquiries</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm onSuccess={() => setSubmitted(true)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
