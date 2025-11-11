import React from 'react';
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <Hero />
      <AboutUs />
    </motion.div>
  );
};

export default Home;
