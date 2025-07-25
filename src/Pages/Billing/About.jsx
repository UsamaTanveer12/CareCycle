import { ArrowRight, CheckCircle, TrendingUp, Stethoscope, Heart, Activity } from "lucide-react";
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const benefits = [
    "We recover 95% of denied claims",
    "See exactly where your revenue is leaking", 
    "Regular CMS and Coding Updates",
    "Out-of-the-Box Integration"
  ];

  return (
    <div className="py-20 bg-white relative overflow-hidden" ref={sectionRef}>
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#579db3] rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#579db3]/70 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - New Doctor Design */}
            <div className={`relative transform transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <div className="relative w-full max-w-lg mx-auto">
                
                {/* Main hexagonal container */}
                <div className="relative">
                  {/* Outer rotating ring */}
                  <div className="absolute inset-0 animate-spin" style={{animationDuration: '20s'}}>
                    <div className="w-full h-full border-4 border-dashed border-[#579db3]/30 rounded-full opacity-30"></div>
                  </div>
                  
                  {/* Middle pulsing ring */}
                  <div className="absolute inset-8 animate-pulse">
                    <div className="w-full h-full border-3 border-[#579db3]/50 rounded-full"></div>
                  </div>
                  
                  {/* Inner container with glassmorphism effect */}
                  <div className="relative bg-gradient-to-br from-white/80 to-[#579db3]/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
                    
                    {/* Medical cross background pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-8 bg-[#579db3] rounded-full"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-32 bg-[#579db3] rounded-full"></div>
                    </div>
                    
                    {/* Main doctor avatar */}
                    <div className="relative w-72 h-72 bg-gradient-to-br from-[#579db3] to-[#4a8ba3] rounded-full flex items-center justify-center mx-auto shadow-inner">
                      <div className="w-60 h-60 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <div className="text-8xl">👨‍⚕️</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating medical icons */}
                  <div className="absolute -top-6 left-1/4 bg-white rounded-2xl p-3 shadow-xl border border-gray-100 animate-bounce">
                    <Stethoscope className="w-6 h-6 text-[#579db3]" />
                  </div>
                  
                  <div className="absolute top-1/4 -right-8 bg-white rounded-2xl p-3 shadow-xl border border-gray-100 animate-bounce" style={{animationDelay: '0.5s'}}>
                    <Heart className="w-6 h-6 text-[#579db3]" />
                  </div>
                  
                  <div className="absolute -bottom-8 left-1/3 bg-white rounded-2xl p-3 shadow-xl border border-gray-100 animate-bounce" style={{animationDelay: '1s'}}>
                    <Activity className="w-6 h-6 text-[#579db3]" />
                  </div>
                  
                  {/* Status indicators */}
                  <div className="absolute top-8 -left-4 bg-gradient-to-r from-[#579db3] to-[#4a8ba3] rounded-full px-4 py-2 shadow-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                      <span className="text-white text-sm font-bold">Online</span>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-8 -right-4 bg-gradient-to-r from-[#579db3] to-[#4a8ba3] rounded-full px-4 py-2 shadow-lg">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-white" />
                      <span className="text-white text-sm font-bold">95% Success</span>
                    </div>
                  </div>
                </div>
                
                {/* Decorative particles */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#579db3] rounded-full animate-ping" style={{animationDelay: '0s'}}></div>
                  <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-[#579db3]/70 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
                  <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-[#579db3]/50 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
                </div>
              </div>
            </div>
            
            {/* Right side - Content */}
            <div className={`space-y-8 transform transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <div>
                <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 leading-tight mb-6">
                  Medical Billing That 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#579db3] to-[#4a8ba3]"> Works</span> For Your Small Practice
                </h2>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  You didn't go into medicine to fight with insurance claims. Yet here you are, drowning in paperwork, errors, and watching 15-30% of your revenue fall through the cracks. MediCycle Billing helps small practices because we understand your unique challenges.
                </p>
              </div>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className={`flex items-center gap-4 transform transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                    style={{transitionDelay: `${500 + index * 100}ms`}}
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-[#579db3] to-[#4a8ba3] rounded-full flex items-center justify-center shadow-lg">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="pt-4">
                <p className="text-lg text-gray-600 mb-8 font-medium">
                  This isn't just "billing services" - this is the roadmap to your practice's financial success.
                </p>
                
                <button 
                  onClick={() => navigate('/contact')} 
                  className="group bg-gradient-to-r from-[#579db3] to-[#4a8ba3] text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 cursor-pointer"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;