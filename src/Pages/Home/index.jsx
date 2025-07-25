import React, { useState, useEffect, useRef } from 'react'
import { Carousel } from 'antd'
import { CheckCircleOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import State from "./State";
import Progress from "./Progress";
import ConsultationForm from "./Form";
import Cta from "./Cta";
import Blog from "./Blog";
import MedicalBillingServices from "./HomeService";
import { CheckCircle } from "lucide-react";
import { Button } from "../../components";

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
  const navigate = useNavigate();
  const logos = [
    'logo1.png', 'logo2.png', 'logo3.png', 'logo4.png',
    'logo5.png', 'logo6.png', 'logo7.png', 'logo8.png', 'logo10.png'
  ];
  
  const logoGroups = [];
  for (let i = 0; i <= logos.length - 4; i++) {
    logoGroups.push(logos.slice(i, i + 5));
  }

  // Create mobile-specific logo groups (2 logos per slide)
  const createMobileLogoGroups = (logoArray) => {
    const mobileGroups = [];
    for (let i = 0; i < logoArray.length; i += 2) {
      mobileGroups.push(logoArray.slice(i, i + 2));
    }
    return mobileGroups;
  };

  // Create tablet-specific logo groups (4 logos per slide)
  const createTabletLogoGroups = (logoArray) => {
    const tabletGroups = [];
    for (let i = 0; i < logoArray.length; i += 4) {
      tabletGroups.push(logoArray.slice(i, i + 4));
    }
    return tabletGroups;
  };

  const mobileLogoGroups = createMobileLogoGroups(logos);
  const tabletLogoGroups = createTabletLogoGroups(logos);

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
        <div className="absolute top-20 left-16 w-20 h-20 bg-blue-200 opacity-20 rounded-full md:block hidden"></div>
        <div className="absolute top-32 right-32 w-16 h-16 bg-purple-200 opacity-15 rounded-full md:block hidden"></div>
        <div className="absolute bottom-32 left-32 w-24 h-24 bg-green-200 opacity-10 rounded-full md:block hidden"></div>
        <div className="absolute top-1/3 left-1/5 w-12 h-12 bg-blue-300 opacity-25 transform rotate-45 md:block hidden"></div>
        <div className="absolute bottom-1/4 right-1/4 w-8 h-8 bg-purple-300 opacity-20 transform rotate-12 md:block hidden"></div>
        <div className="absolute top-1/2 right-1/6 w-6 h-6 bg-green-300 opacity-30 rounded-full md:block hidden"></div>
        
        {/* Mobile background elements */}
        <div className="absolute top-10 right-4 w-12 h-12 bg-blue-200 opacity-15 rounded-full md:hidden"></div>
        <div className="absolute bottom-20 left-4 w-16 h-16 bg-purple-200 opacity-10 rounded-full md:hidden"></div>
        <div className="absolute top-1/3 left-8 w-8 h-8 bg-green-300 opacity-20 transform rotate-45 md:hidden"></div>
      </div>
      
      <div className="container mx-auto px-2 sm:px-4 md:px-8 py-8 md:py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center min-h-[60vh] md:min-h-[50vh]">
          <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
            <div className="space-y-4 md:space-y-6">
              <p className="text-[#eb2978] font-bold text-xs sm:text-sm tracking-wider uppercase text-center lg:text-left">
                ACCURATE, COMPLIANT, REVENUE-DRIVEN RCM SERVICES
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight text-center lg:text-left">
                An Expert Medical Billing<br className="hidden sm:block" />
                <span className="sm:hidden"> </span>Company In The{' '}
                <span className="relative">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EB2978] to-[#579db3]">
                    USA
                  </span>
                </span>
              </h1>
              <div className="space-y-4 max-w-xl mx-auto lg:mx-0">
                <p className="text-gray-600 text-base md:text-lg leading-relaxed text-center lg:text-left">
                  MediCycle Billing delivers complete, transparent, and compliant billing services that are designed for independent providers, specialty groups, and fast-growing clinics.
                </p>
              </div>
            </div>
            <div className="flex justify-center lg:justify-start">
              <Button onClick={() => navigate('/about')} size="large">
                Claim Your Free Billing Audit!
              </Button>
            </div>
          </div>
          
          <div className="flex items-center justify-center order-1 lg:order-2">
            <div className="relative">
              {/* Main circular image container */}
              <div className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] bg-gradient-to-br from-[#479db8] to-[#eb297752] rounded-full relative overflow-hidden shadow-2xl">
                <div className="absolute bottom-0 w-full">
                  <img 
                    alt="doctor" 
                    className="w-full h-full object-cover object-top" 
                    src="/assets/hero.webp" 
                  />
                </div>
              </div>
              
              {/* Stats - Desktop/Tablet positioning */}
              <div className="absolute top-0 -right-20 md:-right-25 space-y-6 md:space-y-8 mt-8 md:mt-14 hidden sm:block">
                <div className="text-right">
                  <div className="text-2xl md:text-3xl font-bold text-[#579db3]">95%</div>
                  <div className="text-gray-700 font-semibold text-xs md:text-sm tracking-wide">FCFR</div>
                  <div className="w-16 md:w-20 h-0.5 bg-[#EB2978] ml-auto mt-2"></div>
                </div>
                <div className="text-right">
                  <div className="text-2xl md:text-3xl font-bold text-[#579db3]">98%</div>
                  <div className="text-gray-700 font-semibold text-xs md:text-sm tracking-wide">Collections</div>
                  <div className="w-16 md:w-20 h-0.5 bg-[#EB2978] ml-auto mt-2"></div>
                </div>
                <div className="text-right">
                  <div className="text-2xl md:text-3xl font-bold text-[#579db3]">100%</div>
                  <div className="text-gray-700 font-semibold text-xs md:text-sm tracking-wide">HIPAA</div>
                  <div className="w-16 md:w-20 h-0.5 bg-[#EB2978] ml-auto mt-2"></div>
                </div>
                <div className="text-right">
                  <div className="text-2xl md:text-3xl font-bold text-[#579db3]">99%</div>
                  <div className="text-gray-700 font-semibold text-xs md:text-sm tracking-wide">Accuracy</div>
                  <div className="w-16 md:w-20 h-0.5 bg-[#EB2978] ml-auto mt-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile stats - positioned below the image */}
        <div className="grid grid-cols-2 gap-4 mt-8 sm:hidden">
          <div className="text-center">
            <div className="text-2xl font-bold text-[#579db3]">95%</div>
            <div className="text-gray-700 font-semibold text-xs tracking-wide">FCFR</div>
            <div className="w-12 h-0.5 bg-[#EB2978] mx-auto mt-2"></div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[#579db3]">98%</div>
            <div className="text-gray-700 font-semibold text-xs tracking-wide">Collections</div>
            <div className="w-12 h-0.5 bg-[#EB2978] mx-auto mt-2"></div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[#579db3]">100%</div>
            <div className="text-gray-700 font-semibold text-xs tracking-wide">HIPAA</div>
            <div className="w-12 h-0.5 bg-[#EB2978] mx-auto mt-2"></div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[#579db3]">99%</div>
            <div className="text-gray-700 font-semibold text-xs tracking-wide">Accuracy</div>
            <div className="w-12 h-0.5 bg-[#EB2978] mx-auto mt-2"></div>
          </div>
        </div>
      </div>
    </div>

      <div className="container mx-auto px-2 sm:px-4 md:px-8 pt-6 pb-10">
      {/* Mobile Carousel - 2 logos per slide */}
      <div className="block sm:hidden">
        <Carousel 
          autoplay 
          dots={false} 
          infinite={true}
          speed={500}
          autoplaySpeed={1500}
          className="w-full"
        >
          {mobileLogoGroups.map((group, idx) => (
            <div key={idx}>
              <div className="flex items-center justify-between px-4 gap-4">
                {group.map((logo, i) => (
                  <img
                    key={`${logo}-${i}`}
                    alt={`Logo ${i + 1}`}
                    className="h-12 w-auto object-contain flex-shrink-0 flex-1"
                    src={`/assets/${logo}`}
                  />
                ))}
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      {/* Tablet Carousel - 4 logos per slide */}
      <div className="hidden sm:block md:hidden">
        <Carousel 
          autoplay 
          dots={false} 
          infinite={true}
          speed={500}
          autoplaySpeed={1500}
          className="w-full"
        >
          {tabletLogoGroups.map((group, idx) => (
            <div key={idx}>
              <div className="flex items-center justify-between px-6 gap-4">
                {group.map((logo, i) => (
                  <img
                    key={`${logo}-${i}`}
                    alt={`Logo ${i + 1}`}
                    className="h-14 w-auto object-contain flex-shrink-0 flex-1"
                    src={`/assets/${logo}`}
                  />
                ))}
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      {/* Desktop Carousel - 5 logos per slide */}
      <div className="hidden md:block">
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
    </div>

     <div className="bg-[#f7f9fb]">
        <div className="container mx-auto lg:px-8 px-3  lg:py-20 sm:px-4 md:px-8 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center justify-center">
            <div className="lg:col-span-5 flex justify-center">
              <img 
                alt="What's Holding Your Practice Back?" 
                className="w-full max-w-lg h-auto object-contain" 
                src="/assets/info.webp"
              />
            </div>
            
            <div className="lg:col-span-7 space-y-6 flex flex-col justify-center">
              <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 text-center lg:text-left">What's Holding Your Practice Back?</h2>
              <p className="text-gray-700 leading-relaxed text-center lg:text-left">Every missed claim, denied payment, or staffing gap costs you more than just revenue. It costs time, patience, and peace of mind. Medical practices and groups today encounter a range of obstacles that impact both patient care and financial stability. Reimbursements are shrinking. Payer rules keep changing. Documentation requirements pile up.</p>
              <p className="text-gray-700 leading-relaxed text-center lg:text-left">Add in staffing shortages, increased administrative burden, and complex billing systems, and running a successful practice starts to feel like a daily firefight. One delayed claim turns into cash flow strain. One coding error invites an audit.</p>
              <div className="grid grid-cols-2 gap-x-8 gap-y-3 my-6">
                <div className="flex items-center gap-2 text-center lg:text-left">
                  <span className="text-red-500 font-bold">✕</span>
                  <span className="text-gray-700">Administrative Overload</span>
                </div>
                <div className="flex items-center gap-2 text-center lg:text-left">
                  <span className="text-red-500 font-bold">✕</span>
                  <span className="text-gray-700">Technological Challenges</span>
                </div>
                <div className="flex items-center gap-2 text-center lg:text-left">
                  <span className="text-red-500 font-bold">✕</span>
                  <span className="text-gray-700">Declining Reimbursements</span>
                </div>
                <div className="flex items-center gap-2 text-center lg:text-left">
                  <span className="text-red-500 font-bold">✕</span>
                  <span className="text-gray-700">Cybersecurity Threats</span>
                </div>
                <div className="flex items-center gap-2 text-center lg:text-left">
                  <span className="text-red-500 font-bold">✕</span>
                  <span className="text-gray-700">Staffing Shortages</span>
                </div>
                <div className="flex items-center gap-2 text-center lg:text-left">
                  <span className="text-red-500 font-bold">✕</span>
                  <span className="text-gray-700">Regulatory Compliance</span>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-center lg:text-left">At MediCycle Billing, we understand these pressures because we've helped practices just like yours turn them around. Whether you're a solo provider or managing multiple locations, we bring clarity, consistency, and control back to your revenue cycle.</p>
              <Button onClick={() => navigate('/contact')} size="large">
                Get Your Free Revenue Review
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-2 sm:px-4 md:px-8 py-12 md:py-20">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Complete Medical Billing Services</h2>
      </div>
      
      {/* Mobile Tabs - Dropdown Style */}
      <div className="mb-6 md:mb-8 block sm:hidden">
        <select 
          value={activeTab}
          onChange={(e) => setActiveTab(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#579db3] focus:border-[#579db3] outline-none bg-white text-gray-700"
        >
          {tabItems.map((item) => (
            <option key={item.key} value={item.key}>
              {item.label}
            </option>
          ))}
        </select>
      </div>

      {/* Tablet and Desktop Tabs */}
      <div className="mb-6 md:mb-8 hidden sm:block">
        <div className="flex justify-center">
          <div className="flex items-center bg-gray-100 rounded-full p-1 overflow-x-auto">
            {tabItems.map((item) => (
              <button
                key={item.key}
                onClick={() => setActiveTab(item.key)}
                onMouseEnter={() => setActiveTab(item.key)}
                className={`px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-full transition-all duration-300 font-medium text-sm md:text-base whitespace-nowrap ${
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

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-center">
        <div className="lg:col-span-7 space-y-4 md:space-y-6 order-2 lg:order-1">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 text-center lg:text-left">{tabsData[activeTab].title}</h3>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed text-center lg:text-left">
            {tabsData[activeTab].description}
          </p>
          <div className="space-y-3 md:space-y-4 text-center lg:text-left">
            {tabsData[activeTab].features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3 text-center lg:text-left">
                <CheckCircle className="text-green-500 w-5 h-5 md:w-6 md:h-6 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 leading-relaxed text-sm md:text-base">{feature}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
          <div className="relative">
            <img
              alt={tabsData[activeTab].alt}
              className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 object-cover rounded-lg transition-all duration-500 ease-in-out transform hover:scale-105"
              src={tabsData[activeTab].image}
            />
          </div>
        </div>
      </div>
    </div>

      
      <div className="bg-[#f7f9fb]">
        <div className="container mx-auto px-3 sm:px-4 md:px-8 py-12 md:py-20">
          <div className="text-center mb-16">
            <h2 className="lg:text-4xl text-2xl text-center  font-bold text-gray-900 mb-6">
              What Sets MediCycle Billing Apart
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

      
   {/* services */}
   <div>
    <MedicalBillingServices/>
   </div>

     
      <div className="bg-[#f7f9fb]">
        <div className="container mx-auto lg:px-8 px-4 lg:py-20 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="mb-6 text-center lg:text-left">
                <span className="text-teal-500 text-center lg:text-left font-bold text-sm tracking-wider uppercase">
                  GET PAID FASTER AND STAY COMPLIANT
                </span>
              </div>
              
              <h2 className="lg:text-4xl text-2xl font-bold text-center lg:text-left text-gray-900 leading-tight">
                End-to-End Medical Billing & Coding Services
              </h2>
              
              <p className="text-gray-700 text-lg leading-relaxed text-center lg:text-left">
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
              
              <p className="text-gray-700 leading-relaxed text-center lg:text-left">
                With MediCycle Billing, you gain a dedicated partner who knows how to collect both insurance and patient payments, stay compliant, and support your growth. We're built to scale with you whether you're a solo provider or a multi-specialty clinic.
              </p>
              
              <Button onClick={() => navigate('/contact')}>
                Request Your Custom Quote
              </Button>
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