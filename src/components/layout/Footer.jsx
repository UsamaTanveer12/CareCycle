import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <footer className="bg-[#579db3]/90 text-white pt-8 sm:pt-12 lg:pt-16 pb-6 sm:pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Company Info Section */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-1 text-center sm:text-left">
              <img 
                alt="MediCycle Billing Logo" 
                className="w-[100px] sm:w-[120px] mb-4 sm:mb-6 mx-auto sm:mx-0" 
                src="/assets/white.png" 
              />
              <p className="text-white text-sm sm:text-[16px] mb-4 sm:mb-6 leading-relaxed px-2 sm:px-0">
                MediCycle Billing provides reliable, end-to-end revenue cycle solutions. We support small practices and specialty groups with compliant, efficient billing.
              </p>
              <div className="flex justify-center sm:justify-start space-x-4">
                <a href="https://linkedin.com" className="text-white hover:text-[#eb2978] transition-colors p-1">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </a>
                <a href="https://facebook.com" className="text-white hover:text-[#eb2978] transition-colors p-1">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                  </svg>
                </a>
                <a href="https://instagram.com" className="text-white hover:text-[#eb2978] transition-colors p-1">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Services Section */}
            <div className="col-span-1 text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4 text-white">Services</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <Link 
                    className="text-white hover:text-[#eb2978] transition-colors text-sm sm:text-base block py-1" 
                    to="/medical-billing"
                  >
                    Medical Billing Services
                  </Link>
                </li>
                <li>
                  <Link 
                    className="text-white hover:text-[#eb2978] transition-colors text-sm sm:text-base block py-1" 
                    to="/medical-coding"
                  >
                    Medical Coding Services
                  </Link>
                </li>
                <li>
                  <Link 
                    className="text-white hover:text-[#eb2978] transition-colors text-sm sm:text-base block py-1" 
                    to="/medical-credentialing"
                  >
                    Medical Credentialing Services
                  </Link>
                </li>
                
                <li>
                  <Link 
                    className="text-white hover:text-[#eb2978] transition-colors text-sm sm:text-base block py-1" 
                    to="/terms-conditions"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link 
                    className="text-white hover:text-[#eb2978] transition-colors text-sm sm:text-base block py-1" 
                    to="/privacy-policy"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Quick Links Section */}
            <div className="col-span-1 text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <Link 
                    className="text-white hover:text-[#eb2978] transition-colors text-sm sm:text-base block py-1" 
                    to="/about"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link 
                    className="text-white hover:text-[#eb2978] transition-colors text-sm sm:text-base block py-1" 
                    to="/services"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link 
                    className="text-white hover:text-[#eb2978] transition-colors text-sm sm:text-base block py-1" 
                    to="/specialties"
                  >
                    Specialties
                  </Link>
                </li>
                <li>
                  <Link 
                    className="text-white hover:text-[#eb2978] transition-colors text-sm sm:text-base block py-1" 
                    to="/contact"
                  >
                    Contact Us
                  </Link>
                </li>
                
              </ul>
            </div>
            
            {/* Contact Information Section */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-1 text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4 text-white">Information</h3>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-3">
                  <svg className="w-5 h-5 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  <div className="text-center sm:text-left">
                    <p className="font-medium text-white text-sm sm:text-base">Phone Number</p>
                    <a 
                      href="tel:(614) 465-6718" 
                      className="text-white hover:text-[#eb2978] transition-colors text-sm sm:text-base"
                    >
                      (614) 465-6718
                    </a>
                  </div>
                </li>
                <li className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-3">
                  <svg className="w-5 h-5 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <div className="text-center sm:text-left">
                    <p className="font-medium text-white text-sm sm:text-base">Mail Address</p>
                    <a 
                      href="mailto:contact@medicyclebilling.com" 
                      className="text-white hover:text-[#eb2978] transition-colors text-sm sm:text-base break-words"
                    >
                      contact@medicyclebilling.com
                    </a>
                  </div>
                </li>
                <li className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-3">
                  <svg className="w-5 h-5 text-white flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <div className="text-center sm:text-left">
                    <p className="font-medium text-white text-sm sm:text-base">Monday – Friday</p>
                    <p className="text-white text-sm sm:text-base leading-relaxed">
                      9:00 AM – 6:00 PM (PST)
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="mt-8 sm:mt-12 lg:mt-16 pt-6 sm:pt-8 border-t border-[#fff]/40">
            <div className="flex flex-col items-center space-y-4 md:flex-row md:justify-between md:space-y-0">
              <p className="text-white text-xs sm:text-sm text-center md:text-left">
                © 2025 MediCycle Billing. All Rights Reserved.
              </p>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 lg:space-x-6 items-center">
                <Link 
                  className="text-white hover:text-[#eb2978] text-xs sm:text-sm transition-colors" 
                  to="/terms-conditions"
                >
                  Terms & Conditions
                </Link>
                <Link 
                  className="text-white hover:text-[#eb2978] text-xs sm:text-sm transition-colors" 
                  to="/privacy-policy"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer