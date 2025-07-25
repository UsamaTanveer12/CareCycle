import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from "../../components";

function Para() {
  const navigate = useNavigate();
  
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
              Let's Build a smarter revenue cycle for your practice and get started with MediCycle Billing today.
            </p>
            <div className="pt-4">
              <Button 
                onClick={() => navigate('/contact')} 
                type="secondary"
              >
                Contact Us Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Para