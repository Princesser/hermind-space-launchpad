import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
const Testimonials = () => {
  const testimonials = [{
    name: 'Evangeline',
    role: 'Software Engineer',
    content: 'HerMind Space is the mental health resource every African teenage girl needs. The platform is a well-curated gem filled with educational and calming content that truly uplifts the spirit.',
    avatar: '👩🏿‍💻'
  }, {
    name: 'Dammy E.',
    role: 'Robotics and AI Enthusiast',
    content: 'I love the vision and how everything—blogs, music, affirmations, books—is in one space. It\'s a much-needed space for awareness, healing, and connection. Your project has the potential to make a significant impact on the mental health of teen girls in Africa.',
    avatar: '👩🏾‍🔬'
  }, {
    name: 'Hafsat M.',
    role: 'Writer and Health Enthusiast',
    content: 'The design, emojis, and colors made me want to keep exploring. The jokes were relatable, the content was real—and it felt like something made for us. You did a really good job!',
    avatar: '👩🏿‍💼'
  }];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            girls review on 
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">herMind Space</span>
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