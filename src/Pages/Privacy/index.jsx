import React, { useState, useEffect } from 'react';

function Privacy() {
    const [activeSection, setActiveSection] = useState('');

    // Navigation items for sidebar
    const navItems = [
        { id: 'information-collect', title: 'Information We Collect' },
        { id: 'how-we-use', title: 'How We Use Information' },
        { id: 'hipaa-compliance', title: 'HIPAA Compliance' },
        { id: 'sharing-disclosure', title: 'Sharing & Disclosure' },
        { id: 'cookies-analytics', title: 'Cookies & Analytics' },
        { id: 'data-retention', title: 'Data Retention' },
        { id: 'your-rights', title: 'Your Rights' },
        { id: 'third-party', title: 'Third-Party Links' },
        { id: 'children-privacy', title: 'Children\'s Privacy' },
        { id: 'policy-updates', title: 'Policy Updates' },
        { id: 'contact-us', title: 'Contact Us' }
    ];

    // Scroll to section function
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    // Track active section on scroll
    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => document.getElementById(item.id));
            const scrollPosition = window.scrollY + 150;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(navItems[i].id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Set initial active section
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-blue-50 via-gray-50 to-blue-100 py-20" style={{backgroundImage: 'url("/assets/group.webp")', backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat'}}>
                <div className="absolute inset-0 bg-[#fefefe]/90 bg-opacity-80"></div>
                <div className="container mx-auto px-8 relative z-10">
                    <div className="text-center space-y-6">
                        <p className="text-green-500 font-semibold text-lg tracking-wider">Your Privacy Matters</p>
                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">Privacy Policy</h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Learn how we protect and handle your personal and health information in compliance with HIPAA regulations.
                        </p>
                        <div className="flex items-center justify-center gap-2 text-gray-700 mt-8">
                            <a href="/" className="font-medium hover:text-green-500 transition-colors cursor-pointer">
                                Home
                            </a>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right w-4 h-4 text-gray-500" aria-hidden="true">
                                <path d="m9 18 6-6-6-6"></path>
                            </svg>
                            <span className="font-medium">Privacy Policy</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-8 py-16">
                <div className="flex gap-12">
                    {/* Sidebar Navigation */}
                    <div className="w-80 flex-shrink-0">
                        <div className="sticky top-8">
                            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-4">Table of Contents</h3>
                                <nav className="space-y-2">
                                    {navItems.map((item) => (
                                        <button
                                            key={item.id}
                                            onClick={() => scrollToSection(item.id)}
                                            className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                                                activeSection === item.id
                                                    ? 'bg-green-50 text-green-700 border-l-4 border-green-500 font-medium'
                                                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                            }`}
                                        >
                                            {item.title}
                                        </button>
                                    ))}
                                </nav>
                            </div>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="flex-1 max-w-4xl">
                        <div className="prose prose-lg max-w-none">
                            {/* Last Updated */}
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                                <p className="text-blue-800 text-sm font-medium mb-2">Last Updated: January 2025</p>
                                <p className="text-blue-700">
                                    This Privacy Policy explains how Care Cycle Billing collects, uses, protects, and shares your information when you use our services or visit our website.
                                </p>
                            </div>

                            {/* Information We Collect */}
                            <section id="information-collect" className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-green-500 pb-2">Information We Collect</h2>
                                <p className="text-gray-700 mb-6">We collect various types of information depending on how you interact with us:</p>
                                
                                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal & Business Information</h3>
                                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                        <li>Name, email, phone number, business/practice name</li>
                                        <li>Job title or role</li>
                                        <li>Practice specialty and provider NPI</li>
                                        <li>Billing or contact preferences</li>
                                    </ul>
                                </div>

                                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Patient Health Information (PHI)</h3>
                                    <p className="text-gray-700 mb-4">As a medical billing and RCM provider, we may collect or process PHI in accordance with HIPAA guidelines:</p>
                                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                        <li>Patient demographics</li>
                                        <li>Insurance information</li>
                                        <li>Diagnosis and treatment codes (ICD-10, CPT, HCPCS)</li>
                                        <li>Medical records or clinical notes when required for coding/billing</li>
                                    </ul>
                                </div>

                                <div className="bg-green-50 rounded-lg p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical & Website Data</h3>
                                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                        <li>IP address, browser type, pages visited</li>
                                        <li>Date/time of visit and device type</li>
                                        <li>Cookies and analytics data (non-personally identifiable)</li>
                                    </ul>
                                </div>
                            </section>

                            {/* How We Use Information */}
                            <section id="how-we-use" className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-green-500 pb-2">How We Use Your Information</h2>
                                <p className="text-gray-700 mb-6">Care Cycle Billing uses your information to:</p>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                                        <ul className="space-y-3 text-gray-700">
                                            <li className="flex items-start gap-3">
                                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                                <span>Provide billing and RCM services</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                                <span>Communicate with you regarding services, updates, or issues</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                                <span>Process claims, appeals, and payer communications</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                                        <ul className="space-y-3 text-gray-700">
                                            <li className="flex items-start gap-3">
                                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                                <span>Ensure HIPAA-compliant handling of PHI</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                                <span>Improve our website and service offerings</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                                <span>Comply with legal, regulatory, and audit requirements</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* HIPAA Compliance */}
                            <section id="hipaa-compliance" className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-green-500 pb-2">HIPAA Compliance & Data Protection</h2>
                                <div className="bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-lg p-6 mb-6">
                                    <p className="text-gray-700 mb-4">
                                        <strong>Care Cycle Billing is fully compliant with the Health Insurance Portability and Accountability Act (HIPAA).</strong> We implement strict administrative, physical, and technical safeguards to:
                                    </p>
                                </div>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg">
                                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                                </svg>
                                            </div>
                                            <span className="text-gray-700">Protect PHI from unauthorized access, disclosure, or alteration</span>
                                        </div>
                                        <div className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg">
                                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                                </svg>
                                            </div>
                                            <span className="text-gray-700">Encrypt and securely store sensitive health data</span>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg">
                                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                </svg>
                                            </div>
                                            <span className="text-gray-700">Limit access to data based on user roles and need-to-know policies</span>
                                        </div>
                                        <div className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg">
                                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                </svg>
                                            </div>
                                            <span className="text-gray-700">Maintain Business Associate Agreements (BAAs) with all relevant partners</span>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-gray-700 mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                                    We conduct regular audits, employee training, and updates to stay current with regulatory requirements.
                                </p>
                            </section>

                            {/* Sharing and Disclosure */}
                            <section id="sharing-disclosure" className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-green-500 pb-2">Sharing and Disclosure</h2>
                                <p className="text-gray-700 mb-6">Information may only be shared under the following circumstances:</p>
                                <div className="space-y-4">
                                    {[
                                        'With authorized personnel or subcontractors bound by confidentiality and HIPAA agreements',
                                        'With insurance companies, payers, or clearinghouses to process claims',
                                        'When required by law (e.g., subpoenas, audits, legal actions)',
                                        'During business transactions (e.g., mergers or acquisitions), provided protections remain in place'
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-start gap-4 p-4 bg-white border border-gray-200 rounded-lg">
                                            <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 font-semibold text-sm">
                                                {index + 1}
                                            </div>
                                            <span className="text-gray-700">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Cookies and Analytics */}
                            <section id="cookies-analytics" className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-green-500 pb-2">Cookies and Website Analytics</h2>
                                <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                                    <p className="text-gray-700 mb-4">
                                        Our website uses cookies and similar tracking technologies to enhance your user experience and collect non-identifiable usage data for analytics purposes.
                                    </p>
                                    <p className="text-gray-700">
                                        You may adjust your browser settings to block cookies. Doing so may affect site functionality.
                                    </p>
                                </div>
                            </section>

                            {/* Data Retention */}
                            <section id="data-retention" className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-green-500 pb-2">Data Retention</h2>
                                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                                    <p className="text-gray-700">
                                        We retain billing and health-related information only as long as necessary to fulfill service obligations, legal requirements, and audit purposes. Upon termination of services, clients may request data deletion or secure transfer.
                                    </p>
                                </div>
                            </section>

                            {/* Your Rights */}
                            <section id="your-rights" className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-green-500 pb-2">Your Rights</h2>
                                <p className="text-gray-700 mb-6">If you are a client, provider, or patient whose data we process, you have the right to:</p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {[
                                        'Request access to the data we hold about you',
                                        'Request correction of inaccurate or outdated information',
                                        'Request deletion, subject to contractual or legal limitations',
                                        'Request a copy of your data in a portable format',
                                        'Withdraw consent for communications at any time'
                                    ].map((right, index) => (
                                        <div key={index} className="flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
                                            <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-gray-700">{right}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Third-Party Links */}
                            <section id="third-party" className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-green-500 pb-2">Third-Party Links</h2>
                                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                                    <p className="text-gray-700">
                                        Our website may contain links to third-party websites or tools. Care Cycle Billing is not responsible for the privacy practices or content of these sites. We recommend reviewing their privacy policies before providing any personal information.
                                    </p>
                                </div>
                            </section>

                            {/* Children's Privacy */}
                            <section id="children-privacy" className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-green-500 pb-2">Children's Privacy</h2>
                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                                    <p className="text-gray-700">
                                        Our services are not intended for individuals under the age of 18. We do not knowingly collect or store information from minors.
                                    </p>
                                </div>
                            </section>

                            {/* Policy Updates */}
                            <section id="policy-updates" className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-green-500 pb-2">Updates to This Policy</h2>
                                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                                    <p className="text-gray-700">
                                        We may update this Privacy Policy periodically to reflect changes in laws, technologies, or business practices. Any updates will be posted on this page with the revised effective date. Continued use of our services after changes are made implies consent to the updated policy.
                                    </p>
                                </div>
                            </section>

                            {/* Contact Us */}
                            <section id="contact-us" className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-green-500 pb-2">Contact Us</h2>
                                <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-6">
                                    <p className="text-gray-700 mb-6">If you have any questions or concerns about this Privacy Policy or how we handle data, please contact us:</p>
                                    <div className="grid md:grid-cols-3 gap-6">
                                        <div className="text-center">
                                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                                </svg>
                                            </div>
                                            <h3 className="font-semibold text-gray-900 mb-2">Company</h3>
                                            <p className="text-gray-700">Care Cycle Billing</p>
                                        </div>
                                        <div className="text-center">
                                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                            <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                                            <p className="text-gray-700">contact@CareCyclebilling.com</p>
                                        </div>
                                        <div className="text-center">
                                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                </svg>
                                            </div>
                                            <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                                            <p className="text-gray-700">614-465-6718</p>
                                        </div>
                                    </div>
                                    <div className="text-center mt-6 pt-6 border-t border-green-200">
                                        <p className="text-gray-600">
                                            <strong>Business Hours:</strong> Monday – Friday, 9:00 AM – 6:00 PM (EST)
                                        </p>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Privacy;