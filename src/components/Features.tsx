
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Features = () => {
  const features = [
    {
      icon: '🌸',
      title: 'Personalized Wellness Plans',
      description: 'AI-powered recommendations based on your unique needs and preferences'
    },
    {
      icon: '💭',
      title: 'Therapy & Counseling',
      description: 'Connect with licensed therapists who understand women\'s mental health'
    },
    {
      icon: '📓',
      title: 'Digital Journal',
      description: 'Private space to track your thoughts, moods, and personal growth'
    },
    {
      icon: '🎯',
      title: 'Goal Setting',
      description: 'Set and achieve mental wellness goals with guided support'
    },
    {
      icon: '🤝',
      title: 'Peer Support Groups',
      description: 'Join circles of women facing similar challenges and victories'
    },
    {
      icon: '📚',
      title: 'Educational Resources',
      description: 'Expert-curated content on women\'s mental health topics'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Everything you need for your
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent"> mental wellness journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            herMind space combines evidence-based therapeutic approaches with modern technology 
            to create a comprehensive mental health platform designed by women, for women.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 bg-gradient-to-br from-purple-50 to-pink-50"
            >
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
