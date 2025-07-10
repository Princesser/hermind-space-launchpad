import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';
import { Loader2, Mail } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

const WaitlistForm = () => {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);

    try {
      // Call the edge function to send confirmation email
      const { data, error } = await supabase.functions.invoke('send-waitlist-confirmation', {
        body: { email }
      });

      if (error) {
        throw error;
      }

      toast({
        title: "Welcome to our waitlist! 🎉",
        description: "Check your email for a confirmation message. We can't wait to have you on this journey!"
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

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center">
                  <Mail className="w-8 h-8 text-purple-600" />
                </div>
              </div>
              
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Join Our
                <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent"> Waitlist</span>
              </h2>
              
              <p className="text-lg text-gray-600 mb-8">
                Be the first to access herMind Space when we launch. Get exclusive early access to our mental health platform designed specifically for African teen girls.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={placeholder}
                    required
                    disabled={isLoading}
                    className="h-12 text-lg border-2 border-purple-200 focus:border-purple-500 transition-colors"
                  />
                  {currentIndex >= typingText.length && (
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <div className="w-0.5 h-6 bg-purple-500 animate-pulse"></div>
                    </div>
                  )}
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isLoading || !email}
                  className="w-full h-12 text-lg bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-semibold"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Joining Waitlist...
                    </>
                  ) : (
                    'Join the Waitlist'
                  )}
                </Button>
              </form>

              <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-purple-600">1K+</div>
                  <div className="text-sm text-gray-600">Girls Waiting</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-pink-600">Early</div>
                  <div className="text-sm text-gray-600">Access</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">Free</div>
                  <div className="text-sm text-gray-600">Platform</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WaitlistForm;