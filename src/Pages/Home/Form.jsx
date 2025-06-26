import React, { useState } from 'react';
import { Select, Input, Checkbox, Button } from 'antd';
import { CalendarOutlined, SendOutlined } from '@ant-design/icons';

const { TextArea } = Input;
const { Option } = Select;

function ConsultationForm() {
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

  return (
    <div className="container mx-auto px-8 py-20">
      <div className="py-20">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
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
                  <button class="bg-[#579db3] w-fit hover:bg-[#eb2978] cursor-pointer text-white font-bold px-10 py-4 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">SUBMIT</button>
                </div>
              </div>
            </div>

            {/* Right Side Content */}
            <div className="text-center">
              {/* Calendar Icon */}
              <div className="mb-8 flex justify-center">
                <div className="w-20 h-20 bg-[#579db3] rounded-full flex items-center justify-center">
                  <CalendarOutlined  className="text-3xl text-white" />
                </div>
              </div>

              {/* Heading */}
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Get a Free Billing Audit with No Strings Attached
              </h2>

              {/* Description */}
              <p className="text-gray-700 text-lg leading-relaxed mb-12 max-w-lg mx-auto">
                Unlock the true potential of your revenue cycle with a free consultation and billing audit from Care Cycle Billing. We'll review your current billing workflow, identify revenue leaks, and uncover opportunities for faster reimbursements and improved claim accuracy at no cost, no commitment. Whether you're a solo provider or a growing practice, our audit gives you clear insights and actionable steps to boost your bottom line.
              </p>

              
            
                    
                    {/* Curved dashed line */}
                    <div className="flex justify-center items-center top-0 right-0">
                    <img src="assets/paper.png" alt="" width={500} height={500} /> </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
       
   
 
  );
}

export default ConsultationForm;