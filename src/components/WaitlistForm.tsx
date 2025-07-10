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
      const {
        data,
        error
      } = await supabase.functions.invoke('send-waitlist-confirmation', {
        body: {
          email
        }
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
    <section id="waitlist" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Join Our
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent"> Waitlist</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Be the first to know when herMind Space launches. Get early access to our mental health resources and community.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-pink-50">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-500 w-5 h-5" />
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={placeholder}
                    className="pl-10 py-3 text-center border-purple-200 focus:border-purple-500 focus:ring-purple-500"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isLoading || !email}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white py-3"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Joining...
                    </>
                  ) : (
                    'Join Waitlist'
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
export default WaitlistForm;