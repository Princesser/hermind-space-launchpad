import React from 'react';
const Hero = () => {
  return <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-green-50 pt-16">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-green-500 bg-clip-text text-transparent mb-6 md:text-5xl py-[10px]">herMind Space</h1>
            
            <p className="text-xl text-gray-700 mb-4 font-light px-0 py-0 my-0 mx-0 md:text-xl">A safe digital space designed specifically for African teen girls (13-20) to foster empowerment, enlightenment, and mental wellness.</p>
            
          </div>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-fade-in" style={{
          animationDelay: '0.4s'
        }}>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Mental Health Education</h3>
              <p className="text-gray-600">Learn everything about "mental health for teens." Awareness + action = transformation.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Safe Community</h3>
              <p className="text-gray-600">Connect with fellow African teen girls who understand your experiences and challenges.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Soothing Resources</h3>
              <p className="text-gray-600 text-base font-normal">Access calming tools, mindfulness exercises, and other coping strategies, all in one space.</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;