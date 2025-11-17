
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
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <AboutUs />
      </section>
      <section id="why-it-matters">
        <WhyItMatters />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="resources">
        <Resources />
      </section>
      <section id="community">
        <WaitlistForm />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="contact">
        <ContactUs />
      </section>
      <Footer />
    </div>
  );
};

export default Index;
