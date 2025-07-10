import React from 'react';
import { FileText, BarChart3, CheckCircle, Trophy, Clock, Users, Lightbulb, Zap, Box, Shield, ShieldCheck, ChartColumn } from 'lucide-react';

function Cta() {
  // Certification logos data
  const certifications = [
    { id: 1, alt: "HIPAA", src: "/assets/svg1.png" },
    { id: 2, alt: "Google Reviews", src: "/assets/svg2.png" },
    { id: 3, alt: "CPC Certified", src: "/assets/svg3.png" },
    { id: 4, alt: "CPB Certified", src: "/assets/svg4.png" },
    { id: 5, alt: "CMS", src: "/assets/svg2.png" }
  ];

  // Features data
  const features = [
    { icon: Users, text: "Responsive Support" },
    { icon: Lightbulb, text: "Specialty-Focused Expertise" },
    { icon: Zap, text: "Real Time Reporting" },
    { icon: Box, text: "Flexible for Every Practice" },
    { icon: Shield, text: "Results-Driven Mindset" },
    { icon: ShieldCheck, text: "100% HIPAA Compliant" }
  ];

  // Service cards data
  const services = [
    {
      icon: Clock,
      title: "Charge Lag Time",
      description: "Get claims out within 48 hours to accelerate your reimbursement cycle."
    },
    {
      icon: FileText,
      title: "Clean Claim Rate (CCR)",
      description: "Maintain a 95%+ clean claim rate to avoid costly reworks and speed up payments."
    },
    {
      icon: Trophy,
      title: "First-Pass Rate",
      description: "Achieve faster payouts for your medical practice with a high first-pass approval rate."
    },
    {
      icon: ChartColumn,
      title: "Denial Rate",
      description: "Keep your denial rate below 5% to ensure more claims are accepted on the first submission."
    }
  ];

  return (
    <>
      <div className="bg-[#f7f9fb]">
        <div className="container mx-auto lg:px-8 px-4 lg:py-20 py-12">
          {/* Certifications Section */}
         
            
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Built for Regulation. Certified for Results.
                </h2>
                <p className="text-gray-700 max-w-4xl mx-auto">
                  Our AAPC-certified team and policy-aligned workflows help you avoid denials, 
                  reduce risk, and stay ready for any audit. We don't cut corners. Every claim, 
                  modifier, and code meets the latest compliance standards.
                </p>
              </div>
              
              {/* Logos Display */}
              <div className="flex justify-between items-center flex-wrap">
                {certifications.map((cert) => (
                  <div key={cert.id} className="flex justify-center items-center h-24 px-6">
                    <img 
                      alt={cert.alt}
                      className="max-h-20 w-auto object-contain hover:opacity-80 transition-opacity duration-300"
                      src={cert.src}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main CTA Section */}
         
            <div className="container mx-auto lg:px-8 px-4 lg:py-20 py-12">
              <div className="bg-gradient-to-r from-[#579db3] to-[#4c7ba8] rounded-3xl lg:p-12 p-8 relative overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                  <div className="text-white space-y-6">
                    <h2 className="lg:text-4xl text-2xl font-bold leading-tight">
                      Medical Billing Company That Delivers Real Results and Uplift Your Practice Revenue
                    </h2>
                    <p className="text-lg text-blue-100 leading-relaxed">
                      Start seeing predictable revenue. From coding to collections, we handle your 
                      entire billing cycle with accuracy, transparency, and full compliance.
                    </p>
                    <button 
                      type="button" 
                      onClick={() => window.location.href = '/contact'}
                      className="bg-white text-[#579db3] border-white hover:bg-gray-50 hover:text-[#4a8a9e] hover:border-gray-50 font-semibold px-8 py-6 text-base rounded-lg transition-colors duration-200"
                    >
                      GET YOUR FREE BILLING ASSESSMENT
                    </button>
                  </div>
                  
                  <div className="flex justify-center relative">
                    <div className="relative">
                      <img 
                        alt="Doctor with medical billing elements" 
                        className="w-80 h-auto"
                        src="/assets/doctor.webp"
                      />
                      
                      {/* Floating Icons */}
                      <div className="absolute top-4 -right-8 bg-white rounded-lg p-2 shadow-lg animate-float">
                        <FileText className="w-6 h-6 text-[#579db3]" />
                      </div>
                      <div className="absolute top-16 right-12 bg-white rounded-lg p-2 shadow-lg animate-float-delay-1">
                        <BarChart3 className="w-6 h-6 text-green-500" />
                      </div>
                      <div className="absolute top-32 -right-4 bg-white rounded-lg p-2 shadow-lg animate-float-delay-2">
                        <CheckCircle className="w-6 h-6 text-orange-500" />
                      </div>
                      <div className="absolute bottom-32 -left-8 bg-white rounded-lg p-2 shadow-lg animate-float">
                        <Trophy className="w-6 h-6 text-purple-500" />
                      </div>
                      <div className="absolute bottom-16 left-8 bg-white rounded-lg p-2 shadow-lg animate-float-delay-1">
                        <Clock className="w-6 h-6 text-blue-500" />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Background Decorative Elements */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-8 right-16 w-32 h-32 border border-white rounded-full"></div>
                  <div className="absolute bottom-8 left-16 w-24 h-24 border border-white rounded-full"></div>
                  <div className="absolute top-1/2 left-8 w-16 h-16 border border-white rounded-full"></div>
                </div>
              </div>
            </div>
        

          {/* Why Choose Us Section */}
          <div className="lg:py-20 py-12 bg-gray-50">
            <div className="container mx-auto lg:px-8 px-4 lg:py-20 py-0">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                <div className="lg:col-span-5 space-y-8">
                  <div className="lg:text-left text-center">
                    <span className="text-[#579db3] font-semibold lg:text-sm text-xs lg:text-left text-center tracking-wider uppercase">
                      Why Choose Us
                    </span>
                    <h2 className="lg:text-4xl text-2xl lg:text-left text-center font-bold text-gray-900 mt-4 leading-tight">
                      More Reasons to Choose Care Cycle Billing Services Company
                    </h2>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed lg:text-left text-center">
                    Choosing the right medical billing partner isn't just about outsourcing, it's about 
                    finding a trusted ally that understands the nuances of your practice. At Care Cycle 
                    Billing, we don't just process claims as projects – we approach revenue, reduce denials, 
                    and ensure every patient experience is reflected.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed lg:text-left text-center">
                    Our team operates as an extension of your front and back office, combining accuracy, 
                    speed, and compliance with regulatory care. What makes us different is how deeply we 
                    understand the needs of small practices and specialty providers. We offer real-time 
                    reporting, certified coding, and regulatory alignment that keeps your billing clean 
                    and your business growing.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 pt-4 lg:text-left text-center">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <feature.icon className="w-4 h-4 text-[#579db3]" />
                        </div>
                        <span className="text-gray-700 text-sm font-medium">
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="lg:col-span-7">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {services.map((service, index) => (
                      <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <service.icon className="w-6 h-6 text-[#579db3]" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                              {service.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              {service.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
      
      

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes float-delay-1 {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes float-delay-2 {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-delay-1 {
          animation: float-delay-1 3s ease-in-out infinite 1s;
        }

        .animate-float-delay-2 {
          animation: float-delay-2 3s ease-in-out infinite 2s;
        }
      `}</style>
    </>
  );
}

export default Cta;