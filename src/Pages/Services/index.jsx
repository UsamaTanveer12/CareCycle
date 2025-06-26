import React from 'react'
import { Link } from "react-router-dom"
import Services from "./Services"
import Para from "./Para"
import Accordian from "./Accordian"
import Accordion from "./Accordian"

function Service() {
  return (
    <>
    <div className="relative bg-gradient-to-br from-blue-50 via-gray-50 to-blue-100 py-20" style={{backgroundImage: 'url("/assets/service.webp")', backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat'}}>
        <div className="absolute inset-0 bg-[#fefefe]/90 bg-opacity-80"></div>
        <div className="container mx-auto lg:px-8 px-4 relative z-10">
          <div className="text-center space-y-6">
            <h1 className="text-2xl lg:text-4xl font-bold text-gray-900">Our Billing Services</h1>
            <div className="flex items-center justify-center gap-2 text-gray-700 mt-8">
              <Link to="/" className="font-medium hover:text-green-500 transition-colors cursor-pointer">
                Home
              </Link>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right w-4 h-4 text-gray-500" aria-hidden="true">
                <path d="m9 18 6-6-6-6"></path>
              </svg>
              <span className="font-medium">Services</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Services />
      </div>
      <div>
        <Para />
      </div>
      <div>
        <div class="py-20 bg-white"><div class="container mx-auto px-8"><div class="text-center mb-16"><h2 class="text-2xl lg:text-3xl font-bold text-gray-900">Enhance Your RCM Workflow With Specialized Support</h2></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"><div class="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"><div class="flex items-start justify-between mb-6"><h3 class="text-2xl font-bold text-gray-900 leading-tight pr-4">EHR/PM Software Setup &amp; Training</h3><span class="text-6xl font-bold text-[#4dd0e1] opacity-80 flex-shrink-0">01</span></div><p class="text-gray-700 leading-relaxed">We help you onboard, configure, and optimize your EHR or practice management system for efficient day-to-day use. Whether you're switching platforms or starting from scratch.</p></div><div class="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"><div class="flex items-start justify-between mb-6"><h3 class="text-2xl font-bold text-gray-900 leading-tight pr-4">Charge Entry &amp; Claim Submission</h3><span class="text-6xl font-bold text-[#4dd0e1] opacity-80 flex-shrink-0">02</span></div><p class="text-gray-700 leading-relaxed">Our billing experts ensure accurate and timely charge entry, validating against payer rules before clean claim submission. Every code, modifier, and unit is reviewed to avoid rejections.</p></div><div class="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"><div class="flex items-start justify-between mb-6"><h3 class="text-2xl font-bold text-gray-900 leading-tight pr-4">Payment Posting &amp; Revenue Reconciliation</h3><span class="text-6xl font-bold text-[#4dd0e1] opacity-80 flex-shrink-0">03</span></div><p class="text-gray-700 leading-relaxed">We post ERAs and EOBs with precision, reconcile payment gaps, and flag variances in real time. This ensures every posted transaction matches your expected reimbursement.</p></div><div class="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"><div class="flex items-start justify-between mb-6"><h3 class="text-2xl font-bold text-gray-900 leading-tight pr-4">Accounts Receivable (A/R) Management</h3><span class="text-6xl font-bold text-[#4dd0e1] opacity-80 flex-shrink-0">04</span></div><p class="text-gray-700 leading-relaxed">We actively track, follow up, and resolve aging claims across payers. Our approach shortens your payment cycle and improves cash flow with targeted A/R recovery strategies.</p></div><div class="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"><div class="flex items-start justify-between mb-6"><h3 class="text-2xl font-bold text-gray-900 leading-tight pr-4">End-to-End Denial Management</h3><span class="text-6xl font-bold text-[#4dd0e1] opacity-80 flex-shrink-0">05</span></div><p class="text-gray-700 leading-relaxed">Denials are analyzed, corrected, and appealed with urgency. Our team goes beyond resubmission by identifying trends and fixing the root causes that lead to repeat rejections.</p></div><div class="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"><div class="flex items-start justify-between mb-6"><h3 class="text-2xl font-bold text-gray-900 leading-tight pr-4">Eligibility and Benefit Verification</h3><span class="text-6xl font-bold text-[#4dd0e1] opacity-80 flex-shrink-0">06</span></div><p class="text-gray-700 leading-relaxed">We verify patient coverage and plan specifics before the visit, preventing eligibility-based denials and improving front-desk decision-making from day one to regular basis.</p></div></div></div></div>
      </div>
      <div>
        <Accordion />
      </div>
    </>
  )
}

export default Service