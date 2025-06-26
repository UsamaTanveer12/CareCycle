import React, { useState } from 'react';

function Tabs() {
  const [activeTab, setActiveTab] = useState('mission');

  const tabData = {
    philosophy: {
      title: 'Our Philosophy',
      content: [
        "We believe that healthcare providers should focus on what they do best - caring for patients. Our philosophy centers around removing the complexity and stress from medical billing, allowing practitioners to dedicate their time and energy to patient care.",
        "Every decision we make is guided by integrity, transparency, and a deep understanding of the healthcare landscape. We don't just process claims; we build lasting partnerships based on trust and mutual success.",
        "Our approach combines cutting-edge technology with human expertise, ensuring that each client receives personalized attention while benefiting from industry-leading efficiency and accuracy."
      ]
    },
    vision: {
      title: 'Our Vision',
      content: [
        "We envision a healthcare ecosystem where financial operations run seamlessly in the background, enabling providers to focus entirely on patient outcomes and practice growth.",
        "Our vision is to become the most trusted revenue cycle management partner in healthcare, known for our reliability, innovation, and unwavering commitment to our clients' success.",
        "We see a future where billing complexities are eliminated, cash flow is predictable, and healthcare practices can thrive without the burden of administrative challenges. We're building that future, one partnership at a time."
      ]
    },
    mission: {
      title: 'Our Mission',
      content: [
        "Our mission is to simplify the revenue cycle for healthcare providers while delivering the highest level of accuracy, compliance, and customer service. We're committed to helping practices reduce administrative burden, eliminate billing errors, and collect more of what they've earned without the stress.",
        "We support providers at every stage, from solo practitioners to expanding multi-specialty groups, by offering flexible, end-to-end billing solutions tailored to their unique workflows. Our team is trained to anticipate billing roadblocks, resolve issues before they grow, and keep payments moving smoothly.",
        "Above all, our mission is rooted in trust and partnership. We treat your revenue like our own and take pride in being the team that works quietly behind the scenes to keep your practice financially healthy, operationally efficient, and focused on delivering excellent patient care."
      ]
    }
  };

  const tabs = [
    { key: 'philosophy', label: 'Philosophy', shortLabel: 'Philosophy', icon: 'globe' },
    { key: 'vision', label: 'Our Vision', shortLabel: 'Vision', icon: 'eye' },
    { key: 'mission', label: 'Our Mission', shortLabel: 'Mission', icon: 'send' }
  ];

  const getIcon = (iconName) => {
    const iconClass = "w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0";
    switch (iconName) {
      case 'globe':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={iconClass}>
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
            <path d="M2 12h20"></path>
          </svg>
        );
      case 'eye':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={iconClass}>
            <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
        );
      case 'send':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={iconClass}>
            <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
            <path d="m21.854 2.147-10.94 10.939"></path>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section - Responsive */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <p className="text-[#579db3] text-base sm:text-lg font-medium mb-2 sm:mb-4">
            Clear Vision and Mission-Focused.
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Committed to Your Practice Growth
          </h2>
        </div>
        
        {/* Tabs Navigation - Mobile First Approach */}
        <div className="mb-8 sm:mb-10 lg:mb-12">
          {/* Mobile: Horizontal Scrollable Tabs */}
          <div className="flex sm:hidden overflow-x-auto gap-2 pb-2 scrollbar-hide">
            <div className="flex min-w-full gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-full font-semibold text-sm whitespace-nowrap transition-all duration-300 flex-shrink-0 ${
                    activeTab === tab.key
                      ? 'bg-[#579db3] text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                  }`}
                >
                  {getIcon(tab.icon)}
                  <span className="hidden xs:inline">{tab.shortLabel}</span>
                  <span className="xs:hidden">{tab.shortLabel}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tablet: Centered Vertical Stack */}
          <div className="hidden sm:flex md:hidden flex-col items-center gap-3">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-3 px-6 py-3 rounded-full font-semibold text-base transition-all duration-300 w-full max-w-xs ${
                  activeTab === tab.key
                    ? 'bg-[#579db3] text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
              >
                {getIcon(tab.icon)}
                {tab.label}
              </button>
            ))}
          </div>

          {/* Desktop: Horizontal Centered */}
          <div className="hidden md:flex justify-center gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-3 px-6 lg:px-8 py-3 lg:py-4 rounded-full font-semibold text-base lg:text-lg transition-all duration-300 ${
                  activeTab === tab.key
                    ? 'bg-[#579db3] text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md hover:scale-102'
                }`}
              >
                {getIcon(tab.icon)}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Section - Responsive */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 shadow-lg transition-all duration-500 ease-in-out">
            {/* Content Header */}
            <div className="border-b border-gray-200 pb-4 sm:pb-6 mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 flex items-center gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#579db3] rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="text-white scale-75 sm:scale-100">
                    {getIcon(tabs.find(tab => tab.key === activeTab)?.icon)}
                  </div>
                </div>
                <span className="leading-tight">{tabData[activeTab].title}</span>
              </h3>
            </div>

            {/* Content Body */}
            <div className="space-y-4 sm:space-y-6">
              {tabData[activeTab].content.map((paragraph, index) => (
                <div key={index} className="relative">
                  {/* Decorative line for first paragraph */}
                  {index === 0 && (
                    <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-[#579db3] to-transparent rounded-full opacity-30"></div>
                  )}
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    {paragraph}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Accent */}
            <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-gray-100">
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-[#579db3] rounded-full opacity-60"></div>
                <div className="w-1 h-1 bg-[#579db3] rounded-full opacity-40"></div>
                <div className="w-2 h-2 bg-[#579db3] rounded-full opacity-60"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Indicator - Mobile Only */}
        <div className="flex sm:hidden justify-center mt-6 gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeTab === tab.key
                  ? 'bg-[#579db3] w-6'
                  : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}

export default Tabs;