import React, { useState, useEffect } from 'react';
import { Progress } from 'antd';

function ARProgress() {
  const [animatedValues, setAnimatedValues] = useState([0, 0, 0, 0]);

  const progressData = [
    {
      percentage: 70,
      color: '#22c55e',
      title: '0–30 Days',
      description: 'We submit clean, payer-aligned claims that speed up your revenue cycle from day one.'
    },
    {
      percentage: 15,
      color: '#8b5cf6',
      title: 'Over 30 Days',
      description: 'We monitor COB issues, partial payments, and slow payers to pull claims back into active collections.'
    },
    {
      percentage: 10,
      color: '#3b82f6',
      title: 'Over 60 Days',
      description: 'Our denial experts target OB-specific barriers, fast-track appeals, and clear the backlog.'
    },
    {
      percentage: 5,
      color: '#f97316',
      title: '90+ Days',
      description: 'Persistent follow-up and tailored recovery keep long-aged claims from becoming lost revenue.'
    }
  ];

  useEffect(() => {
    // Start animation after a short delay
    const timer = setTimeout(() => {
      progressData.forEach((item, index) => {
        // Stagger the animations slightly for a nice effect
        setTimeout(() => {
          animateProgress(index, item.percentage);
        }, index * 200);
      });
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const animateProgress = (index, targetValue) => {
    const duration = 2000; // 2 seconds
    const steps = 60; // 60 steps for smooth animation
    const stepValue = targetValue / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const currentValue = Math.min(stepValue * currentStep, targetValue);
      
      setAnimatedValues(prev => {
        const newValues = [...prev];
        newValues[index] = Math.round(currentValue);
        return newValues;
      });

      if (currentStep >= steps) {
        clearInterval(interval);
      }
    }, stepDuration);
  };

  return (
    <div className="bg-gray-50 ">
      <div className="container mx-auto px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            A/R Management Designed for Faster Payouts
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
            We don't just monitor your aging reports, we move them. Our A/R strategies are built on payer behavior, 
            clinical timelines, and denial patterns. Whether it's day 1 or day 91, we apply custom workflows to 
            resolve claims faster and recover every dollar owed.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {progressData.map((item, index) => (
            <div key={index} className="text-center bg-white p-8 rounded-lg shadow-lg">
              <div className="mb-6 flex justify-center">
                <Progress
                  type="circle"
                  percent={animatedValues[index]}
                  strokeColor={item.color}
                  strokeWidth={8}
                  size={140}
                  format={(percent) => (
                    <span className="text-2xl font-bold text-gray-900">
                      {percent}%
                    </span>
                  )}
                  trailColor="#e5e7eb"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ARProgress;