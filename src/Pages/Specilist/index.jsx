import { Carousel, Input } from "antd";
import { BarChart3, CheckCircle, Clock, FileText, Trophy } from "lucide-react";
import { Select, Checkbox } from 'antd';
import { CalendarOutlined, SendOutlined } from '@ant-design/icons';

import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import Special from "./Special";
import Service from "./Service";
import { Button } from "../../components";



const { TextArea } = Input;
const { Option } = Select;

function Specialist() {
      const [currentSlide, setCurrentSlide] = useState(0);
       const [formData, setFormData] = useState({
          specialty: '',
          healthcareType: '',
          fullName: '',
          email: '',
          phone: '',
          website: '',
          message: '',
          agreeTerms: false
        });
      
        const specialtyOptions = [
          'Cardiology',
          'Dermatology',
          'Family Medicine',
          'Internal Medicine',
          'Neurology',
          'Orthopedics',
          'Pediatrics',
          'Psychiatry',
          'Radiology',
          'Surgery'
        ];
      
        const healthcareTypeOptions = [
          'Solo Practice',
          'Group Practice',
          'Hospital',
          'Clinic',
          'Specialty Center',
          'Urgent Care',
          'Other'
        ];
      
        const handleInputChange = (field, value) => {
          setFormData(prev => ({
            ...prev,
            [field]: value
          }));
        };
      
        const handleSubmit = () => {
          if (formData.agreeTerms) {
            console.log('Form submitted:', formData);
            // Handle form submission here
          } else {
            alert('Please agree to the Terms & Conditions');
          }
        };
    

     const logos = [
    'logo1.png', 'kareo.png', 'logo3.png', 'logo4.png',
    'logo5.png', 'advance.png', 'office.png', 'logo8.png', 'valant.png'
  ];
  
  const logoGroups = [];
  for (let i = 0; i <= logos.length - 5; i++) {
    logoGroups.push(logos.slice(i, i + 5));
  }

  const certifications = [
    { id: 1, alt: "HIPAA", src: "/assets/svg1.png" },
    { id: 2, alt: "Google Reviews", src: "/assets/svg2.png" },
    { id: 3, alt: "CPC Certified", src: "/assets/svg3.png" },
    { id: 4, alt: "CPB Certified", src: "/assets/svg4.png" },
    { id: 5, alt: "CMS", src: "/assets/svg2.png" }
  ];
   useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % certifications.length);
      }, 3000);
      
      return () => clearInterval(interval);
    }, [certifications.length]);

  return (
    <>
     <div className="relative  bg-gradient-to-br from-blue-50 via-gray-50 to-blue-100 py-20" style={{backgroundImage: 'url("/assets/special.webp")', backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat'}}>
        <div className="absolute inset-0 bg-[#fefefe]/90 bg-opacity-80"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 flex items-center justify-center min-h-[40vh]">
          <div className="text-center space-y-6 max-w-4xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">Specialized Medical Billing For Every Specialty</h1>
            <p className="text-gray-700 font-semibold text-base md:text-lg tracking-wider leading-relaxed">Every specialty has its own medical codes, payer rules, and workflow. We build a custom RCM strategy that actually fits your practice. Discover how Care Cycle Billing specialty-focused billing can improve your medical practice RCM objectives.</p>
            <Button onClick={() => window.location.href = '/contact'} size="large">
                TALK TO A BILLING EXPERT
            </Button>
          </div>
        </div>
    </div>

       <div className="container mx-auto px-8 pt-6 pb-10">
        <Carousel 
          autoplay 
          dots={false} 
          infinite={true}
          speed={500}
          autoplaySpeed={1500}
          className="w-full"
        >
          {logoGroups.map((group, idx) => (
            <div key={idx}>
              <div className="flex items-center justify-between px-12">
                {group.map((logo, i) => (
                  <img
                    key={`${logo}-${i}`}
                    alt={`Logo ${i + 1}`}
                    className="h-16 w-auto object-contain flex-shrink-0"
                    src={`/assets/${logo}`}
                  />
                ))}
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <div><Special/></div>

      <div className="py-20">
            <div className="container mx-auto px-8">
              <div className="bg-gradient-to-r from-[#579db3] to-[#4c7ba8] rounded-3xl p-12 relative overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                  <div className="text-white space-y-6">
                    <h2 className="text-4xl font-bold leading-tight">
                      Medical Billing Company That Delivers Real Results and Uplift Your Practice Revenue
                    </h2>
                    <p className="text-lg text-blue-100 leading-relaxed">
                      Start seeing predictable revenue. From coding to collections, we handle your 
                      entire billing cycle with accuracy, transparency, and full compliance.
                    </p>
                    <button 
                      type="button" 
                      onClick={() => window.location.href = '/contact'}
                      className="bg-white text-[#579db3] border-white hover:bg-gray-50 hover:text-[#4a8a9e] hover:border-gray-50 font-semibold px-8 py-6 text-base rounded-lg transition-colors duration-200"
                    >
                      GET YOUR FREE BILLING ASSESSMENT
                    </button>
                  </div>
                  
                  <div className="flex justify-center relative">
                    <div className="relative">
                      <img 
                        alt="Doctor with medical billing elements" 
                        className="w-80 h-auto"
                        src="/assets/doctor.webp"
                      />
                      
                      {/* Floating Icons */}
                      <div className="absolute top-4 -right-8 bg-white rounded-lg p-2 shadow-lg animate-float">
                        <FileText className="w-6 h-6 text-[#579db3]" />
                      </div>
                      <div className="absolute top-16 right-12 bg-white rounded-lg p-2 shadow-lg animate-float-delay-1">
                        <BarChart3 className="w-6 h-6 text-green-500" />
                      </div>
                      <div className="absolute top-32 -right-4 bg-white rounded-lg p-2 shadow-lg animate-float-delay-2">
                        <CheckCircle className="w-6 h-6 text-orange-500" />
                      </div>
                      <div className="absolute bottom-32 -left-8 bg-white rounded-lg p-2 shadow-lg animate-float">
                        <Trophy className="w-6 h-6 text-purple-500" />
                      </div>
                      <div className="absolute bottom-16 left-8 bg-white rounded-lg p-2 shadow-lg animate-float-delay-1">
                        <Clock className="w-6 h-6 text-blue-500" />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Background Decorative Elements */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-8 right-16 w-32 h-32 border border-white rounded-full"></div>
                  <div className="absolute bottom-8 left-16 w-24 h-24 border border-white rounded-full"></div>
                  <div className="absolute top-1/2 left-8 w-16 h-16 border border-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <Service/>
          </div>

            <div className="py-16">
            <div className="container mx-auto px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Built for Regulation. Certified for Results.
                </h2>
                <p className="text-gray-700 max-w-4xl mx-auto">
                  Our AAPC-certified team and policy-aligned workflows help you avoid denials, 
                  reduce risk, and stay ready for any audit. We don't cut corners. Every claim, 
                  modifier, and code meets the latest compliance standards.
                </p>
              </div>
              
              {/* Carousel */}
              <div className="relative overflow-hidden">
                <div className="flex justify-center">
                  <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ 
                      transform: `translateX(-${currentSlide * 250}px)`,
                      width: `${certifications.length * 250}px`
                    }}
                  >
                    {certifications.map((cert, index) => (
                      <div key={cert.id} className="w-[250px] px-4 flex-shrink-0">
                        <div className="flex justify-center items-center h-24">
                          <img 
                            alt={cert.alt}
                            className="max-h-20 w-full object-contain hover:opacity-100 transition-opacity duration-300"
                            src={cert.src}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Carousel Indicators */}
                <div className="flex justify-center mt-6 gap-2">
                  {certifications.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                        currentSlide === index ? 'bg-[#579db3]' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="container mx-auto px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="flex  flex-col ">
              {/* Calendar Icon */}
              

              {/* Heading */}
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                What Sets Our Specialty Billing Apart
              </h2>

              {/* Description */}
              <p className="text-gray-700 text-lg leading-relaxed mb-12 max-w-[700px] ">
               At Care Cycle Billing, our coders are more than certified. They're specialty-trained. Each coder understands your field, from documentation to payer preferences, ensuring every claim speaks your clinical language fluently. 

From complex CPT pairings to pre-auth management and smart appeal strategies, we apply intelligent coding logic tailored to your procedures. Our process is enhanced by real-time data patterns and compliance, reducing denials before they start.

We integrate directly with your EHR system, eliminating disruption to your workflow. Our reporting dashboard shows real-time insights by provider, CPT group, payer mix, or location so you can take proactive actions.

Let's tailor your billing to your specialty. Talk to our experts today.
              </p>

              
            
                    
                    {/* Curved dashed line */}
                   
                  </div>
            {/* Form Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Schedule a <span className="text-[#579db3]">Consultation</span>
              </h2>
              
              <div className="space-y-6">
                {/* Specialty Select */}
                <div>
                  <Select
                    size="large"
                    placeholder="Please select a specialty"
                    className="w-full"
                    value={formData.specialty}
                    onChange={(value) => handleInputChange('specialty', value)}
                  >
                    {specialtyOptions.map(option => (
                      <Option key={option} value={option}>{option}</Option>
                    ))}
                  </Select>
                </div>

                {/* Healthcare Type Select */}
                <div>
                  <Select
                    size="large"
                    placeholder="Select Healthcare Type"
                    className="w-full"
                    value={formData.healthcareType}
                    onChange={(value) => handleInputChange('healthcareType', value)}
                  >
                    {healthcareTypeOptions.map(option => (
                      <Option key={option} value={option}>{option}</Option>
                    ))}
                  </Select>
                </div>

                {/* Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    size="large"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                  />
                  <Input
                    size="large"
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                  />
                </div>

                {/* Phone and Website */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    size="large"
                    type="tel"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                  />
                  <Input
                    size="large"
                    placeholder="Website (Optional)"
                    value={formData.website}
                    onChange={(e) => handleInputChange('website', e.target.value)}
                  />
                </div>

                {/* Message */}
                <div>
                  <TextArea
                    rows={4}
                    placeholder="Write your Message here..."
                    className="resize-none"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                  />
                </div>

                {/* Terms Checkbox */}
                <div>
                  <Checkbox
                    checked={formData.agreeTerms}
                    onChange={(e) => handleInputChange('agreeTerms', e.target.checked)}
                    className="text-sm text-gray-600"
                  >
                    By submitting this, I agree to the Terms & Conditions.
                  </Checkbox>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <Button onClick={handleSubmit} size="large">SUBMIT</Button>
                </div>
              </div>
            </div>

            {/* Right Side Content */}
            
                </div>
              </div>
      
      </>
  )
}

export default Specialist