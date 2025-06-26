import React from 'react'

function Para() {
  return (
    <div>
      <div 
        className="relative min-h-96 bg-fixed bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: 'url("/assets/paralex.webp")', 
          backgroundAttachment: 'fixed' 
        }}
      >
        <div className="absolute inset-0 bg-black/50 bg-opacity-60"></div>
        <div className="relative z-10 container mx-auto px-8 py-20">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <h2 className="text-2xl lg:text-3xl font-bold text-white leading-tight">
              Simplify Billing, Boost Your Collections, and Stay Fully Compliant With HIPAA
            </h2>
            <p className="text-white text-lg leading-relaxed opacity-90">
              Let's Build a smarter revenue cycle for your practice and get started with Care Cycle Billing today.
            </p>
            <div className="pt-4">
              <button className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Contact Us Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Para