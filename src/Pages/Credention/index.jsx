"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {
  CheckCircle,
  Shield,
  Award,
  Users,
  FileText,
  Phone,
  Mail,
  MapPin,
  DollarSign,
  Activity,
  Zap,
  Lock,
  Search,
  Database,
  UserCheck,
  ClipboardCheck,
  Eye,
  RefreshCw,
  Globe,
} from "lucide-react"
import { Button } from "../../components";

const Credentialing = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState("")
  const navigate = useNavigate()

  const credentialingBenefits = [
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "First-Time Enrollment",
      description: "Avoid rejections with error-proof application reviews and primary source verification.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Peer References & Sanctions",
      description: "Proactively resolve gaps that trigger insurer holds.",
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "Mid-Cycle Updates",
      description: "We monitor expiring licenses and revalidate credentials before payers flag them.",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "CAQH & PECOS Mastery",
      description: "Keep profiles audit-ready 24/7.",
    },
  ]

  const credentialingServices = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Primary Source Verification",
      description:
        "We directly validate licenses, education, and work history from original institutions. No third-party databases just airtight documentation.",
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Insurance Enrollment & CAQH Setup",
      description:
        "Complete payer enrollment (Medicare, Medicaid, commercial) and optimize CAQH profiles to prevent submission rejections.",
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: "Recredentialing Management",
      description:
        "Automated tracking of expiration dates for licenses, DEA, and board certs—ensuring accuracy, no lapses, no payment freezes.",
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "License & DEA Monitoring",
      description:
        "Real-time alerts for renewals + expedited processing. Never risk practicing with expired credentials or facing delays.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Peer Reference Coordination",
      description:
        "We secure and submit references per insurer requirements, avoiding costly 'pending' purgatory and delays.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Sanctions & Exclusion Screening",
      description:
        "Monthly OIG, SAM, and state checks to proactively flag potential hidden compliance risks before payers take action.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "PECOS & NPPES Updates",
      description:
        "Keep Medicare enrollments active with timely, accurate profile edits (practice moves, taxonomy changes, reassignments).",
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Credentialing Transfer Assistance",
      description:
        "Switching jobs or groups? We migrate your credentials seamlessly with expert support—zero billing interruptions.",
    },
  ]

  const providerTypes = [
    { title: "Physicians (MD/DO)", icon: "👨‍⚕️" },
    { title: "Nurse Practitioners (NPs)", icon: "👩‍⚕️" },
    { title: "Physician Assistants (PAs)", icon: "🩺" },
    { title: "Dentists & Specialists", icon: "🦷" },
    { title: "Nursing Staff (RNs/LPNs)", icon: "👩‍⚕️" },
    { title: "Mental Health Providers", icon: "🧠" },
    { title: "Chiropractors", icon: "🦴" },
    { title: "Dietitians/Nutritionists", icon: "🥗" },
  ]

  const payerExpertise = [
    {
      title: "Government Program Mastery",
      description:
        "Efficient Medicare enrollment and revalidation, including PECOS optimization and Medicaid provider maintenance",
    },
    {
      title: "Commercial Insurance Expertise",
      description: "Strategic navigation of major payers (BCBS, UHC, Cigna) with focus on favorable contract terms",
    },
    {
      title: "Military Health Systems",
      description:
        "Complete VA/Tricare credentialing with compliant privilege forms and facility-specific requirements",
    },
    {
      title: "Emerging Payment Models",
      description: "Credentialing for value-based care arrangements and ACO participation",
    },
    {
      title: "Ancillary Service Expansion",
      description: "Credentialing for value-based care arrangements and ACO participation",
    },
  ]

  const whyChooseUs = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Specialist-Level Expertise",
      description:
        "Our team consists of healthcare credentialing veterans, not generalists. We speak fluent 'payer requirements' and navigate nuances across 50+ specialties.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Proactive, Not Reactive",
      description:
        "Our smart AI system tracks renewals 90 days in advance and auto-generates detailed compliance checklists—eliminating costly last-minute scrambles.",
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Revenue-First Mindset",
      description:
        "We align every credentialing decision with your financial goals, prioritizing high-value payers and flagging underperforming contracts before you enroll.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#f3f8fe]">
      {/* Hero Section */}
      <div className="bg-[#f3f8fe] py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                  Medical Credentialing & Provider Enrollment Services
                </h1>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Physicians lose thousands in delayed reimbursements due to credentialing errors, missing documents, or
                  slow insurer responses. At Care Cycle Billing MS, we specialize in accurate healthcare
                  credentialing services, ensuring your providers are fully enrolled, compliant, and ready to bill
                  without denials or costly delays.
                </p>
              </div>

              <div className="pt-4">
                <button onClick={() => navigate('/contact')} className="bg-[#4a8ba0] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#3d7a8c] transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer">
                  Secure Insurer Approvals!
                </button>
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="relative">
                <div className="w-96 h-96 bg-gradient-to-br from-[#579db3] to-[#3d7a8c] rounded-full relative overflow-hidden">
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rounded-full"></div>
                  <div className="absolute top-1/4 right-8 w-3 h-3 bg-white rounded-full"></div>
                  <div className="absolute top-1/2 right-4 w-3 h-3 bg-white rounded-full"></div>
                  <div className="absolute bottom-1/4 right-8 w-3 h-3 bg-white rounded-full"></div>
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rounded-full"></div>
                  <div className="absolute bottom-1/4 left-8 w-3 h-3 bg-white rounded-full"></div>
                  <div className="absolute top-1/2 left-4 w-3 h-3 bg-white rounded-full"></div>
                  <div className="absolute top-1/4 left-8 w-3 h-3 bg-white rounded-full"></div>

                  <div className="absolute inset-8 bg-gradient-to-br from-white/20 to-white/5 rounded-full flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <UserCheck className="w-16 h-16 text-white" />
                      </div>
                      <h3 className="text-xl font-bold">Provider</h3>
                      <p className="text-[#579db3]/60">Credentialing</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Smarter Credentialing Solutions Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Smarter Credentialing Solutions for Busy Healthcare Providers
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Why do 72% of providers face payment delays? Because traditional credentialing is a maze of expired
              documents, insurer backlogs, and sudden audits. At Care Cycle Billing MS, our medical credentialing
              services cut through the chaos, verifying licenses, tracking submissions, and accelerating approvals so
              you stop sacrificing revenue to bureaucracy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {credentialingBenefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-[#579db3]/5 rounded-xl p-6 hover:shadow-lg transition-shadow border border-[#579db3]/10"
              >
                <div className="bg-[#579db3]/10 w-12 h-12 rounded-lg flex items-center justify-center text-[#579db3] mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fast & Proactive Physician Credentialing Services */}
      <div className="py-20 bg-[#f3f8fe]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Fast & Proactive Physician Credentialing Services</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our end-to-end medical credentialing services eliminate bottlenecks with IRS-grade accuracy from initial
              enrollment to ongoing compliance so your providers stay billing-ready.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {credentialingServices.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-[#579db3] w-16 h-16 rounded-full flex items-center justify-center text-white mb-6">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Smarter Payer Strategy Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Smarter Payer Strategy</h2>
            <h3 className="text-2xl font-semibold text-[#579db3] mb-6">Maximize Your Network & Revenue Potential</h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                Choosing the wrong payers can cost your practice 20-30% in lost reimbursements. Our network research
                analyzes patient demographics, reimbursement rates, and competitor gaps to recommend the most profitable
                in-network payer mix for your specialty.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We handle out-of-network enrollments, secure your NPI registrations, and navigate complex payer portals
                so you don't leave money on the table.
              </p>
              <div className="bg-[#579db3]/5 border-l-4 border-[#579db3] p-6 rounded-r-lg">
                <p className="text-[#3d7a8c] font-medium">
                  Closed panels? Expired profiles? We fight for your access with a 35% success rate on closed panel
                  appeals while keeping your CAQH, PECOS, and demographics flawlessly updated.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#579db3] to-[#3d7a8c] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Revenue Protection Features</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3" />
                  <span>TAX ID changes management</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3" />
                  <span>ERA/EFT setups</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3" />
                  <span>Zero billing disruptions</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3" />
                  <span>Real-time expiration tracking</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Credentialing Services for Every Healthcare Provider */}
      <div className="py-20 bg-[#f3f8fe]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Credentialing Services for Every Healthcare Provider
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {providerTypes.map((provider, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{provider.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {index + 1}. {provider.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Unmatched Credentialing Expertise */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Unmatched Credentialing Expertise Across All Payer Types
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              At Care Cycle Billing MS, we bring deep regulatory knowledge and proven processes to streamline every
              aspect of provider credentialing. Our team specializes in navigating the distinct requirements of
              government programs while optimizing commercial insurance enrollments.
            </p>
          </div>

          <div className="space-y-8">
            {payerExpertise.map((expertise, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{expertise.title}</h3>
                <p className="text-gray-600 leading-relaxed">{expertise.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-[#579db3]/5 rounded-2xl p-8">
            <p className="text-[#3d7a8c] leading-relaxed">
              We monitor application progress in real-time and provide status updates at every stage. Our credentialing
              experts handle revalidations, reassignments, and profile changes without delay. From initial enrollment to
              ongoing maintenance, we minimize disruptions and protect your revenue. Every step is tracked, every update
              communicated — so you're never left guessing. Let us handle the paperwork while you focus on patient care.
            </p>
          </div>
        </div>
      </div>

      {/* Reliable Healthcare Credentialing Solutions */}
      <div className="py-20 bg-[#f3f8fe]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">
                Reliable Healthcare Credentialing Solutions You Can Trust
              </h2>
              <p className="text-gray-600 leading-relaxed">
                At Care Cycle Billing MS, we understand that medical practice credentialing demands both precision
                and protection. Our healthcare credentialing solutions are built on enterprise-grade security protocols,
                ensuring your providers' sensitive data remains confidential throughout the enrollment process.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We combine rigorous quality controls with real-time tracking technology, giving you complete visibility
                into each application's status while maintaining strict HIPAA compliance.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-[#579db3] mb-6">Security & Compliance Features</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Lock className="w-5 h-5 text-[#579db3] mr-3" />
                  <span className="text-gray-700">Enterprise-grade security protocols</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-5 h-5 text-[#579db3] mr-3" />
                  <span className="text-gray-700">Strict HIPAA compliance</span>
                </div>
                <div className="flex items-center">
                  <Eye className="w-5 h-5 text-[#579db3] mr-3" />
                  <span className="text-gray-700">Real-time tracking technology</span>
                </div>
                <div className="flex items-center">
                  <ClipboardCheck className="w-5 h-5 text-[#579db3] mr-3" />
                  <span className="text-gray-700">Rigorous quality controls</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Leading Healthcare Providers Choose Our Credentialing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Care Cycle Billing MS stands out by streamlining approvals, ensuring strict compliance, and maximizing
              revenue through precise credentialing — not just processing applications.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-[#579db3]/5 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="bg-[#579db3] w-16 h-16 rounded-full flex items-center justify-center text-white mx-auto mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="py-20 bg-[#f3f8fe]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Schedule a Consultation</h2>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Specialty</label>
                  <select
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#579db3] focus:border-[#579db3]"
                    value={selectedSpecialty}
                    onChange={(e) => setSelectedSpecialty(e.target.value)}
                  >
                    <option value="">Please select a specialty</option>
                    <option value="physician">Physician (MD/DO)</option>
                    <option value="np">Nurse Practitioner</option>
                    <option value="pa">Physician Assistant</option>
                    <option value="dentist">Dentist</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Services</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#579db3] focus:border-[#579db3]">
                    <option value="">Select Healthcare Type</option>
                    <option value="hospital">Hospital</option>
                    <option value="clinic">Clinic</option>
                    <option value="practice">Private Practice</option>
                    <option value="group">Group Practice</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#579db3] focus:border-[#579db3]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#579db3] focus:border-[#579db3]"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#579db3] focus:border-[#579db3]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
                  <input
                    type="url"
                    placeholder="Website (Optional)"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#579db3] focus:border-[#579db3]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  rows={4}
                  placeholder="Write your Message here..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#579db3] focus:border-[#579db3]"
                ></textarea>
              </div>

              <div className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm text-gray-600">By submitting this, I agree to the Terms & Conditions.</span>
              </div>

              <Button type="submit" fullWidth>
                Schedule Consultation
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Free Billing Audit CTA */}
      <div className="py-20 bg-gradient-to-br from-[#579db3] to-[#3d7a8c]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Get a Free Billing Audit with No Strings Attached</h2>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Unlock the true potential of your revenue cycle with a free consultation and billing audit from CareCycle
            Medical Billing. We'll review your current billing workflow, identify revenue leaks, and uncover
            opportunities for faster reimbursements and improved claim accuracy at no cost, no commitment.
          </p>

          <Button onClick={() => navigate('/contact')} type="secondary">
            Get Your Free Audit Today
          </Button>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Get Credentialed & Start Getting Paid – Stress-Free!
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Why Wait? Every day without proper credentialing means lost revenue, delayed reimbursements, and missed
            opportunities. At Care Cycle Billing MS, we take the hassle out of medical credentialing and provider
            enrollment.
          </p>

          <Button onClick={() => navigate('/contact')} size="large">
            Get Credentialed Now
          </Button>
        </div>
      </div>

      
      
    </div>
  )
}

export default Credentialing
