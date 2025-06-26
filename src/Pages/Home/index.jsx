import React, { useState, useEffect, useRef } from 'react'
import { Carousel } from 'antd'
import { CheckCircleOutlined } from '@ant-design/icons'
import State from "./State";
import Progress from "./Progress";
import ConsultationForm from "./Form";
import Cta from "./Cta";
import Blog from "./Blog";

// Counter Component
const CounterCard = ({ label, value, suffix, description, delay = 0 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        const duration = 2000; // 2 seconds
        const steps = 60;
        const increment = value / steps;
        let current = 0;

        const counter = setInterval(() => {
          current += increment;
          if (current >= value) {
            setCount(value);
            clearInterval(counter);
          } else {
            setCount(Math.floor(current));
          }
        }, duration / steps);

        return () => clearInterval(counter);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isVisible, value, delay]);

  return (
    <div
      ref={cardRef}
      className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
    >
      <div className="mb-6">
        <span className="inline-block bg-[#579db3] text-white font-semibold px-6 py-2 rounded-full text-sm tracking-wide">
          {label}
        </span>
      </div>
      <div className="mb-4">
        <span className="text-6xl font-bold text-gray-900">
          {count}{suffix}
        </span>
      </div>
      <p className="text-gray-700 leading-relaxed text-sm">
        {description}
      </p>
    </div>
  );
};

function Home() {
  const logos = [
    'logo1.png', 'logo2.png', 'logo3.png', 'logo4.png',
    'logo5.png', 'logo6.png', 'logo7.png', 'logo8.png', 'logo10.png'
  ];
  
  const logoGroups = [];
  for (let i = 0; i <= logos.length - 4; i++) {
    logoGroups.push(logos.slice(i, i + 5));
  }

  const tabsData = {
    '1': {
      title: 'End-to-End Revenue Cycle Management',
      description: 'From charge entry to final payment, we handle every step of your revenue cycle to reduce denials and maximize collections.',
      features: [
        'Charge capture, coding, claim submission, and payment posting.',
        'Fully integrated with your EMR/EHR system.',
        'Reduces administrative overhead for your staff.',
        'Improves clean claim rates and speeds up collections.',
        'Ensures payer compliance at every stage of the cycle.',
        'Flag inactive policies or COB issues before claim creation.'
      ],
      image: '/assets/tab1.png',
      alt: 'End-to-End Revenue Cycle Management'
    },
    '2': {
      title: 'Professional Medical Coding Services',
      description: 'Our certified coders ensure accurate ICD-10, CPT, and HCPCS coding to maximize reimbursements and minimize denials.',
      features: [
        'Certified professional coders with specialty expertise.',
        'ICD-10, CPT, and HCPCS coding accuracy.',
        'Regular coding audits and compliance checks.',
        'Coding education and training for your staff.',
        'Specialty-specific coding knowledge.',
        'Documentation improvement recommendations.'
      ],
      image: '/assets/tab2.png',
      alt: 'Professional Medical Coding Services'
    },
    '3': {
      title: 'Provider Credentialing & Enrollment',
      description: 'Streamline your credentialing process with our comprehensive provider enrollment and re-credentialing services.',
      features: [
        'Primary source verification and application submission.',
        'Insurance panel enrollment and maintenance.',
        'CAQH profile management and updates.',
        'State licensing and DEA registration tracking.',
        'Hospital privileges and credentialing support.',
        'Re-credentialing and renewal management.'
      ],
      image: '/assets/tab3.png',
      alt: 'Provider Credentialing & Enrollment'
    },
    '4': {
      title: 'Virtual Medical Assistance',
      description: 'Extend your team with our skilled virtual assistants who handle administrative tasks and patient communications.',
      features: [
        'Appointment scheduling and patient communications.',
        'Prior authorization and insurance verification.',
        'Medical records management and organization.',
        'Telehealth support and coordination.',
        'Patient follow-up and care coordination.',
        'Administrative task management and support.'
      ],
      image: '/assets/tab4.png',
      alt: 'Virtual Medical Assistance'
    },
    '5': {
      title: 'Patient Billing & Collections',
      description: 'Improve patient satisfaction and collections with our compassionate yet effective patient billing services.',
      features: [
        'Clear, easy-to-understand patient statements.',
        'Multiple payment options and plans.',
        'Respectful collections and follow-up processes.',
        'Insurance benefit verification and explanation.',
        'Patient financial counseling and education.',
        'Bad debt recovery and management.'
      ],
      image: '/assets/tab5.png',
      alt: 'Patient Billing & Collections'
    }
  };

  const [activeTab, setActiveTab] = useState('1');

  const tabItems = [
    {
      key: '1',
      label: 'Medical Billing',
    },
    {
      key: '2',
      label: 'Coding Services',
    },
    {
      key: '3',
      label: 'Provider Credentialing',
    },
    {
      key: '4',
      label: 'Virtual Assistance',
    },
    {
      key: '5',
      label: 'Patient Billing',
    },
  ];

  // Stats data for counters
  const statsData = [
    {
      label: 'RESOLUTION',
      value: 95,
      suffix: '%',
      description: 'The majority of claims get paid without needing resubmission.',
      delay: 0
    },
    {
      label: 'A/R REDUCTION',
      value: 85,
      suffix: '%',
      description: 'Faster payments mean a stronger, more predictable cash flow.',
      delay: 200
    },
    {
      label: 'VERIFICATION',
      value: 24,
      suffix: 'Hr',
      description: 'We verify coverage in real time to avoid last-minute denials.',
      delay: 400
    },
    {
      label: 'DENIALS',
      value: 90,
      suffix: '%',
      description: 'We analyze every denial to prevent revenue loss and avoid payer escalation.',
      delay: 600
    }
  ];

  return (
    <>
      <div className="bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-16 w-20 h-20 bg-blue-200 opacity-20 rounded-full"></div>
          <div className="absolute top-32 right-32 w-16 h-16 bg-purple-200 opacity-15 rounded-full"></div>
          <div className="absolute bottom-32 left-32 w-24 h-24 bg-green-200 opacity-10 rounded-full"></div>
          <div className="absolute top-1/3 left-1/5 w-12 h-12 bg-blue-300 opacity-25 transform rotate-45"></div>
          <div className="absolute bottom-1/4 right-1/4 w-8 h-8 bg-purple-300 opacity-20 transform rotate-12"></div>
          <div className="absolute top-1/2 right-1/6 w-6 h-6 bg-green-300 opacity-30 rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-8 py-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[50vh]">
            <div className="space-y-8">
              <div className="space-y-6">
                <p className="text-[#eb2978] font-bold text-sm tracking-wider uppercase">
                  ACCURATE, COMPLIANT, REVENUE-DRIVEN RCM SERVICES
                </p>
                <h1 className="text-5xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  An Expert Medical Billing<br />Company In The{' '}
                  <span className="relative">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EB2978] to-[#579db3]">
                      USA
                    </span>
                  </span>
                </h1>
                <div className="space-y-4 max-w-xl">
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Care Cycle Billing delivers complete, transparent, and compliant billing services that are designed for independent providers, specialty groups, and fast-growing clinics.
                  </p>
                </div>
              </div>
              <button className="bg-[#579db3] hover:bg-[#eb2978] cursor-pointer text-white font-bold px-10 py-4 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
                Claim Your Free Billing Audit!
              </button>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="w-[500px] h-[500px] bg-gradient-to-br from-[#479db8] to-[#eb297752] rounded-full relative overflow-hidden shadow-2xl">
                  <div className="absolute bottom-0 w-full">
                    <img 
                      alt="doctor" 
                      className="w-full h-full object-cover object-top" 
                      src="/assets/hero.webp" 
                    />
                  </div>
                </div>
                
                <div className="absolute top-0 -right-25 space-y-8 mt-14">
                  <div className="text-right">
                    <div className="text-3xl font-bold text-[#579db3]">95%</div>
                    <div className="text-gray-700 font-semibold text-sm tracking-wide">FCFR</div>
                    <div className="w-20 h-0.5 bg-[#EB2978] ml-auto mt-2"></div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-[#579db3]">98%</div>
                    <div className="text-gray-700 font-semibold text-sm tracking-wide">Collections</div>
                    <div className="w-20 h-0.5 bg-[#EB2978] ml-auto mt-2"></div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-[#579db3]">100%</div>
                    <div className="text-gray-700 font-semibold text-sm tracking-wide">HIPAA</div>
                    <div className="w-20 h-0.5 bg-[#EB2978] ml-auto mt-2"></div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-[#579db3]">99%</div>
                    <div className="text-gray-700 font-semibold text-sm tracking-wide">Accuracy</div>
                    <div className="w-20 h-0.5 bg-[#EB2978] ml-auto mt-2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-8 pt-6 pb-10">
        <Carousel 
          autoplay 
          dots={false} 
          infinite={true}
          speed={500}
          autoplaySpeed={1500}
          className="w-full"
        >
          {logoGroups.map((group, idx) => (
            <div key={idx}>
              <div className="flex items-center justify-between px-12">
                {group.map((logo, i) => (
                  <img
                    key={`${logo}-${i}`}
                    alt={`Logo ${i + 1}`}
                    className="h-16 w-auto object-contain flex-shrink-0"
                    src={`/assets/${logo}`}
                  />
                ))}
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      <div className="bg-[#f7f9fb]">
        <div className="container mx-auto px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center justify-center">
            <div className="lg:col-span-5 space-y-8 flex flex-col items-center justify-center">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-[#579db3] p-5 text-white">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-opacity-20 p-2 rounded">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="lucide lucide-chart-column text-xl" 
                        aria-hidden="true"
                      >
                        <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                        <path d="M18 17V9"></path>
                        <path d="M13 17V5"></path>
                        <path d="M8 17v-3"></path>
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold">Revenue Loss Analyzer</h2>
                  </div>
                  <p className="text-white text-opacity-90">Enter your data to estimate your revenue loss</p>
                </div>
                <div className="p-6 space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Total Claims Submitted (per month)</label>
                    <input 
                      placeholder="e.g. 500" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#579db3] focus:border-[#579db3] outline-none transition-colors" 
                      type="text" 
                      defaultValue=""
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Number of Denials (per month)</label>
                    <input 
                      placeholder="e.g. 50" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#579db3] focus:border-[#579db3] outline-none transition-colors" 
                      type="text" 
                      defaultValue=""
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Average Claim Value ($)</label>
                    <input 
                      placeholder="e.g. 200" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#579db3] focus:border-[#579db3] outline-none transition-colors" 
                      type="text" 
                      defaultValue=""
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Average AR Days</label>
                    <input 
                      placeholder="e.g. 45" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#579db3] focus:border-[#579db3] outline-none transition-colors" 
                      type="text" 
                      defaultValue=""
                    />
                  </div>
                  <button className="bg-[#579db3] w-full hover:bg-[#eb2978] cursor-pointer text-white font-bold px-10 py-4 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
                    Estimate Revenue Loss
                  </button>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-7 space-y-6 flex flex-col justify-center">
              <h2 className="text-4xl font-bold text-gray-900">What's Holding Your Practice Back?</h2>
              <p className="text-gray-700 leading-relaxed">Every missed claim, denied payment, or staffing gap costs you more than just revenue. It costs time, patience, and peace of mind. Medical practices and groups today encounter a range of obstacles that impact both patient care and financial stability. Reimbursements are shrinking. Payer rules keep changing. Documentation requirements pile up.</p>
              <p className="text-gray-700 leading-relaxed">Add in staffing shortages, increased administrative burden, and complex billing systems, and running a successful practice starts to feel like a daily firefight. One delayed claim turns into cash flow strain. One coding error invites an audit.</p>
              <div className="grid grid-cols-2 gap-x-8 gap-y-3 my-6">
                <div className="flex items-center gap-2">
                  <span className="text-red-500 font-bold">✕</span>
                  <span className="text-gray-700">Administrative Overload</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-red-500 font-bold">✕</span>
                  <span className="text-gray-700">Technological Challenges</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-red-500 font-bold">✕</span>
                  <span className="text-gray-700">Declining Reimbursements</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-red-500 font-bold">✕</span>
                  <span className="text-gray-700">Cybersecurity Threats</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-red-500 font-bold">✕</span>
                  <span className="text-gray-700">Staffing Shortages</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-red-500 font-bold">✕</span>
                  <span className="text-gray-700">Regulatory Compliance</span>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">At Care Cycle Billing, we understand these pressures because we've helped practices just like yours turn them around. Whether you're a solo provider or managing multiple locations, we bring clarity, consistency, and control back to your revenue cycle.</p>
              <button className="bg-[#579db3] w-fit hover:bg-[#eb2978] cursor-pointer text-white font-bold px-10 py-4 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">Get Your Free Revenue Review</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Medical Billing Services</h2>
        </div>
        
        <div className="mb-8">
          <div className="flex justify-center">
            <div className="flex items-center bg-gray-100 rounded-full p-1">
              {tabItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => setActiveTab(item.key)}
                  onMouseEnter={() => setActiveTab(item.key)}
                  className={`px-6 py-3 rounded-full transition-all duration-300 font-medium text-base whitespace-nowrap ${
                    activeTab === item.key
                      ? 'bg-[#579db3] text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">{tabsData[activeTab].title}</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              {tabsData[activeTab].description}
            </p>
            <div className="space-y-4">
              {tabsData[activeTab].features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircleOutlined className="text-green-500 text-lg mt-1 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative">
              <img 
                alt={tabsData[activeTab].alt}
                className="w-96 h-96 object-cover rounded-lg transition-all duration-500 ease-in-out transform hover:scale-105" 
                src={tabsData[activeTab].image}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Updated Stats Section with Counters */}
      <div className="bg-[#f7f9fb]">
        <div className="container mx-auto px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What Sets Care Cycle Billing Apart
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
              Our performance is measured by the numbers that matter to your practice: 
              clean submissions, faster reimbursements, fewer denials, and better visibility. 
              Here's what our partners consistently achieve.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {statsData.map((stat, index) => (
              <CounterCard
                key={index}
                label={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                description={stat.description}
                delay={stat.delay}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Specialty Services Section with Background Blur */}
      <div className="relative overflow-hidden bg-gray-50">
        {/* Background Image with Blur */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat filter blur-sm scale-110"
          style={{ backgroundImage: "url('/assets/doctor.webp')" }}
        ></div>
        
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-white bg-opacity-80"></div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Specialty Focused Medical Billing Services
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
              At Care Cycle Billing, we don't believe in one-size-fits-all. Every specialty has its own codes, compliance needs, and payer rules. We provide specialty-specific billing services that align with your clinical workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {/* Physical Therapy */}
            <div className="relative h-48 rounded-lg overflow-hidden group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/doctor.webp')" }}
              ></div>
              <div className="absolute inset-0 bg-[#579db3] bg-opacity-80 group-hover:bg-opacity-70 transition-all duration-300"></div>
              <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                <div>
                  <h3 className="text-lg font-semibold leading-tight">Physical Therapy</h3>
                </div>
                <div className="flex justify-end">
                  <div className="w-12 h-12 bg-[#4a5d9b] rounded-full flex items-center justify-center shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white">
                      <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Occupational Therapy */}
            <div className="relative h-48 rounded-lg overflow-hidden group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/doctor.webp')" }}
              ></div>
              <div className="absolute inset-0 bg-[#579db3] bg-opacity-80 group-hover:bg-opacity-70 transition-all duration-300"></div>
              <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                <div>
                  <h3 className="text-lg font-semibold leading-tight">Occupational Therapy</h3>
                </div>
                <div className="flex justify-end">
                  <div className="w-12 h-12 bg-[#4a5d9b] rounded-full flex items-center justify-center shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white">
                      <path d="m16 11 2 2 4-4"></path>
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Speech Therapy */}
            <div className="relative h-48 rounded-lg overflow-hidden group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/doctor.webp')" }}
              ></div>
              <div className="absolute inset-0 bg-[#579db3] bg-opacity-80 group-hover:bg-opacity-70 transition-all duration-300"></div>
              <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                <div>
                  <h3 className="text-lg font-semibold leading-tight">Speech Therapy</h3>
                </div>
                <div className="flex justify-end">
                  <div className="w-12 h-12 bg-[#4a5d9b] rounded-full flex items-center justify-center shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white">
                      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Urgent Care */}
            <div className="relative h-48 rounded-lg overflow-hidden group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/doctor.webp')" }}
              ></div>
              <div className="absolute inset-0 bg-[#579db3] bg-opacity-80 group-hover:bg-opacity-70 transition-all duration-300"></div>
              <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                <div>
                  <h3 className="text-lg font-semibold leading-tight">Urgent Care</h3>
                </div>
                <div className="flex justify-end">
                  <div className="w-12 h-12 bg-[#4a5d9b] rounded-full flex items-center justify-center shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" x2="12" y1="8" y2="12"></line>
                      <line x1="12" x2="12.01" y1="16" y2="16"></line>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Psychology */}
            <div className="relative h-48 rounded-lg overflow-hidden group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/doctor.webp')" }}
              ></div>
              <div className="absolute inset-0 bg-[#579db3] bg-opacity-80 group-hover:bg-opacity-70 transition-all duration-300"></div>
              <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                <div>
                  <h3 className="text-lg font-semibold leading-tight">Psychology</h3>
                </div>
                <div className="flex justify-end">
                  <div className="w-12 h-12 bg-[#4a5d9b] rounded-full flex items-center justify-center shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white">
                      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
                      <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path>
                      <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path>
                      <path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path>
                      <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path>
                      <path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path>
                      <path d="M19.938 10.5a4 4 0 0 1 .585.396"></path>
                      <path d="M6 18a4 4 0 0 1-1.967-.516"></path>
                      <path d="M19.967 17.484A4 4 0 0 1 18 18"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Psychiatry */}
            <div className="relative h-48 rounded-lg overflow-hidden group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/doctor.webp')" }}
              ></div>
              <div className="absolute inset-0 bg-[#579db3] bg-opacity-80 group-hover:bg-opacity-70 transition-all duration-300"></div>
              <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                <div>
                  <h3 className="text-lg font-semibold leading-tight">Psychiatry</h3>
                </div>
                <div className="flex justify-end">
                  <div className="w-12 h-12 bg-[#4a5d9b] rounded-full flex items-center justify-center shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white">
                      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
                      <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path>
                      <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path>
                      <path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path>
                      <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path>
                      <path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path>
                      <path d="M19.938 10.5a4 4 0 0 1 .585.396"></path>
                      <path d="M6 18a4 4 0 0 1-1.967-.516"></path>
                      <path d="M19.967 17.484A4 4 0 0 1 18 18"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Behavioral Health */}
            <div className="relative h-48 rounded-lg overflow-hidden group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/doctor.webp')" }}
              ></div>
              <div className="absolute inset-0 bg-[#579db3] bg-opacity-80 group-hover:bg-opacity-70 transition-all duration-300"></div>
              <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                <div>
                  <h3 className="text-lg font-semibold leading-tight">Behavioral Health</h3>
                </div>
                <div className="flex justify-end">
                  <div className="w-12 h-12 bg-[#4a5d9b] rounded-full flex items-center justify-center shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                      <line x1="9" x2="9.01" y1="9" y2="9"></line>
                      <line x1="15" x2="15.01" y1="9" y2="9"></line>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Neurology */}
            <div className="relative h-48 rounded-lg overflow-hidden group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/doctor.webp')" }}
              ></div>
              <div className="absolute inset-0 bg-[#579db3] bg-opacity-80 group-hover:bg-opacity-70 transition-all duration-300"></div>
              <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                <div>
                  <h3 className="text-lg font-semibold leading-tight">Neurology</h3>
                </div>
                <div className="flex justify-end">
                  <div className="w-12 h-12 bg-[#4a5d9b] rounded-full flex items-center justify-center shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white">
                      <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Orthopedics */}
            <div className="relative h-48 rounded-lg overflow-hidden group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/doctor.webp')" }}
              ></div>
              <div className="absolute inset-0 bg-[#579db3] bg-opacity-80 group-hover:bg-opacity-70 transition-all duration-300"></div>
              <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                <div>
                  <h3 className="text-lg font-semibold leading-tight">Orthopedics</h3>
                </div>
                <div className="flex justify-end">
                  <div className="w-12 h-12 bg-[#4a5d9b] rounded-full flex items-center justify-center shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white">
                      <path d="M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Urogynecology */}
            <div className="relative h-48 rounded-lg overflow-hidden group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/doctor.webp')" }}
              ></div>
              <div className="absolute inset-0 bg-[#579db3] bg-opacity-80 group-hover:bg-opacity-70 transition-all duration-300"></div>
              <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                <div>
                  <h3 className="text-lg font-semibold leading-tight">Urogynecology</h3>
                </div>
                <div className="flex justify-end">
                  <div className="w-12 h-12 bg-[#4a5d9b] rounded-full flex items-center justify-center shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white">
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-600 text-base max-w-3xl mx-auto">
              Our specialized approach ensures accurate coding, faster reimbursements, and compliance with specialty-specific regulations. Whether you're a solo practitioner or a multi-specialty group, we have the expertise to optimize your revenue cycle.
            </p>
            <button className="mt-8 bg-[#579db3] hover:bg-[#eb2978] cursor-pointer text-white font-bold px-10 py-4 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
              Explore Our Specialty Services
            </button>
          </div>
        </div>
      </div>

      {/* End-to-End Medical Billing Section */}
      <div className="bg-[#f7f9fb]">
        <div className="container mx-auto px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="mb-6">
                <span className="text-teal-500 font-bold text-sm tracking-wider uppercase">
                  GET PAID FASTER AND STAY COMPLIANT
                </span>
              </div>
              
              <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                End-to-End Medical Billing & Coding Services
              </h2>
              
              <p className="text-gray-700 text-lg leading-relaxed">
                At SMB, we offer complete RCM support tailored for small practices and specialty groups. From accurate coding to clean claim submission and patient billing. We make sure no revenue is left behind.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircleOutlined className="text-green-500 text-lg mt-1 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">
                    From charge entry to payment posting, we manage it all.
                  </span>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircleOutlined className="text-green-500 text-lg mt-1 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">
                    Accurate CPT, ICD-10, HCPCS coding with ongoing compliance.
                  </span>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircleOutlined className="text-green-500 text-lg mt-1 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">
                    Fast submissions, real-time tracking, and expert appeal resolution.
                  </span>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircleOutlined className="text-green-500 text-lg mt-1 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">
                    Real-time insurance checks and prior authorization handling.
                  </span>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircleOutlined className="text-green-500 text-lg mt-1 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">
                    Timely posting with variance detection to catch revenue leaks.
                  </span>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircleOutlined className="text-green-500 text-lg mt-1 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">
                    Provider setup and adherence to OIG/CMS guidelines.
                  </span>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircleOutlined className="text-green-500 text-lg mt-1 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">
                    Every claim, record, and communication handled securely.
                  </span>
                </div>
              </div>
              
              <p className="text-gray-700 leading-relaxed">
                With Care Cycle Billing, you gain a dedicated partner who knows how to collect both insurance and patient payments, stay compliant, and support your growth. We're built to scale with you whether you're a solo provider or a multi-specialty clinic.
              </p>
              
              <button className="bg-[#579db3] hover:bg-[#4a8a9e] text-white font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Request Your Custom Quote
              </button>
            </div>
            
            <div className="flex justify-center">
              <img 
                alt="Full-Spectrum Billing & Coding Process Infographic" 
                className="w-full max-w-lg h-auto object-contain" 
                src="/assets/info.webp"
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <State /> 
      </div>

      <div>
        <Progress />  
      </div>

      <div>

        <ConsultationForm />
      </div>

      <div>
        <Cta />
      </div>

      <div>
        <Blog />
      </div>
    </>
  )
}

export default Home