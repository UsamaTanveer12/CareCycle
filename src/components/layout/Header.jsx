import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isResourcesOpen, setIsResourcesOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const location = useLocation()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const toggleResources = () => {
    setIsResourcesOpen(!isResourcesOpen)
  }

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  // Helper function to check if a link is active
  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/'
    }
    return location.pathname.includes(path)
  }

  // Helper function to get link classes
  const getLinkClasses = (path, baseClasses = "font-medium transition-colors") => {
    return isActive(path) 
      ? `${baseClasses} text-[#eb2978]`
      : `${baseClasses} text-gray-700 hover:text-[#eb2978]`
  }

  // Helper function for mobile link classes
  const getMobileLinkClasses = (path) => {
    return isActive(path)
      ? "block px-3 py-2 rounded-md text-base font-medium bg-[#eb2978] text-white"
      : "block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-[#33b1d7] hover:text-white"
  }

  return (
    <>
      {/* Top contact bar */}
      <div className="hidden md:block bg-[#579db3] text-white py-2">
        <div className="container mx-auto flex flex-wrap justify-center items-center gap-4 md:gap-8 px-4">
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
            <span>(614) 465-6718</span>
          </div>
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            <span>contact@carecyclebilling.com</span>
          </div>
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            <span>5900 Balcones Drive #13461, Austin, TX, 78731</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="bg-white shadow-md lg:shadow-none">
        <div className="container mx-auto px-2 lg:px-4">
          <div className="flex items-center justify-between py-2">
            {/* Logo */}
            <div className="flex items-center px-4 lg:px-0">
              <Link to="/">
                <img alt="Care Cycle Billing Logo" className="w-[80px]" src="/assets/logo.png" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link 
                to="/" 
                className={getLinkClasses('/')}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={getLinkClasses('/about')}
              >
                About Us
              </Link>
              
              {/* Services Dropdown */}
              <div className="relative group">
                <div className="absolute -top-2 -left-4 -right-4 h-2 bg-transparent group-hover:block hidden"></div>
                <Link to="/services" className="flex items-center text-gray-700 group-hover:text-[#eb2978] font-medium transition-colors cursor-pointer">
                  Services
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </Link>
                <div className="hidden group-hover:block absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white z-50">
                  <div className="absolute -top-2 left-0 right-0 h-2 bg-transparent"></div>
                  <div className="py-1 rounded-md overflow-hidden">
                    <Link 
                      to="/medical-billing" 
                      className="block px-4 py-2 text-sm cursor-pointer transition-all duration-200 text-gray-700 hover:bg-[#eb2978] hover:text-white"
                    >
                      Medical Billing Services
                    </Link>
                    <Link 
                      to="/medical-coding" 
                      className="block px-4 py-2 text-sm cursor-pointer transition-all duration-200 text-gray-700 hover:bg-[#eb2978] hover:text-white"
                    >
                      Medical Coding Services
                    </Link>
                    <Link 
                      to="/medical-credentialing" 
                      className="block px-4 py-2 text-sm cursor-pointer transition-all duration-200 text-gray-700 hover:bg-[#eb2978] hover:text-white"
                    >
                      Medical Credentialing Services
                    </Link>
                  </div>
                </div>
              </div>

              <Link 
                to="/specialties" 
                className={getLinkClasses('/specialties')}
              >
                Specialties
              </Link>
              
              {/* Resources Dropdown */}
              <div className="relative group">
                <div className="absolute -top-2 -left-4 -right-4 h-2 bg-transparent group-hover:block hidden"></div>
                <button className="flex items-center text-gray-700 group-hover:text-[#eb2978] font-medium transition-colors cursor-pointer">
                  Resources
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div className="hidden group-hover:block absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white z-50">
                  <div className="absolute -top-2 left-0 right-0 h-2 bg-transparent"></div>
                  <div className="py-1 rounded-md overflow-hidden">
                    <Link 
                      to="/blog" 
                      className="block px-4 py-2 text-sm cursor-pointer transition-all duration-200 text-gray-700 hover:bg-[#eb2978] hover:text-white"
                    >
                     Blog
                    </Link>
                    <Link 
                      to="/privacy-policy" 
                      className="block px-4 py-2 text-sm cursor-pointer transition-all duration-200 text-gray-700 hover:bg-[#eb2978] hover:text-white"
                    >
                      Privacy Policy
                    </Link>
                    
                    <Link 
                      to="/terms-conditions" 
                      className="block px-4 py-2 text-sm cursor-pointer transition-all duration-200 text-gray-700 hover:bg-[#eb2978] hover:text-white"
                    >
                      Terms & Conditions
                    </Link>
                  </div>
                </div>
              </div>
            </nav>

            {/* Contact Button - Desktop */}
            <div className="hidden md:block">
              <div className="relative group">
                <div className="absolute -inset-0.5 rounded-full animated-border blur-[1px] opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <Link 
                  to="/contact"
                  className="relative text-[14px] bg-[#579db3] hover:bg-[#eb2978] cursor-pointer text-white hover:text-white px-6 py-2 rounded-full transition-colors"
                >
                  CONTACT US
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-4 rounded-md text-[#eb2978] hover:text-[#eb2978] focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
            <div className="px-1 pt-2 pb-3 space-y-1">
              <Link 
                to="/" 
                onClick={closeMobileMenu}
                className={getMobileLinkClasses('/')}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                onClick={closeMobileMenu}
                className={getMobileLinkClasses('/about')}
              >
                About Us
              </Link>
              
              {/* Mobile Services Dropdown */}
              <div className="space-y-1">
                <button 
                  onClick={toggleServices}
                  className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-700 hover:text-[#33b1d7] transition-colors cursor-pointer"
                >
                  <span>Services</span>
                  <svg 
                    className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div className={`${isServicesOpen ? 'block' : 'hidden'} pl-4 space-y-1`}>
                  <Link 
                    to="/services/medical-billing" 
                    onClick={closeMobileMenu}
                    className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-[#33b1d7] hover:text-white"
                  >
                    Medical Billing Services
                  </Link>
                  <Link 
                    to="/services/medical-coding" 
                    onClick={closeMobileMenu}
                    className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-[#33b1d7] hover:text-white"
                  >
                    Medical Coding Services
                  </Link>
                  <Link 
                    to="/services/medical-credentialing" 
                    onClick={closeMobileMenu}
                    className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-[#33b1d7] hover:text-white"
                  >
                    Medical Credentialing Services
                  </Link>
                </div>
              </div>

              <Link 
                to="/specialties" 
                onClick={closeMobileMenu}
                className={getMobileLinkClasses('/specialties')}
              >
                Specialties
              </Link>
              
              {/* Mobile Resources Dropdown */}
              <div className="space-y-1">
                <button 
                  onClick={toggleResources}
                  className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-700 hover:text-[#33b1d7] transition-colors cursor-pointer"
                >
                  <span>Resources</span>
                  <svg 
                    className={`w-4 h-4 transition-transform duration-200 ${isResourcesOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div className={`${isResourcesOpen ? 'block' : 'hidden'} pl-4 space-y-1`}>
                  <Link 
                    to="/privacy-policy" 
                    onClick={closeMobileMenu}
                    className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-[#33b1d7] hover:text-white"
                  >
                    Privacy Policy
                  </Link>
                  <Link 
                    to="/terms-conditions" 
                    onClick={closeMobileMenu}
                    className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-[#33b1d7] hover:text-white"
                  >
                    Terms & Conditions
                  </Link>
                </div>
              </div>
              
              {/* Mobile Contact Button */}
              <div className="px-3 mt-4">
                <div className="relative w-full max-w-[200px] mx-auto group">
                  <div className="absolute -inset-0.5 rounded-md animated-border blur-[1px] opacity-75 group-hover:opacity-100 transition duration-300"></div>
                  <Link 
                    to="/contact"
                    onClick={closeMobileMenu}
                    className="relative w-full block text-center bg-white text-[#eb2978] px-6 py-2 rounded-md group-hover:text-[#eb2978] transition-colors"
                  >
                    CONTACT US
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header