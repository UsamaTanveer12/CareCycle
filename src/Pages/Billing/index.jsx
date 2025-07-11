import React from 'react';
import CounterSection from "./counter";
import About from "./About";
import Services from "./Services";
import MedicalBillingLanding from "./Other";
import { Button } from "../../components";
import ConsultationForm from '../Home/Form';

function Billing() {
  return (
    <>
    <div className="relative bg-gradient-to-br from-blue-50 via-gray-50 to-blue-100 py-20" 
         style={{
           backgroundImage: 'url("/assets/group.webp")', 
           backgroundSize: 'cover', 
           backgroundPosition: 'center center', 
           backgroundRepeat: 'no-repeat'
         }}>
      <div className="absolute inset-0 bg-[#fefefe]/90 bg-opacity-80"></div>
      
      <div className="container mx-auto px-8 relative z-10">
        {/* Two Column Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Column - Content */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Medical Billing Services For{' '}
              <span style={{ color: '#579db3' }}>Small Practssices</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Your small practice runs on care, not claims, but billing headaches are stealing 
              your time and profits. Denied claims, slow reimbursements, and endless 
              paperwork shouldn't hold you back. Care Cycle Billing LLC secures your 
              revenue reliably and efficiently so you can get back to medicine, not paperwork.
            </p>
            <Button size="large">
              Claim Your Free Audit
            </Button>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center lg:justify-end -mb-20">
            <div className="relative">
              <img 
                src="/assets/medical.webp" 
                alt="Medical Professional" 
                className="w-full max-w-md h-auto"
              />
            </div>
          </div>
        </div>
      </div>
     
    </div>
     <div>
        <CounterSection />
      </div>

      <div>
        <About />
      </div>
      <div>
        <Services />
      </div>
      <div>
        <ConsultationForm />
      </div>
      
      
      
      
      </>
  );
}

export default Billing;