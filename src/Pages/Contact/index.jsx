import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from "../../components";
import { sendEmail } from '../../utils/emailService';
import { Select, Input, Checkbox } from 'antd';
import ConsultationForm from "../Home/Form";

function Contact() {
    const [formData, setFormData] = useState({
        specialty: '',
        healthcareType: '',
        fullName: '',
        email: '',
        phone: '',
        website: '',
        message: '',
        agreed: false
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    const validate = () => {
        const newErrors = {};
        if (!formData.specialty) newErrors.specialty = 'Specialty is required';
        if (!formData.healthcareType) newErrors.healthcareType = 'Healthcare Type is required';
        if (!formData.fullName) newErrors.fullName = 'Full Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.phone) newErrors.phone = 'Phone is required';
        if (!formData.message) newErrors.message = 'Message is required';
        if (!formData.agreed) newErrors.agreed = 'You must agree to the Terms & Conditions';
        return newErrors;
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
        setErrors(prev => ({
            ...prev,
            [name]: undefined
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length > 0) return;
        
        setIsSubmitting(true);
        setSubmitMessage('');
        
        try {
            const result = await sendEmail(formData);
            if (result.success) {
                setSubmitMessage('Thank you! Your consultation request has been sent successfully. We will get back to you within 24 hours.');
                // Reset form
                setFormData({
                    specialty: '',
                    healthcareType: '',
                    fullName: '',
                    email: '',
                    phone: '',
                    website: '',
                    message: '',
                    agreed: false
                });
            } else {
                setSubmitMessage('Sorry, there was an error sending your request. Please try again or contact us directly.');
            }
        } catch (error) {
            setSubmitMessage('Sorry, there was an error sending your request. Please try again or contact us directly.');
        } finally {
            setIsSubmitting(false);
        }
    };

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
        'Surgery',
        'Other'
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

    return (
        <div>
            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-blue-50 via-gray-50 to-blue-100 py-20" style={{backgroundImage: 'url("/assets/group.webp")', backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat'}}>
                <div className="absolute inset-0 bg-[#fefefe]/90 bg-opacity-80"></div>
                <div className="container mx-auto lg:px-8 px-4 relative z-10">
                    <div className="text-center space-y-6">
                        <p className="text-green-500 font-semibold text-lg tracking-wider">Ready to Get Started?</p>
                        <h1 className="text-2xl lg:text-4xl font-bold text-gray-900">Get in Touch with MediCycle Billing</h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Contact our expert team today to streamline your medical billing and maximize your revenue.
                        </p>
                        <div className="flex items-center justify-center gap-2 text-gray-700 mt-8">
                            <a href="/" className="font-medium hover:text-green-500 transition-colors cursor-pointer">
                                Home
                            </a>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right w-4 h-4 text-gray-500" aria-hidden="true">
                                <path d="m9 18 6-6-6-6"></path>
                            </svg>
                            <span className="font-medium">Contact Us</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Information Cards */}
            <div className="py-16 bg-white">
                <div className="container mx-auto lg:px-8 px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Phone Number */}
                        <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                            <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:bg-green-500 transition-colors duration-300" style={{backgroundColor: '#579db3'}}>
                                <Phone className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone Number</h3>
                            <p className="text-gray-600 mb-2">Call us directly</p>
                            <a href="tel:+16144656718" className="hover:text-green-500 font-medium transition-colors" style={{color: '#579db3'}}>
                                +1 614-465-6718
                            </a>
                        </div>

                        {/* Mail Address */}
                        <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                            <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:bg-green-500 transition-colors duration-300" style={{backgroundColor: '#579db3'}}>
                                <Mail className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Mail Address</h3>
                            <p className="text-gray-600 mb-2">Send us an email</p>
                            <a href="mailto:contact@CareCycle-billing.com" className="hover:text-green-500 font-medium transition-colors break-words" style={{color: '#579db3'}}>
                                contact@CareCycle-billing.com
                            </a>
                        </div>

                        

                        {/* Work Hours */}
                        <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                            <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:bg-green-500 transition-colors duration-300" style={{backgroundColor: '#579db3'}}>
                                <Clock className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Work Hours</h3>
                          
                            <div className="font-medium" style={{color: '#579db3'}}>
                                <p>Monday – Friday</p>
                                <p>9:00 AM – 6:00 PM (PST)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Form and Doctor Image Section */}
            <div className="py-16 bg-gray-50">
                <div className="container mx-auto lg:px-8 px-4">
                   <ConsultationForm/>
                </div>
            </div>

           
           
        </div>
    );
}

export default Contact;