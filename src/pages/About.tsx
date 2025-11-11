import React from 'react';
import { motion } from 'framer-motion';
import WhyItMatters from '@/components/WhyItMatters';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-20"
    >
      <WhyItMatters />
    </motion.div>
  );
};

export default About;
