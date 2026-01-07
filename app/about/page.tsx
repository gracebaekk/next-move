import { Truck, Users, Award, Target, CheckCircle } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Truck,
      title: "Reliable Service",
      description: "We ensure on-time delivery and consistent performance for all our clients.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Our experienced dispatchers understand the logistics industry inside and out.",
    },
    {
      icon: Award,
      title: "Quality First",
      description: "We maintain the highest standards in dispatch management and customer service.",
    },
    {
      icon: Target,
      title: "Efficiency Focused",
      description: "We optimize routes and operations to maximize your profitability.",
    },
  ];

  const stats = [
    { number: "30+", label: "Years Leadership Experience" },
    { number: "20+", label: "Years Team Expertise" },
    { number: "100%", label: "Execution Focused" },
    { number: "1", label: "Single Point of Coordination" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#193B73] to-[#0f2345] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Next Move Global</h1>
            <p className="text-xl md:text-2xl text-primary-100">
              Your trusted partner in truck dispatch services
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">Built on Real Operational Experience</h2>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="text-lg mb-4">
                Next Move Global LLC is a consulting-led logistics partner. We combine transportation coordination with
                hands-on supply chain consulting so importers, exporters, manufacturers, and distribution networks can
                design, execute, and continuously improve resilient operations.
              </p>
              <p className="text-lg mb-4">
                Our CEO has 30+ years across global forwarding, trucking, drayage, and supply chain operations—including
                building and leading their own trucking company end-to-end. The leadership team brings 20+ years of
                operational depth in licensing, compliance, staffing, systems, carrier operations, and full P&amp;L responsibility.
              </p>
              <p className="text-lg">
                Operating as a non-asset-based logistics company, we leverage licensed and insured partners while staying
                your single point of coordination. We compete on execution: consulting-driven design, advanced dispatch and
                planning, and on-the-ground accountability to keep factory and time-critical flows running.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">What Sets Us Apart</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center p-6 rounded-xl bg-gray-50 hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-[#d9f1fe] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-sky-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Why Choose Next Move?</h2>
            <div className="space-y-6">
              {[
                "24/7 dispatch support to handle your loads around the clock",
                "Advanced technology platform for real-time tracking and management",
                "Experienced team with deep industry knowledge",
                "Competitive rates and transparent pricing",
                "Strong relationships with brokers and shippers",
                "Single Point of Coordination",
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-sm">
                  <div className="w-8 h-8 bg-[#d9f1fe] rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-sky-600" />
                  </div>
                  <p className="text-lg text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#193B73] to-[#0f2345] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of carriers who trust Next Move for their dispatch needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/carrier-setup"
              className="bg-white text-[#438ed9] px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 inline-flex items-center justify-center gap-2"
            >
              Get Started Today
            </a>
            <a
              href="/contact"
              className="bg-[#438ed9] text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 inline-flex items-center justify-center gap-2"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

