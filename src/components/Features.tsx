import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Users, Sparkles, MessageCircle, Target } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: GraduationCap,
      title: 'Mental Health Education',
      description: 'Learn to recognize anxiety symptoms, understand mental health challenges, and discover effective coping strategies tailored for African teen girls'
    },
    {
      icon: Users,
      title: 'Peer Support Groups',
      description: 'Join circles of girls facing similar challenges - from academic pressure to family expectations, body image, and relationship stress'
    },
    {
      icon: Sparkles,
      title: 'Soothing Resources',
      description: 'Access guided meditations, breathing exercises, calming music, and relaxation techniques designed for stress relief'
    },
    {
      icon: MessageCircle,
      title: 'Safe Space to Speak Out',
      description: 'Share your experiences without judgment in a supportive environment that breaks the stigma around mental health'
    },
    {
      icon: Target,
      title: 'Goal Setting & Tracking',
      description: 'Set wellness goals, track your mental health journey, and celebrate small victories along the way'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Our
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent"> Features</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive tools and resources designed specifically for African teen girls' mental wellness
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mb-6">
                    <IconComponent className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;