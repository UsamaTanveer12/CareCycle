import React, { useState } from 'react';
import { Select, Input, Checkbox } from 'antd';
import { CalendarOutlined, SendOutlined } from '@ant-design/icons';
import { Button as CustomButton } from "../../components";

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

  const [errors, setErrors] = useState({});

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
    setErrors(prev => ({
      ...prev,
      [field]: undefined
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.specialty) newErrors.specialty = 'Specialty is required';
    if (!formData.healthcareType) newErrors.healthcareType = 'Healthcare Type is required';
    if (!formData.fullName) newErrors.fullName = 'Full Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phone) newErrors.phone = 'Phone is required';
    if (!formData.message) newErrors.message = 'Message is required';
    if (!formData.agreeTerms) newErrors.agreeTerms = 'You must agree to the Terms & Conditions';
    return newErrors;
  };

  const handleSubmit = () => {
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
  
        <div className="container mx-auto lg:px-8 px-4 lg:py-20 py-12">
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
                  {errors.specialty && <div style={{color: 'red', fontSize: 13, marginTop: 4}}>{errors.specialty}</div>}
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
                  {errors.healthcareType && <div style={{color: 'red', fontSize: 13, marginTop: 4}}>{errors.healthcareType}</div>}
                </div>

                {/* Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      size="large"
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                    />
                    {errors.fullName && <div style={{color: 'red', fontSize: 13, marginTop: 4}}>{errors.fullName}</div>}
                  </div>
                  <div>
                    <Input
                      size="large"
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                    />
                    {errors.email && <div style={{color: 'red', fontSize: 13, marginTop: 4}}>{errors.email}</div>}
                  </div>
                </div>

                {/* Phone and Website */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      size="large"
                      type="tel"
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                    />
                    {errors.phone && <div style={{color: 'red', fontSize: 13, marginTop: 4}}>{errors.phone}</div>}
                  </div>
                  <div>
                    <Input
                      size="large"
                      placeholder="Website (Optional)"
                      value={formData.website}
                      onChange={(e) => handleInputChange('website', e.target.value)}
                    />
                  </div>
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
                  {errors.message && <div style={{color: 'red', fontSize: 13, marginTop: 4}}>{errors.message}</div>}
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
                  {errors.agreeTerms && <div style={{color: 'red', fontSize: 13, marginTop: 4}}>{errors.agreeTerms}</div>}
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <CustomButton onClick={handleSubmit} size="large">SUBMIT</CustomButton>
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
              <h2 className="lg:text-3xl text-2xl font-bold text-gray-900 mb-8">
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
            
       
   
 
  );
}

export default ConsultationForm;