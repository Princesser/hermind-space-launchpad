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
    <section className="py-20 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
            Features That Support Your Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover tools and resources designed specifically for African teen girls facing mental health challenges
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
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