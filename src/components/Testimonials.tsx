
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah M.',
      role: 'Working Mother',
      content: 'Finally, a mental health platform that understands the unique challenges women face. The community support has been life-changing.',
      avatar: '👩‍💼'
    },
    {
      name: 'Emma R.',
      role: 'College Student',
      content: 'The personalized approach and 24/7 accessibility have helped me manage my anxiety better than ever before.',
      avatar: '👩‍🎓'
    },
    {
      name: 'Lisa K.',
      role: 'Entrepreneur',
      content: 'herMind space gave me the tools and community I needed to prioritize my mental health while building my business.',
      avatar: '👩‍💻'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Stories from our
            <span className="bg-gradient-to-r from-green-500 to-purple-600 bg-clip-text text-transparent"> community</span>
          </h2>
          <p className="text-xl text-gray-600">
            Real women sharing their mental wellness journeys
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm border-0"
            >
              <CardContent className="p-8">
                <div className="text-4xl mb-4 text-center">{testimonial.avatar}</div>
                <p className="text-gray-700 italic mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="text-center">
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
