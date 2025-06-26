import React from 'react';
import { ArrowRight } from 'lucide-react';

function Blog() {
  return (
    <div className="container mx-auto px-8 py-20">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Latest Insights & Updates
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Stay informed with the latest medical billing trends, coding updates, and industry best practices to keep your practice ahead of regulatory changes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Blog Post 1 */}
          <div className="group cursor-pointer h-full">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
              <div className="relative h-64 bg-gray-200">
                <img 
                  alt="Medical Billing and Coding Guidelines 2025" 
                  className="w-full h-full object-cover" 
                  src="assets/download.jpg"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 leading-tight mb-4">
                  Medical Billing and Coding Guidelines 2025
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-sm flex-1">
                  CMS has released critical updates impacting medical billing and coding for 2025. Understand new documentation rules, code revisions, and payer requirements.
                </p>
                <button 
                  type="button" 
                  className="p-0 h-auto text-[#579db3] hover:text-[#4a8a9e] font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all duration-300 self-start"
                >
                  <span>LEARN MORE</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="group cursor-pointer h-full">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
              <div className="relative h-64 bg-gray-200">
                <img 
                  alt="7 Advantages of Outsourcing Medical Billing & Denials" 
                  className="w-full h-full object-cover" 
                  src="assets/download.jpg"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 leading-tight mb-4">
                  7 Advantages of Outsourcing Medical Billing & Denials
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-sm flex-1">
                  Discover how outsourcing medical billing can transform your practice operations and improve revenue cycle management.
                </p>
                <button 
                  type="button" 
                  className="p-0 h-auto text-[#579db3] hover:text-[#4a8a9e] font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all duration-300 self-start"
                >
                  <span>LEARN MORE</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Blog Post 3 */}
          <div className="group cursor-pointer h-full">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
              <div className="relative h-64 bg-gray-200">
                <img 
                  alt="What is Denial Management in Medical Billing? Your Ultimate Guide to Maximizing Revenue" 
                  className="w-full h-full object-cover" 
                  src="assets/download.jpg"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 leading-tight mb-4">
                  What is Denial Management in Medical Billing? Your Ultimate Guide to Maximizing Revenue
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-sm flex-1">
                  Learn comprehensive denial management strategies to reduce claim rejections and maximize your practice revenue.
                </p>
                <button 
                  type="button" 
                  className="p-0 h-auto text-[#579db3] hover:text-[#4a8a9e] font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all duration-300 self-start"
                >
                  <span>LEARN MORE</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <button className="bg-[#579db3] w-fit flex items-center gap-2 justify-center hover:bg-[#eb2978] cursor-pointer text-white font-bold px-10 py-4 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
            View All Blog Posts
          </button>
        </div>
      </div>
    </div>
  );
}

export default Blog;