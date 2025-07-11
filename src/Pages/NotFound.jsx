import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFloating, setIsFloating] = useState(false);

  useEffect(() => {
    // Trigger animations on mount
    setIsVisible(true);
    setIsFloating(true);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-gray-50 to-blue-100 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating circles */}
        <div className={`absolute top-20 left-20 w-32 h-32 bg-[#579db3]/10 rounded-full transition-all duration-3000 ${isFloating ? 'animate-pulse' : ''}`}></div>
        <div className={`absolute top-40 right-32 w-24 h-24 bg-[#eb2978]/10 rounded-full transition-all duration-3000 ${isFloating ? 'animate-pulse' : ''}`} style={{ animationDelay: '1s' }}></div>
        <div className={`absolute bottom-32 left-32 w-20 h-20 bg-[#579db3]/10 rounded-full transition-all duration-3000 ${isFloating ? 'animate-pulse' : ''}`} style={{ animationDelay: '2s' }}></div>
        <div className={`absolute bottom-20 right-20 w-28 h-28 bg-[#eb2978]/10 rounded-full transition-all duration-3000 ${isFloating ? 'animate-pulse' : ''}`} style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className={`max-w-2xl w-full space-y-8 text-center relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div>
          {/* Animated 404 Icon */}
          <div className="mx-auto h-32 w-32 text-[#579db3] mb-8">
            <div className={`relative transition-all duration-1000 ${isVisible ? 'scale-100 rotate-0' : 'scale-0 rotate-180'}`}>
              <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-full h-full animate-bounce"
                style={{ animationDuration: '3s' }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33M15 9a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
          </div>
          
          {/* Animated 404 Text */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-8xl sm:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#579db3] to-[#eb2978] mb-4 animate-pulse">
              404
            </h1>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-700 mb-6">
              Oops! Page Not Found
            </h2>
          </div>
          
          {/* Animated Description */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              The page you're looking for seems to have wandered off. Don't worry, we'll help you find your way back to where you need to be.
            </p>
          </div>
        </div>

        {/* Animated Action Buttons */}
        <div className={`space-y-6 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Main Button */}
          <div className="relative inline-block">
            {/* Button Shadow */}
            <div 
              className="absolute inset-0 rounded-full opacity-30 transform translate-y-1 sm:translate-y-2 blur-sm"
              style={{ backgroundColor: '#579db3' }}
            />
            
            <Link
              to="/"
              className="relative inline-flex items-center px-8 py-4 border border-transparent text-base font-bold rounded-full shadow-xl sm:shadow-2xl border-0 text-lg transition-all duration-300 hover:scale-105 bg-[#579db3] hover:bg-[#eb2978] text-white"
            >
              <span className="flex items-center gap-3">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="w-5 h-5" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Go Back Home
              </span>
            </Link>
          </div>
          
          {/* Quick Links */}
          <div className="text-sm text-gray-500">
            <p className="mb-4">Or explore these popular pages:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/about" 
                className="text-[#579db3] hover:text-[#eb2978] font-medium transition-colors duration-300 hover:scale-105 transform"
              >
                About Us
              </Link>
              <Link 
                to="/services" 
                className="text-[#579db3] hover:text-[#eb2978] font-medium transition-colors duration-300 hover:scale-105 transform"
              >
                Services
              </Link>
              <Link 
                to="/contact" 
                className="text-[#579db3] hover:text-[#eb2978] font-medium transition-colors duration-300 hover:scale-105 transform"
              >
                Contact
              </Link>
              <Link 
                to="/medical-billing" 
                className="text-[#579db3] hover:text-[#eb2978] font-medium transition-colors duration-300 hover:scale-105 transform"
              >
                Medical Billing
              </Link>
            </div>
          </div>
        </div>

        {/* Animated Decorative Elements */}
        <div className={`mt-12 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex justify-center space-x-3">
            <div className="w-3 h-3 bg-[#579db3] rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-[#eb2978] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-3 h-3 bg-[#579db3] rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound; 