
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            About
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent"> herMind space</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The girls' school of mind - where African teen girls learn, heal, and thrive together
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Our Mission</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We're changing the mental health narrative in Africa by creating a safe digital sanctuary 
              specifically designed for African teen girls aged 13-20. Our platform provides education, 
              community support, and practical tools to help young women navigate the unique challenges 
              they face in today's demanding world.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded by Princess Mbamalu, an 18-year-old product designer and social entrepreneur, 
              herMind space was born from personal experience and the recognition that over 70 million 
              women in Africa are experiencing a mental health crisis.
            </p>
          </div>

          <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-0">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">👑</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Princess Mbamalu</h4>
                <p className="text-gray-600 mb-4">Founder & Visionary</p>
                <p className="text-sm text-gray-500 italic leading-relaxed">
                  "I went through anxiety and depression myself, and I discovered how real this crisis is 
                  within our communities. I'm using this platform to step up from a stumbling block to 
                  a stepping stone to change the story of unseen and unheard girls in Africa."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
