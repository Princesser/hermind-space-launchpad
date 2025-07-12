import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Users, Sparkles, MessageCircle, Target } from 'lucide-react';
const Features = () => {
  const features = [{
    icon: GraduationCap,
    title: 'Mental Health Education',
    description: 'Learn to recognize anxiety symptoms, understand mental health challenges, and discover effective coping strategies tailored for African teen girls'
  }, {
    icon: Users,
    title: 'Peer Support Groups',
    description: 'Join circles of girls facing similar challenges - from academic pressure to family expectations, body image, and relationship stress'
  }, {
    icon: Sparkles,
    title: 'Soothing Resources',
    description: 'Access guided meditations, breathing exercises, calming music, and relaxation techniques designed for stress relief'
  }, {
    icon: MessageCircle,
    title: 'Safe Space to Speak Out',
    description: 'Share your experiences without judgment in a supportive environment that breaks the stigma around mental health'
  }, {
    icon: Target,
    title: 'Goal Setting & Tracking',
    description: 'Set wellness goals, track your mental health journey, and celebrate small victories along the way'
  }];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            How herMind Space 
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent"> Helps You</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover tools and community support designed specifically for African teen girls navigating mental health challenges
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-pink-50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Features;