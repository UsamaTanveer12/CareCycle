import React, { useState, useEffect } from 'react';

function Privacy() {
    const [activeSection, setActiveSection] = useState('');
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Navigation items for sidebar
    const navItems = [
        { id: 'information-collect', title: 'Information We Collect', shortTitle: 'Information' },
        { id: 'how-we-use', title: 'How We Use Information', shortTitle: 'Usage' },
        { id: 'hipaa-compliance', title: 'HIPAA Compliance', shortTitle: 'HIPAA' },
        { id: 'sharing-disclosure', title: 'Sharing & Disclosure', shortTitle: 'Sharing' },
        { id: 'cookies-analytics', title: 'Cookies & Analytics', shortTitle: 'Cookies' },
        { id: 'data-retention', title: 'Data Retention', shortTitle: 'Retention' },
        { id: 'your-rights', title: 'Your Rights', shortTitle: 'Rights' },
        { id: 'third-party', title: 'Third-Party Links', shortTitle: 'Third-Party' },
        { id: 'children-privacy', title: 'Children\'s Privacy', shortTitle: 'Children' },
        { id: 'policy-updates', title: 'Policy Updates', shortTitle: 'Updates' },
        { id: 'contact-us', title: 'Contact Us', shortTitle: 'Contact' }
    ];

    // Check if mobile
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024);
            if (window.innerWidth >= 1024) {
                setSidebarOpen(false);
            }
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Scroll to section function
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            if (isMobile) {
                setSidebarOpen(false);
            }
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
            {/* Hero Section - Responsive */}
            <div className="relative bg-gradient-to-br from-blue-50 via-gray-50 to-blue-100 py-12 sm:py-16 lg:py-20" style={{backgroundImage: 'url("/assets/group.webp")', backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat'}}>
                <div className="absolute inset-0 bg-[#fefefe]/90 bg-opacity-80"></div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center space-y-4 sm:space-y-6">
                        <p className="text-green-500 font-semibold text-base sm:text-lg tracking-wider">Your Privacy Matters</p>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">Privacy Policy</h1>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
                            Learn how we protect and handle your personal and health information in compliance with HIPAA regulations.
                        </p>
                        <div className="flex items-center justify-center gap-2 text-gray-700 mt-6 sm:mt-8">
                            <a href="/" className="font-medium hover:text-green-500 transition-colors cursor-pointer text-sm sm:text-base">
                                Home
                            </a>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500" aria-hidden="true">
                                <path d="m9 18 6-6-6-6"></path>
                            </svg>
                            <span className="font-medium text-sm sm:text-base">Privacy Policy</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Toggle */}
            <div className="lg:hidden sticky top-0 z-50 bg-white border-b border-gray-200 px-4 py-3">
                <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-gray-900">Table of Contents</h2>
                    <button 
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="flex items-center gap-2 px-3 py-2 text-green-600 bg-green-50 rounded-lg font-medium text-sm"
                    >
                        <svg className={`w-4 h-4 transition-transform ${sidebarOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                        {sidebarOpen ? 'Hide' : 'Show'} Menu
                    </button>
                </div>
                
                {/* Mobile Dropdown Navigation */}
                {sidebarOpen && (
                    <div className="mt-3 bg-gray-50 rounded-lg p-3 max-h-60 overflow-y-auto">
                        <div className="grid grid-cols-2 gap-2">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`text-left px-3 py-2 rounded-lg transition-all duration-200 text-sm ${
                                        activeSection === item.id
                                            ? 'bg-green-100 text-green-700 font-medium'
                                            : 'text-gray-600 hover:bg-white hover:text-gray-900'
                                    }`}
                                >
                                    {item.shortTitle}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
                <div className="flex gap-6 lg:gap-12">
                    {/* Desktop Sidebar Navigation */}
                    <div className="hidden lg:block w-80 flex-shrink-0">
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

                    {/* Main Content Area - Responsive */}
                    <div className="flex-1 max-w-none lg:max-w-4xl">
                        <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
                            {/* Last Updated */}
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8">
                                <p className="text-blue-800 text-sm font-medium mb-2">Last Updated: January 2025</p>
                                <p className="text-blue-700 text-sm sm:text-base">
                                    This Privacy Policy explains how Care Cycle Billing collects, uses, protects, and shares your information when you use our services or visit our website.
                                </p>
                            </div>

                            {/* Information We Collect */}
                            <section id="information-collect" className="mb-8 sm:mb-12">
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 border-b-2 border-green-500 pb-2">Information We Collect</h2>
                                <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base">We collect various types of information depending on how you interact with us:</p>
                                
                                <div className="space-y-4 sm:space-y-6">
                                    <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
                                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Personal & Business Information</h3>
                                        <ul className="list-disc pl-4 sm:pl-6 space-y-2 text-gray-700 text-sm sm:text-base">
                                            <li>Name, email, phone number, business/practice name</li>
                                            <li>Job title or role</li>
                                            <li>Practice specialty and provider NPI</li>
                                            <li>Billing or contact preferences</li>
                                        </ul>
                                    </div>

                                    <div className="bg-blue-50 rounded-lg p-4 sm:p-6">
                                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Patient Health Information (PHI)</h3>
                                        <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">As a medical billing and RCM provider, we may collect or process PHI in accordance with HIPAA guidelines:</p>
                                        <ul className="list-disc pl-4 sm:pl-6 space-y-2 text-gray-700 text-sm sm:text-base">
                                            <li>Patient demographics</li>
                                            <li>Insurance information</li>
                                            <li>Diagnosis and treatment codes (ICD-10, CPT, HCPCS)</li>
                                            <li>Medical records or clinical notes when required for coding/billing</li>
                                        </ul>
                                    </div>

                                    <div className="bg-green-50 rounded-lg p-4 sm:p-6">
                                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Technical & Website Data</h3>
                                        <ul className="list-disc pl-4 sm:pl-6 space-y-2 text-gray-700 text-sm sm:text-base">
                                            <li>IP address, browser type, pages visited</li>
                                            <li>Date/time of visit and device type</li>
                                            <li>Cookies and analytics data (non-personally identifiable)</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* How We Use Information */}
                            <section id="how-we-use" className="mb-8 sm:mb-12">
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 border-b-2 border-green-500 pb-2">How We Use Your Information</h2>
                                <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base">Care Cycle Billing uses your information to:</p>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                                    <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6">
                                        <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
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
                                    <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6">
                                        <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
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
                            <section id="hipaa-compliance" className="mb-8 sm:mb-12">
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 border-b-2 border-green-500 pb-2">HIPAA Compliance & Data Protection</h2>
                                <div className="bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-lg p-4 sm:p-6 mb-4 sm:mb-6">
                                    <p className="text-gray-700 mb-4 text-sm sm:text-base">
                                        <strong>Care Cycle Billing is fully compliant with the Health Insurance Portability and Accountability Act (HIPAA).</strong> We implement strict administrative, physical, and technical safeguards to:
                                    </p>
                                </div>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-3 p-3 sm:p-4 bg-white border border-gray-200 rounded-lg">
                                            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                                </svg>
                                            </div>
                                            <span className="text-gray-700 text-sm sm:text-base">Protect PHI from unauthorized access, disclosure, or alteration</span>
                                        </div>
                                        <div className="flex items-start gap-3 p-3 sm:p-4 bg-white border border-gray-200 rounded-lg">
                                            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                                </svg>
                                            </div>
                                            <span className="text-gray-700 text-sm sm:text-base">Encrypt and securely store sensitive health data</span>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-3 p-3 sm:p-4 bg-white border border-gray-200 rounded-lg">
                                            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                </svg>
                                            </div>
                                            <span className="text-gray-700 text-sm sm:text-base">Limit access to data based on user roles and need-to-know policies</span>
                                        </div>
                                        <div className="flex items-start gap-3 p-3 sm:p-4 bg-white border border-gray-200 rounded-lg">
                                            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                </svg>
                                            </div>
                                            <span className="text-gray-700 text-sm sm:text-base">Maintain Business Associate Agreements (BAAs) with all relevant partners</span>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-gray-700 mt-4 sm:mt-6 p-3 sm:p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-sm sm:text-base">
                                    We conduct regular audits, employee training, and updates to stay current with regulatory requirements.
                                </p>
                            </section>

                            {/* Sharing and Disclosure */}
                            <section id="sharing-disclosure" className="mb-8 sm:mb-12">
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 border-b-2 border-green-500 pb-2">Sharing and Disclosure</h2>
                                <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base">Information may only be shared under the following circumstances:</p>
                                <div className="space-y-3 sm:space-y-4">
                                    {[
                                        'With authorized personnel or subcontractors bound by confidentiality and HIPAA agreements',
                                        'With insurance companies, payers, or clearinghouses to process claims',
                                        'When required by law (e.g., subpoenas, audits, legal actions)',
                                        'During business transactions (e.g., mergers or acquisitions), provided protections remain in place'
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-white border border-gray-200 rounded-lg">
                                            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 font-semibold text-xs sm:text-sm">
                                                {index + 1}
                                            </div>
                                            <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Cookies and Analytics */}
                            <section id="cookies-analytics" className="mb-8 sm:mb-12">
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 border-b-2 border-green-500 pb-2">Cookies and Website Analytics</h2>
                                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 sm:p-6">
                                    <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">
                                        Our website uses cookies and similar tracking technologies to enhance your user experience and collect non-identifiable usage data for analytics purposes.
                                    </p>
                                    <p className="text-gray-700 text-sm sm:text-base">
                                        You may adjust your browser settings to block cookies. Doing so may affect site functionality.
                                    </p>
                                </div>
                            </section>

                            {/* Data Retention */}
                            <section id="data-retention" className="mb-8 sm:mb-12">
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 border-b-2 border-green-500 pb-2">Data Retention</h2>
                                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 sm:p-6">
                                    <p className="text-gray-700 text-sm sm:text-base">
                                        We retain billing and health-related information only as long as necessary to fulfill service obligations, legal requirements, and audit purposes. Upon termination of services, clients may request data deletion or secure transfer.
                                    </p>
                                </div>
                            </section>

                            {/* Your Rights */}
                            <section id="your-rights" className="mb-8 sm:mb-12">
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 border-b-2 border-green-500 pb-2">Your Rights</h2>
                                <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base">If you are a client, provider, or patient whose data we process, you have the right to:</p>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
                                    {[
                                        'Request access to the data we hold about you',
                                        'Request correction of inaccurate or outdated information',
                                        'Request deletion, subject to contractual or legal limitations',
                                        'Request a copy of your data in a portable format',
                                        'Withdraw consent for communications at any time'
                                    ].map((right, index) => (
                                        <div key={index} className="flex items-start gap-3 p-3 sm:p-4 bg-green-50 border border-green-200 rounded-lg">
                                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-gray-700 text-sm sm:text-base">{right}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Third-Party Links */}
                            <section id="third-party" className="mb-8 sm:mb-12">
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 border-b-2 border-green-500 pb-2">Third-Party Links</h2>
                                <div className="bg-red-50 border border-red-200 rounded-lg p-4 sm:p-6">
                                    <p className="text-gray-700 text-sm sm:text-base">
                                        Our website may contain links to third-party websites or tools. Care Cycle Billing is not responsible for the privacy practices or content of these sites. We recommend reviewing their privacy policies before providing any personal information.
                                    </p>
                                </div>
                            </section>

                            {/* Children's Privacy */}
                            <section id="children-privacy" className="mb-8 sm:mb-12">
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 border-b-2 border-green-500 pb-2">Children's Privacy</h2>
                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6">
                                    <p className="text-gray-700 text-sm sm:text-base">
                                        Our services are not intended for individuals under the age of 18. We do not knowingly collect or store information from minors.
                                    </p>
                                </div>
                            </section>

                            {/* Policy Updates */}
                            <section id="policy-updates" className="mb-8 sm:mb-12">
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 border-b-2 border-green-500 pb-2">Updates to This Policy</h2>
                                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 sm:p-6">
                                    <p className="text-gray-700 text-sm sm:text-base">
                                        We may update this Privacy Policy periodically to reflect changes in laws, technologies, or business practices. Any updates will be posted on this page with the revised effective date. Continued use of our services after changes are made implies consent to the updated policy.
                                    </p>
                                </div>
                            </section>

                            {/* Contact Us */}
                            <section id="contact-us" className="mb-8 sm:mb-12">
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 border-b-2 border-green-500 pb-2">Contact Us</h2>
                                <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                                    <p className="text-gray-700 text-sm sm:text-base">
                                        If you have any questions or concerns regarding this Privacy Policy, please contact us at <a href="mailto:privacy@carecyclebilling.com" className="text-blue-600 hover:underline">privacy@carecyclebilling.com</a>.
                                    </p>
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