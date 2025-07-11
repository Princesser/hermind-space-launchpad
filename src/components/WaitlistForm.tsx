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
    <section className="py-20 bg-gradient-to-br from-primary/5 to-purple-50 dark:from-primary/10 dark:to-purple-900/20">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto border-border/50 shadow-xl">
          <CardContent className="p-8 text-center">
            <div className="mb-6">
              <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
                Join Our Waitlist
              </h2>
              <p className="text-lg text-muted-foreground">
                Be the first to know when Her Mind Space launches and get early access to our supportive community
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={placeholder}
                  className="text-center py-6 text-lg border-2 focus:border-primary transition-colors"
                  required
                  disabled={isLoading}
                />
              </div>
              
              <Button
                type="submit"
                size="lg"
                className="w-full py-6 text-lg font-semibold bg-gradient-to-r from-primary to-purple-400 hover:from-primary/90 hover:to-purple-400/90 transition-all duration-300"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Joining waitlist...
                  </>
                ) : (
                  'Join the Waitlist'
                )}
              </Button>
            </form>
            
            <p className="text-sm text-muted-foreground mt-4">
              We respect your privacy. No spam, just updates about our launch.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
export default WaitlistForm;