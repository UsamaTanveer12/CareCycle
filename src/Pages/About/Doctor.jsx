import React from 'react'

function Doctor() {
  return (
    <>
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-[#579db3] text-lg font-medium">From Solo Clinics to Multi-State Groups</p>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">Built to Scale. Ready Wherever You Are</h2>
              </div>
              
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-[#579db3]" aria-hidden="true">
                        <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
                        <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
                        <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
                        <path d="M10 6h4"></path>
                        <path d="M10 10h4"></path>
                        <path d="M10 14h4"></path>
                        <path d="M10 18h4"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">All Practice Sizes Welcome</h3>
                      <p className="text-gray-700 leading-relaxed">From solo providers to multi-location groups, our solutions are tailored to fit your workflow, staffing, and growth stage. No one-size-fits-all, just what fits you best.</p>
                    </div>
                  </div>
                  <div className="w-full h-px bg-[#579db3] opacity-20 ml-20"></div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-[#eb2978]" aria-hidden="true">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Specialty-Focused Expertise</h3>
                      <p className="text-gray-700 leading-relaxed">Whether you're billing for podiatry, neurology, radiology, or primary care, we understand the coding rules, modifiers, and payer nuances that apply to your specialty.</p>
                    </div>
                  </div>
                  <div className="w-full h-px bg-[#579db3] opacity-20 ml-20"></div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-[#579db3]" aria-hidden="true">
                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Nationwide Payer Coverage</h3>
                      <p className="text-gray-700 leading-relaxed">We work with Medicare, Medicaid, and commercial insurers across all 50 states. Our team knows the regional rules and pre-auth policies that impact your bottom line.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="grid grid-rows-2 gap-6 h-120">
                <div className="relative h-120 rounded-2xl overflow-hidden">
                  <img alt="Medical team collaboration" className="w-full h-full object-cover" src="/assets/01.webp" />
                </div>
              </div>
              <div className="absolute bottom-8 left-8">
                <div className="bg-black text-white p-6 rounded-2xl shadow-xl max-w-xs">
                  <div className="text-4xl font-bold mb-2">99%</div>
                  <div className="text-lg font-semibold mb-3">Satisfied Clients</div>
                  <p className="text-gray-300 text-sm leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Doctor