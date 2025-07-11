import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, User, Tag } from 'lucide-react';
import { Button } from "../../components";

function Blog() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('All');
  
  const blogPosts = [
    {
      id: 1,
      title: "Medical Billing and Coding Guidelines 2025",
      excerpt: "CMS has released critical updates impacting medical billing and coding for 2025. Understand new documentation rules, code revisions, and payer requirements that will affect your practice's revenue cycle.",
      image: "assets/download.jpg",
      date: "January 15, 2025",
      readTime: "5 min read",
      author: "Sarah Johnson",
      category: "Compliance",
      featured: true
    },
    {
      id: 2,
      title: "7 Advantages of Outsourcing Medical Billing & Denials",
      excerpt: "Discover how outsourcing medical billing can transform your practice operations, reduce administrative burden, and improve revenue cycle management for sustainable growth.",
      image: "assets/download.jpg",
      date: "January 12, 2025",
      readTime: "7 min read",
      author: "Michael Chen",
      category: "Business Strategy"
    },
    {
      id: 3,
      title: "What is Denial Management in Medical Billing?",
      excerpt: "Learn comprehensive denial management strategies to reduce claim rejections, streamline appeals processes, and maximize your practice revenue with proven techniques.",
      image: "assets/download.jpg",
      date: "January 10, 2025",
      readTime: "6 min read",
      author: "Emily Rodriguez",
      category: "Revenue Cycle"
    },
    {
      id: 4,
      title: "HIPAA Compliance in Modern Medical Billing",
      excerpt: "Navigate the latest HIPAA requirements and ensure your billing processes maintain patient privacy while optimizing efficiency in an increasingly digital healthcare landscape.",
      image: "assets/download.jpg",
      date: "January 8, 2025",
      readTime: "4 min read",
      author: "David Thompson",
      category: "Compliance"
    },
    {
      id: 5,
      title: "AI and Automation in Revenue Cycle Management",
      excerpt: "Explore how artificial intelligence and automation are revolutionizing medical billing, reducing errors, and accelerating payment collection for healthcare providers.",
      image: "assets/download.jpg",
      date: "January 5, 2025",
      readTime: "8 min read",
      author: "Lisa Park",
      category: "Technology"
    },
    {
      id: 6,
      title: "Prior Authorization Best Practices for 2025",
      excerpt: "Master the prior authorization process with updated strategies that reduce delays, improve approval rates, and ensure seamless patient care delivery.",
      image: "assets/download.jpg",
      date: "January 3, 2025",
      readTime: "5 min read",
      author: "Robert Wilson",
      category: "Operations"
    }
  ];

  const categories = ["All", "Compliance", "Business Strategy", "Revenue Cycle", "Technology", "Operations"];

  // Filter posts based on active category
  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  // Get featured post (always show first post regardless of filter)
  const featuredPost = blogPosts[0];
  
  // Get non-featured posts for the grid
  const gridPosts = filteredPosts.slice(1);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-50 via-gray-50 to-blue-100 py-20" style={{backgroundImage: 'url("/assets/group.webp")', backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat'}}>
        <div className="absolute inset-0 bg-[#fefefe]/90 bg-opacity-80"></div>
        <div className="container mx-auto px-8 relative z-10">
          <div className="text-center space-y-6">
            <p className="font-semibold text-lg tracking-wider" style={{color: '#579db3'}}>Knowledge & Insights</p>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">Medical Billing Blog</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay ahead with expert insights, industry updates, and best practices in medical billing and revenue cycle management.
            </p>
            <div className="flex items-center justify-center gap-2 text-gray-700 mt-8">
              <a href="/" className="font-medium transition-colors cursor-pointer" style={{color: '#579db3'}} onMouseEnter={(e) => e.target.style.color = '#4a8ba1'} onMouseLeave={(e) => e.target.style.color = '#579db3'}>
                Home
              </a>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right w-4 h-4 text-gray-500" aria-hidden="true">
                <path d="m9 18 6-6-6-6"></path>
              </svg>
              <span className="font-medium">Blog</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-8 py-20">
        {/* Blog Stats and Newsletter Signup */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg border-2" style={{borderColor: '#579db3'}}>
            <div className="w-12 h-12 rounded-full mx-auto mb-4" style={{backgroundColor: '#e6f3ff'}}>
              <svg className="w-6 h-6 mt-3 mx-auto" style={{color: '#579db3'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">150+</h3>
            <p className="text-gray-600">Expert Articles</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-lg border-2" style={{borderColor: '#579db3'}}>
            <div className="w-12 h-12 rounded-full mx-auto mb-4" style={{backgroundColor: '#e6f3ff'}}>
              <svg className="w-6 h-6 mt-3 mx-auto" style={{color: '#579db3'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">25K+</h3>
            <p className="text-gray-600">Monthly Readers</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-lg border-2" style={{borderColor: '#579db3'}}>
            <div className="w-12 h-12 rounded-full mx-auto mb-4" style={{backgroundColor: '#e6f3ff'}}>
              <svg className="w-6 h-6 mt-3 mx-auto" style={{color: '#579db3'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Weekly</h3>
            <p className="text-gray-600">New Updates</p>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="text-center mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 border-2" style={{borderColor: '#579db3'}}>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Stay Updated with Industry Insights
            </h2>
            <p className="text-gray-700 text-lg mb-6 max-w-2xl mx-auto">
              Get the latest medical billing trends, coding updates, and regulatory changes delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button onClick={() => navigate('/contact')} className="px-6 py-3 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg cursor-pointer" style={{backgroundColor: '#579db3'}}>
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className="px-6 py-3 rounded-full font-medium transition-all duration-300 border-2 hover:shadow-md"
              style={{
                borderColor: '#579db3',
                color: activeCategory === category ? 'white' : '#579db3',
                backgroundColor: activeCategory === category ? '#579db3' : 'transparent'
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Article</h2>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2" style={{borderColor: '#579db3'}}>
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  alt={featuredPost.title}
                  className="w-full h-64 md:h-full object-cover" 
                  src={featuredPost.image}
                />
              </div>
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full text-white" style={{backgroundColor: '#579db3'}}>
                    {featuredPost.category}
                  </span>
                  <span className="text-gray-500 text-sm">Featured</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {featuredPost.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                  </div>
                </div>
                <Button onClick={() => navigate('/contact')} size="small" className="self-start flex items-center gap-2">
                  Read Full Article
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Latest Articles Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {activeCategory === 'All' ? 'Latest Articles' : `${activeCategory} Articles`}
          </h2>
          
          {gridPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gridPosts.map((post) => (
                <div key={post.id} className="group cursor-pointer h-full">
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col border border-gray-200 hover:border-gray-300">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                        src={post.image}
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 text-xs font-semibold rounded-full text-white" style={{backgroundColor: '#579db3'}}>
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-lg font-bold text-gray-900 leading-tight mb-3 group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4 text-sm flex-1">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <User className="w-3 h-3" />
                          <span>{post.author}</span>
                        </div>
                        <button 
                          type="button" 
                          onClick={() => navigate('/contact')}
                          className="text-sm font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-300 cursor-pointer"
                          style={{color: '#579db3'}}
                        >
                          <span>READ MORE</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center" style={{backgroundColor: '#f0f6ff'}}>
                <svg className="w-12 h-12" style={{color: '#579db3'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600 mb-4">
                We don't have any articles in the "{activeCategory}" category yet.
              </p>
              <Button 
                onClick={() => setActiveCategory('All')}
                size="small"
              >
                View All Articles
              </Button>
            </div>
          )}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center">
          <Button onClick={() => navigate('/contact')} size="large" className="flex items-center gap-3">
            <span>Load More Articles</span>
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Blog;