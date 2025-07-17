import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from "../../components";
import { blogPosts } from '../../Pages/Blog';
import { useNavigate } from 'react-router-dom';

function Blog() {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto lg:px-8 px-4 lg:py-20 py-12">
      <div className="container mx-auto ">
        <div className="text-center mb-16">
          <h2 className="lg:text-4xl text-2xl lg:text-left text-center font-bold text-gray-900 mb-4">
            Latest Insights & Updates
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Stay informed with the latest medical billing trends, coding updates, and industry best practices to keep your practice ahead of regulatory changes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(0, 3).map((post) => (
            <div key={post.id} className="group cursor-pointer h-full">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
                <div className="relative h-64 bg-gray-200">
                  <img 
                    alt={post.title}
                    className="w-full h-full object-cover" 
                    src={post.image}
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 leading-tight mb-4">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 text-sm flex-1">
                    {post.excerpt}
                  </p>
                  <button 
                    type="button" 
                    onClick={() => navigate(`/blog/${post.id}`)}
                    className="p-0 h-auto text-[#579db3] hover:text-[#4a8a9e] font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all duration-300 self-start"
                  >
                    <span>LEARN MORE</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button onClick={() => navigate('/blog')} size="large" className="flex items-center gap-2">
            View All Blog Posts
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Blog;