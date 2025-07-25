"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {
  CheckCircle,
  Shield,
  Award,
  BarChart3,
  Stethoscope,
  Phone,
  Mail,
  MapPin,
  DollarSign,
  Activity,
  Target,
  Zap,
  Lock,
  AlertTriangle,
  TrendingDown,
  Search,
  Database,
} from "lucide-react"
import { Button } from "../../components";
import ConsultationForm from '../Home/Form';

const MedicalCodingPage = () => {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState(0)

  const benefits = [
    {
      icon: <TrendingDown className="w-6 h-6" />,
      title: "Prevents revenue leakage",
      description: "Stop losing money to undercoding and missed charges",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Reduces claim denials",
      description: "Faster reimbursements with clean, error-free submissions",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Ensures compliance",
      description: "Mitigate audit risks with up-to-date coding standards",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Boosts operational efficiency",
      description: "Eliminate coding backlogs and administrative burdens",
    },
  ]

  const solutions = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Specialty-Specific Coding",
      description:
        "Our coders specialize in your field, whether it's cardiology, orthopedics, or primary care, to ensure optimal code selection and documentation alignment.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Denial-Proof Claim Preparation",
      description:
        "We implement advanced proprietary claim-scrubbing protocols that significantly reduce denials by 50%+ by proactively catching critical errors before submission",
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Compliance-First Auditing",
      description:
        "Real-time audits ensure precise, compliant coding that consistently meets OIG, CMS, and payer-specific guidelines, keeping you audit-ready 365 days/year.",
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Revenue Recovery Analysis",
      description:
        "We identify and correct chronic under-coding issues that typically cost practices 7-12% of their legitimate revenue.",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Custom Workflow Integration",
      description:
        "Seamless EHR/EMR compatibility with daily or weekly batch processing tailored to your practice's rhythm.",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Performance Transparency",
      description:
        "Real-time dashboards track clean claim rates, denial trends, and recovered revenue with no surprises.",
    },
  ]

  const specialties = [
    {
      title: "General/Family Practice",
      description:
        "Primary care coding demands nuanced E/M code selection and chronic care management accuracy. Our certified coders specialize in documentation improvement for preventive visits, complex chronic care, and transitional care management.",
      features: ["E/M code optimization", "Chronic care management", "Preventive care coding"],
    },
    {
      title: "Outpatient Facility Coding",
      description:
        "From ASCs to hospital outpatient departments, we master facility-specific coding rules, including APC assignments and device-intensive procedure coding.",
      features: ["APC assignments", "OPPS compliance", "Device coding"],
    },
    {
      title: "Surgical Specialty Coding",
      description:
        "Precision matters most for procedure-heavy specialties (orthopedics, ophthalmology, etc.). We provide global period management and modifier mastery.",
      features: ["Global period management", "Modifier expertise", "Bundling compliance"],
    },
    {
      title: "Emergency Medicine Coding",
      description:
        "Our ED coding specialists balance critical care documentation with EM leveling accuracy, including accurate code selection that supports clean claim submission.",
      features: ["Critical care validation", "EM level accuracy", "Medical necessity alignment"],
    },
    {
      title: "Ancillary Service Coding",
      description:
        "For diagnostic, therapeutic, and DME providers, we optimize coding accuracy and streamline documentation workflows to ensure faster reimbursements.",
      features: ["Radiology CPT pairs", "HCPCS Level II", "DME coding"],
    },
  ]

  const auditingServices = [
    "Pre-Submission Coding Validation",
    "Retrospective Audit Program",
    "Compliance Gap Detection",
    "Specialty-Specific Audits",
  ]

  const challenges = [
    {
      title: "DNFB Resolution Engine",
      description:
        "Dedicated coding squads attack backlogs with same-day coding turnaround, converting unbilled services into clean claims within 48 hours.",
    },
    {
      title: "Denial Root Cause Elimination",
      description:
        "Our proprietary analytics accurately identify denial patterns and implement corrective protocols, reducing denials by 40–55% within 90 days.",
    },
    {
      title: "Real-Time Coding Triage",
      description:
        "Priority access to on-demand coding specialists who resolve complex cases immediately – no more claims stuck in 'pending' purgatory.",
    },
    {
      title: "Compliance-Backed Accuracy",
      description:
        "Every claim undergoes a thorough 7-layer validation against payer-specific edits and OIG compliance benchmarks before submission.",
    },
  ]

  const whyChooseUs = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "AAPC & AHIMA-Certified Coding Specialists",
      description: "Certified in 40+ specialties, our team ensures accurate coding to maximize reimbursement.",
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Proprietary AI-Driven Auditing System",
      description: "Our AI validation cross-checks claims, delivering 99.97% accuracy—well above industry norms.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Transparent Performance Guarantees",
      description: "We guarantee 40%+ fewer denials and 60%+ reduction in DNFB backlogs—contractually.",
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "True Compliance Integration",
      description: "Our workflows ensure HIPAA compliance with PHI safeguards and real-time audit trails.",
    },
  ]

  return (
    <div>
      <div className="min-h-screen bg-[#f3f8fe]">
        {/* Hero Section */}
        <div className="bg-[#f3f8fe] py-20 relative">
        {/* Decorative elements inside the main container */}
        <div className="absolute top-20 left-16 w-20 h-20 bg-blue-200 opacity-20 rounded-full"></div>
        <div className="absolute top-32 right-32 w-16 h-16 bg-purple-200 opacity-15 rounded-full"></div>
        <div className="absolute bottom-32 left-32 w-24 h-24 bg-green-200 opacity-10 rounded-full"></div>
        <div className="absolute top-1/3 left-1/5 w-12 h-12 bg-blue-300 opacity-25 transform rotate-45"></div>
        <div className="absolute bottom-1/4 right-1/4 w-8 h-8 bg-purple-300 opacity-20 transform rotate-12"></div>
        <div className="absolute top-1/2 right-1/6 w-6 h-6 bg-green-300 opacity-30 rounded-full"></div>
        
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                  Trusted Medical Coding Services That Eliminate Errors & Boost Compliance
                </h1>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Miscoded claims aren't just billing errors, they're revenue killers. A single ICD-10 or CPT coding
                  mistake can trigger claim denials, delay payments, or even expose your hospital to audit risks. At
                  MediCycle Billing LLC, we fix the root problem: AAPC-certified coders meticulously translate your
                  clinical documentation into 100% accurate, audit-proof codes so you get paid faster and stay
                  compliant.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-[#579db3] rounded-full p-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">AAPC-certified coding specialists</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-[#579db3] rounded-full p-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">24/7 coding compliance monitoring</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-[#579db3] rounded-full p-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">100% OIG audit-ready coding</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-[#579db3] rounded-full p-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">Zero-error guarantee</span>
                </div>
              </div>

              <div className="pt-4">
                <Button onClick={() => navigate('/contact')} size="large">
                  Speak To Our Coding Experts
                </Button>
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
                        <Stethoscope className="w-16 h-16 text-white" />
                      </div>
                      <h3 className="text-xl font-bold">Medical Coding</h3>
                      <p className="text-sm opacity-80">Expert Services</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Precise Medical Coding Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Precise Medical Coding is Non-Negotiable for Practice Revenue
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Medical coding errors don't just delay payments they erode revenue, trigger audits, and strain your
              practice's cash flow. At MediCycle Billing LLC, we understand that precise coding is the backbone of
              a healthy revenue cycle.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="bg-[#579db3]/5 border-l-4 border-[#579db3] p-6 rounded-r-lg">
                <div className="flex items-center mb-3">
                  <AlertTriangle className="w-6 h-6 text-red-500 mr-2" />
                  <h3 className="text-xl font-bold text-red-800">The Problem</h3>
                </div>
                <p className="text-red-700">
                  Every miscoded claim risks denial, underpayment, or compliance penalties, costing your practice up to
                  15% in lost revenue annually.
                </p>
              </div>

              <div className="bg-[#579db3]/5 border-l-4 border-[#579db3] p-6 rounded-r-lg">
                <div className="flex items-center mb-3">
                  <CheckCircle className="w-6 h-6 text-[#579db3] mr-2" />
                  <h3 className="text-xl font-bold text-[#2d5a66]">Our Solution</h3>
                </div>
                <p className="text-[#3d7a8c]">
                  Our AAPC-certified medical coding specialists ensure your claims are optimized, compliant, and
                  audit-proof, so you can focus on patient care while we protect your bottom line.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#579db3] to-[#3d7a8c] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Transform Your Revenue Cycle</h3>
              <p className="text-white opacity-80 mb-6">
                With MediCycle Billing LLC, your practice gains a strategic coding partner, not just a vendor. Let
                us transform your medical coding from a cost center into a profit-protecting asset.
              </p>
              <Button onClick={() => navigate('/contact')} size="large">
                Get Started Today
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
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

      {/* Medical Coding Solutions Section */}
      <div className="py-20 bg-[#f3f8fe]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Medical Coding Solutions That Power Your Revenue Cycle
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our custom-crafted solutions bridge the gap between clinical documentation and maximum reimbursement,
              combining AAPC-certified expertise with intelligent workflow integration to eliminate revenue leakage at
              its source.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-[#579db3]/10 w-16 h-16 rounded-xl flex items-center justify-center text-[#579db3] mb-6">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                <p className="text-gray-600 leading-relaxed">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Medical Coding & Proactive Auditing Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Medical Coding & Proactive Auditing for Revenue Protection
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our dual approach ensures every claim meets optimal coding standards while our auditing protocols identify
              and eliminate vulnerabilities before they impact your cash flow.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="bg-[#579db3]/5 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-[#2d5a66] mb-4">99.97% Coding Accuracy</h3>
                <p className="text-[#3d7a8c] mb-4">
                  Through real-time claim scrubbing and quarterly compliance audits, we maintain industry-leading
                  accuracy rates.
                </p>
                <div className="space-y-2">
                  {auditingServices.map((service, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-[#579db3] mr-3" />
                      <span className="text-[#3d7a8c]">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#579db3] to-[#3d7a8c] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Revenue Recovery Results</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Revenue Recovery</span>
                  <span className="text-2xl font-bold text-white opacity-80">3-8%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Coding Accuracy</span>
                  <span className="text-2xl font-bold text-white opacity-80">99.97%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Audit Readiness</span>
                  <span className="text-2xl font-bold text-white opacity-80">365 Days</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       <div className="py-20 bg-[#f3f8fe]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              OIG-Aligned Coding Practices for Every Specialty and Setting
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              MediCycle Billing LLC delivers specialty-specific coding expertise optimized for your workflow,
              patient population, and reimbursement requirements, ensuring maximum accuracy and revenue capture across
              all healthcare environments.
            </p>
          </div>

          <div className="space-y-16">
            {/* 1. Medical Coding for General/Family Practice */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-[#579db3]/10 to-[#579db3]/5 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-4 right-4 w-16 h-16 bg-[#579db3]/20 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 bg-[#579db3]/30 rounded-full"></div>
                <div className="relative z-10 flex items-center justify-center h-64">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-[#579db3] rounded-full flex items-center justify-center mx-auto mb-4">
                      <Stethoscope className="w-12 h-12 text-white" />
                    </div>
                    <div className="text-6xl mb-2">👩‍⚕️</div>
                    <p className="text-[#579db3] font-medium">Family Practice Coding</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <span className="bg-[#579db3] text-white px-3 py-1 rounded-full text-sm font-bold">1</span>
                  <h3 className="text-2xl font-bold text-gray-900">Medical Coding for General/Family Practice</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Primary care coding demands nuanced E/M code selection and chronic care management accuracy. Our
                  certified coders specialize in documentation improvement for preventive visits, complex chronic care,
                  and transitional care management – reducing audit risks while ensuring appropriate reimbursement
                  levels for every service tier.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#579db3] mr-3" />
                    <span className="text-gray-700">
                      We stay current with evolving payer rules and Medicare guidelines to minimize claim rejections.
                    </span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#579db3] mr-3" />
                    <span className="text-gray-700">
                      With deep expertise across value-based care models, we help practices optimize both care delivery
                      and revenue.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Outpatient Facility Coding Solutions */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 lg:order-1">
                <div className="flex items-center space-x-3">
                  <span className="bg-[#579db3] text-white px-3 py-1 rounded-full text-sm font-bold">2</span>
                  <h3 className="text-2xl font-bold text-gray-900">Outpatient Facility Coding Solutions</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  From ASCs to hospital outpatient departments, we master facility-specific coding rules, including APC
                  assignments and device-intensive procedure coding. Our team ensures complete charge capture for
                  infusions, observations, and recurring outpatient services while navigating CMS packaging rules that
                  impact your bottom line.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#579db3] mr-3" />
                    <span className="text-gray-700">
                      Our coders are trained in the latest OPPS updates to ensure compliance and maximize reimbursement.
                    </span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#579db3] mr-3" />
                    <span className="text-gray-700">
                      We identify undercoded services and revenue leakage opportunities through detailed audits.
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-[#579db3]/10 to-[#579db3]/5 rounded-3xl p-8 relative overflow-hidden lg:order-2">
                <div className="absolute top-4 left-4 w-12 h-12 bg-[#579db3]/20 rounded-full"></div>
                <div className="absolute bottom-4 right-4 w-20 h-20 bg-[#579db3]/30 rounded-full"></div>
                <div className="relative z-10 flex items-center justify-center h-64">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-[#579db3] rounded-full flex items-center justify-center mx-auto mb-4">
                      <Activity className="w-12 h-12 text-white" />
                    </div>
                    <div className="text-6xl mb-2">👨‍💻</div>
                    <p className="text-[#579db3] font-medium">Outpatient Facility Coding</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Surgical Specialty Coding Expertise */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-[#579db3]/10 to-[#579db3]/5 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-4 right-4 w-16 h-16 bg-[#579db3]/20 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 bg-[#579db3]/30 rounded-full"></div>
                <div className="absolute top-1/2 left-4 w-4 h-4 bg-[#579db3]/40 rounded-full"></div>
                <div className="relative z-10 flex items-center justify-center h-64">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-[#579db3] rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="w-12 h-12 text-white" />
                    </div>
                    <div className="text-6xl mb-2">🏥</div>
                    <p className="text-[#579db3] font-medium">Surgical Specialty Coding</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <span className="bg-[#579db3] text-white px-3 py-1 rounded-full text-sm font-bold">3</span>
                  <h3 className="text-2xl font-bold text-gray-900">Surgical Specialty Coding Expertise</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Precision matters most for procedure-heavy specialties (orthopedics, ophthalmology, etc.). We provide:
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#579db3] mr-3" />
                    <span className="text-gray-700">Global period management</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#579db3] mr-3" />
                    <span className="text-gray-700">Modifier -58/-78/-79 mastery</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#579db3] mr-3" />
                    <span className="text-gray-700">Device/drug capture verification</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#579db3] mr-3" />
                    <span className="text-gray-700">
                      Bundling rule compliance, reducing claim edits by 65% for surgical practices.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Emergency Medicine Coding */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 lg:order-1">
                <div className="flex items-center space-x-3">
                  <span className="bg-[#579db3] text-white px-3 py-1 rounded-full text-sm font-bold">4</span>
                  <h3 className="text-2xl font-bold text-gray-900">Emergency Medicine Coding</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Our ED coding specialists balance critical care documentation with EM leveling accuracy, including
                  accurate code selection that supports clean claim submission.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#579db3] mr-3" />
                    <span className="text-gray-700">Facility vs. professional component coding</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#579db3] mr-3" />
                    <span className="text-gray-700">Critical care time validation</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#579db3] mr-3" />
                    <span className="text-gray-700">
                      Medical necessity alignment, improving ED group revenues by 12-18% on average.
                    </span>
                  </div>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center">
                    <div className="bg-green-500 text-white px-2 py-1 rounded text-xs font-bold mr-2">EMERGENCY</div>
                    <span className="text-green-800 font-medium">24/7 Critical Care Coding Support</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-3xl p-8 relative overflow-hidden lg:order-2">
                <div className="absolute top-4 left-4 w-12 h-12 bg-red-200 rounded-full"></div>
                <div className="absolute bottom-4 right-4 w-20 h-20 bg-red-300 rounded-full"></div>
                <div className="relative z-10 flex items-center justify-center h-64">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Activity className="w-12 h-12 text-white" />
                    </div>
                    <div className="text-6xl mb-2">🚑</div>
                    <p className="text-red-600 font-medium">Emergency Medicine Coding</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 5. Ancillary Service Coding */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-[#579db3]/10 to-[#579db3]/5 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-4 right-4 w-16 h-16 bg-[#579db3]/20 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 bg-[#579db3]/30 rounded-full"></div>
                <div className="absolute top-1/3 right-8 w-6 h-6 bg-[#579db3]/25 rounded-full"></div>
                <div className="relative z-10 flex items-center justify-center h-64">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-[#579db3] rounded-full flex items-center justify-center mx-auto mb-4">
                      <BarChart3 className="w-12 h-12 text-white" />
                    </div>
                    <div className="text-6xl mb-2">📊</div>
                    <p className="text-[#579db3] font-medium">Ancillary Service Coding</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <span className="bg-[#579db3] text-white px-3 py-1 rounded-full text-sm font-bold">5</span>
                  <h3 className="text-2xl font-bold text-gray-900">Ancillary Service Coding</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  For diagnostic, therapeutic, and DME providers, we optimize coding accuracy and streamline
                  documentation workflows. Our goal is to ensure faster reimbursements, reduced denials, and full
                  compliance with payer guidelines.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#579db3] mr-3" />
                    <span className="text-gray-700">Radiology CPT®/modifier pairs</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#579db3] mr-3" />
                    <span className="text-gray-700">Therapeutic activity documentation</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#579db3] mr-3" />
                    <span className="text-gray-700">
                      HCPCS Level II code assignment, closing the 27% revenue gap typical in ancillary service billing.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How We Solve Your Toughest Coding Challenges?</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{challenge.title}</h3>
                <p className="text-gray-600 leading-relaxed">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* OIG-Aligned Coding Practices Section */}
      <div className="py-20 bg-[#f3f8fe]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              OIG-Aligned Coding Practices for Every Specialty and Setting
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              MediCycle Billing LLC delivers specialty-specific coding expertise optimized for your workflow,
              patient population, and reimbursement requirements, ensuring maximum accuracy and revenue capture across
              all healthcare environments.
            </p>
          </div>

          <div className="space-y-8">
            {specialties.map((specialty, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {index + 1}. {specialty.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {specialty.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="bg-[#579db3]/10 text-[#3d7a8c] px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="lg:col-span-2">
                    <p className="text-gray-600 leading-relaxed">{specialty.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How We Solve Challenges Section */}
   

      {/* Why Choose Us Section */}
      
 <div className="py-20 bg-gradient-to-br from-[#579db3] to-[#3d7a8c]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Get a Free Billing Audit with No Strings Attached</h2>
          <p className="text-xl text-[#fff]/80 mb-8 max-w-3xl mx-auto">
            Unlock the true potential of your revenue cycle with a free consultation and billing audit from MediCycle
            Medical Billing. We'll review your current billing workflow, identify revenue leaks, and uncover
            opportunities for faster reimbursements and improved claim accuracy at no cost, no commitment.
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-white">FREE</div>
                <div className="text-[#fff]/80">Coding Assessment</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">NO COST</div>
                <div className="text-[#fff]/80">No Commitment</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">IMMEDIATE</div>
                <div className="text-[#fff]/80">Actionable Insights</div>
              </div>
            </div>
          </div>

          <Button onClick={() => navigate('/contact')} type="secondary">
            Get Your Free Audit Today
          </Button>
        </div>
      </div>
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why MediCycle Billing LLC Stands Apart in Medical Coding Excellence?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Choosing the right medical coding partner impacts your revenue, compliance, and operational efficiency. At
              MediCycle Billing LLC, we combine deep industry expertise with cutting-edge technology to deliver
              unmatched accuracy, speed, and security.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-[#579db3]/10 w-16 h-16 rounded-xl flex items-center justify-center text-[#579db3] mb-6">
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
   

      {/* Free Billing Audit CTA */}
     

      {/* Footer */}
      {/* <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4 text-[#579db3]">MediCycle Billing LLC</h3>
              <p className="text-gray-300 mb-6 max-w-md">
                Leading medical coding and revenue cycle management services, trusted by healthcare providers nationwide
                for over 15 years.
              </p>
              <div className="flex space-x-4">
                <div className="bg-[#579db3] p-2 rounded-lg">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold">HIPAA Compliant</div>
                  <div className="text-gray-400 text-sm">SOC 2 Type II Certified</div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-[#579db3]">Services</h4>
              <div className="space-y-2 text-gray-300">
                <div>Medical Coding</div>
                <div>Revenue Cycle Management</div>
                <div>Compliance Auditing</div>
                <div>Claims Processing</div>
                <div>Denial Management</div>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-[#579db3]">Contact</h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-[#579db3]" />
                  (555) 123-4567
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-[#579db3]" />
                  info@CareCycle.com
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-[#579db3]" />
                  Healthcare District, MC
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 MediCycle Billing LLC. All rights reserved. HIPAA Compliant & Certified.</p>
          </div>
        </div>
      </div> */}
    </div>
  </div>
)
}

export default MedicalCodingPage
