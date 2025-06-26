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
    { key: 'philosophy', label: 'Philosophy', icon: 'globe' },
    { key: 'vision', label: 'Our Vision', icon: 'eye' },
    { key: 'mission', label: 'Our Mission', icon: 'send' }
  ];

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'globe':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
            <path d="M2 12h20"></path>
          </svg>
        );
      case 'eye':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
        );
      case 'send':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
            <path d="m21.854 2.147-10.94 10.939"></path>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <p className="text-[#579db3] text-lg font-medium mb-4">Clear Vision and Mission-Focused.</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Committed to Your Practice Growth</h2>
        </div>
        
        <div className="flex flex-col lg:flex-row justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 ${
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

        <div className="max-w-6xl mx-auto">
          <div className="rounded-2xl p-8 lg:p-12 transition-all duration-500 ease-in-out">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{tabData[activeTab].title}</h3>
            {tabData[activeTab].content.map((paragraph, index) => (
              <p key={index} className="text-gray-700 text-lg leading-relaxed mb-6 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tabs;