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
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-purple-900 mb-4">What We Offer</h2>
          <p className="text-lg text-purple-700 max-w-2xl mx-auto">
            Comprehensive support designed specifically for African teen girls navigating mental health challenges
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-purple-900 mb-3">{feature.title}</h3>
                <p className="text-purple-700 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Features;