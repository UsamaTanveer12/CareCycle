import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Shield, TrendingUp, Users, Clock, Award } from 'lucide-react';
import { Button } from "../../components";

function Step() {
  const navigate = useNavigate();
  const steps = [
    {
      number: "01",
      title: "Compliance First and Every Time",
      description: "We follow CMS, HIPAA, and OIG regulations across every process. From documentation to modifier logic, we prioritize payer compliance to protect your revenue and your reputation.",
      bgColor: "#579db3"
    },
    {
      number: "02", 
      title: "Real-Time Insights & Transparency",
      description: "Our reports are designed for action. We highlight aging claims, underpayments, and high-performing services so you can make better decisions, faster. It's clear, current, and custom to your needs.",
      bgColor: "#eb2978"
    },
    {
      number: "03",
      title: "Certified Billing and Coding Experts", 
      description: "Our team includes AAPC-certified coders and revenue cycle professionals who specialize in multiple specialties. We know the codes, the updates, and the rules so your claims get paid right.",
      bgColor: "#579db3"
    }
  ];

  return (
    <>
      <div className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section - Responsive */}
          <div className="text-center mb-12 sm:mb-14 lg:mb-16">
            <p className="text-[#579db3] text-base sm:text-lg font-medium mb-3 sm:mb-4">
              Simple Steps. Certified Experts. Reliable Results.
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
              One Window Revenue Cycle Optimization
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-4xl mx-auto px-4 sm:px-0">
              We don't just manage your revenue, we protect it. Our approach is built around precision, compliance, and transparency. From certified coders to payer-aligned processes and real-time insights, every piece of your billing cycle is handled with care.
            </p>
          </div>

          {/* Steps Grid - Fully Responsive */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden group hover:scale-102 sm:hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
                style={{ backgroundColor: step.bgColor }}
              >
                {/* Step Number - Responsive positioning and sizing */}
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
                  <span className="text-4xl sm:text-5xl lg:text-6xl font-bold opacity-30">
                    {step.number}
                  </span>
                </div>

                {/* Content Container - Responsive spacing */}
                <div className="relative z-10 space-y-3 sm:space-y-4">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold leading-tight pr-12 sm:pr-16">
                    {step.title}
                  </h3>
                  <p className="text-white text-opacity-90 leading-relaxed text-sm sm:text-base">
                    {step.description}
                  </p>
                </div>

                {/* Decorative Elements - Responsive sizing */}
                <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 border border-white opacity-10 rounded-full"></div>
                <div className="absolute -top-1 -left-1 sm:-top-2 sm:-left-2 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 border border-white opacity-10 rounded-full"></div>
                
                {/* Additional Mobile Decorative Element */}
                <div className="sm:hidden absolute top-1/2 left-2 w-6 h-6 border border-white opacity-5 rounded-full"></div>
                
                {/* Gradient Overlay for Enhanced Visual Appeal */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black opacity-5 rounded-xl sm:rounded-2xl"></div>
              </div>
            ))}
          </div>

          {/* Mobile-Specific Step Indicators */}
          <div className="flex md:hidden justify-center mt-8 gap-2">
            {steps.map((_, index) => (
              <div 
                key={index}
                className="w-2 h-2 rounded-full opacity-30"
                style={{ backgroundColor: steps[index].bgColor }}
              ></div>
            ))}
          </div>

          {/* Bottom Call-to-Action Section - Responsive */}
          <div className="text-center mt-12 sm:mt-16 lg:mt-20">
            <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 max-w-4xl mx-auto">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                Ready to Optimize Your Revenue Cycle?
              </h3>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                Let our certified experts handle your billing while you focus on patient care. 
                Experience the difference of compliance-first, transparent revenue cycle management.
              </p>
              <Button onClick={() => navigate('/contact')} size="large">
                Get Started Today
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Step