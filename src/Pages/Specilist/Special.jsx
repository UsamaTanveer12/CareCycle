import React from 'react'

function Special() {
  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Specialties We Bill</h2>
          <p className="text-gray-700 text-lg max-w-4xl mx-auto leading-relaxed">
            At MediCycle Billing, we specialize in solving the unique billing challenges of each specialty. Our AAPC-certified team delivers customized solutions that improve your practice's efficiency and financial outcomes.
          </p>
        </div>

        {/* Specialties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Physical Therapy */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2M21 9V7L15 1V3H9V1L3 7V9H5V20C5 21.1 5.9 22 7 22H17C18.1 22 19 21.1 19 20V9H21Z"/>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Physical Therapy</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We simplify physical therapy billing by capturing every timed code, modifier, and payer rule to get you paid.
            </p>
          </div>

          {/* Occupational Therapy */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
              <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Occupational Therapy</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We handle occupational therapy billing with precision. Tracking units, authorizations, and documentation.
            </p>
          </div>

          {/* Speech Therapy */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z"/>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Speech Therapy</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              SMB streamlines speech therapy billing by managing frequency limits, payer rules, and session tracking.
            </p>
          </div>

          {/* Urgent Care */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.92,6.01C18.72,5.42 18.16,5 17.5,5H15L13.5,3.5C13.1,3.1 12.6,2.9 12.1,2.9H11.9C11.4,2.9 10.9,3.1 10.5,3.5L9,5H6.5C5.84,5 5.28,5.42 5.08,6.01L3,14V20A2,2 0 0,0 5,22H19A2,2 0 0,0 21,20V14L18.92,6.01M19,20H5V14.5L6.5,7H17.5L19,14.5V20Z"/>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Urgent Care</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Power your urgent care billing with real-time coding, fast claim turnaround, and smart denial prevention.
            </p>
          </div>

          {/* Internal Medicine */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19,8H17V6A5,5 0 0,0 12,1A5,5 0 0,0 7,6V8H5A3,3 0 0,0 2,11V20A3,3 0 0,0 5,23H19A3,3 0 0,0 22,20V11A3,3 0 0,0 19,8M12,17A2,2 0 0,1 10,15A2,2 0 0,1 12,13A2,2 0 0,1 14,15A2,2 0 0,1 12,17M15.8,8H8.2V6A3.8,3.8 0 0,1 12,2.2A3.8,3.8 0 0,1 15.8,6V8Z"/>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Internal Medicine</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Optimize internal medicine billing by managing complex coding, chronic care claims, and payer-specific rules.
            </p>
          </div>

          {/* Mental Health */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-16 h-16 mx-auto mb-4 bg-pink-100 rounded-full flex items-center justify-center">
              <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2C13.1,2 14,2.9 14,4C14,5.1 13.1,6 12,6C10.9,6 10,5.1 10,4C10,2.9 10.9,2 12,2M12,20.3C11.9,20.3 11.9,20.3 11.9,20.3C11.6,20.3 11.4,20.1 11.4,19.8V19.3L12.5,18.3C12.9,17.9 12.9,17.3 12.5,16.9C12.1,16.5 11.5,16.5 11.1,16.9L10,18V14.5C10,14.2 9.8,14 9.5,14S9,14.2 9,14.5V19.8C9,20.4 9.4,21 10,21.2C10.2,21.3 10.4,21.3 10.6,21.3C11.1,21.3 11.5,21 11.7,20.6L12,20.3Z"/>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Mental Health</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              For mental health, we manage time-based codes, and telehealth rules to keep your revenue smooth.
            </p>
          </div>

          {/* Chiropractic */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z"/>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Chiropractic</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We manage chiropractic billing with precise documentation, modifiers, and visit limit to avoid denials.
            </p>
          </div>

          {/* Radiology */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-16 h-16 mx-auto mb-4 bg-cyan-100 rounded-full flex items-center justify-center">
              <div className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20,2H4A2,2 0 0,0 2,4V16A2,2 0 0,0 4,18H7V20A2,2 0 0,0 9,22H15A2,2 0 0,0 17,20V18H20A2,2 0 0,0 22,16V4A2,2 0 0,0 20,2M20,16H4V4H20V16M15,20H9V18H15V20Z"/>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Radiology</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Streamline your radiology billing with accurate global and professional components plus specific coding.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Special