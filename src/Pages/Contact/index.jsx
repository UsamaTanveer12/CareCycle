import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from "../../components";
import { sendEmail } from '../../utils/emailService';

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

    return (
        <div>
            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-blue-50 via-gray-50 to-blue-100 py-20" style={{backgroundImage: 'url("/assets/group.webp")', backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat'}}>
                <div className="absolute inset-0 bg-[#fefefe]/90 bg-opacity-80"></div>
                <div className="container mx-auto lg:px-8 px-4 relative z-10">
                    <div className="text-center space-y-6">
                        <p className="text-green-500 font-semibold text-lg tracking-wider">Ready to Get Started?</p>
                        <h1 className="text-2xl lg:text-4xl font-bold text-gray-900">Get in Touch with Care Cycle Billing</h1>
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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

                        {/* Head Office */}
                        <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                            <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:bg-green-500 transition-colors duration-300" style={{backgroundColor: '#579db3'}}>
                                <MapPin className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Head Office</h3>
                            <p className="text-gray-600 mb-2">Visit our location</p>
                            <p className="font-medium" style={{color: '#579db3'}}>
                                5900 Balcones drive #13461,<br />
                                Austin, TX, 78731
                            </p>
                        </div>

                        {/* Work Hours */}
                        <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                            <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:bg-green-500 transition-colors duration-300" style={{backgroundColor: '#579db3'}}>
                                <Clock className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Work Hours</h3>
                            <p className="text-gray-600 mb-2">We're available</p>
                            <div className="font-medium" style={{color: '#579db3'}}>
                                <p>Mon to Fri: 9AM - 5PM</p>
                                <p>Sat: 1PM - 8PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Form and Doctor Image Section */}
            <div className="py-16 bg-gray-50">
                <div className="container mx-auto lg:px-8 px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Form Section */}
                        <div>
                            <div className="mb-8">
                                <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-4 text-center lg:text-left">Schedule a Consultation</h2>
                                <p className="text-gray-600 text-lg text-center lg:text-left">
                                    Ready to optimize your medical billing? Fill out the form below and our team will get back to you within 24 hours.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Specialty Dropdown */}
                                <div>
                                    <select
                                        name="specialty"
                                        value={formData.specialty}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-all duration-300 bg-white"
                                        style={{'--tw-ring-color': '#579db3'}}
                                        onFocus={(e) => e.target.style.borderColor = '#579db3'}
                                        onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                                        required
                                    >
                                        <option value="">Please select a specialty</option>
                                        <option value="cardiology">Cardiology</option>
                                        <option value="dermatology">Dermatology</option>
                                        <option value="orthopedics">Orthopedics</option>
                                        <option value="pediatrics">Pediatrics</option>
                                        <option value="other">Other</option>
                                    </select>
                                    {errors.specialty && <div style={{color: 'red', fontSize: 13, marginTop: 4}}>{errors.specialty}</div>}
                                </div>

                                {/* Healthcare Type Dropdown */}
                                <div>
                                    <select
                                        name="healthcareType"
                                        value={formData.healthcareType}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-all duration-300 bg-white"
                                        style={{'--tw-ring-color': '#579db3'}}
                                        onFocus={(e) => e.target.style.borderColor = '#579db3'}
                                        onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                                        required
                                    >
                                        <option value="">Select Healthcare Type</option>
                                        <option value="private-practice">Private Practice</option>
                                        <option value="hospital">Hospital</option>
                                        <option value="clinic">Clinic</option>
                                        <option value="group-practice">Group Practice</option>
                                    </select>
                                    {errors.healthcareType && <div style={{color: 'red', fontSize: 13, marginTop: 4}}>{errors.healthcareType}</div>}
                                </div>

                                {/* Name and Email Row */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <input
                                            type="text"
                                            name="fullName"
                                            placeholder="Full Name"
                                            value={formData.fullName}
                                            onChange={handleInputChange}
                                            className="px-4 py-3 border border-gray-300 rounded-lg transition-all duration-300"
                                            onFocus={(e) => e.target.style.borderColor = '#579db3'}
                                            onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                                            required
                                        />
                                        {errors.fullName && <div style={{color: 'red', fontSize: 13, marginTop: 4}}>{errors.fullName}</div>}
                                    </div>
                                    <div>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="px-4 py-3 border border-gray-300 rounded-lg transition-all duration-300"
                                            onFocus={(e) => e.target.style.borderColor = '#579db3'}
                                            onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                                            required
                                        />
                                        {errors.email && <div style={{color: 'red', fontSize: 13, marginTop: 4}}>{errors.email}</div>}
                                    </div>
                                </div>

                                {/* Phone and Website Row */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder="Phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="px-4 py-3 border border-gray-300 rounded-lg transition-all duration-300"
                                            onFocus={(e) => e.target.style.borderColor = '#579db3'}
                                            onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                                            required
                                        />
                                        {errors.phone && <div style={{color: 'red', fontSize: 13, marginTop: 4}}>{errors.phone}</div>}
                                    </div>
                                    <div>
                                        <input
                                            type="url"
                                            name="website"
                                            placeholder="Website (Optional)"
                                            value={formData.website}
                                            onChange={handleInputChange}
                                            className="px-4 py-3 border border-gray-300 rounded-lg transition-all duration-300"
                                            onFocus={(e) => e.target.style.borderColor = '#579db3'}
                                            onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                                        />
                                    </div>
                                </div>

                                {/* Message */}
                                <div>
                                    <textarea
                                        name="message"
                                        placeholder="Write your Message here..."
                                        rows="4"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-all duration-300 resize-vertical"
                                        onFocus={(e) => e.target.style.borderColor = '#579db3'}
                                        onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                                        required
                                    ></textarea>
                                    {errors.message && <div style={{color: 'red', fontSize: 13, marginTop: 4}}>{errors.message}</div>}
                                </div>

                                {/* Terms Checkbox */}
                                <div className="flex items-start space-x-3">
                                    <input
                                        type="checkbox"
                                        name="agreed"
                                        id="terms"
                                        checked={formData.agreed}
                                        onChange={handleInputChange}
                                        className="mt-1 w-4 h-4 border-gray-300 rounded"
                                        style={{'--tw-text-opacity': '1', color: '#579db3'}}
                                        required
                                    />
                                    <label htmlFor="terms" className="text-sm text-gray-600">
                                        By submitting this, I agree to the{' '}
                                        <a href="#" className="hover:text-green-500 underline" style={{color: '#579db3'}}>
                                            Terms & Conditions
                                        </a>
                                        .
                                    </label>
                                    {errors.agreed && <div style={{color: 'red', fontSize: 13, marginTop: 4, marginLeft: 8}}>{errors.agreed}</div>}
                                </div>

                                {/* Submit Button */}
                                <Button
                                    type="submit"
                                    fullWidth
                                    className="flex items-center justify-center gap-2 group"
                                    disabled={isSubmitting}
                                >
                                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    {isSubmitting ? 'SENDING...' : 'SUBMIT'}
                                </Button>

                                {/* Success/Error Message */}
                                {submitMessage && (
                                    <div className={`p-4 rounded-lg text-center ${
                                        submitMessage.includes('Thank you') 
                                            ? 'bg-green-100 text-green-700 border border-green-300' 
                                            : 'bg-red-100 text-red-700 border border-red-300'
                                    }`}>
                                        {submitMessage}
                                    </div>
                                )}
                            </form>
                        </div>

                        {/* Doctor Image Section */}
                        <div className="flex justify-center lg:justify-end">
                            <div className="relative">
                                <div className="w-96 h-96 bg-gradient-to-br from-blue-100 to-green-100 rounded-full flex items-center justify-center overflow-hidden" style={{'--tw-gradient-from': '#e8f4f6', '--tw-gradient-to': '#dcfce7'}}>
                                    {/* Doctor illustration placeholder */}
                                    <div className="w-80 h-80 bg-white rounded-full flex items-center justify-center shadow-lg">
                                        <div className="text-center">
                                            <div className="w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center" style={{backgroundColor: '#579db3'}}>
                                                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                                                    <div className="w-16 h-16 rounded-full" style={{backgroundColor: '#e8f4f6'}}></div>
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <div className="w-24 h-3 rounded mx-auto" style={{backgroundColor: '#c7dfe3'}}></div>
                                                <div className="w-20 h-3 bg-green-200 rounded mx-auto"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Floating elements */}
                                <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full animate-bounce delay-100"></div>
                                <div className="absolute top-1/2 -left-6 w-6 h-6 rounded-full animate-pulse" style={{backgroundColor: '#579db3'}}></div>
                                <div className="absolute -bottom-2 left-1/3 w-4 h-4 bg-yellow-400 rounded-full animate-ping delay-300"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Map Section */}
            <div className="w-full h-96">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.8!2d-97.7836!3d30.3893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b5a7a88a86cf%3A0x5d9b4f5b8b8b8b8b!2s5900%20Balcones%20Dr%2C%20Austin%2C%20TX%2078731%2C%20USA!5e0!3m2!1sen!2s!4v1625000000000!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Care Cycle Billing Location"
                ></iframe>
            </div>
        </div>
    );
}

export default Contact;