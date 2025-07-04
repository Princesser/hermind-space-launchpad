
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Amara K.',
      role: 'University Student, Lagos',
      content: 'Finally, a space where I can talk about my anxiety without being told to just pray about it. The community here truly understands what we go through.',
      avatar: '👩🏿‍🎓'
    },
    {
      name: 'Zara M.',
      role: 'High School Student, Accra',
      content: 'The pressure to excel in everything was overwhelming me. herMind space taught me it\'s okay to not be perfect and gave me tools to manage my stress.',
      avatar: '👩🏾‍💼'
    },
    {
      name: 'Fatima A.',
      role: 'STEM Student, Abuja',
      content: 'Being surrounded by other ambitious girls who also struggle with anxiety made me feel less alone. We\'re changing the narrative together.',
      avatar: '👩🏿‍🔬'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Voices from our
            <span className="bg-gradient-to-r from-green-500 to-purple-600 bg-clip-text text-transparent"> sisterhood</span>
          </h2>
          <p className="text-xl text-gray-600">
            Real stories from African teen girls breaking barriers and building resilience
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

        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 font-medium">
            "6 out of 10 girls in Africa experience anxiety and depression. You're not alone." 
          </p>
          <p className="text-sm text-gray-500 mt-2">- Princess Mbamalu, Founder</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
