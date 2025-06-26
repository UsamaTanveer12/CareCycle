import React from 'react';
import { Button, Card } from 'antd';
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
  const specialties = [
    {
      title: "Physical Therapy",
      icon: <Activity className="w-8 h-8 text-white" />
    },
    {
      title: "Occupational Therapy",
      icon: <UserCheck className="w-8 h-8 text-white" />
    },
    {
      title: "Speech Therapy",
      icon: <MessageCircle className="w-8 h-8 text-white" />
    },
    {
      title: "Urgent Care",
      icon: <AlertCircle className="w-8 h-8 text-white" />
    },
    {
      title: "Psychology",
      icon: <Brain className="w-8 h-8 text-white" />
    },
    {
      title: "Psychiatry",
      icon: <Brain className="w-8 h-8 text-white" />
    },
    {
      title: "Behavioral Health",
      icon: <Smile className="w-8 h-8 text-white" />
    },
    {
      title: "Neurology",
      icon: <Zap className="w-8 h-8 text-white" />
    },
    {
      title: "Orthopedics",
      icon: <Bone className="w-8 h-8 text-white" />
    },
    {
      title: "Urogynecology",
      icon: <Heart className="w-8 h-8 text-white" />
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)' }}>
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large Circle */}
        <div 
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-10"
          style={{ backgroundColor: '#579db3' }}
        />
        {/* Medium Circle */}
        <div 
          className="absolute top-1/2 -left-20 w-40 h-40 rounded-full opacity-15"
          style={{ backgroundColor: '#579db3' }}
        />
        {/* Small Circles */}
        <div 
          className="absolute bottom-20 right-1/4 w-16 h-16 rounded-full opacity-20"
          style={{ backgroundColor: '#579db3' }}
        />
        <div 
          className="absolute top-1/4 left-1/3 w-8 h-8 rounded-full opacity-25"
          style={{ backgroundColor: '#579db3' }}
        />
        
        {/* Medical Cross Pattern */}
        <div className="absolute top-10 left-10">
          <div 
            className="w-6 h-20 opacity-5 rounded-full"
            style={{ backgroundColor: '#579db3' }}
          />
          <div 
            className="w-20 h-6 opacity-5 rounded-full absolute top-7 -left-7"
            style={{ backgroundColor: '#579db3' }}
          />
        </div>
        
        {/* DNA Helix Pattern */}
        <div className="absolute bottom-40 right-10 opacity-5">
          <svg width="60" height="120" viewBox="0 0 60 120" fill="none">
            <path d="M30 0 Q45 15 30 30 Q15 45 30 60 Q45 75 30 90 Q15 105 30 120" 
                  stroke="#579db3" strokeWidth="4" fill="none"/>
            <path d="M30 0 Q15 15 30 30 Q45 45 30 60 Q15 75 30 90 Q45 105 30 120" 
                  stroke="#579db3" strokeWidth="4" fill="none"/>
          </svg>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-8 py-20">
        {/* Header Section with Special Styling */}
        <div className="text-center mb-20">
          <div className="inline-block relative">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 relative">
              Specialty Focused
              <br />
              <span style={{ color: '#579db3' }}>Medical Billing Services</span>
              
              {/* Decorative Line */}
              <div 
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 h-1 w-24 rounded-full"
                style={{ backgroundColor: '#579db3' }}
              />
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto relative">
            <p className="text-gray-700 text-xl leading-relaxed">
              At Care Cycle Billing, we don't believe in one-size-fits-all. Every specialty has its own codes, compliance needs, and payer rules. We provide specialty-specific billing services that align with your clinical workflow.
            </p>
          </div>
        </div>

        {/* Specialties Grid with Special Effects */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-20">
          {specialties.map((specialty, index) => (
            <div key={index} className="relative group">
              {/* Card Shadow Effect */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-20 transform translate-y-2"
                style={{ backgroundColor: '#579db3' }}
              />
              
              <Card
                className="relative rounded-2xl border-0 shadow-xl overflow-hidden"
                bodyStyle={{ padding: '2.5rem 1.5rem' }}
                style={{ 
                  background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <div className="text-center relative">
                  {/* Icon Container with Special Effect */}
                  <div className="relative mb-6">
                    {/* Outer Ring */}
                    <div 
                      className="w-24 h-24 rounded-full mx-auto flex items-center justify-center relative"
                      style={{ backgroundColor: '#579db3' }}
                    >
                      {/* Inner Glow */}
                      <div 
                        className="absolute inset-2 rounded-full opacity-30"
                        style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
                      />
                      
                      {/* Icon */}
                      <div className="relative z-10">
                        {specialty.icon}
                      </div>
                    </div>
                    
                    {/* Decorative Dots */}
                    <div className="absolute -top-2 -right-2">
                      <div 
                        className="w-3 h-3 rounded-full opacity-60"
                        style={{ backgroundColor: '#579db3' }}
                      />
                    </div>
                    <div className="absolute -bottom-2 -left-2">
                      <div 
                        className="w-2 h-2 rounded-full opacity-40"
                        style={{ backgroundColor: '#579db3' }}
                      />
                    </div>
                  </div>
                  
                  {/* Title with Special Typography */}
                  <h3 className="text-lg font-bold text-gray-800 leading-tight relative">
                    {specialty.title}
                    
                    {/* Underline Effect */}
                    <div 
                      className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-0.5 w-8 rounded-full opacity-50"
                      style={{ backgroundColor: '#579db3' }}
                    />
                  </h3>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Enhanced Call to Action Section */}
        <div className="text-center relative">
          {/* Background Decoration */}
          <div 
            className="absolute inset-0 rounded-3xl opacity-5 transform -skew-y-1"
            style={{ backgroundColor: '' }}
          />
          
          <div className="relative z-10 py-12">
            <p className="text-gray-600 text-lg max-w-4xl mx-auto mb-10 leading-relaxed">
              Our specialized approach ensures accurate coding, faster reimbursements, and compliance with specialty-specific regulations. Whether you're a solo practitioner or a multi-specialty group, we have the expertise to optimize your revenue cycle.
            </p>
            
            {/* Special Button Design */}
            <div className="relative inline-block">
              {/* Button Shadow */}
              <div 
                className="absolute inset-0 rounded-full opacity-30 transform translate-y-2 blur-sm"
                style={{ backgroundColor: '#579db3' }}
              />
              
              <Button 
                type="primary" 
                size="large"
                className="relative font-bold px-12 py-6 h-auto rounded-full shadow-2xl border-0"
                style={{ 
                  backgroundColor: '#579db3',
                  background: 'linear-gradient(135deg, #579db3 0%, #4a8ba0 100%)'
                }}
              >
                <span className="text-xl flex items-center gap-2">
                  Explore Our Specialty Services
                  <div className="w-2 h-2 bg-white rounded-full opacity-70" />
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