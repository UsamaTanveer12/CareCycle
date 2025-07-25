import React, { useState, useEffect } from 'react';

function Term() {
    const [activeSection, setActiveSection] = useState('');
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Navigation items for sidebar
    const navItems = [
        { id: 'service-agreement', title: 'Service Agreement', shortTitle: 'Service' },
        { id: 'client-responsibilities', title: 'Client Responsibilities', shortTitle: 'Responsibilities' },
        { id: 'hipaa-compliance', title: 'HIPAA Compliance', shortTitle: 'HIPAA' },
        { id: 'payment-terms', title: 'Payment Terms', shortTitle: 'Payment' },
        { id: 'limitation-liability', title: 'Limitation of Liability', shortTitle: 'Liability' },
        { id: 'confidentiality', title: 'Confidentiality', shortTitle: 'Confidentiality' },
        { id: 'termination', title: 'Termination', shortTitle: 'Termination' },
        { id: 'website-use', title: 'Website Use', shortTitle: 'Website' },
        { id: 'changes-terms', title: 'Changes to Terms', shortTitle: 'Changes' },
        { id: 'governing-law', title: 'Governing Law', shortTitle: 'Law' },
        { id: 'contact-info', title: 'Contact Information', shortTitle: 'Contact' }
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
                        <p className="font-semibold text-base sm:text-lg tracking-wider" style={{color: '#579db3'}}>Your Agreement With Us</p>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">Terms & Conditions</h1>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
                            Please read these terms carefully as they govern your use of our medical billing services and establish our mutual responsibilities.
                        </p>
                        <div className="flex items-center justify-center gap-2 text-gray-700 mt-6 sm:mt-8">
                            <a href="/" className="font-medium transition-colors cursor-pointer text-sm sm:text-base" style={{color: '#579db3'}}>
                                Home
                            </a>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500" aria-hidden="true">
                                <path d="m9 18 6-6-6-6"></path>
                            </svg>
                            <span className="font-medium text-sm sm:text-base">Terms & Conditions</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Toggle */}
            <div className="lg:hidden sticky top-0 z-50 bg-white border-b-2 px-4 py-3" style={{borderColor: '#579db3'}}>
                <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-gray-900">Table of Contents</h2>
                    <button 
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="flex items-center gap-2 px-3 py-2 text-white rounded-lg font-medium text-sm"
                        style={{backgroundColor: '#579db3'}}
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
                                            ? 'text-white font-medium'
                                            : 'text-gray-600 hover:bg-white hover:text-gray-900'
                                    }`}
                                    style={activeSection === item.id ? {backgroundColor: '#579db3'} : {}}
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
                            <div className="bg-white rounded-xl shadow-lg border-2 p-6" style={{borderColor: '#579db3'}}>
                                <h3 className="text-lg font-bold text-gray-900 mb-4">Table of Contents</h3>
                                <nav className="space-y-2">
                                    {navItems.map((item) => (
                                        <button
                                            key={item.id}
                                            onClick={() => scrollToSection(item.id)}
                                            className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                                                activeSection === item.id
                                                    ? 'text-white font-medium shadow-md border-l-4 border-white'
                                                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                            }`}
                                            style={activeSection === item.id ? {backgroundColor: '#579db3'} : {}}
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
                            <div className="border-2 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8" style={{backgroundColor: '#f0f6ff', borderColor: '#579db3'}}>
                                <p className="text-sm font-medium mb-2" style={{color: '#579db3'}}>Last Updated: January 2025</p>
                                <p className="text-gray-700 text-sm sm:text-base">
                                    These Terms and Conditions govern your use of MediCycle Billing's services and establish the legal framework for our professional relationship.
                                </p>
                            </div>

                            {/* Service Agreement */}
                            <section id="service-agreement" className="mb-8 sm:mb-12">
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 pb-2" style={{borderBottom: `2px solid #579db3`}}>Service Agreement</h2>
                                <div className="border-2 rounded-lg p-4 sm:p-6" style={{backgroundColor: '#f8fafb', borderColor: '#579db3'}}>
                                    <p className="text-gray-700 text-sm sm:text-base">
                                        By using services provided by MediCycle Billing, you agree to enter into a professional agreement for medical billing and/or revenue cycle management services. A separate Service Agreement may be signed to define the scope of work, pricing, timelines, and responsibilities between both parties.
                                    </p>
                                </div>
                            </section>

                            {/* Client Responsibilities */}
                            <section id="client-responsibilities" className="mb-8 sm:mb-12">
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 pb-2" style={{borderBottom: `2px solid #579db3`}}>Client Responsibilities</h2>
                                <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base">
                                    Clients are responsible for providing timely, accurate, and complete information required to process medical billing, coding, and payer claims. This includes but is not limited to:
                                </p>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                                    {[
                                        'Patient demographics and insurance information',
                                        'Valid clinical documentation for coding and billing',
                                        'Updates on credentialing or payer enrollment',
                                        'Notification of changes in practice or payer contracts'
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-start gap-3 p-3 sm:p-4 bg-white border-2 rounded-lg" style={{borderColor: '#579db3'}}>
                                            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center flex-shrink-0 text-white font-semibold text-xs sm:text-sm" style={{backgroundColor: '#579db3'}}>
                                                {index + 1}
                                            </div>
                                            <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 sm:p-6">
                                    <p className="text-gray-700 text-sm sm:text-base">
                                        <strong>Important:</strong> Failure to provide such information may delay processing or impact claim outcomes, for which MediCycle MBS is not liable.
                                    </p>
                                </div>
                            </section>

                            {/* HIPAA Compliance */}
                            <section id="hipaa-compliance" className="mb-8 sm:mb-12">
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 pb-2" style={{borderBottom: `2px solid #579db3`}}>HIPAA Compliance</h2>
                                <div className="border-2 rounded-lg p-4 sm:p-6" style={{backgroundColor: '#f0f6ff', borderColor: '#579db3'}}>
                                    <div className="flex flex-col sm:flex-row items-start gap-4">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0" style={{backgroundColor: '#579db3'}}>
                                            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                            </svg>
                                        </div>
                                        <div className="text-center sm:text-left">
                                            <h3 className="text-lg sm:text-xl font-semibold mb-3" style={{color: '#579db3'}}>Full HIPAA Compliance Commitment</h3>
                                            <p className="text-gray-700 text-sm sm:text-base">
                                                MediCycle Billing is committed to protecting patient privacy and complies fully with the Health Insurance Portability and Accountability Act (HIPAA). All client data, patient records, and communication are handled through secure, encrypted channels, and we enforce strict internal policies to ensure confidentiality and data integrity.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Payment Terms */}
                            <section id="payment-terms" className="mb-8 sm:mb-12">
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 pb-2" style={{borderBottom: `2px solid #579db3`}}>Payment Terms</h2>
                                <div className="space-y-4 sm:space-y-6">
                                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 sm:p-6">
                                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">Service Fees</h3>
                                        <p className="text-gray-700 text-sm sm:text-base">
                                            All service fees, unless otherwise agreed upon in writing, are due as outlined in the formal agreement. Failure to pay invoices within the agreed timeframe may result in interest charges, service suspension, or termination of the agreement.
                                        </p>
                                    </div>
                                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6">
                                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">Pricing Structure</h3>
                                        <p className="text-gray-700 text-sm sm:text-base">
                                            Invoices and payment terms are based on service level (e.g., percentage of collections, per claim, or flat fee) and are discussed prior to onboarding.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Limitation of Liability */}
                            <section id="limitation-liability" className="mb-8 sm:mb-12">
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 pb-2" style={{borderBottom: `2px solid #579db3`}}>Limitation of Liability</h2>
                                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 sm:p-6 mb-4 sm:mb-6">
                                    <p className="text-gray-700 mb-4 text-sm sm:text-base">
                                        MediCycle Billing will perform all services with professional care and industry-standard practices. However, we are not liable for any delays, denials, or revenue losses resulting from:
                                    </p>
                                </div>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                                    {[
                                        'Errors in client-provided data',
                                        'Payer-side issues or policy changes',
                                        'Government regulation changes',
                                        'Third-party system failures or outages'
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-center gap-3 p-3 sm:p-4 bg-white border border-red-200 rounded-lg">
                                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                                            </svg>
                                            <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="bg-red-50 border border-red-200 rounded-lg p-4 sm:p-6">
                                    <p className="text-gray-700 text-sm sm:text-base">
                                        <strong>Maximum Liability:</strong> Our maximum liability shall not exceed the total amount paid to us for services rendered in the previous 30 days.
                                    </p>
                                </div>
                            </section>

                            {/* Confidentiality */}
                            <section id="confidentiality" className="mb-8 sm:mb-12">
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 pb-2" style={{borderBottom: `2px solid #579db3`}}>Confidentiality</h2>
                                <div className="border-2 rounded-lg p-4 sm:p-6" style={{backgroundColor: '#f8fafb', borderColor: '#579db3'}}>
                                    <div className="flex flex-col sm:flex-row items-start gap-4">
                                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0" style={{backgroundColor: '#579db3'}}>
                                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        </div>
                                        <p className="text-gray-700 text-sm sm:text-base text-center sm:text-left">
                                            Both parties agree to maintain the confidentiality of all proprietary and sensitive information exchanged during the course of business. This includes but is not limited to patient data, financial records, and business operations.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Termination */}
                            <section id="termination" className="mb-8 sm:mb-12">
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 pb-2" style={{borderBottom: `2px solid #579db3`}}>Termination</h2>
                                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 sm:p-6">
                                    <p className="text-gray-700 text-sm sm:text-base">
                                        Either party may terminate services with written notice, subject to any notice period or terms specified in the service agreement. Upon termination, all outstanding balances must be settled, and any data or materials will be returned as mutually agreed.
                                    </p>
                                </div>
                            </section>

                            {/* Website Use */}
                            <section id="website-use" className="mb-8 sm:mb-12">
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 pb-2" style={{borderBottom: `2px solid #579db3`}}>Website Use</h2>
                                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6">
                                    <p className="text-gray-700 text-sm sm:text-base">
                                        The content on this website is for informational purposes only. MediCycle Billing reserves the right to update, modify, or remove content without notice. Unauthorized use, data scraping, or misuse of any content is strictly prohibited.
                                    </p>
                                </div>
                            </section>

                            {/* Changes to Terms */}
                            <section id="changes-terms" className="mb-8 sm:mb-12">
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 pb-2" style={{borderBottom: `2px solid #579db3`}}>Changes to Terms</h2>
                                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 sm:p-6">
                                    <p className="text-gray-700 text-sm sm:text-base">
                                        We may update these Terms and Conditions periodically. Continued use of our website or services after any changes constitutes acceptance of the new terms. The latest version will always be available on this page.
                                    </p>
                                </div>
                            </section>

                            {/* Governing Law */}
                            <section id="governing-law" className="mb-8 sm:mb-12">
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 pb-2" style={{borderBottom: `2px solid #579db3`}}>Governing Law</h2>
                                <div className="border-2 rounded-lg p-4 sm:p-6" style={{backgroundColor: '#f0f6ff', borderColor: '#579db3'}}>
                                    <div className="flex flex-col sm:flex-row items-center gap-4">
                                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#579db3'}}>
                                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16l-3-9m3 9l3-9" />
                                            </svg>
                                        </div>
                                        <p className="text-gray-700 text-sm sm:text-base text-center sm:text-left">
                                            These Terms shall be governed and interpreted in accordance with the laws of the state in which MediCycle Billing is registered, without regard to its conflict of law provisions.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Contact Information */}
                            <section id="contact-info" className="mb-8 sm:mb-12">
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 pb-2" style={{borderBottom: `2px solid #579db3`}}>Contact Information</h2>
                                <div className="bg-gradient-to-r from-green-50 to-blue-50 border-2 rounded-lg p-4 sm:p-6" style={{borderColor: '#579db3'}}>
                                    <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base">For any questions about these Terms and Conditions, please contact us:</p>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                                        <div className="text-center">
                                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{backgroundColor: '#e6f3ff'}}>
                                                <svg className="w-5 h-5 sm:w-6 sm:h-6" style={{color: '#579db3'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                </svg>
                                            </div>
                                            <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Phone</h3>
                                            <p className="text-gray-700 text-sm sm:text-base">614-465-6718</p>
                                        </div>
                                    </div>
                                    <div className="text-center mt-4 sm:mt-6 pt-4 sm:pt-6 border-t-2" style={{borderColor: '#579db3'}}>
                                        <p className="text-gray-600 text-sm sm:text-base">
                                            <strong>Business Hours:</strong> Monday – Friday, 9:00 AM – 6:00 PM (PST)
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

export default Term;
                                            