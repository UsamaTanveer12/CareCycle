import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { blogPosts } from './index';
import Button from '../../components/Button';

function SingleBlog() {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogPosts.find(post => String(post.id) === String(id));

  // FAQ state for accordion
  const [openFAQ, setOpenFAQ] = useState(null);
  const faqs = [
    {
      question: 'Q1. What is interoperability in healthcare with example?',
      answer: 'Interoperability in healthcare means the ability of different information systems, devices, and applications to access, exchange, integrate, and cooperatively use data. For example, a patient’s electronic health record (EHR) can be accessed by both their primary care physician and a specialist at another hospital.'
    },
    {
      question: 'Q2. What are the 4 levels of healthcare interoperability?',
      answer: 'The four levels are: Foundational, Structural, Semantic, and Organizational interoperability.'
    },
    {
      question: 'Q3. What are the challenges of interoperability in healthcare?',
      answer: 'Challenges include lack of standardization, privacy and security concerns, cost and resource constraints, and resistance to change.'
    }
  ];

  if (!blog) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Blog Not Found</h2>
        <p className="text-gray-600 mb-8">The blog post you are looking for does not exist.</p>
        <Button onClick={() => navigate('/blog')} type="primary" size="medium">Back to Blog</Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative w-full h-80 md:h-96 lg:h-[420px] flex items-end">
        <img 
          src={blog.image} 
          alt={blog.title} 
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />
        <div className="relative z-20 w-full max-w-4xl mx-auto px-6 pb-10 flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <span className="px-3 py-1 text-xs font-semibold rounded-full text-white" style={{backgroundColor: '#579db3'}}>
              {blog.category}
            </span>
            <span className="text-gray-200 text-sm">{blog.date}</span>
            <span className="text-gray-200 text-sm">{blog.readTime}</span>
            <span className="text-gray-200 text-sm">By {blog.author}</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg mb-2">Interoperability in Healthcare: Meaning & Importance</h1>
        </div>
      </div>
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 ">
        <Button onClick={() => navigate('/blog')} type="secondary" size="small" className="mb-8">&larr; Back to Blog</Button>
        <div className="bg-white rounded-2xl shadow-xl border-2 border-[#579db3] p-8">
          <section className="mb-8">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Interoperability in healthcare means the ability of different information systems, devices, and applications to access, exchange, integrate, and cooperatively use data in a coordinated manner, within and across organizational, regional, and national boundaries, to provide timely and seamless portability of information and optimize the health of individuals and populations globally.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Types of Interoperability in Healthcare</h2>
            <ul className="list-disc pl-6 text-gray-700 mb-2">
              <li>Foundational Interoperability</li>
              <li>Structural Interoperability</li>
              <li>Semantic Interoperability</li>
              <li>Organizational Interoperability</li>
            </ul>
          </section>
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Why is Interoperability Important in Healthcare?</h2>
            <ul className="list-disc pl-6 text-gray-700 mb-2">
              <li>Better Care Coordination</li>
              <li>Improved Patient Safety</li>
              <li>Enhanced Efficiency</li>
              <li>Reduced Costs</li>
              <li>Better Patient Experience</li>
            </ul>
          </section>
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Benefits of Healthcare Data Interoperability</h2>
            <ul className="list-disc pl-6 text-gray-700 mb-2">
              <li>Improved Patient Outcomes</li>
              <li>Enhanced Provider Collaboration</li>
              <li>Reduced Administrative Burden</li>
              <li>Cost Savings</li>
            </ul>
          </section>
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Challenges in Achieving Interoperability in Healthcare</h2>
            <ul className="list-disc pl-6 text-gray-700 mb-2">
              <li>Lack of Standardization</li>
              <li>Privacy & Security Concerns</li>
              <li>Cost & Resource Constraints</li>
              <li>Resistance to Change</li>
            </ul>
          </section>
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Future of Healthcare Data Interoperability</h2>
            <ul className="list-disc pl-6 text-gray-700 mb-2">
              <li>Greater Use of APIs</li>
              <li>Blockchain for Data Sharing</li>
              <li>AI & Machine Learning</li>
              <li>Patient-Centric Data Models</li>
            </ul>
          </section>
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Conclusion</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Interoperability in healthcare is essential for improving patient outcomes, reducing costs, and enhancing the overall efficiency of the healthcare system. As technology continues to evolve, achieving true interoperability will require ongoing collaboration, innovation, and a commitment to standardization and security.
            </p>
          </section>
          {/* FAQ Section */}
          <section className="mb-2">
            <h2 className="text-xl font-bold text-gray-900 mb-4">FAQ</h2>
            <div className="space-y-2">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border rounded-lg overflow-hidden">
                  <button
                    className="w-full flex justify-between items-center px-4 py-3 bg-[#579db3] text-white font-semibold focus:outline-none"
                    onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                  >
                    <span>{faq.question}</span>
                    <span>{openFAQ === idx ? '-' : '+'}</span>
                  </button>
                  {openFAQ === idx && (
                    <div className="px-4 py-3 bg-white text-gray-800 border-t">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
          <Button onClick={() => navigate('/blog')} type="primary" size="medium" className="mt-8">Back to Blog List</Button>
        </div>
      </div>
    </div>
  );
}

export default SingleBlog; 