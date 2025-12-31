"use client";

import { useState } from "react";
import { Building, User, FileText } from "lucide-react";
import { Input } from "../ui/Input";
import { Select } from "../ui/Select";
import { TextArea } from "../ui/TextArea";
import { CarrierSetupFormData } from "@/lib/types";

interface CarrierSetupFormProps {
  onSuccess: () => void;
}

export function CarrierSetupForm({ onSuccess }: CarrierSetupFormProps) {
  const [formData, setFormData] = useState<CarrierSetupFormData>({
    companyName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    contactName: "",
    email: "",
    phone: "",
    dotNumber: "",
    mcNumber: "",
    truckType: "",
    yearsInBusiness: "",
    fleetSize: "",
    numberOfDrivers: "",
    primaryLanes: "",
    additionalInfo: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/carrier-setup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit application");
      }

      onSuccess();
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Company Information */}
        <div className="border-b border-gray-200 pb-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-[#87B5DE] rounded-lg flex items-center justify-center">
              <Building className="w-4 h-4 text-white" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900">Company Information</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <Input
                label="Company Name"
                type="text"
                name="companyName"
                required
                value={formData.companyName}
                onChange={handleChange}
              />
            </div>
            <div className="md:col-span-2">
              <Input
                label="Street Address"
                type="text"
                name="address"
                required
                value={formData.address}
                onChange={handleChange}
              />
            </div>
            <Input
              label="City"
              type="text"
              name="city"
              required
              value={formData.city}
              onChange={handleChange}
            />
            <Input
              label="State"
              type="text"
              name="state"
              required
              value={formData.state}
              onChange={handleChange}
            />
            <Input
              label="ZIP Code"
              type="text"
              name="zipCode"
              required
              value={formData.zipCode}
              onChange={handleChange}
            />
            <Input
              label="USDOT Number"
              type="text"
              name="dotNumber"
              required
              value={formData.dotNumber}
              onChange={handleChange}
            />
            <Input
              label="MC Number"
              type="text"
              name="mcNumber"
              required
              value={formData.mcNumber}
              onChange={handleChange}
            />
            <Select
              label="Truck Type"
              name="truckType"
              value={formData.truckType}
              onChange={handleChange}
            >
              <option value="">Select truck type</option>
              <option value="Dry Van">Dry Van</option>
              <option value="Flatbed">Flatbed</option>
              <option value="Refrigerated">Refrigerated</option>
              <option value="Step Deck">Step Deck</option>
              <option value="Hotshot">Hotshot</option>
              <option value="Box Truck">Box Truck</option>
              <option value="Other">Other</option>
            </Select>
            <Input
              label="Years in Business"
              type="number"
              name="yearsInBusiness"
              required
              min="0"
              value={formData.yearsInBusiness}
              onChange={handleChange}
            />
            <Input
              label="Number of Trucks"
              type="number"
              name="fleetSize"
              required
              min="1"
              value={formData.fleetSize}
              onChange={handleChange}
            />
            <Input
              label="Number of Drivers"
              type="number"
              name="numberOfDrivers"
              required
              min="1"
              value={formData.numberOfDrivers}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-b border-gray-200 pb-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-[#87B5DE] rounded-lg flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900">Contact Information</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Input
              label="Contact Name"
              type="text"
              name="contactName"
              required
              value={formData.contactName}
              onChange={handleChange}
            />
            <Input
              label="Email Address"
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <Input
              label="Phone Number"
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Additional Information */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-[#87B5DE] rounded-lg flex items-center justify-center">
              <FileText className="w-4 h-4 text-white" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900">Additional Information</h2>
          </div>
          <div className="space-y-6">
            <Input
              label="Primary Lanes / Routes"
              type="text"
              name="primaryLanes"
              value={formData.primaryLanes}
              onChange={handleChange}
              placeholder="e.g., CA to TX, East Coast, Nationwide"
            />
            <TextArea
              label="Additional Information"
              name="additionalInfo"
              rows={4}
              value={formData.additionalInfo}
              onChange={handleChange}
              placeholder="Tell us anything else we should know..."
            />
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="pt-4">
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
              <p className="font-medium">Error submitting form</p>
              <p className="text-sm mt-1">{error}</p>
            </div>
          </div>
        )}

        {/* Submit Button */}
        <div className="pt-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#438ed9] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none"
          >
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </button>
          <p className="text-sm text-gray-500 text-center mt-4">
            * Required fields. We&apos;ll review your application and contact you within 24-48 hours.
          </p>
        </div>
      </form>
    </div>
  );
}
