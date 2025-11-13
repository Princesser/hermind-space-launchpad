import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

const WaitlistForm = () => {
  const handleJoinCommunity = () => {
    window.open('https://chat.whatsapp.com/GB0MOX4GfCuEHq7a1dcuW5', '_blank');
  };

  return (
    <section className="py-32 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto flex items-center justify-center">
        <Button 
          onClick={handleJoinCommunity}
          size="lg"
          className="h-16 px-12 text-xl font-semibold bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          <MessageCircle className="mr-3 h-6 w-6" />
          Join Our Community
        </Button>
      </div>
    </section>
  );
};

export default WaitlistForm;