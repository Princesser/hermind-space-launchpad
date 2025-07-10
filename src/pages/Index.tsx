
import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import WhyItMatters from '@/components/WhyItMatters';
import Features from '@/components/Features';
import Resources from '@/components/Resources';
import WaitlistForm from '@/components/WaitlistForm';
import Testimonials from '@/components/Testimonials';
import ContactUs from '@/components/ContactUs';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <AboutUs />
      <WhyItMatters />
      <Features />
      <Resources />
      <WaitlistForm />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Index;
