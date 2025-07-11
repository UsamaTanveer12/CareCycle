import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from "../index";

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
    setIsResourcesOpen(false)
    setIsServicesOpen(false)
  }

  // Close mobile menu when route changes
  useEffect(() => {
    closeMobileMenu()
  }, [location])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

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
      ? "block px-5 py-4 rounded-md text-base font-medium bg-[#eb2978] text-white"
      : "block px-5 py-4 rounded-md text-base font-medium text-gray-700 hover:bg-[#33b1d7] hover:text-white transition-colors"
  }

  return (
    <>
      {/* Top contact bar - Hidden on mobile, visible on tablet and up */}
      <div className="hidden lg:block bg-[#579db3] text-white py-2">
        <div className="container mx-auto flex flex-wrap justify-center items-center gap-4 xl:gap-8 px-4">
          <div className="flex items-center gap-2 text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
            <a href="tel:(614) 465-6718" className="hover:text-gray-200 transition-colors">
              (614) 465-6718
            </a>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            <a href="mailto:contact@carecyclebilling.com" className="hover:text-gray-200 transition-colors">
              contact@carecyclebilling.com
            </a>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            <span>5900 Balcones Drive #13461, Austin, TX, 78731</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="bg-white shadow-md lg:shadow-none sticky top-0 z-40 lg:relative">
        <div className="container mx-auto px-6 sm:px-8 lg:px-8 lg:py-4 py-1">
          <div className="flex items-center justify-between h-20 lg:h-20">
            {/* Logo */}
            <div className="flex items-center py-2">
              <Link to="/" onClick={closeMobileMenu}>
                <img 
                  alt="Care Cycle Billing Logo" 
                  className="w-[80px] sm:w-[90px] lg:w-[90px] h-auto" 
                  src="/assets/logo.png" 
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <Link 
                to="/" 
                className={getLinkClasses('/', "text-sm xl:text-base font-medium transition-colors")}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={getLinkClasses('/about', "text-sm xl:text-base font-medium transition-colors")}
              >
                About Us
              </Link>
              
              {/* Services Dropdown */}
              <div className="relative group">
                <div className="absolute -top-2 -left-4 -right-4 h-2 bg-transparent group-hover:block hidden"></div>
                <Link 
                  to="/services" 
                  className="flex items-center text-gray-700 group-hover:text-[#eb2978] text-sm xl:text-base font-medium transition-colors cursor-pointer"
                >
                  Services
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </Link>
                <div className="hidden group-hover:block absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white z-50 border border-gray-100">
                  <div className="absolute -top-2 left-0 right-0 h-2 bg-transparent"></div>
                  <div className="py-1 rounded-md overflow-hidden">
                    <Link 
                      to="/medical-billing" 
                      className="block px-4 py-3 text-sm cursor-pointer transition-all duration-200 text-gray-700 hover:bg-[#eb2978] hover:text-white"
                    >
                      Medical Billing Services
                    </Link>
                    <Link 
                      to="/medical-coding" 
                      className="block px-4 py-3 text-sm cursor-pointer transition-all duration-200 text-gray-700 hover:bg-[#eb2978] hover:text-white"
                    >
                      Medical Coding Services
                    </Link>
                    <Link 
                      to="/medical-credentialing" 
                      className="block px-4 py-3 text-sm cursor-pointer transition-all duration-200 text-gray-700 hover:bg-[#eb2978] hover:text-white"
                    >
                      Medical Credentialing Services
                    </Link>
                  </div>
                </div>
              </div>

              <Link 
                to="/specialties" 
                className={getLinkClasses('/specialties', "text-sm xl:text-base font-medium transition-colors")}
              >
                Specialties
              </Link>
              
              {/* Resources Dropdown */}
              <div className="relative group">
                <div className="absolute -top-2 -left-4 -right-4 h-2 bg-transparent group-hover:block hidden"></div>
                <button className="flex items-center text-gray-700 group-hover:text-[#eb2978] text-sm xl:text-base font-medium transition-colors cursor-pointer">
                  Resources
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div className="hidden group-hover:block absolute left-0 mt-2 w-52 rounded-md shadow-lg bg-white z-50 border border-gray-100">
                  <div className="absolute -top-2 left-0 right-0 h-2 bg-transparent"></div>
                  <div className="py-1 rounded-md overflow-hidden">
                    <Link 
                      to="/blog" 
                      className="block px-4 py-3 text-sm cursor-pointer transition-all duration-200 text-gray-700 hover:bg-[#eb2978] hover:text-white"
                    >
                      Blog
                    </Link>
                    <Link 
                      to="/privacy-policy" 
                      className="block px-4 py-3 text-sm cursor-pointer transition-all duration-200 text-gray-700 hover:bg-[#eb2978] hover:text-white"
                    >
                      Privacy Policy
                    </Link>
                    <Link 
                      to="/terms-conditions" 
                      className="block px-4 py-3 text-sm cursor-pointer transition-all duration-200 text-gray-700 hover:bg-[#eb2978] hover:text-white"
                    >
                      Terms & Conditions
                    </Link>
                  </div>
                </div>
              </div>
            </nav>

            {/* Contact Button - Desktop */}
            <div className="hidden lg:block">
              <div className="relative group">
                <div className="absolute -inset-0.5 rounded-full animated-border blur-[1px] opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <Link 
                  to="/contact"
                  className="relative text-xs xl:text-sm bg-[#579db3] hover:bg-[#eb2978] cursor-pointer text-white hover:text-white px-4 xl:px-6 py-2 rounded-full transition-colors whitespace-nowrap"
                >
                  CONTACT US
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button 
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-3 rounded-md text-[#eb2978] hover:text-[#eb2978] hover:bg-gray-100 focus:outline-none transition-colors"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu - Fixed overlay */}
        <div className={`lg:hidden fixed inset-0 z-50 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
            onClick={closeMobileMenu}
          ></div>
          
          {/* Mobile menu panel */}
          <div className="fixed top-0 right-0 w-80 max-w-[85vw] h-full bg-white shadow-xl transform transition-transform">
            <div className="flex items-center justify-between p-2 border-b border-gray-200">
              <Link to="/" onClick={closeMobileMenu}>
                <img 
                  alt="Care Cycle Billing Logo" 
                  className="w-[80px] h-auto" 
                  src="/assets/logo.png" 
                />
              </Link>
              <button 
                onClick={closeMobileMenu}
                className="p-3 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="overflow-y-auto h-full pb-24">
              <div className="px-2 pt-2 pb-2 space-y-2">
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
                    className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-gray-700 hover:text-[#33b1d7] transition-colors rounded-md hover:bg-gray-50"
                  >
                    <span>Services</span>
                    <svg 
                      className={`w-5 h-5 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                  <div className={`${isServicesOpen ? 'block' : 'hidden'} pl-4 space-y-1`}>
                    <Link 
                      to="/medical-billing" 
                      onClick={closeMobileMenu}
                      className="block px-4 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-[#33b1d7] hover:text-white transition-colors"
                    >
                      Medical Billing Services
                    </Link>
                    <Link 
                      to="/medical-coding" 
                      onClick={closeMobileMenu}
                      className="block px-4 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-[#33b1d7] hover:text-white transition-colors"
                    >
                      Medical Coding Services
                    </Link>
                    <Link 
                      to="/medical-credentialing" 
                      onClick={closeMobileMenu}
                      className="block px-4 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-[#33b1d7] hover:text-white transition-colors"
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
                    className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-gray-700 hover:text-[#33b1d7] transition-colors rounded-md hover:bg-gray-50"
                  >
                    <span>Resources</span>
                    <svg 
                      className={`w-5 h-5 transition-transform duration-200 ${isResourcesOpen ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                  <div className={`${isResourcesOpen ? 'block' : 'hidden'} pl-4 space-y-1`}>
                    <Link 
                      to="/blog" 
                      onClick={closeMobileMenu}
                      className="block px-4 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-[#33b1d7] hover:text-white transition-colors"
                    >
                      Blog
                    </Link>
                    <Link 
                      to="/privacy-policy" 
                      onClick={closeMobileMenu}
                      className="block px-4 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-[#33b1d7] hover:text-white transition-colors"
                    >
                      Privacy Policy
                    </Link>
                    <Link 
                      to="/terms-conditions" 
                      onClick={closeMobileMenu}
                      className="block px-4 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-[#33b1d7] hover:text-white transition-colors"
                    >
                      Terms & Conditions
                    </Link>
                  </div>
                </div>
                
                {/* Mobile Contact Section */}
                <div className="pt-4 border-t border-gray-200 mt-6">
                  <div className="space-y-3">
                    {/* Contact Button */}
                    <Link 
                      to="/contact"
                      onClick={closeMobileMenu}
                      className="block w-full text-center bg-[#579db3] hover:bg-[#eb2978] text-white px-6 py-3 rounded-md transition-colors font-medium"
                    >
                      CONTACT US
                    </Link>
                    
                    {/* Contact Info */}
                    <div className="space-y-2 text-sm text-gray-600">
                      <a href="tel:(614) 465-6718" className="flex items-center space-x-2 hover:text-[#eb2978] transition-colors">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                        </svg>
                        <span>(614) 465-6718</span>
                      </a>
                      <a href="mailto:contact@carecyclebilling.com" className="flex items-center space-x-2 hover:text-[#eb2978] transition-colors">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                        <span className="break-all">contact@carecyclebilling.com</span>
                      </a>
                    </div>
                  </div>
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