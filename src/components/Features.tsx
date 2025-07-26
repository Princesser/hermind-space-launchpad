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
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What We Offer
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive support designed specifically for African teen girls facing mental health challenges
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
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