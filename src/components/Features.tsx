
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Features = () => {
  const features = [
    {
      icon: '📚',
      title: 'Mental Health Education',
      description: 'Learn to recognize anxiety symptoms, understand mental health challenges, and discover effective coping strategies tailored for African teen girls'
    },
    {
      icon: '🤝',
      title: 'Peer Support Groups',
      description: 'Join circles of girls facing similar challenges - from academic pressure to family expectations, body image, and relationship stress'
    },
    {
      icon: '🧘‍♀️',
      title: 'Soothing Resources',
      description: 'Access guided meditations, breathing exercises, calming music, and relaxation techniques designed for stress relief'
    },
    {
      icon: '💬',
      title: 'Safe Space to Speak Out',
      description: 'Share your experiences without judgment in a supportive environment that breaks the stigma around mental health'
    },
    {
      icon: '🎯',
      title: 'Goal Setting & Tracking',
      description: 'Set wellness goals, track your mental health journey, and celebrate small victories along the way'
    },
    {
      icon: '📱',
      title: '24/7 Access',
      description: 'Get support whenever you need it most - during exam stress, sleepless nights, or overwhelming moments'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Breaking the silence around
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent"> mental health in Africa</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We understand the unique pressures you face - from academic expectations to social media comparison, 
            family responsibilities, and the challenge of speaking out about mental health in our communities.
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
