import React, { useState } from 'react'
import Button from '../../components/Button'

function Accordion() {
  const [openIndex, setOpenIndex] = useState(0) // First item open by default

  const accordionData = [
    {
      title: "We Own the Entire Billing Lifecycle",
      content: "From verifying patient insurance at the front desk to resolving payer disputes months later, we don't just process claims. We manage outcomes. Our team handles every step with precision and accountability so nothing falls through the cracks."
    },
    {
      title: "You Get a RCM Certified Team",
      content: "Our Revenue Cycle Management certified professionals bring years of expertise in medical billing, coding, and compliance. Each team member is thoroughly trained and certified to handle the complexities of modern healthcare billing."
    },
    {
      title: "Faster, Cleaner, Smarter Claims",
      content: "We leverage advanced technology and proven processes to submit cleaner claims with higher first-pass rates. Our smart claim scrubbing reduces denials and accelerates your revenue cycle."
    },
    {
      title: "We Work With Your EMR to Improve RCM Flow",
      content: "Seamless integration with your existing Electronic Medical Records system ensures smooth data flow and eliminates manual entry errors. We optimize your RCM workflow within your current technology stack."
    },
    {
      title: "Real-Time Reporting That Keeps You Ahead",
      content: "Access comprehensive dashboards and real-time analytics that provide insights into your practice's financial health. Make informed decisions with up-to-date reporting on key performance indicators."
    },
    {
      title: "Dedicated to Compliance & Audit Readiness",
      content: "Stay compliant with ever-changing regulations including HIPAA, Medicare, and Medicaid requirements. Our compliance experts ensure your practice is always audit-ready with proper documentation and processes."
    },
    {
      title: "We Act as Your Success Team",
      content: "More than just a billing service, we're your strategic partner in practice growth. Our dedicated account managers work closely with you to identify opportunities and optimize your revenue potential."
    }
  ]

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <>
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-[#579db3] text-lg font-semibold tracking-wider uppercase">
                  WHY CHOOSE US
                </p>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                  From First Check-In to Final Payment, We've Got It Covered
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-gray-700 text-lg leading-relaxed">
                  MediCycle Billing provides end-to-end billing support with RCM expert behind every claim, code, and collection. From insurance verification to denial recovery, our team takes full ownership of the billing process so nothing gets lost in handoffs, and your practice gets paid to the patient services.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  What sets us apart is how seamlessly we integrate into your systems. We work within your EHR, follow your clinical workflows, and align with your financial goals. Bringing certified coders, AR analysts, and compliance experts who function as an extension of your team. Schedule a quick call with your RCM expert today.
                </p>
              </div>
              <div className="pt-4">
                <Button onClick={() => window.location.href = '/contact'} size="large" className="flex gap-2">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="lucide lucide-phone w-5 h-5" 
                    aria-hidden="true"
                  >
                    <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1 2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
                  </svg>
                  SPEAK TO AN EXPERT TODAY
                </Button>
              </div>
            </div>
            
            <div className="space-y-4">
              {accordionData.map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                  <button 
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => toggleAccordion(index)}
                  >
                    <span className="text-lg font-semibold text-gray-900 pr-4">
                      {item.title}
                    </span>
                    <div className="flex-shrink-0">
                      {openIndex === index ? (
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="24" 
                          height="24" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          className="lucide lucide-minus w-5 h-5 text-gray-600" 
                          aria-hidden="true"
                        >
                          <path d="M5 12h14"></path>
                        </svg>
                      ) : (
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="24" 
                          height="24" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          className="lucide lucide-plus w-5 h-5 text-gray-600" 
                          aria-hidden="true"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5v14"></path>
                        </svg>
                      )}
                    </div>
                  </button>
                  {openIndex === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-700 leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Accordion