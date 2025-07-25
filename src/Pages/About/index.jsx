import React from 'react';
import { useNavigate } from 'react-router-dom';
import Tabs from "./Tabs"
import Paralex from "./Paralex"
import Step from "./Step"
import Doctor from "./Doctor"
import ConsultationForm from '../Home/Form';
import { Button } from "../../components";

function About() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="relative bg-gradient-to-br from-blue-50 via-gray-50 to-blue-100 py-20" style={{backgroundImage: 'url("/assets/group.webp")', backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat'}}>
        <div className="absolute inset-0 bg-[#fefefe]/90 bg-opacity-80"></div>
        <div className="container mx-auto lg:px-8 px-4 relative z-10">
          <div className="text-center space-y-6">
            <p className="text-green-500 font-semibold text-lg tracking-wider">Built For Providers. Driven By Results.</p>
            <h1 className="text-2xl lg:text-4xl font-bold text-gray-900">About MediCycle Billing</h1>
            <div className="flex items-center justify-center gap-2 text-gray-700 mt-8">
              <span className="font-medium hover:text-green-500 transition-colors cursor-pointer">
                Home
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right w-4 h-4 text-gray-500" aria-hidden="true">
                <path d="m9 18 6-6-6-6"></path>
              </svg>
              <span className="font-medium">About Us</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="lg:py-20 py-12 bg-white">
        <div className="container mx-auto lg:px-8 px-4">
          <div className="text-center mb-16">
            <p className="text-[#579db3] text-lg font-medium mb-4">Where Accuracy, Compliance, and Results Come Standard</p>
            <h2 className="text-2xl lg:text-4xl font-bold text-gray-900">Built for Solo Providers. Trusted by Growing.</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden">
                <img alt="Medical team with doctor" className="w-full" src="/assets/about.webp" />
                <div className="absolute bottom-6 left-6">
                  <div className="bg-black bg-opacity-90 text-white p-6 rounded-lg">
                    <div className="text-2xl font-bold mb-1">100+</div>
                    <div className="text-lg font-medium">Practices</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                At MediCycle Billing, we understand that no two practices are alike. Whether you're a solo provider managing every detail or a multi-location group juggling multiple payers and specialties, our revenue cycle solutions scale to fit your workflow, not the other way around.
              </p>
              
              <p className="text-gray-700 text-lg leading-relaxed">
                Our team of certified coders, billing analysts, and A/R specialists become a true extension of your staff. From charge entry and insurance verification to denial resolution and real-time reporting, we handle it all with precision, speed, and transparency.
              </p>
              
              <div className="space-y-4 py-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#579db3] rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-700 text-lg">Tailored solutions for solo, group, and specialty practices</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#579db3] rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-700 text-lg">Aligned with HIPAA, OIG, CMS, and payer-specific rules</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#579db3] rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-700 text-lg">Identifying revenue risks before they cost your practice</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#579db3] rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-700 text-lg">Fast answers, clear communication and real time reporting</span>
                </div>
              </div>
              
              <p className="text-gray-700 text-lg leading-relaxed">
                We're here to make billing seamless, compliant, and profitable. With MediCycle Billing, you get paid faster, with fewer issues, and more freedom to focus on what truly matters: patient care.
              </p>
              
              <div className="pt-4">
                <Button onClick={() => navigate('/services')} size="large">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Tabs />  
      </div>
      <div>
        <Paralex />
      </div>
      <div>
        <Step />
      </div>
      <div>
        <Doctor />
      </div>
      <div>
        <ConsultationForm />
      </div>
    </div>
  )
}

export default About