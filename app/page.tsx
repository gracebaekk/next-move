import Link from "next/link";
import { ArrowRight, Truck, MapPin, Clock, TrendingUp } from "lucide-react";

export default function Home() {
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
              <div className="w-12 h-12 bg-[#87B5DE] rounded-lg flex items-center justify-center mb-4">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Load Management</h3>
              <p className="text-gray-600">
                Efficiently assign and track loads with real-time updates and status monitoring.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-gray-50 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#87B5DE] rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Real-Time Tracking</h3>
              <p className="text-gray-600">
                Monitor your trucks and drivers with live GPS tracking and location updates.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-gray-50 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#87B5DE] rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Logistics Consulting</h3>
              <p className="text-gray-600">
                Execution-focused consulting including container flow analysis, network design, and supply chain optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Ready to Optimize Your Dispatch Operations?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get started today and see the difference professional dispatch management can make.
          </p>
          <Link
            href="/carrier-setup"
            className="bg-[#438ed9] text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 inline-flex items-center gap-2"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

