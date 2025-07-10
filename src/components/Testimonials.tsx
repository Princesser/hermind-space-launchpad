import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
const Testimonials = () => {
  const testimonials = [{
    name: 'Amara K.',
    role: 'University Student, Lagos',
    content: 'Finally, a space where I can talk about my anxiety without being told to just pray about it. The community here truly understands what we go through.',
    avatar: '👩🏿‍🎓'
  }, {
    name: 'Zara M.',
    role: 'High School Student, Accra',
    content: 'The pressure to excel in everything was overwhelming me. herMind space taught me it\'s okay to not be perfect and gave me tools to manage my stress.',
    avatar: '👩🏾‍💼'
  }, {
    name: 'Fatima A.',
    role: 'STEM Student, Abuja',
    content: 'Being surrounded by other ambitious girls who also struggle with anxiety made me feel less alone. We\'re changing the narrative together.',
    avatar: '👩🏿‍🔬'
  }];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Real Stories from 
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent"> Our Community</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from African teen girls who are transforming their mental health journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 bg-white">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Testimonials;