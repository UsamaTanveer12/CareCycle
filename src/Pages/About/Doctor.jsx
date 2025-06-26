import React from 'react'

function Doctor() {
  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#579db3]" aria-hidden="true">
          <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
          <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
          <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
          <path d="M10 6h4"></path>
          <path d="M10 10h4"></path>
          <path d="M10 14h4"></path>
          <path d="M10 18h4"></path>
        </svg>
      ),
      title: "All Practice Sizes Welcome",
      description: "From solo providers to multi-location groups, our solutions are tailored to fit your workflow, staffing, and growth stage. No one-size-fits-all, just what fits you best.",
      color: "#579db3"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#eb2978]" aria-hidden="true">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
          <circle cx="9" cy="7" r="4"></circle>
        </svg>
      ),
      title: "Specialty-Focused Expertise",
      description: "Whether you're billing for podiatry, neurology, radiology, or primary care, we understand the coding rules, modifiers, and payer nuances that apply to your specialty.",
      color: "#eb2978"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#579db3]" aria-hidden="true">
          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      ),
      title: "Nationwide Payer Coverage",
      description: "We work with Medicare, Medicaid, and commercial insurers across all 50 states. Our team knows the regional rules and pre-auth policies that impact your bottom line.",
      color: "#579db3"
    }
  ];

  return (
    <>
      <div className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            
            {/* Content Section - Responsive */}
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
              {/* Header */}
              <div className="space-y-3 sm:space-y-4 text-center lg:text-left">
                <p className="text-[#579db3] text-base sm:text-lg font-medium">
                  From Solo Clinics to Multi-State Groups
                </p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Built to Scale. Ready Wherever You Are
                </h2>
              </div>
              
              {/* Features List - Responsive */}
              <div className="space-y-6 sm:space-y-8">
                {features.map((feature, index) => (
                  <div key={index} className="space-y-3 sm:space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
                      {/* Icon Container - Responsive */}
                      <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white rounded-lg shadow-md flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
                        {feature.icon}
                      </div>
                      
                      {/* Content */}
                      <div className="text-center sm:text-left flex-1">
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                          {feature.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Divider Line - Responsive positioning */}
                    {index < features.length - 1 && (
                      <div className="w-full h-px bg-[#579db3] opacity-20 sm:ml-14 lg:ml-20"></div>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile CTA Section */}
              <div className="lg:hidden bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="text-center space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">Ready to Get Started?</h3>
                  <p className="text-gray-600 text-sm">
                    Join practices nationwide who trust us with their revenue cycle.
                  </p>
                  <button className="w-full bg-[#579db3] hover:bg-[#4a8ba0] text-white font-semibold py-3 px-6 rounded-full transition-all duration-300">
                    Schedule Consultation
                  </button>
                </div>
              </div>
            </div>
            
            {/* Image Section - Responsive */}
            <div className="relative order-1 lg:order-2">
              <div className="relative">
                {/* Main Image Container - Responsive height */}
                <div className="relative h-64 sm:h-80 md:h-96 lg:h-120 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    alt="Medical team collaboration" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                    src="/assets/01.webp" 
                  />
                  
                  {/* Gradient Overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                </div>
                
                {/* Stats Card - Responsive positioning and sizing */}
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 lg:bottom-8 lg:left-8">
                  <div className="bg-black/90 backdrop-blur-sm text-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-xl max-w-xs">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2 text-[#579db3]">
                      99%
                    </div>
                    <div className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">
                      Satisfied Clients
                    </div>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                      Trusted by healthcare providers nationwide for reliable revenue cycle management.
                    </p>
                  </div>
                </div>

                {/* Additional Decorative Elements - Hide on mobile */}
                <div className="hidden lg:block absolute -top-4 -right-4 w-20 h-20 bg-[#579db3] rounded-full opacity-10"></div>
                <div className="hidden lg:block absolute -bottom-4 -right-4 w-12 h-12 bg-[#eb2978] rounded-full opacity-15"></div>
              </div>

              {/* Additional Stats - Tablet and Desktop */}
              <div className="hidden sm:grid grid-cols-2 gap-4 mt-6 lg:mt-8">
                <div className="bg-white rounded-lg p-4 shadow-md text-center">
                  <div className="text-2xl font-bold text-[#579db3] mb-1">15+</div>
                  <div className="text-sm text-gray-600">Specialties Served</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-md text-center">
                  <div className="text-2xl font-bold text-[#eb2978] mb-1">24h</div>
                  <div className="text-sm text-gray-600">Average Turnaround</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Trust Section - Mobile Only */}
          <div className="sm:hidden mt-12 grid grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4 shadow-md text-center">
              <div className="text-xl font-bold text-[#579db3] mb-1">15+</div>
              <div className="text-xs text-gray-600">Specialties</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md text-center">
              <div className="text-xl font-bold text-[#eb2978] mb-1">24h</div>
              <div className="text-xs text-gray-600">Turnaround</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md text-center">
              <div className="text-xl font-bold text-[#579db3] mb-1">50</div>
              <div className="text-xs text-gray-600">States</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Doctor