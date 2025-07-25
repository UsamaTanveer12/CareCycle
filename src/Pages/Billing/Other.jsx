import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, ChevronUp, CheckCircle, Users, ClipboardList, BarChart3, Phone, Mail } from 'lucide-react';
import { Button } from "../../components";

const MedicalBillingLanding = () => {
  const navigate = useNavigate();
  const [openAccordion, setOpenAccordion] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    specialty: '',
    healthcareType: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
    setErrors(prev => ({
      ...prev,
      [name]: undefined
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = 'Full Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phone) newErrors.phone = 'Phone is required';
    if (!formData.specialty) newErrors.specialty = 'Specialty is required';
    if (!formData.healthcareType) newErrors.healthcareType = 'Healthcare Type is required';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;
    console.log('Form submitted:', formData);
    alert('Consultation request submitted successfully!');
  };

  const payerTypes = [
    'Medicare/Medicaid',
    'Commercial Payers', 
    'Tricare & VA',
    'Workers\' Comp',
    'ACA Marketplace Plans'
  ];

  const specialtyStats = [
    {
      title: 'Primary Care',
      description: 'Missing chronic care management codes (CCM) pays $42+ reimbursement, you\'re likely leaving money on the table.'
    },
    {
      title: 'Mental Health',
      description: 'Getting denied for 90837 or 90834 sessions because notes don\'t match time requirements.'
    },
    {
      title: 'Dermatology', 
      description: 'Undercoding 96365 charges - we catch 15% more revenue per case.'
    },
    {
      title: 'Pediatrics',
      description: 'Vaccine admin fees getting rejected by Medicaid (we recover 87%).'
    }
  ];

  const features = [
    {
      icon: <Users className="w-8 h-8 text-[#579db3]" />,
      title: 'Made Specifically for Independents',
      description: 'We work only with independent practices because we truly understand complex billing challenges like low E/M pay and prior auth delays.'
    },
    {
      icon: <ClipboardList className="w-8 h-8 text-[#579db3]" />,
      title: 'Smarter Claims Management', 
      description: 'Our team doesn\'t just process claims - we analyze patterns to prevent denials before they happen, then recover 95% of those that slip through.'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-[#579db3]" />,
      title: 'Real-Time Revenue Tracking',
      description: 'Real-time reports show exactly where your money is and when we\'re filing claims, so you\'re never in the dark about your financial health.'
    }
  ];

  const billingBenefits = [
    'Know your top 5 denial triggers before we start',
    'Track your specialty\'s 3 most-missed codes daily', 
    'Update workflows quarterly as payer rules change',
    'Accelerate A/R turnaround with weekly audits',
    'Increase net collections by 12-18% in 90 days'
  ];

  return (
       <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-6">
                Medical Billing That Solves What Keeps You Up at Night
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                You didn't go through years of medical training to spend your time negotiating with insurance companies. Yet denied claims continue to demand your attention and drain your resources.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Small practices lose an average of $7-15k in annual revenue due to billing inefficiencies. Many don't realize how much revenue is slipping through the gaps. At MediCycle Billing, we help you recover that lost revenue. Our billing specialists understand payer systems and speak their language.
              </p>
              <p className="text-lg text-gray-600">
                We turn denials into payments through precise claim appeals and thorough documentation. We don't just handle billing, we help you take back control of your time, your income, and your peace of training.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Medical professional working" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Payer Expertise Section */}
      <div className="bg-[#579db3] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Payer-Specific Billing Experts Who Speak Insurance Fluently
              </h2>
              <p className="text-lg mb-8 text-blue-100">
                Let's be honest: 35% of claim denials happen simply because billing teams don't know each insurer's secret rules. At MediCycle Billing LLC, our specialists live in the complexities of Medicare's ever-changing LCDs to UnitedHealthcare's prior auth maze. We don't just submit claims - we engineer them knowing exactly how to navigate.
              </p>
              <button onClick={() => navigate('/contact')} className="bg-white text-[#579db3] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer">
                TALK TO AN EXPERT
              </button>
            </div>
            <div className="space-y-4">
              {payerTypes.map((payer, index) => (
                <div key={index} className="bg-white text-[#579db3] bg-opacity-10 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-lg">{payer}</span>
                    <CheckCircle className="w-5 h-5 text-green-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Revenue Loss Section with Accordion */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why 83% of Specialty Practices Lose Money on Billing (And How We Fix It)
              </h2>
              <p className="text-gray-600 mb-8">
                The truth? Most medical billing companies miss 22-35% of collectible revenue not because your team isn't working hard, but because they don't understand the nuances of specialty-specific billing. We believe that denials aren't defiance inevitable - they're performance delivery problems that day one by.
              </p>
              <p className="text-gray-600 mb-8">
                We deploy specialty-certified billers who:
              </p>
              <ul className="space-y-3 mb-8">
                {billingBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#579db3] mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
              <Button onClick={() => navigate('/contact')}>
                PROTECT YOUR REVENUE
              </Button>
            </div>
            <div className="space-y-4">
              {specialtyStats.map((specialty, index) => (
                <div key={index} className="border border-gray-200 rounded-lg">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="font-semibold text-gray-900">{specialty.title}</h3>
                    {openAccordion === index ? (
                      <ChevronUp className="w-5 h-5 text-[#579db3]" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#579db3]" />
                    )}
                  </button>
                  {openAccordion === index && (
                    <div className="px-4 pb-4">
                      <p className="text-gray-600">{specialty.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why MediCycle Billing LLC is the Right Partner for Your Small Practice
            </h2>
            <p className="text-lg text-gray-600">
              Small practices deserve billing experts who fight for their revenue.<br />
              We solve your unique challenges with focus, transparency, and follow-through.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-gray-100 rounded-full p-3 mr-4">
                    {feature.icon}
                  </div>
                  <span className="bg-[#579db3] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Free Audit Section */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-[#579db3] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-8">
            <span className="text-2xl font-bold text-white">$</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Get a Free Billing Audit with No Strings Attached
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            Unlock the true potential of your revenue cycle with a free consultation and billing audit from MediCycle Billing. We'll review your current billing workflow, identify revenue leaks, and uncover opportunities for faster reimbursements and improved cash flow. Whether you're considering a new billing service provider or a growing practice, our audit gives you clear insights and actionable next steps to boost your bottom line.
          </p>
        </div>
      </div>
      <div className="bg-[#579db3] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Stop Losing Money to Denials! Let's recover what's rightfully yours
          </h2>
          <p className="text-lg mb-8 text-blue-100">
            Our expert team fights to recover what you've earned. Get the reimbursements you deserve, hassle-free.
          </p>
          <button onClick={() => navigate('/contact')} className="bg-white text-[#579db3] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer">
            SCHEDULE A FREE CONSULTATION
          </button>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Schedule a Consultation
            </h2>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#579db3] focus:border-transparent"
                  />
                  {errors.fullName && <div style={{color: 'red', fontSize: 13, marginTop: 4}}>{errors.fullName}</div>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#579db3] focus:border-transparent"
                  />
                  {errors.email && <div style={{color: 'red', fontSize: 13, marginTop: 4}}>{errors.email}</div>}
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#579db3] focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && <div style={{color: 'red', fontSize: 13, marginTop: 4}}>{errors.phone}</div>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Healthcare Type
                  </label>
                  <select
                    name="healthcareType"
                    value={formData.healthcareType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#579db3] focus:border-transparent mb-6"
                  >
                    <option value="">Select a healthcare type</option>
                    <option value="Solo Practice">Solo Practice</option>
                    <option value="Group Practice">Group Practice</option>
                    <option value="Hospital">Hospital</option>
                    <option value="Clinic">Clinic</option>
                    <option value="Specialty Center">Specialty Center</option>
                    <option value="Urgent Care">Urgent Care</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.healthcareType && <div style={{color: 'red', fontSize: 13, marginTop: 4}}>{errors.healthcareType}</div>}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Please select a specialty
                </label>
                <select
                  name="specialty"
                  value={formData.specialty}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#579db3] focus:border-transparent mb-6"
                >
                  <option value="">Select a specialty</option>
                  <option value="cardiology">Cardiology</option>
                  <option value="dermatology">Dermatology</option>
                  <option value="pediatrics">Pediatrics</option>
                  <option value="orthopedics">Orthopedics</option>
                  <option value="other">Other</option>
                </select>
                {errors.specialty && <div style={{color: 'red', fontSize: 13, marginTop: 4}}>{errors.specialty}</div>}
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Write your Message here...
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#579db3] focus:border-transparent"
                  placeholder="Tell us about your billing challenges..."
                ></textarea>
                {errors.message && <div style={{color: 'red', fontSize: 13, marginTop: 4}}>{errors.message}</div>}
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="terms"
                  className="h-4 w-4 text-[#579db3] focus:ring-[#579db3] border-gray-300 rounded"
                  required
                />
                <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                  By submitting this, I agree to the Terms & Conditions
                </label>
              </div>
              <Button type="submit" fullWidth size="large">
                SUBMIT
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      </div>
    

  );
};

export default MedicalBillingLanding;