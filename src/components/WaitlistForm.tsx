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
      // First, save to waitlist table
      const {
        error: insertError
      } = await supabase.from('waitlist').insert([{
        email
      }]);
      if (insertError) {
        throw insertError;
      }

      // Then send confirmation email
      const {
        error: functionError
      } = await supabase.functions.invoke('send-waitlist-confirmation', {
        body: {
          email
        }
      });
      if (functionError) {
        console.warn('Email sending failed:', functionError);
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
    <section id="waitlist" className="py-20 bg-gradient-to-br from-purple-600 to-pink-500">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Mental Health Journey?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join thousands of African teen girls who are already part of our supportive community
          </p>
          
          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 w-5 h-5" />
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={placeholder}
                    className="pl-12 py-4 text-lg bg-white/90 border-white/30 focus:border-purple-400"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full py-4 text-lg bg-white text-purple-600 hover:bg-purple-50 font-semibold"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Joining...
                    </>
                  ) : (
                    'Join the Waitlist'
                  )}
                </Button>
              </form>
              
              <p className="text-purple-100 text-sm mt-6">
                By joining, you'll be first to know when herMind Space launches and get exclusive early access.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
export default WaitlistForm;