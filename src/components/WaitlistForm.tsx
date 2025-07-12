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
    <section id="waitlist" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Join the Movement
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Be among the first to access our mental health platform designed specifically for African teen girls
          </p>

          <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={placeholder}
                    className="pl-12 h-12 text-lg border-2 border-gray-200 focus:border-purple-500 transition-colors"
                    disabled={isLoading}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  disabled={isLoading}
                  className="w-full h-12 text-lg bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 transition-all duration-300"
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
              <p className="text-sm text-gray-500 mt-4">
                Join thousands of girls already on our waitlist. No spam, just updates.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
export default WaitlistForm;