import React from 'react'

function Service() {
  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Second Row of Specialties */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Psychology */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z"/>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Psychology</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Simplify psychology billing by coordinating session codes, verifying coverage limits, and aligning with payer rules.
            </p>
          </div>

          {/* Psychiatry */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-16 h-16 mx-auto mb-4 bg-pink-100 rounded-full flex items-center justify-center">
              <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2C13.1,2 14,2.9 14,4C14,5.1 13.1,6 12,6C10.9,6 10,5.1 10,4C10,2.9 10.9,2 12,2M12,20.3C11.9,20.3 11.9,20.3 11.9,20.3C11.6,20.3 11.4,20.1 11.4,19.8V19.3L12.5,18.3C12.9,17.9 12.9,17.3 12.5,16.9C12.1,16.5 11.5,16.5 11.1,16.9L10,18V14.5C10,14.2 9.8,14 9.5,14S9,14.2 9,14.5V19.8C9,20.4 9.4,21 10,21.2C10.2,21.3 10.4,21.3 10.6,21.3C11.1,21.3 11.5,21 11.7,20.6L12,20.3Z"/>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Psychiatry</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              SMB handles psychiatry billing with precision. Tracking evaluation codes and complete compliance.
            </p>
          </div>

          {/* Behavioral Health */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z"/>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Behavioral Health</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Optimize behavioral health billing by aligning treatment plans, progress notes, and payer policies for payments.
            </p>
          </div>

          {/* Neurology */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
              <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2C13.1,2 14,2.9 14,4C14,5.1 13.1,6 12,6C10.9,6 10,5.1 10,4C10,2.9 10.9,2 12,2M12,20.3C11.9,20.3 11.9,20.3 11.9,20.3C11.6,20.3 11.4,20.1 11.4,19.8V19.3L12.5,18.3C12.9,17.9 12.9,17.3 12.5,16.9C12.1,16.5 11.5,16.5 11.1,16.9L10,18V14.5C10,14.2 9.8,14 9.5,14S9,14.2 9,14.5V19.8C9,20.4 9.4,21 10,21.2C10.2,21.3 10.4,21.3 10.6,21.3C11.1,21.3 11.5,21 11.7,20.6L12,20.3Z"/>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Neurology</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Capturing complex diagnostics, EMG studies, and procedure modifiers to keep your revenue cycle on track.
            </p>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {/* Orthopedics */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z"/>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Orthopedics</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Coding surgical procedures, fracture care, and post-op follow-ups accurately to maximize reimbursements.
            </p>
          </div>

          {/* Pain Management */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-16 h-16 mx-auto mb-4 bg-teal-100 rounded-full flex items-center justify-center">
              <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19,8H17V6A5,5 0 0,0 12,1A5,5 0 0,0 7,6V8H5A3,3 0 0,0 2,11V20A3,3 0 0,0 5,23H19A3,3 0 0,0 22,20V11A3,3 0 0,0 19,8M12,17A2,2 0 0,1 10,15A2,2 0 0,1 12,13A2,2 0 0,1 14,15A2,2 0 0,1 12,17M15.8,8H8.2V6A3.8,3.8 0 0,1 12,2.2A3.8,3.8 0 0,1 15.8,6V8Z"/>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Pain Management</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We navigate pain management RCM by coding injections, nerve blocks, and time-based visits accurately.
            </p>
          </div>

          {/* Cardiology */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
              <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"/>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Cardiology</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Simplify cardiology billing by capturing diagnostic tests and procedures to ensure accurate payment.
            </p>
          </div>

          {/* Neurosurgery */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-16 h-16 mx-auto mb-4 bg-indigo-100 rounded-full flex items-center justify-center">
              <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z"/>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Neurosurgery</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We handle neurosurgery billing with precise coding, assists, and global periods to protect your revenue.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service