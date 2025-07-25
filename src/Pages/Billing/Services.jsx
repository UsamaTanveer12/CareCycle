import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FileText, 
  Layers, 
  DollarSign, 
  TrendingUp, 
  CheckCircle, 
  XCircle, 
  Shield, 
  Users,
  ArrowRight,
  Sparkles
} from 'lucide-react';

function Services() {
  const navigate = useNavigate();
  const [activeService, setActiveService] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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

  // Auto-cycle through services
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      icon: FileText,
      title: "Precision Claim Submission",
      description: "Submit every claim with 99.5% accuracy, ensuring instant payer acceptance and faster payments",
      color: "#579db3",
      bgGradient: "from-[#579db3] to-[#4a8ba3]",
      lightBg: "bg-[#579db3]/10",
      stats: "99.5% Accuracy"
    },
    {
      icon: Layers,
      title: "Intelligent Charge Capture",
      description: "We catch under-coded services and missing charges, increasing practice revenue by 15-25%",
      color: "#579db3",
      bgGradient: "from-[#579db3] to-[#4a8ba3]",
      lightBg: "bg-[#579db3]/10",
      stats: "15-25% Revenue Boost"
    },
    {
      icon: DollarSign,
      title: "A/R Recovery & Clean-Up",
      description: "We recover aging and unpaid claims other billers leave behind, without slowing your cash flow",
      color: "#579db3",
      bgGradient: "from-[#579db3] to-[#4a8ba3]",
      lightBg: "bg-[#579db3]/10",
      stats: "90%+ Recovery Rate"
    },
    {
      icon: TrendingUp,
      title: "Transparent Performance Analytics",
      description: "You get monthly reports showing exactly where money is leaking and how we're fixing it - no sugarcoating",
      color: "#579db3",
      bgGradient: "from-[#579db3] to-[#4a8ba3]",
      lightBg: "bg-[#579db3]/10",
      stats: "Real-time Insights"
    },
    {
      icon: CheckCircle,
      title: "Eligibility & Benefits Verification",
      description: "Verify coverage & benefits before the visit, reducing claim rejections & avoiding surprise denials",
      color: "#579db3",
      bgGradient: "from-[#579db3] to-[#4a8ba3]",
      lightBg: "bg-[#579db3]/10",
      stats: "Pre-visit Verification"
    },
    {
      icon: XCircle,
      title: "Denial Management",
      description: "Our team chases down every denial, recovering 95%+ of lost revenue through expert appeals",
      color: "#579db3",
      bgGradient: "from-[#579db3] to-[#4a8ba3]",
      lightBg: "bg-[#579db3]/10",
      stats: "95%+ Recovery"
    },
    {
      icon: Shield,
      title: "Compliance-First Approach",
      description: "We keep you constantly updated on coding knowledge & rigorous documentation standards",
      color: "#579db3",
      bgGradient: "from-[#579db3] to-[#4a8ba3]",
      lightBg: "bg-[#579db3]/10",
      stats: "100% Compliant"
    },
    {
      icon: Users,
      title: "Patient-Friendly Billing",
      description: "We boost patient payments and cut collection costs with clear, flexible options",
      color: "#579db3",
      bgGradient: "from-[#579db3] to-[#4a8ba3]",
      lightBg: "bg-[#579db3]/10",
      stats: "Higher Collections"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 py-20 px-8 relative overflow-hidden" ref={sectionRef}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#579db3]/20 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#579db3]/15 rounded-full blur-3xl opacity-25 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#579db3]/10 rounded-full blur-3xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 bg-[#579db3]/10 px-6 py-3 rounded-full mb-6">
            <Sparkles className="w-5 h-5 text-[#579db3]" />
            <span className="text-[#579db3] font-semibold">Complete RCM Solution</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gray-900">Medical Billing</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#579db3] to-[#4a8ba3]">
              Reimagined
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            At MediCycle Billing LLC, we don't just process claims — we optimize every step of your revenue cycle 
            to maximize collections and minimize headaches. Our cutting-edge approach combines technology with deep healthcare expertise.
          </p>
        </div>

        {/* Interactive Services Showcase */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left - Featured Service Display */}
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="relative">
              {/* Main featured card */}
              <div className={`relative p-8 rounded-3xl shadow-2xl transform transition-all duration-500 ${services[activeService].lightBg} border border-white/50`}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent rounded-3xl"></div>
                
                <div className="relative z-10">
                  <div className={`w-20 h-20 bg-gradient-to-r ${services[activeService].bgGradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                    {React.createElement(services[activeService].icon, {
                      className: "w-10 h-10 text-white"
                    })}
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {services[activeService].title}
                  </h3>
                  
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {services[activeService].description}
                  </p>
                  
                  <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${services[activeService].bgGradient} text-white px-6 py-3 rounded-full font-semibold shadow-lg`}>
                    <TrendingUp className="w-5 h-5" />
                    {services[activeService].stats}
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center animate-bounce">
                <Sparkles className="w-6 h-6 text-yellow-500" />
              </div>
            </div>
          </div>

          {/* Right - Service Navigation */}
          <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="space-y-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`relative p-4 rounded-2xl cursor-pointer transition-all duration-300 group ${
                    index === activeService 
                      ? `${service.lightBg} shadow-lg scale-105` 
                      : 'bg-white/50 hover:bg-white/80 hover:shadow-md'
                  }`}
                  onClick={() => setActiveService(index)}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      index === activeService 
                        ? `bg-gradient-to-r ${service.bgGradient} text-white shadow-lg` 
                        : `${service.lightBg} text-[#579db3]`
                    }`}>
                      {React.createElement(service.icon, {
                        className: "w-6 h-6"
                      })}
                    </div>
                    
                    <div className="flex-1">
                      <h4 className={`font-semibold transition-colors duration-300 ${
                        index === activeService ? 'text-gray-900' : 'text-gray-700'
                      }`}>
                        {service.title}
                      </h4>
                      <p className="text-sm text-gray-500">{service.stats}</p>
                    </div>
                    
                    <ArrowRight className={`w-5 h-5 transition-all duration-300 ${
                      index === activeService ? 'text-gray-900 translate-x-1' : 'text-gray-400 group-hover:translate-x-1'
                    }`} />
                  </div>
                  
                  {/* Progress bar */}
                  {index === activeService && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200 rounded-b-2xl overflow-hidden">
                      <div className={`h-full bg-gradient-to-r ${service.bgGradient} animate-pulse`}></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className={`text-center transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-gradient-to-r from-[#579db3] via-[#4a8ba3]/90 to-[#579db3]/60 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your Revenue Cycle?
              </h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join hundreds of practices already maximizing their revenue with our comprehensive solution.
              </p>
              
              <button 
                onClick={() => navigate('/contact')} 
                className="group bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 mx-auto cursor-pointer"
              >
                Start Your Success Story
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-6 right-6 w-24 h-24 border-2 border-white/20 rounded-full"></div>
            <div className="absolute bottom-6 left-6 w-16 h-16 border-2 border-white/20 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;