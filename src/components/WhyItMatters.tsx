import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { BarChart, Heart, TrendingUp } from 'lucide-react';
const WhyItMatters = () => {
  const statistics = [{
    number: '70M+',
    label: 'Women in Africa experiencing mental health crisis',
    icon: 'BarChart'
  }, {
    number: '6/10',
    label: 'African girls experience anxiety and depression',
    icon: 'Heart'
  }, {
    number: '3x',
    label: 'Higher rate of mental health issues in girls vs boys',
    icon: 'TrendingUp'
  }];
  const challenges = ['Academic pressure and college admission stress', 'Social media comparison and unrealistic expectations', 'Body shaming and self-image issues', 'Fear of failure and future uncertainty', 'Sexual abuse and relationship trauma', 'Poverty and socioeconomic pressures', 'Mental health stigma and lack of support', 'Identity and passion discovery', 'Lack of health, life, and work balance'];
  return <section id="why-it-matters" className="py-20 bg-gradient-to-br from-green-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 md:text-4xl">
            Why It
            <span className="bg-gradient-to-r from-green-500 to-purple-600 bg-clip-text text-transparent"> Matters</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The mental health crisis among African teen girls is real, urgent, and often invisible
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {statistics.map((stat, index) => {
          const iconName = stat.icon;
          const IconComponent = iconName === 'BarChart' ? BarChart : iconName === 'Heart' ? Heart : TrendingUp;
          return <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm border-0">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-purple-600" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-purple-600 mb-2">{stat.number}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </CardContent>
              </Card>;
        })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">The Hidden Struggles</h3>
            <div className="space-y-3">
              {challenges.map((challenge, index) => <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">{challenge}</p>
                </div>)}
            </div>
          </div>

          <Card className="bg-gradient-to-br from-purple-100 to-pink-100 border-0">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">The Stigma Problem</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">As we grow into adolescence, the brain undergoes some chemical changes that can sometimes lead to emotional and mental imbalances. This is often misunderstood by our society.</p>
              
              <h4 className="text-gray-800 mb-3 font-semibold text-xl">Disclaimer</h4>
              <p className="text-gray-600 mb-4 leading-relaxed">
                "herMind Space" does not in any way replace professional or medical help! We highly encourage that you get professional help if needed.
              </p>
              <div className="bg-white/50 rounded-lg p-4">
                <p className="text-sm text-gray-700 italic">
                  "When poor mental health is not treated among girls, the problem compounds and they 
                  eventually grow up with it as women, spreading it to the next generation."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default WhyItMatters;