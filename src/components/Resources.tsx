
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap, Sparkles, Users } from 'lucide-react';

const Resources = () => {
  const resources = [
    {
      category: 'Mental Health Education',
      icon: GraduationCap,
      items: [
        'Understanding anxiety and depression symptoms',
        'Recognizing mental health warning signs',
        'Coping strategies for academic stress',
        'Building emotional resilience'
      ]
    },
    {
      category: 'Soothing Tools',
      icon: Sparkles,
      items: [
        'Guided meditation sessions',
        'Breathing exercises for anxiety',
        'Calming music playlists',
        'Progressive muscle relaxation'
      ]
    },
    {
      category: 'Community Support',
      icon: Users,
      items: [
        'Peer support circles',
        'Anonymous sharing spaces',
        'Mentorship programs',
        'Crisis support networks'
      ]
    }
  ];

  return (
    <section id="resources" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 md:text-4xl">
            Mental Health
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent"> Resources</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Move from stumbling block to stepping stones with these resources
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {resources.map((resource, index) => {
            const IconComponent = resource.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-pink-50">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mr-4">
                      <IconComponent className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">{resource.category}</h3>
                  </div>
                  <ul className="space-y-3">
                    {resource.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Resources;
