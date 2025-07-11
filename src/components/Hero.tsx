import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
const Hero = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [placeholder, setPlaceholder] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const typingText = "Enter your email to join the waitlist...";
  // Typing effect for placeholder
  useEffect(() => {
    if (currentIndex < typingText.length) {
      const timeout = setTimeout(() => {
        setPlaceholder(prev => prev + typingText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, typingText]);

  const handleWaitlistSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Please enter your email",
        description: "We need your email to add you to the waitlist.",
        variant: "destructive"
      });
      return;
    }
    setIsLoading(true);

    try {
      // Save to waitlist table
      const { error: insertError } = await supabase
        .from('waitlist')
        .insert([{ email }]);
        
      if (insertError) {
        throw insertError;
      }

      // Send confirmation email
      const { error: functionError } = await supabase.functions.invoke('send-waitlist-confirmation', {
        body: { email }
      });
      
      if (functionError) {
        console.warn('Email sending failed:', functionError);
      }

      toast({
        title: "Welcome to the waitlist! 🌸",
        description: "You're now on the waitlist. We'll notify you when herMind space launches."
      });
      setEmail('');
    } catch (error: any) {
      console.error('Error joining waitlist:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again later or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };
  return <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-green-50 pt-16">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-green-500 bg-clip-text text-transparent mb-6 md:text-5xl py-[10px]">herMind Space</h1>
            
            <p className="text-xl text-gray-700 mb-4 font-light px-0 py-0 my-0 mx-0 md:text-xl">A safe digital space designed specifically for African teen girls (13-20) to foster empowerment, enlightenment, and mental wellness.</p>
            
          </div>

          <div className="mb-12 animate-fade-in" style={{
          animationDelay: '0.2s'
        }}>
            <form onSubmit={handleWaitlistSignup} className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
              <div className="relative flex-1">
                <Input 
                  type="email" 
                  placeholder={placeholder} 
                  value={email} 
                  onChange={e => setEmail(e.target.value)} 
                  className="h-12 text-lg border-2 border-purple-200 focus:border-purple-400 rounded-full px-6" 
                />
                {currentIndex >= typingText.length && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <div className="w-0.5 h-6 bg-purple-500 animate-pulse"></div>
                  </div>
                )}
              </div>
              <Button type="submit" disabled={isLoading} className="h-12 px-8 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105">
                {isLoading ? 'Joining...' : 'Join the Waitlist'}
              </Button>
            </form>
            <p className="text-sm text-gray-500 mt-4">
              Be part of changing the mental health narrative in Africa. No spam, we promise. 💜
            </p>
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