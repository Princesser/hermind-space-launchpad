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
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Join the Movement
        </h2>
        <p className="text-muted-foreground text-lg mb-8">
          Be among the first to access Her Mind Space and start your mental wellness journey
        </p>
        
        <Card className="border shadow-sm">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={placeholder}
                  className="pl-10 h-12 text-lg"
                  required
                />
              </div>
              <Button 
                type="submit" 
                disabled={isLoading || !email}
                className="w-full h-12 text-lg"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Joining...
                  </>
                ) : (
                  'Join Waitlist'
                )}
              </Button>
            </form>
            
            <p className="text-sm text-muted-foreground mt-4">
              We respect your privacy. No spam, just updates on our launch.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
export default WaitlistForm;