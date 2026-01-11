import Link from "next/link";
import { ArrowRight, Truck, MapPin, Clock, TrendingUp, Handshake, BarChart3, Target, Award } from "lucide-react";

export default function Home() {
  const partnerBenefits = [
    "Fixed routes and dedicated lane opportunities",
    "Predictable schedules and steady freight",
    "Safety-first operating standards",
    "No unrealistic dispatch pressure",
    "Clear communication and fair expectations",
    "Long-term, sustainable partnerships",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-900 text-white">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Next Move Global
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              Streamline your truck dispatch operations with our powerful management platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/carrier-setup"
                className="bg-white text-[#438ed9] px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 inline-flex items-center justify-center gap-2"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="bg-[#438ed9] text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 inline-flex items-center justify-center gap-2"
              >
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Everything You Need to Manage Your Fleet
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="p-6 rounded-xl bg-gray-50 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#d9f1fe] rounded-lg flex items-center justify-center mb-4">
                <Truck className="w-6 h-6 text-sky-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Load Management</h3>
              <p className="text-gray-600">
                Efficiently assign and track loads with real-time updates and status monitoring.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-gray-50 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#d9f1fe] rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-sky-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Real-Time Tracking</h3>
              <p className="text-gray-600">
                Monitor your trucks and drivers with live GPS tracking and location updates.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-gray-50 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#d9f1fe] rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-sky-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Logistics Consulting</h3>
              <p className="text-gray-600">
                Container flow analysis, network design, and supply chain optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For Our Transportation Partners */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-primary-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">For Our Transportation Partners</h2>
            <p className="text-lg text-gray-700 text-center mb-2 italic">
              (Carriers & Owner-Operators)
            </p>
            <div className="prose prose-lg mx-auto text-gray-600 mb-8">
              <p className="text-lg text-center whitespace-nowrap">
                We work in partnership with professional carriers and owner-operators operating as independent businesses.
              </p>
              <p className="text-lg text-center font-semibold text-gray-900">
                We do not treat partners as capacity. We treat them as an essential part of our operation.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Why Partner With Us</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {partnerBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Handshake className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <a href="mailto:op@nextmoveglobal.com" className="text-primary-600 hover:text-primary-700 font-semibold text-lg">
                  📧 op@nextmoveglobal.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

