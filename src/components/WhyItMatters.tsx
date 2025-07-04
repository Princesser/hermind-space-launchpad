import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
const WhyItMatters = () => {
  const statistics = [{
    number: '70M+',
    label: 'Women in Africa experiencing mental health crisis',
    icon: '📊'
  }, {
    number: '6/10',
    label: 'African girls experience anxiety and depression',
    icon: '💔'
  }, {
    number: '3x',
    label: 'Higher rate of mental health issues in girls vs boys',
    icon: '⚡'
  }];
  const challenges = ['Academic pressure and college admission stress', 'Social media comparison and unrealistic expectations', 'Family responsibilities and cultural expectations', 'Body shaming and self-image issues', 'Fear of failure and future uncertainty', 'Sexual abuse and relationship trauma', 'Poverty and socioeconomic pressures', 'Mental health stigma and lack of support'];
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
          {statistics.map((stat, index) => <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm border-0">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <h3 className="text-3xl font-bold text-purple-600 mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </CardContent>
            </Card>)}
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
              <p className="text-gray-600 mb-4 leading-relaxed">
                In Africa, mental health is often misunderstood. People with mental illness are considered 
                "insane," "unpredictable," or having "spiritual problems." This stigma prevents girls from 
                seeking help when they need it most.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Parents often tell their daughters to "just pray about it" without providing proper support 
                or professional help. This dismissive approach leaves girls feeling isolated and unheard.
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