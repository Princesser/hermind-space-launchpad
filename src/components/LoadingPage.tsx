import React from 'react';
import { Loader2, Heart, Sparkles } from 'lucide-react';

const LoadingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-green-50 flex items-center justify-center">
      <div className="text-center">
        {/* Animated logo/icon */}
        <div className="relative mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto animate-pulse">
            <Heart className="w-10 h-10 text-purple-600 animate-bounce" />
          </div>
          
          {/* Floating sparkles */}
          <div className="absolute -top-2 -right-2">
            <Sparkles className="w-6 h-6 text-pink-500 animate-ping" />
          </div>
          <div className="absolute -bottom-2 -left-2">
            <Sparkles className="w-4 h-4 text-purple-500 animate-ping" style={{ animationDelay: '0.5s' }} />
          </div>
        </div>

        {/* Loading text */}
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            herMind Space
          </span>
        </h1>
        
        <p className="text-gray-600 mb-8 text-lg">
          Creating a safe space for African teen girls...
        </p>

        {/* Loading spinner */}
        <div className="flex items-center justify-center space-x-2">
          <Loader2 className="w-6 h-6 text-purple-600 animate-spin" />
          <span className="text-gray-600">Loading your journey to wellness</span>
        </div>

        {/* Loading dots animation */}
        <div className="flex justify-center space-x-2 mt-6">
          <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-3 h-3 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>

        {/* Inspirational quote */}
        <div className="mt-12 max-w-md mx-auto">
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-purple-100">
            <p className="text-sm text-gray-600 italic leading-relaxed">
              "Every girl deserves to be seen, heard, and supported on her mental health journey."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;