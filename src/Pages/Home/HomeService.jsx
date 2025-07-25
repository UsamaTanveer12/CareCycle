import React from 'react';
import { Card } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Button } from "../../components";
import { 
  Activity, 
  UserCheck, 
  MessageCircle, 
  AlertCircle,
  Brain,
  Heart,
  Smile,
  Zap,
  Bone
} from 'lucide-react';

const MedicalBillingServices = () => {
  const navigate = useNavigate();
  const specialties = [
    {
      title: "Physical Therapy",
      icon: <Activity className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
    },
    {
      title: "Occupational Therapy",
      icon: <UserCheck className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
    },
    {
      title: "Speech Therapy",
      icon: <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
    },
    {
      title: "Urgent Care",
      icon: <AlertCircle className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
    },
    {
      title: "Psychology",
      icon: <Brain className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
    },
    {
      title: "Psychiatry",
      icon: <Brain className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
    },
    {
      title: "Behavioral Health",
      icon: <Smile className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
    },
    {
      title: "Neurology",
      icon: <Zap className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
    },
    {
      title: "Orthopedics",
      icon: <Bone className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
    },
    {
      title: "Urogynecology",
      icon: <Heart className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)' }}>
      {/* Decorative Background Elements - Responsive */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large Circle - Responsive positioning */}
        <div 
          className="absolute -top-20 -right-20 sm:-top-32 sm:-right-32 lg:-top-40 lg:-right-40 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 rounded-full opacity-10"
          style={{ backgroundColor: '#579db3' }}
        />
        {/* Medium Circle - Responsive positioning */}
        <div 
          className="absolute top-1/2 -left-10 sm:-left-16 lg:-left-20 w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full opacity-15"
          style={{ backgroundColor: '#579db3' }}
        />
        {/* Small Circles - Hide on mobile, show on larger screens */}
        <div 
          className="hidden sm:block absolute bottom-20 right-1/4 w-12 h-12 lg:w-16 lg:h-16 rounded-full opacity-20"
          style={{ backgroundColor: '#579db3' }}
        />
        <div 
          className="hidden sm:block absolute top-1/4 left-1/3 w-6 h-6 lg:w-8 lg:h-8 rounded-full opacity-25"
          style={{ backgroundColor: '#579db3' }}
        />
        
        {/* Medical Cross Pattern - Responsive sizing */}
        <div className="absolute top-5 left-5 sm:top-10 sm:left-10">
          <div 
            className="w-4 h-12 sm:w-6 sm:h-20 opacity-5 rounded-full"
            style={{ backgroundColor: '#579db3' }}
          />
          <div 
            className="w-12 h-4 sm:w-20 sm:h-6 opacity-5 rounded-full absolute top-4 -left-4 sm:top-7 sm:-left-7"
            style={{ backgroundColor: '#579db3' }}
          />
        </div>
        
        {/* DNA Helix Pattern - Hide on mobile */}
        <div className="hidden md:block absolute bottom-40 right-10 opacity-5">
          <svg width="60" height="120" viewBox="0 0 60 120" fill="none">
            <path d="M30 0 Q45 15 30 30 Q15 45 30 60 Q45 75 30 90 Q15 105 30 120" 
                  stroke="#579db3" strokeWidth="4" fill="none"/>
            <path d="M30 0 Q15 15 30 30 Q45 45 30 60 Q15 75 30 90 Q45 105 30 120" 
                  stroke="#579db3" strokeWidth="4" fill="none"/>
          </svg>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20">
        {/* Header Section with Responsive Typography */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-block relative">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 relative leading-tight">
              <span className="block sm:inline">Specialty Focused</span>
              <br className="hidden sm:block" />
              <span className="block sm:inline" style={{ color: '#579db3' }}>Medical Billing Services</span>
              
              {/* Decorative Line - Responsive sizing */}
              <div 
                className="absolute -bottom-2 sm:-bottom-4 left-1/2 transform -translate-x-1/2 h-0.5 sm:h-1 w-16 sm:w-20 lg:w-24 rounded-full"
                style={{ backgroundColor: '#579db3' }}
              />
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto relative px-4 sm:px-0">
            <p className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed">
              At MediCycle Billing, we don't believe in one-size-fits-all. Every specialty has its own codes, compliance needs, and payer rules. We provide specialty-specific billing services that align with your clinical workflow.
            </p>
          </div>
        </div>

        {/* Specialties Grid - Fully Responsive */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {specialties.map((specialty, index) => (
            <div key={index} className="relative group">
              {/* Card Shadow Effect - Responsive */}
              <div 
                className="absolute inset-0 rounded-xl sm:rounded-2xl opacity-20 transform translate-y-1 sm:translate-y-2"
                style={{ backgroundColor: '#579db3' }}
              />
              
              <Card
                className="relative rounded-xl sm:rounded-2xl border-0 shadow-lg sm:shadow-xl overflow-hidden transition-transform duration-300 hover:scale-105"
                bodyStyle={{ padding: '1rem 0.75rem sm:1.5rem md:2rem lg:2.5rem 1.5rem' }}
                style={{ 
                  background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <div className="text-center relative">
                  {/* Icon Container with Responsive Sizing */}
                  <div className="relative mb-3 sm:mb-4 lg:mb-6">
                    {/* Outer Ring - Responsive sizing */}
                    <div 
                      className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full mx-auto flex items-center justify-center relative"
                      style={{ backgroundColor: '#579db3' }}
                    >
                      {/* Inner Glow */}
                      <div 
                        className="absolute inset-1 sm:inset-2 rounded-full opacity-30"
                        style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
                      />
                      
                      {/* Icon */}
                      <div className="relative z-10">
                        {specialty.icon}
                      </div>
                    </div>
                    
                    {/* Decorative Dots - Responsive */}
                    <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2">
                      <div 
                        className="w-2 h-2 sm:w-3 sm:h-3 rounded-full opacity-60"
                        style={{ backgroundColor: '#579db3' }}
                      />
                    </div>
                    <div className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2">
                      <div 
                        className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full opacity-40"
                        style={{ backgroundColor: '#579db3' }}
                      />
                    </div>
                  </div>
                  
                  {/* Title with Responsive Typography */}
                  <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-800 leading-tight relative px-1">
                    <span className="block">{specialty.title}</span>
                    
                    {/* Underline Effect - Responsive */}
                    <div 
                      className="absolute -bottom-1 sm:-bottom-2 left-1/2 transform -translate-x-1/2 h-0.5 w-6 sm:w-8 rounded-full opacity-50"
                      style={{ backgroundColor: '#579db3' }}
                    />
                  </h3>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Enhanced Call to Action Section - Responsive */}
        <div className="text-center relative px-4 sm:px-0">
          {/* Background Decoration */}
          <div 
            className="absolute inset-0 rounded-2xl sm:rounded-3xl opacity-5 transform -skew-y-1"
            style={{ backgroundColor: '' }}
          />
          
          <div className="relative z-10 py-8 sm:py-10 lg:py-12">
            <p className="text-gray-600 text-base sm:text-lg max-w-4xl mx-auto mb-6 sm:mb-8 lg:mb-10 leading-relaxed">
              Our specialized approach ensures accurate coding, faster reimbursements, and compliance with specialty-specific regulations. Whether you're a solo practitioner or a multi-specialty group, we have the expertise to optimize your revenue cycle.
            </p>
            
            {/* Special Button Design - Responsive */}
            <div className="relative inline-block">
              {/* Button Shadow */}
              <div 
                className="absolute inset-0 rounded-full opacity-30 transform translate-y-1 sm:translate-y-2 blur-sm"
                style={{ backgroundColor: '#579db3' }}
              />
              
              <Button 
                onClick={() => navigate('/services')}
                size="large"
                className="relative"
              >
                <span className="flex items-center gap-2">
                  <span className="hidden sm:inline">Explore Our Specialty Services</span>
                  <span className="sm:hidden">Explore Services</span>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full opacity-70" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalBillingServices;