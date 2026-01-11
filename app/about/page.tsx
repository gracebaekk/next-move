import { Truck, Users, Award, Target, CheckCircle, Clock, Shield, Eye, BarChart3, Factory, DollarSign } from "lucide-react";

export default function About() {
  const services = [
    "Inbound & outbound container transportation",
    "Port and rail drayage",
    "Transloading and cross-dock operations",
    "Regional and long-haul transportation",
    "Factory shuttle and scheduled route operations",
    "Warehouse-to-customer door delivery",
    "Last-mile transportation",
    "Refrigerated and frozen transportation",
    "Heavy, oversized, and specialized cargo movements",
  ];

  const industries = [
    "High-tech and electronics manufacturing",
    "Automotive and industrial production",
    "Factory inbound and outbound logistics",
    "Food and beverage transportation",
    "Refrigerated and frozen cargo",
    "Heavy, oversized, and high-value freight",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#193B73] to-[#0f2345] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Next Move Global</h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-4">
              Reliable Logistics for Shippers.
            </p>
            <p className="text-xl md:text-2xl text-primary-100">
              Stable, Safe Work for Our Transportation Partners.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview & Philosophy */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">Company Overview</h2>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="text-lg mb-4">
                Next Move Global LLC delivers transportation and logistics services built for real operational environments. We support shippers who value <strong>on-time delivery, safety, and visibility</strong>, not uncertainty driven by price-only decisions. From inbound and outbound containers to factory shuttle operations, warehouse-to-door deliveries, refrigerated and frozen freight, and specialized cargo, our services are designed to move freight as promised.
              </p>
              <p className="text-lg mb-4">
                Next Move Global was established to help create <strong>a higher standard in the logistics industry</strong>. For too long, transportation decisions have been driven by a single question: <i>&quot;How cheap can it be?&quot;</i>
              </p>
              <p className="text-lg mb-4">
                When price becomes the only priority, the real cost is often overlooked: uncertainty, broken promises, and unnecessary stress for both shippers and drivers.
              </p>
              <div className="bg-white rounded-xl p-8 my-8 border-l-4 border-sky-600">
                <ul className="space-y-4 text-lg">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-sky-600 flex-shrink-0 mt-0.5" />
                    <span>We believe logistics should be built on <strong>reliability, accountability, and respect for commitments</strong>.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-sky-600 flex-shrink-0 mt-0.5" />
                    <span>We believe knowing <i>when</i> freight will arrive is more important than paying less.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-sky-600 flex-shrink-0 mt-0.5" />
                    <span>We believe <strong>stable operations</strong>, not the lowest rate, create long-term success for customers and partners alike.</span>
                  </li>
                </ul>
              </div>
              <p className="text-lg font-semibold text-gray-900">
                We are not lowering expectations. We are raising the standard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Portfolio */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">Our Service Portfolio</h2>
            <p className="text-lg text-gray-600 text-center mb-8">
              Next Move Global provides flexible and scalable transportation services and strategic logistics consulting, including:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {services.map((service, index) => (
                <div key={index} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>
            <div className="bg-sky-100 rounded-xl p-6 border border-primary-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">One Stop Total Logistics Capability (Packaged Solution)</h3>
              <p className="text-gray-700 mb-2">
                One Stop Total Logistics Capability is one of our packaged solution offerings. It integrates drayage, transloading, and trucking for inbound and outbound containers under a single operational framework.
              </p>
              <p className="text-gray-700 italic">
                Note: This is one product option, not our entire identity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Logistics Consulting Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">Logistics Consulting</h2>
            <p className="text-lg text-gray-600 text-center mb-8">
              We provide strategic consulting to help customers optimize their logistics operations. When customers seek to reduce logistics costs or improve efficiency, Next Move Global is always open to discussion and collaboration.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                <BarChart3 className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Transportation cost structure analysis</span>
              </div>
              <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                <Target className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Route and mode optimization</span>
              </div>
              <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                <Truck className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Factory shuttle and dedicated lane planning</span>
              </div>
              <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                <Award className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Container flow and distribution redesign</span>
              </div>
            </div>
            <p className="text-lg text-gray-600 text-center">
              Our consulting is execution-focused, not report-driven. We work only on improvements that can be realistically implemented.
            </p>
          </div>
        </div>
      </section>

      {/* Execution-Focused Operations */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">Execution-Focused Operations</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Real-Time Tracking */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-[#d9f1fe] rounded-lg flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-sky-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Real-Time Tracking & Visibility</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Real-time shipment tracking</li>
                  <li>• Proactive monitoring</li>
                  <li>• Transparent communication</li>
                </ul>
              </div>

              {/* On-Time Delivery */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-[#d9f1fe] rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-sky-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">On-Time Delivery Priority</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Delivery window alignment</li>
                  <li>• Schedule coordination</li>
                  <li>• Performance metrics</li>
                </ul>
              </div>

              {/* Safety & Compliance */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-[#d9f1fe] rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-sky-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Safety & Compliance</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Driver safety-first scheduling</li>
                  <li>• Regulatory compliance</li>
                  <li>• Vetted partners</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Management Experience & Industry Expertise */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">Management Experience & Industry Expertise</h2>
            
            {/* Management Experience */}
            <div className="prose prose-lg mx-auto text-gray-600 mb-8">
              <p className="text-lg mb-4">
                Next Move Global is built on a management team with over <strong>20 years of hands-on experience</strong> across both sides of the logistics industry within large enterprise logistics organizations and through the direct creation and operation of trucking companies.
              </p>
              <p className="text-lg mb-8">
                This experience includes logistics planning, vendor and carrier management, fleet operations, safety and compliance programs, and day-to-day execution. Our team has worked in both corporate planning environments and real transportation operations, understanding what works in theory and what truly works in practice.
              </p>
            </div>

            {/* Industry Expertise */}
            <div className="bg-sky-100 rounded-xl p-6 border border-primary-200">
              <h3 className="text-xl text-center font-semibold text-gray-900 mb-3">Industry Expertise</h3>
              <div className="grid md:grid-cols-2 gap-3 mb-4">
                {industries.map((industry, index) => (
                  <div key={index} className="flex items-start gap-2 bg-sky-100 p-3 rounded-lg">
                    <Factory className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
                    <span className="text-base text-gray-700">{industry}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-700">
                We support industries where execution quality is critical and understand the risks that delays or safety failures can pose to operations.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
