
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';

const Hero = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleWaitlistSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Please enter your email",
        description: "We need your email to add you to the waitlist.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Welcome to the waitlist! 🌸",
        description: "We'll notify you when herMind space launches.",
      });
      setEmail('');
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-green-50">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-green-500 bg-clip-text text-transparent mb-6">
              herMind space
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-4 font-light">
              Your sanctuary for mental wellness
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              A safe, supportive digital space designed specifically for women to explore, 
              heal, and thrive in their mental health journey.
            </p>
          </div>

          <div className="mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <form onSubmit={handleWaitlistSignup} className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 text-lg border-2 border-purple-200 focus:border-purple-400 rounded-full px-6"
              />
              <Button 
                type="submit" 
                disabled={isLoading}
                className="h-12 px-8 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105"
              >
                {isLoading ? 'Joining...' : 'Join Waitlist'}
              </Button>
            </form>
            <p className="text-sm text-gray-500 mt-4">
              Be the first to know when we launch. No spam, we promise. 💜
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧘‍♀️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Mindful Healing</h3>
              <p className="text-gray-600">Guided meditation and mindfulness practices tailored for women</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Safe Community</h3>
              <p className="text-gray-600">Connect with like-minded women in a supportive environment</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">24/7 Support</h3>
              <p className="text-gray-600">Access tools and resources whenever you need them most</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
