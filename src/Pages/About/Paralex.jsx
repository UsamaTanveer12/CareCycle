import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "../../components";

function Parallax() {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div 
        className="relative min-h-96 bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: `url("/assets/paralex.webp")`,
          
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* 40% Overlay */}
        <div className="absolute inset-0 bg-black/50 bg-opacity-10"></div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-8 py-20">
          <div className="flex justify-end">
            <div className="max-w-lg text-right space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Let's Build a CareCycle Future for Your Practice
              </h2>
              <p className="text-white text-lg leading-relaxed opacity-90">
                Work with a billing partner that understands your workflow, your challenges, and your goals. 
                Care Cycle Billing helps practices run smoother, get paid faster, and grow stronger.
              </p>
              <div className="pt-4">
                <Button 
                  onClick={() => navigate('/contact')} 
                  type="secondary"
                >
                  Schedule Your Free Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Parallax;