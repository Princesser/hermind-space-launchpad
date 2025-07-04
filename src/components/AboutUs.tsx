
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background decorative blocks */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-purple-200 to-pink-200 rounded-3xl opacity-60 rotate-12"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-green-200 to-purple-200 rounded-2xl opacity-50 -rotate-12"></div>
      <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-gradient-to-br from-pink-200 to-green-200 rounded-full opacity-40"></div>
      <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-gradient-to-br from-purple-300 to-pink-300 rounded-3xl opacity-30 rotate-45"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 md:text-4xl text-purple-600">
            About
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent"> herMind space</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The girls' school of mind - where African teen girls learn, heal, and thrive together
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            {/* Decorative background block for mission text */}
            <div className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl opacity-50 -z-10"></div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-purple-100">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                <div className="w-3 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full mr-4"></div>
                Our Mission
              </h3>
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
              
              {/* Mission highlights */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-xl">
                  <div className="text-2xl mb-2">🌱</div>
                  <p className="text-sm font-medium text-gray-700">Education & Awareness</p>
                </div>
                <div className="bg-gradient-to-br from-pink-50 to-green-50 p-4 rounded-xl">
                  <div className="text-2xl mb-2">🤝</div>
                  <p className="text-sm font-medium text-gray-700">Community Support</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-0 shadow-xl">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-3xl">👑</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Princess Mbamalu</h4>
                <p className="text-gray-600 mb-4 font-medium">Founder & Visionary</p>
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6">
                  <p className="text-sm text-gray-500 italic leading-relaxed">
                    "I went through anxiety and depression myself, and I discovered how real this crisis is 
                    within our communities. I'm using this platform to step up from a stumbling block to 
                    a stepping stone to change the story of unseen and unheard girls in Africa."
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
