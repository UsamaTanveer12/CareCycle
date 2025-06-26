import React, { useState, useEffect, useRef } from 'react';
import { FileText, CheckCircle, FileCheck, Users, ArrowRight, Shield, Clock, TrendingUp, Star, Phone, Mail, MapPin } from 'lucide-react';

// Counter Section Component
function CounterSection() {
  const [counters, setCounters] = useState({
    hours: 0,
    denial: 0,
    clean: 0,
    rcm: 0
  });
  
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const animateCounter = (start, end, duration, key) => {
    const startTime = performance.now();
    
    const updateCounter = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(start + (end - start) * easeOutQuart);
      
      setCounters(prev => ({
        ...prev,
        [key]: currentValue
      }));
      
      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };
    
    requestAnimationFrame(updateCounter);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          
          setTimeout(() => animateCounter(0, 24, 2000, 'hours'), 100);
          setTimeout(() => animateCounter(0, 95, 2500, 'denial'), 300);
          setTimeout(() => animateCounter(0, 99, 2800, 'clean'), 500);
          setTimeout(() => animateCounter(0, 100, 3000, 'rcm'), 700);
        }
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  return (
    <div className="py-20 bg-gradient-to-br from-slate-50 to-[#579db3]/5 relative overflow-hidden" ref={sectionRef}>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#579db3] rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#579db3] rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Proven Results That <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#579db3] to-[#cf1a70]">Drive Success</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our track record speaks for itself. See why hundreds of practices trust us with their revenue cycle management.
            </p>
          </div>

          {/* Stats Grid */}
          <div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 transform transition-all duration-1000"
            style={{ 
              transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.95)',
              opacity: isVisible ? 1 : 0
            }}
          >
            {/* 24Hr Billing Monitoring */}
            <div className="text-center group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-gradient-to-br from-[#579db3] to-[#4a8ba3] rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="text-4xl lg:text-5xl font-bold mb-3 text-gray-900">
                  {counters.hours}<span className="text-2xl text-[#579db3]">Hr</span>
                </div>
                <div className="text-gray-600 font-medium">
                  Billing Monitoring
                </div>
                <div className="mt-4 h-1 bg-gradient-to-r from-[#579db3] to-[#4a8ba3] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </div>

            {/* 95% Denial Recovery */}
            <div className="text-center group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-gradient-to-br from-[#579db3] to-[#4a8ba3] rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="text-4xl lg:text-5xl font-bold mb-3 text-gray-900">
                  {counters.denial}<span className="text-2xl text-[#579db3]">%</span>
                </div>
                <div className="text-gray-600 font-medium">
                  Denial Recovery
                </div>
                <div className="mt-4 h-1 bg-gradient-to-r from-[#579db3] to-[#4a8ba3] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </div>

            {/* 99% Clean Claim Rate */}
            <div className="text-center group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-gradient-to-br from-[#cf1a70] to-[#b71562] rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <FileCheck className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="text-4xl lg:text-5xl font-bold mb-3 text-gray-900">
                  {counters.clean}<span className="text-2xl text-[#cf1a70]">%</span>
                </div>
                <div className="text-gray-600 font-medium">
                  Clean Claim Rate
                </div>
                <div className="mt-4 h-1 bg-gradient-to-r from-[#cf1a70] to-[#b71562] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </div>

            {/* 100% RCM Coverage */}
            <div className="text-center group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-gradient-to-br from-[#579db3] to-[#4a8ba3] rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="text-4xl lg:text-5xl font-bold mb-3 text-gray-900">
                  {counters.rcm}<span className="text-2xl text-[#579db3]">%</span>
                </div>
                <div className="text-gray-600 font-medium">
                  RCM Coverage
                </div>
                <div className="mt-4 h-1 bg-gradient-to-r from-[#579db3] to-[#4a8ba3] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CounterSection;