import React from 'react'

function Services() {
  return (
    <>
      <div className="py-20 bg-white">
        <div className="container mx-auto px-8">
          <div className="space-y-32">
            {/* Medical Billing and Revenue Cycle Management */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                  Medical Billing and Revenue Cycle Management (RCM)
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  From appointment to payment, Care Cycle Billing manages your entire revenue cycle, 
                  eligibility checks, coding, scrubbing, claim submission, patient denials, and reporting.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  We reduce delays, fix rejections fast, and optimize every step for clean claims and CareCycle cash flow.
                </p>
                <div className="flex items-center gap-3 pt-4">
                  <div className="text-2xl">💰</div>
                  <span className="text-xl font-semibold text-gray-900">Let's streamline your revenue!</span>
                </div>
              </div>
              <div className="flex justify-center">
                <img 
                  alt="Medical Billing and Revenue Cycle Management illustration" 
                  className="w-full max-w-lg h-auto object-contain" 
                  src="/assets/service1.webp" 
                />
              </div>
            </div>

            {/* Automated Provider Credentialing and Enrollment */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="flex justify-center lg:order-1">
                <img 
                  alt="Automated Provider Credentialing and Enrollment illustration" 
                  className="w-full max-w-lg h-auto object-contain" 
                  src="/assets/service2.webp" 
                />
              </div>
              <div className="space-y-6 lg:order-2">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                  Automated Provider Credentialing and Enrollment
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  We simplify provider onboarding by automating the entire credentialing and enrollment process. 
                  From NPI setup to Medicare, Medicaid, and commercial payer enrollment, we handle every step accurately.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  With CareCycle, your providers get credentialed faster, and your revenue starts flowing sooner.
                </p>
                <div className="flex items-center gap-3 pt-4">
                  <div className="text-2xl">📋</div>
                  <span className="text-xl font-semibold text-gray-900">Let's Simplify Enrollment.</span>
                </div>
              </div>
            </div>

            {/* Patient Billing and Collection Hub */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                  Patient Billing and Collection Hub
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  We simplify the payment experience for patients while helping you collect more faster. 
                  From easy-to-read bills to automated reminders and secure payment portals, we reduce confusion, disputes, and delays.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Patients get clarity. You get paid.
                </p>
                <div className="flex items-center gap-3 pt-4">
                  <div className="text-2xl">⏰</div>
                  <span className="text-xl font-semibold text-gray-900">Upgrade your patient billing.</span>
                </div>
              </div>
              <div className="flex justify-center">
                <img 
                  alt="Patient Billing and Collection Hub illustration" 
                  className="w-full max-w-lg h-auto object-contain" 
                  src="/assets/service3.webp" 
                />
              </div>
            </div>

            {/* Virtual Front Desk 2.0 Powered by AI */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="flex justify-center lg:order-1">
                <img 
                  alt="Virtual Front Desk 2.0 Powered by AI illustration" 
                  className="w-full max-w-lg h-auto object-contain" 
                  src="/assets/service4.webp" 
                />
              </div>
              <div className="space-y-6 lg:order-2">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                  Virtual Front Desk 2.0 Powered by AI
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  From scheduling and eligibility checks to patient reminders and intake, our AI-powered front desk 
                  works 24/7 to streamline operations, reduce no-shows, and keep your staff focused on care.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  It's more than virtual. It's intelligent, reliable, and always on.
                </p>
                <div className="flex items-center gap-3 pt-4">
                  <div className="text-2xl">🤖</div>
                  <span className="text-xl font-semibold text-gray-900">Let's get started!</span>
                </div>
              </div>
            </div>

            {/* Additional Patient Billing and Collection Hub Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                  Patient Billing and Collection Hub
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  We simplify the payment experience for patients while helping you collect more faster. 
                  From easy-to-read bills to automated reminders and secure payment portals, we reduce confusion, disputes, and delays.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Patients get clarity. You get paid.
                </p>
                <div className="flex items-center gap-3 pt-4">
                  <div className="text-2xl">⏰</div>
                  <span className="text-xl font-semibold text-gray-900">Upgrade your patient billing.</span>
                </div>
              </div>
              <div className="flex justify-center">
                <img 
                  alt="Patient Billing and Collection Hub illustration" 
                  className="w-full max-w-lg h-auto object-contain" 
                  src="/assets/service5.webp" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services